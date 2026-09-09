/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AppearanceType {
    selectedStandard = 0,
    basicStandard = 1,
    basicBridged = 2,
    exclusiveBridged = 3,
    independentSharedBridged = 4,
    interdependentSharedBridged = 5,
}

/**
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
type AppearanceType = _enum_for_AppearanceType;

/**
 * @summary AppearanceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppearanceType  ::=  ENUMERATED
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interdependentSharedBridged         ( 5) }
 * ```
 * 
 * @enum {number}
 */
export
const AppearanceType = _enum_for_AppearanceType;

/**
 * @summary AppearanceType_selectedStandard
 * @constant
 * @type {number}
 */
export
const AppearanceType_selectedStandard: AppearanceType = AppearanceType.selectedStandard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedStandard
 * @constant
 * @type {number}
 */
export
const selectedStandard: AppearanceType = AppearanceType.selectedStandard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_basicStandard
 * @constant
 * @type {number}
 */
export
const AppearanceType_basicStandard: AppearanceType = AppearanceType.basicStandard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicStandard
 * @constant
 * @type {number}
 */
export
const basicStandard: AppearanceType = AppearanceType.basicStandard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_basicBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_basicBridged: AppearanceType = AppearanceType.basicBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicBridged
 * @constant
 * @type {number}
 */
export
const basicBridged: AppearanceType = AppearanceType.basicBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_exclusiveBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_exclusiveBridged: AppearanceType = AppearanceType.exclusiveBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary exclusiveBridged
 * @constant
 * @type {number}
 */
export
const exclusiveBridged: AppearanceType = AppearanceType.exclusiveBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_independentSharedBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_independentSharedBridged: AppearanceType = AppearanceType.independentSharedBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary independentSharedBridged
 * @constant
 * @type {number}
 */
export
const independentSharedBridged: AppearanceType = AppearanceType.independentSharedBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AppearanceType_interdependentSharedBridged
 * @constant
 * @type {number}
 */
export
const AppearanceType_interdependentSharedBridged: AppearanceType = AppearanceType.interdependentSharedBridged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interdependentSharedBridged
 * @constant
 * @type {number}
 */
export
const interdependentSharedBridged: AppearanceType = AppearanceType.interdependentSharedBridged; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AppearanceType: $.ASN1Decoder<AppearanceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AppearanceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AppearanceType (el: _Element): AppearanceType {
    if (!_cached_decoder_for_AppearanceType) { _cached_decoder_for_AppearanceType = $._decodeEnumerated; }
    return _cached_decoder_for_AppearanceType(el);
}

let _cached_encoder_for_AppearanceType: $.ASN1Encoder<AppearanceType> | null = null;

/**
 * @summary Encodes a(n) AppearanceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AppearanceType, encoded as an ASN.1 Element.
 */
export
function _encode_AppearanceType (value: AppearanceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AppearanceType) { _cached_encoder_for_AppearanceType = $._encodeEnumerated; }
    return _cached_encoder_for_AppearanceType(value, elGetter);
}


/* eslint-enable */
