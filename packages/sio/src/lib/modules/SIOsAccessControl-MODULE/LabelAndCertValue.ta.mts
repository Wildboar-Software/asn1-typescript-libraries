/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LabelAndCertValue
 * @description
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
