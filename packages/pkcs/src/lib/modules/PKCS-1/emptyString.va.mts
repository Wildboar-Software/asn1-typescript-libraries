/* eslint-disable */
import { EncodingParameters } from "../PKCS-1/EncodingParameters.ta.mjs";

/**
 * @summary emptyString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyString    EncodingParameters ::= ''H
 * ```
 *
 * @constant
 */
export const emptyString: EncodingParameters = new Uint8Array(0);

/* eslint-enable */
