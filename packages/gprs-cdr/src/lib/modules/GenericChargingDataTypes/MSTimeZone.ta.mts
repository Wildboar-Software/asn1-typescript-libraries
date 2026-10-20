/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSTimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSTimeZone  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type MSTimeZone = OCTET_STRING; // OctetStringType

export
const _decode_MSTimeZone: $.ASN1Decoder<MSTimeZone> = $._decodeOctetString;

export
const _encode_MSTimeZone: $.ASN1Encoder<MSTimeZone> = $._encodeOctetString;

/* eslint-enable */
