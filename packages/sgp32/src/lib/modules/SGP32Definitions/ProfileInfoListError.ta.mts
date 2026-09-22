/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileInfoListError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListError  ::=  INTEGER {
 *     incorrectInputValues(1),
 *     profileChangeOngoing (11),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type ProfileInfoListError = INTEGER;

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_incorrectInputValues: ProfileInfoListError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_incorrectInputValues
 * @constant
 * @type {number}
 */
export
const incorrectInputValues: ProfileInfoListError = ProfileInfoListError_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_profileChangeOngoing
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_profileChangeOngoing: ProfileInfoListError = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_profileChangeOngoing
 * @constant
 * @type {number}
 */
export
const profileChangeOngoing: ProfileInfoListError = ProfileInfoListError_profileChangeOngoing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @constant
 * @type {number}
 */
export
const ProfileInfoListError_undefinedError: ProfileInfoListError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileInfoListError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ProfileInfoListError = ProfileInfoListError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProfileInfoListError: $.ASN1Decoder<ProfileInfoListError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfoListError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfoListError (el: _Element): ProfileInfoListError {
    if (!_cached_decoder_for_ProfileInfoListError) { _cached_decoder_for_ProfileInfoListError = $._decodeInteger; }
    return _cached_decoder_for_ProfileInfoListError(el);
}

let _cached_encoder_for_ProfileInfoListError: $.ASN1Encoder<ProfileInfoListError> | null = null;

/**
 * @summary Encodes a(n) ProfileInfoListError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfoListError, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfoListError (value: ProfileInfoListError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfoListError) { _cached_encoder_for_ProfileInfoListError = $._encodeInteger; }
    return _cached_encoder_for_ProfileInfoListError(value, elGetter);
}


/* eslint-enable */
