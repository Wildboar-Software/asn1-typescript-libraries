/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDUSessionType {
    iPv4 = 1,
    iPv6 = 2,
    iPv4v6 = 3,
    unstructured = 4,
    ethernet = 5,
}

/**
 * @summary PDUSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDUSessionType = _enum_for_PDUSessionType;

/**
 * @summary PDUSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDUSessionType = _enum_for_PDUSessionType;

/**
 * @summary PDUSessionType_iPv4
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4: PDUSessionType = PDUSessionType.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: PDUSessionType = PDUSessionType.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv6: PDUSessionType = PDUSessionType.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: PDUSessionType = PDUSessionType.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv4v6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4v6: PDUSessionType = PDUSessionType.iPv4v6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4v6
 * @constant
 * @type {number}
 */
export
const iPv4v6: PDUSessionType = PDUSessionType.iPv4v6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_unstructured
 * @constant
 * @type {number}
 */
export
const PDUSessionType_unstructured: PDUSessionType = PDUSessionType.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: PDUSessionType = PDUSessionType.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_ethernet
 * @constant
 * @type {number}
 */
export
const PDUSessionType_ethernet: PDUSessionType = PDUSessionType.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: PDUSessionType = PDUSessionType.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PDUSessionType: $.ASN1Decoder<PDUSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUSessionType (el: _Element): PDUSessionType {
    if (!_cached_decoder_for_PDUSessionType) { _cached_decoder_for_PDUSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_PDUSessionType(el);
}

let _cached_encoder_for_PDUSessionType: $.ASN1Encoder<PDUSessionType> | null = null;

/**
 * @summary Encodes a(n) PDUSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_PDUSessionType (value: PDUSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUSessionType) { _cached_encoder_for_PDUSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_PDUSessionType(value, elGetter);
}


/* eslint-enable */
