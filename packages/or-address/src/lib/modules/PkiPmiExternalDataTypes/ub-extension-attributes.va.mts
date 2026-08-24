/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";

/**
 * @summary ub_extension_attributes
 * @description
 *
 * Maximum 256 OR-address extension attributes; also the max `EXTENSION-ATTRIBUTE.&id`
 * (ITU-T X.411 (1999), Annex B).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-extension-attributes                   INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_extension_attributes: INTEGER = 256;

/* eslint-enable */
