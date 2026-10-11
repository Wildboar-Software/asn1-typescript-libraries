/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANGANSSPositioningData = OCTET_STRING; // OctetStringType

export const _decode_GERANGANSSPositioningData: $.ASN1Decoder<GERANGANSSPositioningData> = $._decodeOctetString;

export const _encode_GERANGANSSPositioningData: $.ASN1Encoder<GERANGANSSPositioningData> = $._encodeOctetString;


/* eslint-enable */
