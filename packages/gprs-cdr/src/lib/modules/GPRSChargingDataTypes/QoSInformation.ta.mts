/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoSInformation  ::=  OCTET STRING ( SIZE( 4 .. 255 ) )
 * ```
 */
export
type QoSInformation = OCTET_STRING; // OctetStringType

export
const _decode_QoSInformation: $.ASN1Decoder<QoSInformation> = $._decodeOctetString;

export
const _encode_QoSInformation: $.ASN1Encoder<QoSInformation> = $._encodeOctetString;

/* eslint-enable */
