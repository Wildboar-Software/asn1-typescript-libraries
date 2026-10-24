/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxEventSpecificInformationChargingLength } from "./maxEventSpecificInformationChargingLength.va.mjs";
import { minEventSpecificInformationChargingLength } from "./minEventSpecificInformationChargingLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventSpecificInformationCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationCharging  ::= 
 *   OCTET STRING
 *     (SIZE (minEventSpecificInformationChargingLength..
 *              maxEventSpecificInformationChargingLength))
 * ```
 */
export
type EventSpecificInformationCharging = OCTET_STRING; // OctetStringType

export
function _decode_EventSpecificInformationCharging (el: _Element): EventSpecificInformationCharging {
    const value = $._decodeOctetString(el);
    if (value.length < minEventSpecificInformationChargingLength || value.length > maxEventSpecificInformationChargingLength) {
        throw new ASN1SizeError("EventSpecificInformationCharging violates SIZE constraint");
    }
    return value;
}

export
const _encode_EventSpecificInformationCharging: $.ASN1Encoder<EventSpecificInformationCharging> = $._encodeOctetString;

/* eslint-enable */
