/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANAdditionalPositioningData
 * @description
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
