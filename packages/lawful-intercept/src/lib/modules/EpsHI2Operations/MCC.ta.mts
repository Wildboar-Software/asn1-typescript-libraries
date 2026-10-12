/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString
export const _decode_MCC: $.ASN1Decoder<MCC> = $._decodeNumericString;
export const _encode_MCC: $.ASN1Encoder<MCC> = $._encodeNumericString;


/* eslint-enable */
