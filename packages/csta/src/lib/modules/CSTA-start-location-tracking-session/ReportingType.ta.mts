/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReportingType
 * @description
 *
 * immediate, periodic, or count (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportingType {
    immediate = 0,
    periodic = 1,
    count = 2,
}

/**
 * @summary ReportingType
 * @description
 *
 * immediate, periodic, or count (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
type ReportingType = _enum_for_ReportingType;

/**
 * @summary ReportingType
 * @description
 *
 * immediate, periodic, or count (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingType  ::=  ENUMERATED
 * {    immediate            (0),
 *     periodic            (1),
 *     count                (2) }
 * ```
 * 
 * @enum {number}
 */
export
const ReportingType = _enum_for_ReportingType;

/**
 * @summary ReportingType_immediate
 * @description
 *
 * Report whenever collected (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const ReportingType_immediate: ReportingType = ReportingType.immediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate
 * @description
 *
 * Report each time location is collected (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const immediate: ReportingType = ReportingType.immediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingType_periodic
 * @description
 *
 * Report every reportingInterval seconds (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const ReportingType_periodic: ReportingType = ReportingType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @description
 *
 * Collect or report at the configured interval (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const periodic: ReportingType = ReportingType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingType_count
 * @description
 *
 * Report after reportingCount collections (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const ReportingType_count: ReportingType = ReportingType.count; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count
 * @description
 *
 * Report after reportingCount collections (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const count: ReportingType = ReportingType.count; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportingType: $.ASN1Decoder<ReportingType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingType (el: _Element): ReportingType {
    if (!_cached_decoder_for_ReportingType) { _cached_decoder_for_ReportingType = $._decodeEnumerated; }
    return _cached_decoder_for_ReportingType(el);
}

let _cached_encoder_for_ReportingType: $.ASN1Encoder<ReportingType> | null = null;

/**
 * @summary Encodes a(n) ReportingType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingType, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingType (value: ReportingType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingType) { _cached_encoder_for_ReportingType = $._encodeEnumerated; }
    return _cached_encoder_for_ReportingType(value, elGetter);
}


/* eslint-enable */
