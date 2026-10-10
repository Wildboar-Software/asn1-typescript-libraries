/**
 * @module
 * @description
 *
 * Lightweight Presentation Protocol from
 * [RFC 1085](https://datatracker.ietf.org/doc/html/rfc1085):
 * ISO presentation services for an application context of ACSE
 * plus ROSE, serialized as ASN.1 over TCP or UDP. The service is
 * P-CONNECT, P-RELEASE, P-U-ABORT, P-P-ABORT, and P-DATA, with
 * the presentation contexts fixed at connection establishment.
 *
 * Import from `@wildboar/lpp` or `@wildboar/lpp/RFC1085-PS`.
 */
export * from "./lib/modules/RFC1085-PS/index.mjs";
