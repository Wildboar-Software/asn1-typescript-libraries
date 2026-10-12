/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPVersion {
    iPV4 = 1,
    iPV6 = 2,
    iPV4andV6 = 3,
}

/**
 * @summary IPVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPVersion  ::=  ENUMERATED
 * {
 *     iPV4(1),
 *         -- The IPv4 protocol is used
 *     iPV6(2),
 *         -- The IPv6 protocol is used
 *     iPV4andV6(3),
 *         -- The IPv4 and IPv6 protocols are used
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPVersion = _enum_for_IPVersion | ENUMERATED;

/**
 * @summary IPVersion_iPV4
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4: IPVersion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @constant
 * @type {number}
 */
export
const iPV4: IPVersion = IPVersion_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV6
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV6: IPVersion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @constant
 * @type {number}
 */
export
const iPV6: IPVersion = IPVersion_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV4andV6
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4andV6: IPVersion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4andV6
 * @constant
 * @type {number}
 */
export
const iPV4andV6: IPVersion = IPVersion_iPV4andV6; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IPVersion: $.ASN1Decoder<IPVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPVersion (el: _Element): IPVersion {
    if (!_cached_decoder_for_IPVersion) { _cached_decoder_for_IPVersion = $._decodeEnumerated; }
    return _cached_decoder_for_IPVersion(el);
}

let _cached_encoder_for_IPVersion: $.ASN1Encoder<IPVersion> | null = null;

/**
 * @summary Encodes a(n) IPVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPVersion, encoded as an ASN.1 Element.
 */
export
function _encode_IPVersion (value: IPVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPVersion) { _cached_encoder_for_IPVersion = $._encodeEnumerated; }
    return _cached_encoder_for_IPVersion(value, elGetter);
}


/* eslint-enable */
