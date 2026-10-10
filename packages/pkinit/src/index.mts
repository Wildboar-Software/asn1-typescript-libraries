/**
 * @module
 * @description
 *
 * Public Key Cryptography for Initial Authentication in Kerberos
 * (PKINIT) from
 * [RFC 4556](https://datatracker.ietf.org/doc/html/rfc4556).
 * Client and KDC pre-authentication (`PA-PK-AS-REQ` /
 * `PA-PK-AS-REP`), the signed `AuthPack`, Diffie-Hellman reply
 * data, typed data, and the PKINIT object identifiers.
 *
 * Import from `@wildboar/pkinit` or
 * `@wildboar/pkinit/KerberosV5-PK-INIT-SPEC`.
 */
export * from "./lib/modules/KerberosV5-PK-INIT-SPEC/index.mjs";
