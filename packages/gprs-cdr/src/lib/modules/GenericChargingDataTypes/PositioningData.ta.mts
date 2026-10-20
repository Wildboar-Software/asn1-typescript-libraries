/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningData  ::=  OCTET STRING ( SIZE( 1 .. 33 ) )
 * ```
 */
export
type PositioningData = OCTET_STRING; // OctetStringType

export
const _decode_PositioningData: $.ASN1Decoder<PositioningData> = $._decodeOctetString;

export
const _encode_PositioningData: $.ASN1Encoder<PositioningData> = $._encodeOctetString;

/* eslint-enable */
