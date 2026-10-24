/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseValueInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseValueInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseValueInt = INTEGER;
export const _decode_NGAPCauseValueInt: $.ASN1Decoder<NGAPCauseValueInt> = $._decodeInteger;
export const _encode_NGAPCauseValueInt: $.ASN1Encoder<NGAPCauseValueInt> = $._encodeInteger;


/* eslint-enable */
