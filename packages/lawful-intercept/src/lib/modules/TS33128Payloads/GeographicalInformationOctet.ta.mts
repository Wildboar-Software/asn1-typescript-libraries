/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformationOctet  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformationOctet = OCTET_STRING; // OctetStringType
export const _decode_GeographicalInformationOctet: $.ASN1Decoder<GeographicalInformationOctet> = $._decodeOctetString;
export const _encode_GeographicalInformationOctet: $.ASN1Encoder<GeographicalInformationOctet> = $._encodeOctetString;


/* eslint-enable */
