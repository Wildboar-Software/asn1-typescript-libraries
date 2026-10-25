/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledNumber  ::=  OCTET STRING
 * ```
 */
export
type CalledNumber = OCTET_STRING; // OctetStringType

export
const _decode_CalledNumber: $.ASN1Decoder<CalledNumber> = $._decodeOctetString;

export
const _encode_CalledNumber: $.ASN1Encoder<CalledNumber> = $._encodeOctetString;

/* eslint-enable */
