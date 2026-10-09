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
 * Why the sender is closing the Z-association. The service lists
 * finished, shutdown, system problem, cost limits, resources,
 * security violation, protocol error, lack of activity, unspecified,
 * and response to a Close request. The standard does not define the
 * named reasons beyond those labels, except protocol error (§4.2)
 * and response to a Close request. Both request and response carry
 * this parameter. §3.2.11.1.1.
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
 * @description
 *
 * Value 0. The sender is closing because it is finished. The standard
 * lists this reason and does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_finished: CloseReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_finished
 * @description
 *
 * Short name for `CloseReason_finished`. Value 0: finished. The
 * standard does not define this reason further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const finished: CloseReason = CloseReason_finished; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_shutdown
 * @description
 *
 * Value 1. The sender is closing because of shutdown. The standard
 * lists this reason and does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_shutdown: CloseReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_shutdown
 * @description
 *
 * Short name for `CloseReason_shutdown`. Value 1: shutdown. The
 * standard does not define this reason further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const shutdown: CloseReason = CloseReason_shutdown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_systemProblem
 * @description
 *
 * Value 2. The sender is closing because of a system problem. The
 * standard lists this reason and does not define it further.
 * §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_systemProblem: CloseReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_systemProblem
 * @description
 *
 * Short name for `CloseReason_systemProblem`. Value 2: system
 * problem. The standard does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const systemProblem: CloseReason = CloseReason_systemProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_costLimit
 * @description
 *
 * Value 3. The sender is closing because of cost limits. The standard
 * lists this reason and does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_costLimit: CloseReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_costLimit
 * @description
 *
 * Short name for `CloseReason_costLimit`. Value 3: cost limits. The
 * standard does not define this reason further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const costLimit: CloseReason = CloseReason_costLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_resources
 * @description
 *
 * Value 4. The sender is closing because of resources. The standard
 * lists this reason and does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_resources: CloseReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_resources
 * @description
 *
 * Short name for `CloseReason_resources`. Value 4: resources. The
 * standard does not define this reason further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const resources: CloseReason = CloseReason_resources; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_securityViolation
 * @description
 *
 * Value 5. The sender is closing because of a security violation. The
 * standard lists this reason and does not define it further.
 * §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_securityViolation: CloseReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_securityViolation
 * @description
 *
 * Short name for `CloseReason_securityViolation`. Value 5: security
 * violation. The standard does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const securityViolation: CloseReason = CloseReason_securityViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_protocolError
 * @description
 *
 * Value 6. The sender detected a protocol error. When version 3 is in
 * force, Close with this reason is one of the actions the standard
 * allows; the receiver may instead drop the connection or ignore the
 * error. §3.2.11.1.1, §4.2.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_protocolError: CloseReason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_protocolError
 * @description
 *
 * Short name for `CloseReason_protocolError`. Value 6: protocol
 * error. One version-3 response to a protocol error. §3.2.11.1.1,
 * §4.2.
 *
 * @constant
 * @type {number}
 */
export
const protocolError: CloseReason = CloseReason_protocolError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_lackOfActivity
 * @description
 *
 * Value 7. The sender is closing because of lack of activity. The
 * standard lists this reason and does not define it further.
 * §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_lackOfActivity: CloseReason = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_lackOfActivity
 * @description
 *
 * Short name for `CloseReason_lackOfActivity`. Value 7: lack of
 * activity. The standard does not define it further. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const lackOfActivity: CloseReason = CloseReason_lackOfActivity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_responseToPeer
 * @description
 *
 * Value 8. "Response to Close request." Optional when this APDU is
 * sent as a Close response. If both sides send Close at once, each
 * peer message is taken as the response even when this value is not
 * used. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_responseToPeer: CloseReason = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_responseToPeer
 * @description
 *
 * Short name for `CloseReason_responseToPeer`. Value 8: this message
 * is a Close response. Optional. §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const responseToPeer: CloseReason = CloseReason_responseToPeer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_unspecified
 * @description
 *
 * Value 9. The sender is closing and does not give a specific reason.
 * The standard lists this value and does not define it further.
 * §3.2.11.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CloseReason_unspecified: CloseReason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CloseReason_unspecified
 * @description
 *
 * Short name for `CloseReason_unspecified`. Value 9: unspecified. The
 * standard does not define this reason further. §3.2.11.1.1.
 *
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
