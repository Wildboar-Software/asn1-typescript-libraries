/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 *
 * Default collectionType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_collectionTypeDefault ::= ENUMERATED {
 *     periodic (0),
 *     updatesOnly (1),
 *     periodicWithUpdates (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault {
    periodic = 0,
    updatesOnly = 1,
    periodicWithUpdates = 2,
}

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 *
 * Default collectionType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_collectionTypeDefault ::= ENUMERATED {
 *     periodic (0),
 *     updatesOnly (1),
 *     periodicWithUpdates (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GetLocationTrackingCapabilitiesResult_collectionTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @description
 *
 * Default collectionType (ECMA-269 §28.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationTrackingCapabilitiesResult_collectionTypeDefault ::= ENUMERATED {
 *     periodic (0),
 *     updatesOnly (1),
 *     periodicWithUpdates (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault = _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault;

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodic
 * @description
 *
 * periodic collection/reporting (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodic: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

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
const periodic: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_updatesOnly
 * @description
 *
 * updates-only collection (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_updatesOnly: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.updatesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatesOnly
 * @description
 *
 * updates-only collection (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const updatesOnly: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.updatesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodicWithUpdates
 * @description
 *
 * periodic-with-updates collection (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodicWithUpdates: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodicWithUpdates; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodicWithUpdates
 * @description
 *
 * periodic-with-updates collection (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const periodicWithUpdates: GetLocationTrackingCapabilitiesResult_collectionTypeDefault = GetLocationTrackingCapabilitiesResult_collectionTypeDefault.periodicWithUpdates; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault: $.ASN1Decoder<GetLocationTrackingCapabilitiesResult_collectionTypeDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationTrackingCapabilitiesResult_collectionTypeDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault (el: _Element): GetLocationTrackingCapabilitiesResult_collectionTypeDefault {
    if (!_cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault) { _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault = $._decodeEnumerated; }
    return _cached_decoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(el);
}

let _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault: $.ASN1Encoder<GetLocationTrackingCapabilitiesResult_collectionTypeDefault> | null = null;

/**
 * @summary Encodes a(n) GetLocationTrackingCapabilitiesResult_collectionTypeDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationTrackingCapabilitiesResult_collectionTypeDefault, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault (value: GetLocationTrackingCapabilitiesResult_collectionTypeDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault) { _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault = $._encodeEnumerated; }
    return _cached_encoder_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault(value, elGetter);
}


/* eslint-enable */
