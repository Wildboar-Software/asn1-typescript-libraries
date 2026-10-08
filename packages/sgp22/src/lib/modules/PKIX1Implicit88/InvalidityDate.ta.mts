/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvalidityDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvalidityDate  ::=   GeneralizedTime
 * ```
 */
export
type InvalidityDate = GeneralizedTime; // GeneralizedTime
export const _decode_InvalidityDate = $._decodeGeneralizedTime;
export const _encode_InvalidityDate = $._encodeGeneralizedTime;


/* eslint-enable */
