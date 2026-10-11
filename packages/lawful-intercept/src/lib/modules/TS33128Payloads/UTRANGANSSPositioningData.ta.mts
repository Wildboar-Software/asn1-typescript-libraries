/* eslint-disable */
import {
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UTRANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANGANSSPositioningData = OCTET_STRING; // OctetStringType

export const _decode_UTRANGANSSPositioningData: $.ASN1Decoder<UTRANGANSSPositioningData> = $._decodeOctetString;

export const _encode_UTRANGANSSPositioningData: $.ASN1Encoder<UTRANGANSSPositioningData> = $._encodeOctetString;

/* eslint-enable */
