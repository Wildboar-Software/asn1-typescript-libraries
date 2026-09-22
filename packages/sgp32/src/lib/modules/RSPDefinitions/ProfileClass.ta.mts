/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileClass  ::=  INTEGER {test(0), provisioning(1), operational(2)}
 * ```
 */
export
type ProfileClass = INTEGER;

/**
 * @summary ProfileClass_test
 * @constant
 * @type {number}
 */
export
const ProfileClass_test: ProfileClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_test
 * @constant
 * @type {number}
 */
export
const test: ProfileClass = ProfileClass_test; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @constant
 * @type {number}
 */
export
const ProfileClass_provisioning: ProfileClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @constant
 * @type {number}
 */
export
const provisioning: ProfileClass = ProfileClass_provisioning; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @constant
 * @type {number}
 */
export
const ProfileClass_operational: ProfileClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @constant
 * @type {number}
 */
export
const operational: ProfileClass = ProfileClass_operational; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ProfileClass: $.ASN1Decoder<ProfileClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileClass (el: _Element): ProfileClass {
    if (!_cached_decoder_for_ProfileClass) { _cached_decoder_for_ProfileClass = $._decodeInteger; }
    return _cached_decoder_for_ProfileClass(el);
}

let _cached_encoder_for_ProfileClass: $.ASN1Encoder<ProfileClass> | null = null;

/**
 * @summary Encodes a(n) ProfileClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileClass, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileClass (value: ProfileClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileClass) { _cached_encoder_for_ProfileClass = $._encodeInteger; }
    return _cached_encoder_for_ProfileClass(value, elGetter);
}


/* eslint-enable */
