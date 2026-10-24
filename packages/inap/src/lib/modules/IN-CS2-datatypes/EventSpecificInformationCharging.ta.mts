/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
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
 * ```
 */
export
type EventSpecificInformationCharging = OCTET_STRING; // OctetStringType

export
const _decode_EventSpecificInformationCharging: $.ASN1Decoder<EventSpecificInformationCharging> = $._decodeOctetString;

export
const _encode_EventSpecificInformationCharging: $.ASN1Encoder<EventSpecificInformationCharging> = $._encodeOctetString;

/* eslint-enable */
