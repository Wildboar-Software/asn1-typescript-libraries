/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardToNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardToNumber  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type ForwardToNumber = OCTET_STRING; // OctetStringType

export
const _decode_ForwardToNumber: $.ASN1Decoder<ForwardToNumber> = $._decodeOctetString;

export
const _encode_ForwardToNumber: $.ASN1Encoder<ForwardToNumber> = $._encodeOctetString;

/* eslint-enable */
