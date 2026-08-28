/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SPIFVersionNumber
 * @description
 *
 * Version of the SPIF *data* for a given security policy (not
 * the ASN.1 syntax version). Distinguishes successive SPIFs for
 * the same `securityPolicyIdData`. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIFVersionNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type SPIFVersionNumber = INTEGER;




export const _decode_SPIFVersionNumber = $._decodeInteger;




export const _encode_SPIFVersionNumber = $._encodeInteger;


/* eslint-enable */
