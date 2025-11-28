import { PutObjectCommand, S3Client, type S3ClientConfig } from "@aws-sdk/client-s3";

export const bucketName = process.env.STORAGE_BUCKET ?? "%DEFAULT_BUCKET_NAME%";
const cloudflareAccountId = process.env.CLOUDFLARE_ACCOUNT_ID;

// TODO ▼▼ Remove this process if you do NOT use Cloudflare R2 ▼▼
if (process.env.SERVER_ENV === "production" && !cloudflareAccountId) {
  throw new Error("Cloudflare account ID is not configured for Cloudflare R2. Set `accountId` in your guildkit.config.ts or `CLOUDFLARE_ACCOUNT_ID` environment variable.");
}
// TODO ▲▲ Remove this process if you do NOT use Cloudflare R2 ▲▲

const s3Config: S3ClientConfig =


process.env.SERVER_ENV === "production"
  ? { // Cloudflare R2 config. TODO if you use other platform, rewrite the configs below.
    endpoint: `https://${ cloudflareAccountId }.r2.cloudflarestorage.com`,
    region: "auto", // Cloudflare's default
  } : { // Local Min.io server
    endpoint: "http://localhost:9000",
    forcePathStyle: true, // Required for Min.io
    region: "us-east-1", // Min.io's default
    credentials: {
      accessKeyId: "%productname%", // Same as MINIO_ROOT_USER configured in compose.yaml
      secretAccessKey: "%productname%", // Same as MINIO_ROOT_PASSWORD configured in compose.yaml
    },
  };

export const storage = new S3Client(s3Config);

/**
 *
 * @param destPath - path to put given file
 * @param file - file object to put
 * @returns Path for logo including bucket name
 */
export const putObject = async (destPath: string, file: File) => {
  await storage.send(new PutObjectCommand({
    Bucket: bucketName,
    Key: destPath,
    Body: Buffer.from(await file.arrayBuffer()),
  }));

  return `/${ bucketName }/${ destPath }`;
};
