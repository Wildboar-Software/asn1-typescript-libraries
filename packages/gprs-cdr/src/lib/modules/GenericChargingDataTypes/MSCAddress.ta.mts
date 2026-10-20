/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSCAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSCAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type MSCAddress = OCTET_STRING; // OctetStringType

export
const _decode_MSCAddress: $.ASN1Decoder<MSCAddress> = $._decodeOctetString;

export
const _encode_MSCAddress: $.ASN1Encoder<MSCAddress> = $._encodeOctetString;

/* eslint-enable */
