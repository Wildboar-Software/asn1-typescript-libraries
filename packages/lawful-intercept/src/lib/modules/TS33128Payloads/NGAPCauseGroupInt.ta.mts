/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseGroupInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseGroupInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseGroupInt = INTEGER;
export const _decode_NGAPCauseGroupInt: $.ASN1Decoder<NGAPCauseGroupInt> = $._decodeInteger;
export const _encode_NGAPCauseGroupInt: $.ASN1Encoder<NGAPCauseGroupInt> = $._encodeInteger;


/* eslint-enable */
