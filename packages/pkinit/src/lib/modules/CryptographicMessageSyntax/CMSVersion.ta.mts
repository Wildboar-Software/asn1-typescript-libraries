/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CMSVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMSVersion  ::=  INTEGER {v0(0), v1(1), v2(2), v3(3), v4(4)}
 * ```
 */
export
type CMSVersion = INTEGER;

/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export
const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export
const CMSVersion_v1: CMSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: CMSVersion = CMSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export
const CMSVersion_v2: CMSVersion = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export
const v2: CMSVersion = CMSVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export
const CMSVersion_v3: CMSVersion = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export
const v3: CMSVersion = CMSVersion_v3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export
const CMSVersion_v4: CMSVersion = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export
const v4: CMSVersion = CMSVersion_v4; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CMSVersion: $.ASN1Decoder<CMSVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CMSVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CMSVersion (el: _Element): CMSVersion {
    if (!_cached_decoder_for_CMSVersion) { _cached_decoder_for_CMSVersion = $._decodeInteger; }
    return _cached_decoder_for_CMSVersion(el);
}

let _cached_encoder_for_CMSVersion: $.ASN1Encoder<CMSVersion> | null = null;

/**
 * @summary Encodes a(n) CMSVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMSVersion, encoded as an ASN.1 Element.
 */
export
function _encode_CMSVersion (value: CMSVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CMSVersion) { _cached_encoder_for_CMSVersion = $._encodeInteger; }
    return _cached_encoder_for_CMSVersion(value, elGetter);
}


/* eslint-enable */
