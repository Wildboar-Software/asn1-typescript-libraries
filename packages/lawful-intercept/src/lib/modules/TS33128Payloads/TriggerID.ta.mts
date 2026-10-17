/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerID
 * @description
 * 
 * Identity of the Device trigger that should be provided in the
 * deviceTriggeringDeliveryReportNotification IRI, Device trigger replacement
 * IRI and Device trigger cancellation IRI.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerID  ::=  UTF8String
 * ```
 */
export
type TriggerID = UTF8String; // UTF8String
export const _decode_TriggerID: $.ASN1Decoder<TriggerID> = $._decodeUTF8String;
export const _encode_TriggerID: $.ASN1Encoder<TriggerID> = $._encodeUTF8String;


/* eslint-enable */
