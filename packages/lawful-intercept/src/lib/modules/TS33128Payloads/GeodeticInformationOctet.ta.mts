/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformationOctet  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformationOctet = OCTET_STRING; // OctetStringType

export const _decode_GeodeticInformationOctet: $.ASN1Decoder<GeodeticInformationOctet> = $._decodeOctetString;

export const _encode_GeodeticInformationOctet: $.ASN1Encoder<GeodeticInformationOctet> = $._encodeOctetString;


/* eslint-enable */
