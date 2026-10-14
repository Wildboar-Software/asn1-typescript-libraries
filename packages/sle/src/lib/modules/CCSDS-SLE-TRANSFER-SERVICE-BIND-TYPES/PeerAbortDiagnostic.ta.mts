/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeerAbortDiagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerAbortDiagnostic            ::=     INTEGER
 * { accessDenied                   (0)
 * , unexpectedResponderId          (1)
 * , operationalRequirement         (2)
 * , protocolError                  (3)
 * , communicationsFailure          (4)
 * , encodingError                  (5)
 * , returnTimeout                  (6)
 * , endOfServiceProvisionPeriod    (7)
 * , unsolicitedInvokeId            (8)
 * , otherReason                    (127)
 * -- The range of this INTEGER shall be (0 .. 255).
 * -- (128 .. 255) is reserved for diagnostic codes
 * -- that are specific to the communications technology used.
 * }
 * ```
 */
export
type PeerAbortDiagnostic = INTEGER;

/**
 * @summary PeerAbortDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_accessDenied: PeerAbortDiagnostic = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: PeerAbortDiagnostic = PeerAbortDiagnostic_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unexpectedResponderId
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_unexpectedResponderId: PeerAbortDiagnostic = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unexpectedResponderId
 * @constant
 * @type {number}
 */
export
const unexpectedResponderId: PeerAbortDiagnostic = PeerAbortDiagnostic_unexpectedResponderId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_operationalRequirement
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_operationalRequirement: PeerAbortDiagnostic = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_operationalRequirement
 * @constant
 * @type {number}
 */
export
const operationalRequirement: PeerAbortDiagnostic = PeerAbortDiagnostic_operationalRequirement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_protocolError
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_protocolError: PeerAbortDiagnostic = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_protocolError
 * @constant
 * @type {number}
 */
export
const protocolError: PeerAbortDiagnostic = PeerAbortDiagnostic_protocolError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_communicationsFailure
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_communicationsFailure: PeerAbortDiagnostic = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_communicationsFailure
 * @constant
 * @type {number}
 */
export
const communicationsFailure: PeerAbortDiagnostic = PeerAbortDiagnostic_communicationsFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_encodingError
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_encodingError: PeerAbortDiagnostic = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_encodingError
 * @constant
 * @type {number}
 */
export
const encodingError: PeerAbortDiagnostic = PeerAbortDiagnostic_encodingError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_returnTimeout
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_returnTimeout: PeerAbortDiagnostic = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_returnTimeout
 * @constant
 * @type {number}
 */
export
const returnTimeout: PeerAbortDiagnostic = PeerAbortDiagnostic_returnTimeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_endOfServiceProvisionPeriod
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_endOfServiceProvisionPeriod: PeerAbortDiagnostic = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_endOfServiceProvisionPeriod
 * @constant
 * @type {number}
 */
export
const endOfServiceProvisionPeriod: PeerAbortDiagnostic = PeerAbortDiagnostic_endOfServiceProvisionPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unsolicitedInvokeId
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_unsolicitedInvokeId: PeerAbortDiagnostic = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unsolicitedInvokeId
 * @constant
 * @type {number}
 */
export
const unsolicitedInvokeId: PeerAbortDiagnostic = PeerAbortDiagnostic_unsolicitedInvokeId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_otherReason: PeerAbortDiagnostic = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_otherReason
 * @constant
 * @type {number}
 */
export
const otherReason: PeerAbortDiagnostic = PeerAbortDiagnostic_otherReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PeerAbortDiagnostic: $.ASN1Decoder<PeerAbortDiagnostic> = $._decodeInteger;
export const _encode_PeerAbortDiagnostic: $.ASN1Encoder<PeerAbortDiagnostic> = $._encodeInteger;


/* eslint-enable */
