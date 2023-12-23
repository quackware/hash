import { Sha256 } from "https://deno.land/std@0.160.0/hash/sha256.ts";

/**
 * Synchronously calculate the sha256 checksum of the provided data.
 * @returns hex string checksum
 */
export function sha256Sync(data: Uint8Array | string) {
  const sha = new Sha256();
  if (typeof data === "string") {
    data = new TextEncoder().encode(data);
  }
  sha.update(data.buffer);
  return sha.hex();
}
