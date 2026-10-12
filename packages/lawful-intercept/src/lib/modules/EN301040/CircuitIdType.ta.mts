/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircuitIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircuitIdType  ::=  NumericString (SIZE (20))
 * ```
 */
export
type CircuitIdType = NumericString; // NumericString
export const _decode_CircuitIdType: $.ASN1Decoder<CircuitIdType> = $._decodeNumericString;
export const _encode_CircuitIdType: $.ASN1Encoder<CircuitIdType> = $._encodeNumericString;


/* eslint-enable */
