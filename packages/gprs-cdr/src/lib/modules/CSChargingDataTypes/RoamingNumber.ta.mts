/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNumber  ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type RoamingNumber = OCTET_STRING; // OctetStringType

export
const _decode_RoamingNumber: $.ASN1Decoder<RoamingNumber> = $._decodeOctetString;

export
const _encode_RoamingNumber: $.ASN1Encoder<RoamingNumber> = $._encodeOctetString;

/* eslint-enable */
