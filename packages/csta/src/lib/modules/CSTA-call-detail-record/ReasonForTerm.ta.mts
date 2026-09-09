/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReasonForTerm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForTerm  ::=  ENUMERATED
 * {     normalClearing                 (0),
 *     unsuccessfulCallAttempt         (1),
 *     abnormalTermination             (2),
 *     callTransferred             (3),
 *     other                     (4) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReasonForTerm {
    normalClearing = 0,
    unsuccessfulCallAttempt = 1,
    abnormalTermination = 2,
    callTransferred = 3,
    other = 4,
}

/**
 * @summary ReasonForTerm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForTerm  ::=  ENUMERATED
 * {     normalClearing                 (0),
 *     unsuccessfulCallAttempt         (1),
 *     abnormalTermination             (2),
 *     callTransferred             (3),
 *     other                     (4) }
 * ```
 * 
 * @enum {number}
 */
export
type ReasonForTerm = _enum_for_ReasonForTerm;

/**
 * @summary ReasonForTerm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonForTerm  ::=  ENUMERATED
 * {     normalClearing                 (0),
 *     unsuccessfulCallAttempt         (1),
 *     abnormalTermination             (2),
 *     callTransferred             (3),
 *     other                     (4) }
 * ```
 * 
 * @enum {number}
 */
export
const ReasonForTerm = _enum_for_ReasonForTerm;

/**
 * @summary ReasonForTerm_normalClearing
 * @constant
 * @type {number}
 */
export
const ReasonForTerm_normalClearing: ReasonForTerm = ReasonForTerm.normalClearing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalClearing
 * @constant
 * @type {number}
 */
export
const normalClearing: ReasonForTerm = ReasonForTerm.normalClearing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForTerm_unsuccessfulCallAttempt
 * @constant
 * @type {number}
 */
export
const ReasonForTerm_unsuccessfulCallAttempt: ReasonForTerm = ReasonForTerm.unsuccessfulCallAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccessfulCallAttempt
 * @constant
 * @type {number}
 */
export
const unsuccessfulCallAttempt: ReasonForTerm = ReasonForTerm.unsuccessfulCallAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForTerm_abnormalTermination
 * @constant
 * @type {number}
 */
export
const ReasonForTerm_abnormalTermination: ReasonForTerm = ReasonForTerm.abnormalTermination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalTermination
 * @constant
 * @type {number}
 */
export
const abnormalTermination: ReasonForTerm = ReasonForTerm.abnormalTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForTerm_callTransferred
 * @constant
 * @type {number}
 */
export
const ReasonForTerm_callTransferred: ReasonForTerm = ReasonForTerm.callTransferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTransferred
 * @constant
 * @type {number}
 */
export
const callTransferred: ReasonForTerm = ReasonForTerm.callTransferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReasonForTerm_other
 * @constant
 * @type {number}
 */
export
const ReasonForTerm_other: ReasonForTerm = ReasonForTerm.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: ReasonForTerm = ReasonForTerm.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReasonForTerm: $.ASN1Decoder<ReasonForTerm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReasonForTerm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReasonForTerm (el: _Element): ReasonForTerm {
    if (!_cached_decoder_for_ReasonForTerm) { _cached_decoder_for_ReasonForTerm = $._decodeEnumerated; }
    return _cached_decoder_for_ReasonForTerm(el);
}

let _cached_encoder_for_ReasonForTerm: $.ASN1Encoder<ReasonForTerm> | null = null;

/**
 * @summary Encodes a(n) ReasonForTerm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReasonForTerm, encoded as an ASN.1 Element.
 */
export
function _encode_ReasonForTerm (value: ReasonForTerm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReasonForTerm) { _cached_encoder_for_ReasonForTerm = $._encodeEnumerated; }
    return _cached_encoder_for_ReasonForTerm(value, elGetter);
}


/* eslint-enable */
