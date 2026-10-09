/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CloseReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CloseReason  ::=  [211] IMPLICIT INTEGER{
 *     finished            (0),
 *     shutdown            (1),
 *     systemProblem       (2),
 *     costLimit           (3),
 *     resources           (4),
 *     securityViolation   (5),
 *     protocolError       (6),
 *     lackOfActivity      (7),
 *     responseToPeer      (8),
 *     unspecified         (9)
 * }
 * ```
 */
export
type CloseReason = INTEGER;

/**
 * @summary CloseReason_finished
 * @constant
 * @type {number}
 */
export
const CloseReason_finished: CloseReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_finished
 * @constant
 * @type {number}
 */
export
const finished: CloseReason = CloseReason_finished; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_shutdown
 * @constant
 * @type {number}
 */
export
const CloseReason_shutdown: CloseReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_shutdown
 * @constant
 * @type {number}
 */
export
const shutdown: CloseReason = CloseReason_shutdown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_systemProblem
 * @constant
 * @type {number}
 */
export
const CloseReason_systemProblem: CloseReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_systemProblem
 * @constant
 * @type {number}
 */
export
const systemProblem: CloseReason = CloseReason_systemProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_costLimit
 * @constant
 * @type {number}
 */
export
const CloseReason_costLimit: CloseReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_costLimit
 * @constant
 * @type {number}
 */
export
const costLimit: CloseReason = CloseReason_costLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_resources
 * @constant
 * @type {number}
 */
export
const CloseReason_resources: CloseReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_resources
 * @constant
 * @type {number}
 */
export
const resources: CloseReason = CloseReason_resources; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_securityViolation
 * @constant
 * @type {number}
 */
export
const CloseReason_securityViolation: CloseReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_securityViolation
 * @constant
 * @type {number}
 */
export
const securityViolation: CloseReason = CloseReason_securityViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_protocolError
 * @constant
 * @type {number}
 */
export
const CloseReason_protocolError: CloseReason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_protocolError
 * @constant
 * @type {number}
 */
export
const protocolError: CloseReason = CloseReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_lackOfActivity
 * @constant
 * @type {number}
 */
export
const CloseReason_lackOfActivity: CloseReason = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_lackOfActivity
 * @constant
 * @type {number}
 */
export
const lackOfActivity: CloseReason = CloseReason_lackOfActivity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_responseToPeer
 * @constant
 * @type {number}
 */
export
const CloseReason_responseToPeer: CloseReason = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_responseToPeer
 * @constant
 * @type {number}
 */
export
const responseToPeer: CloseReason = CloseReason_responseToPeer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_unspecified
 * @constant
 * @type {number}
 */
export
const CloseReason_unspecified: CloseReason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CloseReason = CloseReason_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CloseReason: $.ASN1Decoder<CloseReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CloseReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CloseReason (el: _Element): CloseReason {
    if (!_cached_decoder_for_CloseReason) { _cached_decoder_for_CloseReason = $._decode_implicit<CloseReason>(() => $._decodeInteger); }
    return _cached_decoder_for_CloseReason(el);
}

let _cached_encoder_for_CloseReason: $.ASN1Encoder<CloseReason> | null = null;

/**
 * @summary Encodes a(n) CloseReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CloseReason, encoded as an ASN.1 Element.
 */
export
function _encode_CloseReason (value: CloseReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CloseReason) { _cached_encoder_for_CloseReason = $._encode_implicit(_TagClass.context, 211, () => $._encode_implicit(_TagClass.context, 211, () => $._encodeInteger, $.BER), $.BER); }
    return _cached_encoder_for_CloseReason(value, elGetter);
}


/* eslint-enable */
