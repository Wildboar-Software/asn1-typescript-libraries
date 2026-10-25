/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minEventTypeChargingLength } from "./minEventTypeChargingLength.va.mjs";
import { maxEventTypeChargingLength } from "./maxEventTypeChargingLength.va.mjs";
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
function _decode_EventTypeCharging (el: _Element): EventTypeCharging {
    const value = $._decodeOctetString(el);
    if (value.length < minEventTypeChargingLength || value.length > maxEventTypeChargingLength) {
        throw new ASN1SizeError("EventTypeCharging violates SIZE constraint");
    }
    return value;
}

export
const _encode_EventTypeCharging: $.ASN1Encoder<EventTypeCharging> = $._encodeOctetString;

/* eslint-enable */
