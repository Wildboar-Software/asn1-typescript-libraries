/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDS                ::=    OCTET STRING (SIZE(8))
 * ```
 */
export
type TimeCCSDS = OCTET_STRING; // OctetStringType
export const _decode_TimeCCSDS: $.ASN1Decoder<TimeCCSDS> = $._decodeOctetString;
export const _encode_TimeCCSDS: $.ASN1Encoder<TimeCCSDS> = $._encodeOctetString;


/* eslint-enable */
