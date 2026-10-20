/**
 * @module
 * @description
 *
 * QSIG / PSS1 supplementary-service PDUs compiled from the ISO/IEC and
 * ECMA ASN.1 modules for the Q reference point.
 *
 * Import a module subpath such as `@wildboar/qsig/PSS1-Service-APDUs-asn1-97`
 * rather than this package root. The root does not re-export every symbol:
 * several modules reuse short names for named integers and enumerations.
 *
 * `ACSE-1` and `Remote-Operations-Information-Objects` are not entry points.
 * The symbols QSIG imports from them (`ACSE-apdu`, `OPERATION`, `ERROR`, and
 * `Code`) are re-exported from `@wildboar/acse` and `@wildboar/rose`.
 */
export {};
