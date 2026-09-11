/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CollectionType
 * @description
 *
 * periodic, updatesOnly, or periodicWithUpdates (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CollectionType {
    periodic = 0,
    periodicWithUpdates = 1,
    updatesOnly = 2,
}

/**
 * @summary CollectionType
 * @description
 *
 * periodic, updatesOnly, or periodicWithUpdates (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
type CollectionType = _enum_for_CollectionType;

/**
 * @summary CollectionType
 * @description
 *
 * periodic, updatesOnly, or periodicWithUpdates (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionType  ::=  ENUMERATED
 * {    periodic            (0),
 *     periodicWithUpdates        (1),
 *     updatesOnly            (2) }
 * ```
 * 
 * @enum {number}
 */
export
const CollectionType = _enum_for_CollectionType;

/**
 * @summary CollectionType_periodic
 * @description
 *
 * Collect at collectionInterval (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const CollectionType_periodic: CollectionType = CollectionType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

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
const periodic: CollectionType = CollectionType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CollectionType_periodicWithUpdates
 * @description
 *
 * Collect on updates, else at collectionInterval (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const CollectionType_periodicWithUpdates: CollectionType = CollectionType.periodicWithUpdates; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodicWithUpdates
 * @description
 *
 * Collect on filter updates, or at collectionInterval if nothing changed
 * (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const periodicWithUpdates: CollectionType = CollectionType.periodicWithUpdates; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CollectionType_updatesOnly
 * @description
 *
 * Collect only on change subject to collectionFilter (ECMA-269 §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const CollectionType_updatesOnly: CollectionType = CollectionType.updatesOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatesOnly
 * @description
 *
 * Collect only when location changes, subject to collectionFilter (ECMA-269
 * §28.1.7.1).
 *
 * @constant
 * @type {number}
 */
export
const updatesOnly: CollectionType = CollectionType.updatesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CollectionType: $.ASN1Decoder<CollectionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectionType (el: _Element): CollectionType {
    if (!_cached_decoder_for_CollectionType) { _cached_decoder_for_CollectionType = $._decodeEnumerated; }
    return _cached_decoder_for_CollectionType(el);
}

let _cached_encoder_for_CollectionType: $.ASN1Encoder<CollectionType> | null = null;

/**
 * @summary Encodes a(n) CollectionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectionType, encoded as an ASN.1 Element.
 */
export
function _encode_CollectionType (value: CollectionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectionType) { _cached_encoder_for_CollectionType = $._encodeEnumerated; }
    return _cached_encoder_for_CollectionType(value, elGetter);
}


/* eslint-enable */
