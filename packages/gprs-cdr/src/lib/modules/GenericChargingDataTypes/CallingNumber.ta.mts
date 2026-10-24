/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingNumber  ::=  OCTET STRING
 * ```
 */
export
type CallingNumber = OCTET_STRING; // OctetStringType

export
const _decode_CallingNumber: $.ASN1Decoder<CallingNumber> = $._decodeOctetString;

export
const _encode_CallingNumber: $.ASN1Encoder<CallingNumber> = $._encodeOctetString;

/* eslint-enable */
