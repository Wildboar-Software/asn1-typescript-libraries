/* eslint-disable */
import { EncodingParameters } from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta.mjs";

/**
 * @summary nullOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullOctetString  EncodingParameters ::= ''H
 * ```
 *
 * @constant
 */
export const nullOctetString: EncodingParameters = new Uint8Array(0);

/* eslint-enable */
