/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerPayload
 * @description
 * 
 * The Device triggering payload.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
