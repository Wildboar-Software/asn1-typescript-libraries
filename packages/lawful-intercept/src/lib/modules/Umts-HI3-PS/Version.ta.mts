/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Version {
    version1 = 1,
    version3 = 3,
    lastVersion = 8,
}

/**
 * @summary Version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version  ::=  ENUMERATED
 * {
 *     version1(1),
 *     ...,
 *     version3(3) ,
 *         -- versions 4-7 were omitted to align with UmtsHI2Operations.
 *     lastVersion(8)
 *         -- Mandatory parameter "version" (tag 1) was always redundant in 33.108, because
 *         -- the object identifier "hi3DomainId" was introduced into "ULIC-headerV in the initial
 *         -- version of 33.108v5.0.0 In order to keep backward compatibility, even when the
 *         -- version of the "hi3DomainId" parameter will be incremented it is recommended to
 *         -- always send to LEMF the same: enumeration value "lastVersion(8)".
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Version = _enum_for_Version | ENUMERATED;

/**
 * @summary Version_version1
 * @constant
 * @type {number}
 */
export
const Version_version1: Version = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version1
 * @constant
 * @type {number}
 */
export
const version1: Version = Version_version1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Version_version3
 * @constant
 * @type {number}
 */
export
const Version_version3: Version = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version3
 * @constant
 * @type {number}
 */
export
const version3: Version = Version_version3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Version_lastVersion
 * @constant
 * @type {number}
 */
export
const Version_lastVersion: Version = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastVersion
 * @constant
 * @type {number}
 */
export
const lastVersion: Version = Version_lastVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Version: $.ASN1Decoder<Version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Version (el: _Element): Version {
    if (!_cached_decoder_for_Version) { _cached_decoder_for_Version = $._decodeEnumerated; }
    return _cached_decoder_for_Version(el);
}

let _cached_encoder_for_Version: $.ASN1Encoder<Version> | null = null;

/**
 * @summary Encodes a(n) Version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Version, encoded as an ASN.1 Element.
 */
export
function _encode_Version (value: Version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Version) { _cached_encoder_for_Version = $._encodeEnumerated; }
    return _cached_encoder_for_Version(value, elGetter);
}


/* eslint-enable */
