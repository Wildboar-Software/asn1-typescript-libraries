/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PatronHeaderVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PatronHeaderVersion  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type PatronHeaderVersion = OCTET_STRING; // OctetStringType

export
const _decode_PatronHeaderVersion: $.ASN1Decoder<PatronHeaderVersion> = $._decodeOctetString;

export
const _encode_PatronHeaderVersion: $.ASN1Encoder<PatronHeaderVersion> = $._encodeOctetString;

/* eslint-enable */
