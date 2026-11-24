/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StandardBDBType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StandardBDBType  ::=  OCTET STRING
 * ```
 */
export
type StandardBDBType = OCTET_STRING; // OctetStringType

export
const _decode_StandardBDBType: $.ASN1Decoder<StandardBDBType> = $._decodeOctetString;

export
const _encode_StandardBDBType: $.ASN1Encoder<StandardBDBType> = $._encodeOctetString;

/* eslint-enable */
