/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QoSParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoSParameter  ::= 
 *   OCTET STRING
 * ```
 */
export
type QoSParameter = OCTET_STRING; // OctetStringType

export
const _decode_QoSParameter: $.ASN1Decoder<QoSParameter> = $._decodeOctetString;

export
const _encode_QoSParameter: $.ASN1Encoder<QoSParameter> = $._encodeOctetString;

/* eslint-enable */
