/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTypeCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeCharging  ::= 
 *   OCTET STRING(SIZE (minEventTypeChargingLength..maxEventTypeChargingLength))
 * ```
 */
export
type EventTypeCharging = OCTET_STRING; // OctetStringType

export
const _decode_EventTypeCharging: $.ASN1Decoder<EventTypeCharging> = $._decodeOctetString;

export
const _encode_EventTypeCharging: $.ASN1Encoder<EventTypeCharging> = $._encodeOctetString;

/* eslint-enable */
