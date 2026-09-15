/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CDRTermReason
 * @description
 *
 * Why CDR transmission ended. ECMA-285 §9.11.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CDRTermReason {
    endOfDataDetected = 0,
    errorDetected = 1,
    thresholdReached = 2,
    other = 3,
}

/**
 * @summary CDRTermReason
 * @description
 *
 * Why CDR transmission ended. ECMA-285 §9.11.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
type CDRTermReason = _enum_for_CDRTermReason;

/**
 * @summary CDRTermReason
 * @description
 *
 * Why CDR transmission ended. ECMA-285 §9.11.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRTermReason  ::=  ENUMERATED
 * {     endOfDataDetected             (0),
 *     errorDetected                 (1),
 *     thresholdReached             (2),
 *     other                     (3) }
 * ```
 * 
 * @enum {number}
 */
export
const CDRTermReason = _enum_for_CDRTermReason;

/**
 * @summary CDRTermReason_endOfDataDetected
 * @description
 *
 * End of stored CDR data. ECMA-285 §9.11.
 *
 * @constant
 * @type {number}
 */
export
const CDRTermReason_endOfDataDetected: CDRTermReason = CDRTermReason.endOfDataDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfDataDetected
 * @constant
 * @type {number}
 */
export
const endOfDataDetected: CDRTermReason = CDRTermReason.endOfDataDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_errorDetected
 * @description
 *
 * An error ended transmission. ECMA-285 §9.11.
 *
 * @constant
 * @type {number}
 */
export
const CDRTermReason_errorDetected: CDRTermReason = CDRTermReason.errorDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorDetected
 * @constant
 * @type {number}
 */
export
const errorDetected: CDRTermReason = CDRTermReason.errorDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_thresholdReached
 * @description
 *
 * A threshold ended transmission. ECMA-285 §9.11.
 *
 * @constant
 * @type {number}
 */
export
const CDRTermReason_thresholdReached: CDRTermReason = CDRTermReason.thresholdReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thresholdReached
 * @constant
 * @type {number}
 */
export
const thresholdReached: CDRTermReason = CDRTermReason.thresholdReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CDRTermReason_other
 * @description
 *
 * Other termination reason. ECMA-285 §9.11.
 *
 * @constant
 * @type {number}
 */
export
const CDRTermReason_other: CDRTermReason = CDRTermReason.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: CDRTermReason = CDRTermReason.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CDRTermReason: $.ASN1Decoder<CDRTermReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRTermReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRTermReason (el: _Element): CDRTermReason {
    if (!_cached_decoder_for_CDRTermReason) { _cached_decoder_for_CDRTermReason = $._decodeEnumerated; }
    return _cached_decoder_for_CDRTermReason(el);
}

let _cached_encoder_for_CDRTermReason: $.ASN1Encoder<CDRTermReason> | null = null;

/**
 * @summary Encodes a(n) CDRTermReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRTermReason, encoded as an ASN.1 Element.
 */
export
function _encode_CDRTermReason (value: CDRTermReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRTermReason) { _cached_encoder_for_CDRTermReason = $._encodeEnumerated; }
    return _cached_encoder_for_CDRTermReason(value, elGetter);
}


/* eslint-enable */
