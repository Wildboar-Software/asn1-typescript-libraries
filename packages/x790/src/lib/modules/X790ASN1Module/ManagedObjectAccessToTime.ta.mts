/* eslint-disable */
import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type StopTime,
    _decode_StopTime,
    _encode_StopTime,
} from "../X790ASN1Module/StopTime.ta.mjs";



/**
 * @summary ManagedObjectAccessToTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagedObjectAccessToTime  ::=  StopTime
 * ```
 */
export
type ManagedObjectAccessToTime = StopTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessToTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ManagedObjectAccessToTime: $.ASN1Decoder<ManagedObjectAccessToTime> = _decode_StopTime;

/**
 * @summary Encodes a(n) ManagedObjectAccessToTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessToTime, encoded as an ASN.1 Element.
 */
export const _encode_ManagedObjectAccessToTime: $.ASN1Encoder<ManagedObjectAccessToTime> = _encode_StopTime;


/* eslint-enable */
