/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileState  ::=  INTEGER {disabled(0), enabled(1)}
 * ```
 */
export
type ProfileState = INTEGER;

/**
 * @summary ProfileState_disabled
 * @constant
 * @type {number}
 */
export
const ProfileState_disabled: ProfileState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_disabled
 * @constant
 * @type {number}
 */
export
const disabled: ProfileState = ProfileState_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @constant
 * @type {number}
 */
export
const ProfileState_enabled: ProfileState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @constant
 * @type {number}
 */
export
const enabled: ProfileState = ProfileState_enabled; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProfileState: $.ASN1Decoder<ProfileState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileState (el: _Element): ProfileState {
    if (!_cached_decoder_for_ProfileState) { _cached_decoder_for_ProfileState = $._decodeInteger; }
    return _cached_decoder_for_ProfileState(el);
}

let _cached_encoder_for_ProfileState: $.ASN1Encoder<ProfileState> | null = null;

/**
 * @summary Encodes a(n) ProfileState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileState, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileState (value: ProfileState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileState) { _cached_encoder_for_ProfileState = $._encodeInteger; }
    return _cached_encoder_for_ProfileState(value, elGetter);
}


/* eslint-enable */
