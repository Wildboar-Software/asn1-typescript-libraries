/**
 * @module
 * @description
 *
 * Credential Security Support Provider (CredSSP) Protocol
 * structures from
 * [MS-CSSP](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/85f57821-40bb-46aa-bfcb-ba9590b8fc30)
 * (v20240423). CredSSP delegates a user's credentials to a
 * server: TLS first, then SPNEGO over that channel, then a
 * binding to the server certificate, then the credentials
 * encrypted under the SPNEGO key.
 *
 * Messages are DER. The only top-level PDU is {@link TSRequest}.
 * Import from `@wildboar/credssp` or `@wildboar/credssp/CredSSP`.
 */
export * from "./lib/modules/CredSSP/index.mjs";
