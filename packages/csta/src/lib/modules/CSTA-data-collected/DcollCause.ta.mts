/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DcollCause
 * @description
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
 * @constant
 * @type {number}
 */
export
const DcollCause_flushCharReceived: DcollCause = DcollCause.flushCharReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flushCharReceived
 * @constant
 * @type {number}
 */
export
const flushCharReceived: DcollCause = DcollCause.flushCharReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_charCountReached
 * @constant
 * @type {number}
 */
export
const DcollCause_charCountReached: DcollCause = DcollCause.charCountReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary charCountReached
 * @constant
 * @type {number}
 */
export
const charCountReached: DcollCause = DcollCause.charCountReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_timeout
 * @constant
 * @type {number}
 */
export
const DcollCause_timeout: DcollCause = DcollCause.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export
const timeout: DcollCause = DcollCause.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DcollCause_sfTerminated
 * @constant
 * @type {number}
 */
export
const DcollCause_sfTerminated: DcollCause = DcollCause.sfTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sfTerminated
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
