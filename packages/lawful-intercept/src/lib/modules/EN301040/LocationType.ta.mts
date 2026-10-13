/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TETRACGIType, _decode_TETRACGIType, _encode_TETRACGIType } from "../EN301040/TETRACGIType.ta.mjs";
// export { TETRACGIType, _decode_TETRACGIType, _encode_TETRACGIType } from "../EN301040/TETRACGIType.ta.mjs";
import { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";
// export { TETRAAddressType, _decode_TETRAAddressType, _encode_TETRAAddressType } from "../EN301040/TETRAAddressType.ta.mjs";


/**
 * @summary LocationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType  ::=  CHOICE {
 *     mSLoc        TETRACGIType,
 *     lSLoc        TETRAAddressType
 * }
 * ```
 */
export
type LocationType =
    { mSLoc: TETRACGIType } /* CHOICE_ALT_ROOT */
    | { lSLoc: TETRAAddressType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocationType: $.ASN1Decoder<LocationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationType (el: _Element): LocationType {
    if (!_cached_decoder_for_LocationType) { _cached_decoder_for_LocationType = $._decode_inextensible_choice<LocationType>({
    "CONTEXT 0": [ "mSLoc", _decode_TETRACGIType ],
    "CONTEXT 1": [ "lSLoc", $._decode_explicit<TETRAAddressType>(() => _decode_TETRAAddressType) ]
}); }
    return _cached_decoder_for_LocationType(el);
}

let _cached_encoder_for_LocationType: $.ASN1Encoder<LocationType> | null = null;

/**
 * @summary Encodes a(n) LocationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationType (value: LocationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationType) { _cached_encoder_for_LocationType = $._encode_choice<LocationType>({
    "mSLoc": $._encode_implicit(_TagClass.context, 0, () => _encode_TETRACGIType, $.BER),
    "lSLoc": $._encode_explicit(_TagClass.context, 1, () => _encode_TETRAAddressType, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocationType(value, elGetter);
}


/* eslint-enable */
