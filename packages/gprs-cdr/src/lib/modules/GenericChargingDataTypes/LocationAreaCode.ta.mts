/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaCode  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type LocationAreaCode = OCTET_STRING; // OctetStringType

export
const _decode_LocationAreaCode: $.ASN1Decoder<LocationAreaCode> = $._decodeOctetString;

export
const _encode_LocationAreaCode: $.ASN1Encoder<LocationAreaCode> = $._encodeOctetString;

/* eslint-enable */
