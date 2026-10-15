/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANPositioningData
 * @description
 * 
 * Contains the encoded content of the "GERAN-Positioning-Data" parameter
 * defined in TS 29.172 [53] clause 7.4.30.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
