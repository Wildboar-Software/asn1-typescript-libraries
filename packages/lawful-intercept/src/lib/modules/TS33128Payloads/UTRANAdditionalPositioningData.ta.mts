/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANAdditionalPositioningData
 * @description
 * 
 * Contains the encoded content of the "UTRAN-Additional-Positioning-Data"
 * parameter defined in TS 29.172 [53] clause 7.4.63.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANAdditionalPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANAdditionalPositioningData = OCTET_STRING; // OctetStringType
export const _decode_UTRANAdditionalPositioningData: $.ASN1Decoder<UTRANAdditionalPositioningData> = $._decodeOctetString;
export const _encode_UTRANAdditionalPositioningData: $.ASN1Encoder<UTRANAdditionalPositioningData> = $._encodeOctetString;


/* eslint-enable */
