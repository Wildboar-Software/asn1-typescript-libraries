/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginalCalledNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalCalledNumber  ::=  OCTET STRING
 * ```
 */
export
type OriginalCalledNumber = OCTET_STRING; // OctetStringType

export
const _decode_OriginalCalledNumber: $.ASN1Decoder<OriginalCalledNumber> = $._decodeOctetString;

export
const _encode_OriginalCalledNumber: $.ASN1Encoder<OriginalCalledNumber> = $._encodeOctetString;

/* eslint-enable */
