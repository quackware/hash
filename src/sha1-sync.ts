import { Sha1 } from "https://deno.land/std@0.160.0/hash/sha1.ts";

/**
 * Synchronously calculate the sha1 checksum of the provided data.
 * @returns hex string checksum
 */
export function sha1Sync(data: Uint8Array | string) {
  const sha = new Sha1();
  if (typeof data === "string") {
    data = new TextEncoder().encode(data);
  }
  sha.update(data.buffer);
  return sha.hex();
}
