/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_S8HRMessageCause {
    bearerActivated = 1,
    bearerModified = 2,
    bearerDeleted = 3,
    pDNDisconnected = 4,
    updatedLocationAvailable = 5,
    sGWChanged = 6,
    other = 7,
    hRLIEnabled = 8,
}

/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type S8HRMessageCause = _enum_for_S8HRMessageCause;

/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const S8HRMessageCause = _enum_for_S8HRMessageCause;

/**
 * @summary S8HRMessageCause_bearerActivated
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerActivated: S8HRMessageCause = S8HRMessageCause.bearerActivated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerActivated
 * @constant
 * @type {number}
 */
export
const bearerActivated: S8HRMessageCause = S8HRMessageCause.bearerActivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_bearerModified
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerModified: S8HRMessageCause = S8HRMessageCause.bearerModified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerModified
 * @constant
 * @type {number}
 */
export
const bearerModified: S8HRMessageCause = S8HRMessageCause.bearerModified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_bearerDeleted
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerDeleted: S8HRMessageCause = S8HRMessageCause.bearerDeleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerDeleted
 * @constant
 * @type {number}
 */
export
const bearerDeleted: S8HRMessageCause = S8HRMessageCause.bearerDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_pDNDisconnected
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_pDNDisconnected: S8HRMessageCause = S8HRMessageCause.pDNDisconnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNDisconnected
 * @constant
 * @type {number}
 */
export
const pDNDisconnected: S8HRMessageCause = S8HRMessageCause.pDNDisconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_updatedLocationAvailable: S8HRMessageCause = S8HRMessageCause.updatedLocationAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const updatedLocationAvailable: S8HRMessageCause = S8HRMessageCause.updatedLocationAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_sGWChanged
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_sGWChanged: S8HRMessageCause = S8HRMessageCause.sGWChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGWChanged
 * @constant
 * @type {number}
 */
export
const sGWChanged: S8HRMessageCause = S8HRMessageCause.sGWChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_other
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_other: S8HRMessageCause = S8HRMessageCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: S8HRMessageCause = S8HRMessageCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_hRLIEnabled
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_hRLIEnabled: S8HRMessageCause = S8HRMessageCause.hRLIEnabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hRLIEnabled
 * @constant
 * @type {number}
 */
export
const hRLIEnabled: S8HRMessageCause = S8HRMessageCause.hRLIEnabled; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_S8HRMessageCause: $.ASN1Decoder<S8HRMessageCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) S8HRMessageCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_S8HRMessageCause (el: _Element): S8HRMessageCause {
    if (!_cached_decoder_for_S8HRMessageCause) { _cached_decoder_for_S8HRMessageCause = $._decodeEnumerated; }
    return _cached_decoder_for_S8HRMessageCause(el);
}

let _cached_encoder_for_S8HRMessageCause: $.ASN1Encoder<S8HRMessageCause> | null = null;

/**
 * @summary Encodes a(n) S8HRMessageCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The S8HRMessageCause, encoded as an ASN.1 Element.
 */
export
function _encode_S8HRMessageCause (value: S8HRMessageCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_S8HRMessageCause) { _cached_encoder_for_S8HRMessageCause = $._encodeEnumerated; }
    return _cached_encoder_for_S8HRMessageCause(value, elGetter);
}


/* eslint-enable */
