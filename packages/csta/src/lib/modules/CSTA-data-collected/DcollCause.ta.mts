/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DcollCause
 * @description
 *
 * Why this Data Collected is sent (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DcollCause  ::=  ENUMERATED
 * {    flushCharReceived        ( 0),
 *     charCountReached        ( 1),
 *     timeout                ( 2),
 *     sfTerminated            ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DcollCause {
    flushCharReceived = 0,
    charCountReached = 1,
    timeout = 2,
    sfTerminated = 3,
}

/**
 * @summary DcollCause
 * @description
 *
 * Why this Data Collected is sent (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DcollCause  ::=  ENUMERATED
 * {    flushCharReceived        ( 0),
 *     charCountReached        ( 1),
 *     timeout                ( 2),
 *     sfTerminated            ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
type DcollCause = _enum_for_DcollCause;

/**
 * @summary DcollCause
 * @description
 *
 * Why this Data Collected is sent (ECMA-269 §25.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DcollCause  ::=  ENUMERATED
 * {    flushCharReceived        ( 0),
 *     charCountReached        ( 1),
 *     timeout                ( 2),
 *     sfTerminated            ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
const DcollCause = _enum_for_DcollCause;

/**
 * @summary DcollCause_flushCharReceived
 * @description
 *
 * Specified flush character received (digits only) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const DcollCause_flushCharReceived: DcollCause = DcollCause.flushCharReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flushCharReceived
 * @description
 *
 * Specified flush character received (digits only) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const flushCharReceived: DcollCause = DcollCause.flushCharReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_charCountReached
 * @description
 *
 * Specified character count reached (digits only) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const DcollCause_charCountReached: DcollCause = DcollCause.charCountReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary charCountReached
 * @description
 *
 * Specified character count reached (digits only) (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const charCountReached: DcollCause = DcollCause.charCountReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_timeout
 * @description
 *
 * A timeout occurred (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const DcollCause_timeout: DcollCause = DcollCause.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @description
 *
 * A timeout occurred (ECMA-269 §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const timeout: DcollCause = DcollCause.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_sfTerminated
 * @description
 *
 * Switching function ended collection before other conditions (ECMA-269
 * §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const DcollCause_sfTerminated: DcollCause = DcollCause.sfTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfTerminated
 * @description
 *
 * Switching function ended collection before other conditions (ECMA-269
 * §25.1.1.1).
 *
 * @constant
 * @type {number}
 */
export
const sfTerminated: DcollCause = DcollCause.sfTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DcollCause: $.ASN1Decoder<DcollCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DcollCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DcollCause (el: _Element): DcollCause {
    if (!_cached_decoder_for_DcollCause) { _cached_decoder_for_DcollCause = $._decodeEnumerated; }
    return _cached_decoder_for_DcollCause(el);
}

let _cached_encoder_for_DcollCause: $.ASN1Encoder<DcollCause> | null = null;

/**
 * @summary Encodes a(n) DcollCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DcollCause, encoded as an ASN.1 Element.
 */
export
function _encode_DcollCause (value: DcollCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DcollCause) { _cached_encoder_for_DcollCause = $._encodeEnumerated; }
    return _cached_encoder_for_DcollCause(value, elGetter);
}


/* eslint-enable */
