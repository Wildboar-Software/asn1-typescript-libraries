/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSNetworkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSNetworkCapability  ::=  OCTET STRING ( SIZE( 1 .. 8 ) )
 * ```
 */
export
type MSNetworkCapability = OCTET_STRING; // OctetStringType

export
const _decode_MSNetworkCapability: $.ASN1Decoder<MSNetworkCapability> = $._decodeOctetString;

export
const _encode_MSNetworkCapability: $.ASN1Encoder<MSNetworkCapability> = $._encodeOctetString;

/* eslint-enable */
