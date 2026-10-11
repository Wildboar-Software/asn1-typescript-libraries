/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANPositioningData = OCTET_STRING; // OctetStringType

export const _decode_UTRANPositioningData: $.ASN1Decoder<UTRANPositioningData> = $._decodeOctetString;

export const _encode_UTRANPositioningData: $.ASN1Encoder<UTRANPositioningData> = $._encodeOctetString;


/* eslint-enable */
