/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequiredMBMSBearerCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequiredMBMSBearerCapabilities  ::=  OCTET STRING ( SIZE( 3 .. 14 ) )
 * ```
 */
export
type RequiredMBMSBearerCapabilities = OCTET_STRING; // OctetStringType

export
const _decode_RequiredMBMSBearerCapabilities: $.ASN1Decoder<RequiredMBMSBearerCapabilities> = $._decodeOctetString;

export
const _encode_RequiredMBMSBearerCapabilities: $.ASN1Encoder<RequiredMBMSBearerCapabilities> = $._encodeOctetString;

/* eslint-enable */
