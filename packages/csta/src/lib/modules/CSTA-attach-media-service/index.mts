/**
 * @description
 *
 * Attach Media Service (ECMA-269 §19.1.1 / ECMA-285 §17.1.1).
 * Attaches a media service instance to a call at a media-access
 * device (or via a device already in the call). `connectionMode`
 * selects the call-control service used, or `direct` if the MAD is
 * already in the call. Completes with a Media Attached event.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./attachMediaService.oa.mjs";
export * from "./AttachMediaServiceArgument.ta.mjs";
export * from "./AttachMediaServiceResult.ta.mjs";
