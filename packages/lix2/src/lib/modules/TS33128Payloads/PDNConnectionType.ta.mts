/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNConnectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDNConnectionType {
    iPv4 = 1,
    iPv6 = 2,
    iPv4v6 = 3,
    nonIP = 4,
    ethernet = 5,
}

/**
 * @summary PDNConnectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDNConnectionType = _enum_for_PDNConnectionType;

/**
 * @summary PDNConnectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     nonIP(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDNConnectionType = _enum_for_PDNConnectionType;

/**
 * @summary PDNConnectionType_iPv4
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv4: PDNConnectionType = PDNConnectionType.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: PDNConnectionType = PDNConnectionType.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_iPv6
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv6: PDNConnectionType = PDNConnectionType.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: PDNConnectionType = PDNConnectionType.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_iPv4v6
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_iPv4v6: PDNConnectionType = PDNConnectionType.iPv4v6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4v6
 * @constant
 * @type {number}
 */
export
const iPv4v6: PDNConnectionType = PDNConnectionType.iPv4v6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_nonIP
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_nonIP: PDNConnectionType = PDNConnectionType.nonIP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonIP
 * @constant
 * @type {number}
 */
export
const nonIP: PDNConnectionType = PDNConnectionType.nonIP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDNConnectionType_ethernet
 * @constant
 * @type {number}
 */
export
const PDNConnectionType_ethernet: PDNConnectionType = PDNConnectionType.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: PDNConnectionType = PDNConnectionType.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PDNConnectionType: $.ASN1Decoder<PDNConnectionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNConnectionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNConnectionType (el: _Element): PDNConnectionType {
    if (!_cached_decoder_for_PDNConnectionType) { _cached_decoder_for_PDNConnectionType = $._decodeEnumerated; }
    return _cached_decoder_for_PDNConnectionType(el);
}

let _cached_encoder_for_PDNConnectionType: $.ASN1Encoder<PDNConnectionType> | null = null;

/**
 * @summary Encodes a(n) PDNConnectionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNConnectionType, encoded as an ASN.1 Element.
 */
export
function _encode_PDNConnectionType (value: PDNConnectionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNConnectionType) { _cached_encoder_for_PDNConnectionType = $._encodeEnumerated; }
    return _cached_encoder_for_PDNConnectionType(value, elGetter);
}


/* eslint-enable */
