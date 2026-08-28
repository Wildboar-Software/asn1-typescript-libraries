/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LabelAndCertValue
 * @description
 *
 * Classification value in a security label, and the bit index
 * of that classification in the clearance `classList` BIT
 * STRING. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelAndCertValue  ::=  INTEGER(0..MAX)
 * ```
 */
export type LabelAndCertValue = INTEGER;




export const _decode_LabelAndCertValue = $._decodeInteger;




export const _encode_LabelAndCertValue = $._encodeInteger;


/* eslint-enable */
