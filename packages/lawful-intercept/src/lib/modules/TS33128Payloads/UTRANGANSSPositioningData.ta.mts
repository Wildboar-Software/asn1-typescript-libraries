/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANGANSSPositioningData
 * @description
 * 
 * Contains the encoded content of the "UTRAN-GANSS-Positioning-Data" parameter
 * defined in TS 29.172 [53] clause 7.4.34.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
