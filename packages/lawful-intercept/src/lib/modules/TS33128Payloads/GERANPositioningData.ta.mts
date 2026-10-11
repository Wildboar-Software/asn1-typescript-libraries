/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GERANPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANPositioningData = OCTET_STRING; // OctetStringType

export const _decode_GERANPositioningData: $.ASN1Decoder<GERANPositioningData> = $._decodeOctetString;

export const _encode_GERANPositioningData: $.ASN1Encoder<GERANPositioningData> = $._encodeOctetString;

/* eslint-enable */
