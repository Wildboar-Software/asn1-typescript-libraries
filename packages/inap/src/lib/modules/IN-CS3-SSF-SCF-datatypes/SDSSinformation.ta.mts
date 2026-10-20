/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDSSinformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDSSinformation  ::= 
 *   OCTET STRING
 * ```
 */
export
type SDSSinformation = OCTET_STRING; // OctetStringType

export
const _decode_SDSSinformation: $.ASN1Decoder<SDSSinformation> = $._decodeOctetString;

export
const _encode_SDSSinformation: $.ASN1Encoder<SDSSinformation> = $._encodeOctetString;

/* eslint-enable */
