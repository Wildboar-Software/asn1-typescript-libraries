/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerPayload  ::=  OCTET STRING
 * ```
 */
export
type TriggerPayload = OCTET_STRING; // OctetStringType

export const _decode_TriggerPayload: $.ASN1Decoder<TriggerPayload> = $._decodeOctetString;

export const _encode_TriggerPayload: $.ASN1Encoder<TriggerPayload> = $._encodeOctetString;


/* eslint-enable */
