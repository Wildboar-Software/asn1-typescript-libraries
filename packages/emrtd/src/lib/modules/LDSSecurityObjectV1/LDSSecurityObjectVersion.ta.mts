/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LDSSecurityObjectVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDSSecurityObjectVersion  ::=  INTEGER {
 *     v0(0),
 *     v1(1)
 *     -- If LDSSecurityObjectVersion is V1, ldsVersionInfo MUST be present
 * }
 * ```
 */
export
type LDSSecurityObjectVersion = INTEGER;

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v0: LDSSecurityObjectVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const LDSSecurityObjectVersion_v1: LDSSecurityObjectVersion = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LDSSecurityObjectVersion_v1
 * @constant
 * @type {number}
 */
export
const v1: LDSSecurityObjectVersion = LDSSecurityObjectVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LDSSecurityObjectVersion: $.ASN1Decoder<LDSSecurityObjectVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LDSSecurityObjectVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LDSSecurityObjectVersion (el: _Element): LDSSecurityObjectVersion {
    if (!_cached_decoder_for_LDSSecurityObjectVersion) { _cached_decoder_for_LDSSecurityObjectVersion = $._decodeInteger; }
    return _cached_decoder_for_LDSSecurityObjectVersion(el);
}

let _cached_encoder_for_LDSSecurityObjectVersion: $.ASN1Encoder<LDSSecurityObjectVersion> | null = null;

/**
 * @summary Encodes a(n) LDSSecurityObjectVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDSSecurityObjectVersion, encoded as an ASN.1 Element.
 */
export
function _encode_LDSSecurityObjectVersion (value: LDSSecurityObjectVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LDSSecurityObjectVersion) { _cached_encoder_for_LDSSecurityObjectVersion = $._encodeInteger; }
    return _cached_encoder_for_LDSSecurityObjectVersion(value, elGetter);
}


/* eslint-enable */
