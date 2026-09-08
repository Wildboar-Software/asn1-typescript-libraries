/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    WeekMask,
    _decode_WeekMask,
    _encode_WeekMask,
} from "../X790ASN1Module/WeekMask.ta.mjs";



/**
 * @summary ManagedObjectAccessHours
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagedObjectAccessHours  ::=  SET OF WeekMask
 * ```
 */
export
type ManagedObjectAccessHours = WeekMask[]; // SetOfType

let _cached_decoder_for_ManagedObjectAccessHours: $.ASN1Decoder<ManagedObjectAccessHours> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessHours
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManagedObjectAccessHours (el: _Element): ManagedObjectAccessHours {
    if (!_cached_decoder_for_ManagedObjectAccessHours) { _cached_decoder_for_ManagedObjectAccessHours = $._decodeSetOf<WeekMask>(() => _decode_WeekMask); }
    return _cached_decoder_for_ManagedObjectAccessHours(el);
}

let _cached_encoder_for_ManagedObjectAccessHours: $.ASN1Encoder<ManagedObjectAccessHours> | null = null;

/**
 * @summary Encodes a(n) ManagedObjectAccessHours into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessHours, encoded as an ASN.1 Element.
 */
export
function _encode_ManagedObjectAccessHours (value: ManagedObjectAccessHours, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManagedObjectAccessHours) { _cached_encoder_for_ManagedObjectAccessHours = $._encodeSetOf<WeekMask>(() => _encode_WeekMask, $.BER); }
    return _cached_encoder_for_ManagedObjectAccessHours(value, elGetter);
}


/* eslint-enable */
