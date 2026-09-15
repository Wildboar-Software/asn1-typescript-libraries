/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 *
 * Default reportingType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_reportingTypeDefault ::= ENUMERATED {
 *     immediate (0),
 *     periodic (1),
 *     count (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault {
    immediate = 0,
    periodic = 1,
    count = 2,
}

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 *
 * Default reportingType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_reportingTypeDefault ::= ENUMERATED {
 *     immediate (0),
 *     periodic (1),
 *     count (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GetLocationTrackingCapabilitiesResult_reportingTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @description
 *
 * Default reportingType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_reportingTypeDefault ::= ENUMERATED {
 *     immediate (0),
 *     periodic (1),
 *     count (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_immediate
 * @description
 *
 * immediate reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_immediate: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.immediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediate
 * @description
 *
 * immediate reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const immediate: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.immediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_periodic
 * @description
 *
 * periodic collection/reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_periodic: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @description
 *
 * periodic collection/reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const periodic: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_reportingTypeDefault_count
 * @description
 *
 * count reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_reportingTypeDefault_count: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.count; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary count
 * @description
 *
 * count reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const count: GetLocationTrackingCapabilitiesResult_reportingTypeDefault = GetLocationTrackingCapabilitiesResult_reportingTypeDefault.count; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult_reportingTypeDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult_reportingTypeDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault (el: _Element): GetLocationTrackingCapabilitiesResult_reportingTypeDefault {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault = $._decodeEnumerated; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult_reportingTypeDefault> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult_reportingTypeDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult_reportingTypeDefault, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault (value: GetLocationTrackingCapabilitiesResult_reportingTypeDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault = $._encodeEnumerated; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault(value, elGetter);
}


/* eslint-enable */
