/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialCrlNumber
 * @description
 * 
 * Integer value of the v2 partial-CRL segment-number extension. SGP.22 v3.1
 * does not define this type.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialCrlNumber  ::=  INTEGER
 * ```
 */
export
type PartialCrlNumber = INTEGER;
export const _decode_PartialCrlNumber = $._decodeInteger;
export const _encode_PartialCrlNumber = $._encodeInteger;


/* eslint-enable */
