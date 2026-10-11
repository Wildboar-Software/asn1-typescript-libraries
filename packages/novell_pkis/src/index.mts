/**
 * @module
 * @description
 *
 * Novell PKIS certificate attributes from *Novell Certificate Extension
 * Attributes — Novell Security Attributes(tm)* (7 August 1998, document
 * version 0.99; `pkisv10`).
 *
 * `pa_sa` (`2.16.840.1.113719.1.9.4.1`) identifies the Novell Security
 * Attributes extension: key quality, crypto process quality, certificate
 * class, and an enterprise identifier. Relying-party software computes a
 * greatest lower bound of those four over the certificate chain (§3.1).
 * `pa_rl` (`2.16.840.1.113719.1.9.4.2`) is a separate reliance-limit
 * attribute and is not part of that bound (§2, §3).
 */
export * from "./lib/modules/PKIS/index.mjs";
