/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeIDType,
    _decode_InvokeIDType,
    _encode_InvokeIDType,
} from "../CMIP-1/InvokeIDType.ta.mjs";



/**
 * @summary CancelledAlarmSynchronization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelledAlarmSynchronization  ::=  InvokeIDType
 * ```
 */
export
type CancelledAlarmSynchronization = InvokeIDType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CancelledAlarmSynchronization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CancelledAlarmSynchronization: $.ASN1Decoder<CancelledAlarmSynchronization> = _decode_InvokeIDType;

/**
 * @summary Encodes a(n) CancelledAlarmSynchronization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelledAlarmSynchronization, encoded as an ASN.1 Element.
 */
export const _encode_CancelledAlarmSynchronization: (value: CancelledAlarmSynchronization, elGetter: $.ASN1Encoder<any>) => _Element = _encode_InvokeIDType;


/* eslint-enable */
