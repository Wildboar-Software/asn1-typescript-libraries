/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NEFFailureCause {
    userUnknown = 1,
    niddConfigurationNotAvailable = 2,
    contextNotFound = 3,
    portNotFree = 4,
    portNotAssociatedWithSpecifiedApplication = 5,
}

/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NEFFailureCause = _enum_for_NEFFailureCause;

/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NEFFailureCause = _enum_for_NEFFailureCause;

/**
 * @summary NEFFailureCause_userUnknown
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_userUnknown: NEFFailureCause = NEFFailureCause.userUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userUnknown
 * @constant
 * @type {number}
 */
export
const userUnknown: NEFFailureCause = NEFFailureCause.userUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_niddConfigurationNotAvailable: NEFFailureCause = NEFFailureCause.niddConfigurationNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const niddConfigurationNotAvailable: NEFFailureCause = NEFFailureCause.niddConfigurationNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_contextNotFound
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_contextNotFound: NEFFailureCause = NEFFailureCause.contextNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contextNotFound
 * @constant
 * @type {number}
 */
export
const contextNotFound: NEFFailureCause = NEFFailureCause.contextNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_portNotFree
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_portNotFree: NEFFailureCause = NEFFailureCause.portNotFree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotFree
 * @constant
 * @type {number}
 */
export
const portNotFree: NEFFailureCause = NEFFailureCause.portNotFree; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_portNotAssociatedWithSpecifiedApplication: NEFFailureCause = NEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const portNotAssociatedWithSpecifiedApplication: NEFFailureCause = NEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NEFFailureCause: $.ASN1Decoder<NEFFailureCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFFailureCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFFailureCause (el: _Element): NEFFailureCause {
    if (!_cached_decoder_for_NEFFailureCause) { _cached_decoder_for_NEFFailureCause = $._decodeEnumerated; }
    return _cached_decoder_for_NEFFailureCause(el);
}

let _cached_encoder_for_NEFFailureCause: $.ASN1Encoder<NEFFailureCause> | null = null;

/**
 * @summary Encodes a(n) NEFFailureCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFFailureCause, encoded as an ASN.1 Element.
 */
export
function _encode_NEFFailureCause (value: NEFFailureCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFFailureCause) { _cached_encoder_for_NEFFailureCause = $._encodeEnumerated; }
    return _cached_encoder_for_NEFFailureCause(value, elGetter);
}


/* eslint-enable */
