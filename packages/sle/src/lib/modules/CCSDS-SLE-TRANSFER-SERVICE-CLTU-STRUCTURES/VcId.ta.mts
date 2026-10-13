/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VcId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcId                     ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcId = INTEGER;
export const _decode_VcId: $.ASN1Decoder<VcId> = $._decodeInteger;
export const _encode_VcId: $.ASN1Encoder<VcId> = $._encodeInteger;


/* eslint-enable */
