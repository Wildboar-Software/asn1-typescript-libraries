/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CancelledAlarmSynchronization,
    _decode_CancelledAlarmSynchronization,
    _encode_CancelledAlarmSynchronization,
} from "../Q821-ASN1Module/CancelledAlarmSynchronization.ta.mjs";



/**
 * @summary CancelAlarmSynchronization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelAlarmSynchronization  ::=  CancelledAlarmSynchronization
 * ```
 */
export
type CancelAlarmSynchronization = CancelledAlarmSynchronization; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CancelAlarmSynchronization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CancelAlarmSynchronization: $.ASN1Decoder<CancelAlarmSynchronization> = _decode_CancelledAlarmSynchronization;

/**
 * @summary Encodes a(n) CancelAlarmSynchronization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelAlarmSynchronization, encoded as an ASN.1 Element.
 */
export const _encode_CancelAlarmSynchronization: $.ASN1Encoder<CancelAlarmSynchronization> = _encode_CancelledAlarmSynchronization;


/* eslint-enable */
