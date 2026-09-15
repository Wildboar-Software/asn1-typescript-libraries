/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NetworkCapability_networkType
 * @description
 *
 * Type of network reached (ISDN/non-ISDN, public or private). ECMA-269 Network
 * Capabilities Changed.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapability_networkType ::= ENUMERATED {
 *     iSDNPublic (0),
 *     nonISDNPublic (1),
 *     iSDNPrivate (2),
 *     nonISDNPrivate (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NetworkCapability_networkType {
    iSDNPublic = 0,
    nonISDNPublic = 1,
    iSDNPrivate = 2,
    nonISDNPrivate = 3,
    other = 4,
}

/**
 * @summary NetworkCapability_networkType
 * @description
 *
 * Type of network reached (ISDN/non-ISDN, public or private). ECMA-269 Network
 * Capabilities Changed.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapability_networkType ::= ENUMERATED {
 *     iSDNPublic (0),
 *     nonISDNPublic (1),
 *     iSDNPrivate (2),
 *     nonISDNPrivate (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NetworkCapability_networkType = _enum_for_NetworkCapability_networkType;

/**
 * @summary NetworkCapability_networkType
 * @description
 *
 * Type of network reached (ISDN/non-ISDN, public or private). ECMA-269 Network
 * Capabilities Changed.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapability_networkType ::= ENUMERATED {
 *     iSDNPublic (0),
 *     nonISDNPublic (1),
 *     iSDNPrivate (2),
 *     nonISDNPrivate (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NetworkCapability_networkType = _enum_for_NetworkCapability_networkType;

/**
 * @summary NetworkCapability_networkType_iSDNPublic
 * @description
 *
 * ISDN public network. ECMA-269 Network Capabilities Changed.
 *
 * @constant
 * @type {number}
 */
export
const NetworkCapability_networkType_iSDNPublic: NetworkCapability_networkType = NetworkCapability_networkType.iSDNPublic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iSDNPublic
 * @constant
 * @type {number}
 */
export
const iSDNPublic: NetworkCapability_networkType = NetworkCapability_networkType.iSDNPublic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkCapability_networkType_nonISDNPublic
 * @description
 *
 * Non-ISDN public network. ECMA-269 Network Capabilities Changed.
 *
 * @constant
 * @type {number}
 */
export
const NetworkCapability_networkType_nonISDNPublic: NetworkCapability_networkType = NetworkCapability_networkType.nonISDNPublic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonISDNPublic
 * @constant
 * @type {number}
 */
export
const nonISDNPublic: NetworkCapability_networkType = NetworkCapability_networkType.nonISDNPublic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkCapability_networkType_iSDNPrivate
 * @description
 *
 * ISDN private network. ECMA-269 Network Capabilities Changed.
 *
 * @constant
 * @type {number}
 */
export
const NetworkCapability_networkType_iSDNPrivate: NetworkCapability_networkType = NetworkCapability_networkType.iSDNPrivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iSDNPrivate
 * @constant
 * @type {number}
 */
export
const iSDNPrivate: NetworkCapability_networkType = NetworkCapability_networkType.iSDNPrivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkCapability_networkType_nonISDNPrivate
 * @description
 *
 * Non-ISDN private network. ECMA-269 Network Capabilities Changed.
 *
 * @constant
 * @type {number}
 */
export
const NetworkCapability_networkType_nonISDNPrivate: NetworkCapability_networkType = NetworkCapability_networkType.nonISDNPrivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonISDNPrivate
 * @constant
 * @type {number}
 */
export
const nonISDNPrivate: NetworkCapability_networkType = NetworkCapability_networkType.nonISDNPrivate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkCapability_networkType_other
 * @description
 *
 * Other network type. ECMA-269 Network Capabilities Changed.
 *
 * @constant
 * @type {number}
 */
export
const NetworkCapability_networkType_other: NetworkCapability_networkType = NetworkCapability_networkType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: NetworkCapability_networkType = NetworkCapability_networkType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NetworkCapability_networkType: $.ASN1Decoder<NetworkCapability_networkType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapability_networkType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapability_networkType (el: _Element): NetworkCapability_networkType {
    if (!_cached_decoder_for_NetworkCapability_networkType) { _cached_decoder_for_NetworkCapability_networkType = $._decodeEnumerated; }
    return _cached_decoder_for_NetworkCapability_networkType(el);
}

let _cached_encoder_for_NetworkCapability_networkType: $.ASN1Encoder<NetworkCapability_networkType> | null = null;

/**
 * @summary Encodes a(n) NetworkCapability_networkType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapability_networkType, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapability_networkType (value: NetworkCapability_networkType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapability_networkType) { _cached_encoder_for_NetworkCapability_networkType = $._encodeEnumerated; }
    return _cached_encoder_for_NetworkCapability_networkType(value, elGetter);
}


/* eslint-enable */
