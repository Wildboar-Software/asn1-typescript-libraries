/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANGANSSPositioningData
 * @description
 * 
 * Contains the encoded content of the "GERAN-GANSS-Positioning-Data" parameter
 * defined in TS 29.172 [53] clause 7.4.31.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
