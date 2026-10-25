/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PeerAbortDiagnostic
 * @description
 * 
 * Why PEER-ABORT is being invoked. The integer range is 0 through 255. Numbers
 * 128 through 255 are reserved for diagnostics specific to the communications
 * technology. This book does not name those codes.
 * 
 * CCSDS 911.1-B-5, section 3.11.2.2 and annex A2.2.
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
 * @description
 * 
 * The responder-identifier in the BIND return is not known to the initiator.
 * For example, it does not match the authorized responder for any service
 * instance the initiator knows. The initiator does not attempt to authenticate
 * that return.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 4.1.6.4.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_accessDenied: PeerAbortDiagnostic = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_accessDenied
 * @description
 * 
 * The responder-identifier in the BIND return is unknown (CCSDS 911.1-B-5,
 * sections 3.11.2.2 and 4.1.6.4).
 * @constant
 * @type {number}
 */
export
const accessDenied: PeerAbortDiagnostic = PeerAbortDiagnostic_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unexpectedResponderId
 * @description
 * 
 * The responder-identifier in the BIND return does not match the authorized
 * responder for this service instance. Authentication succeeded, or was not
 * required for this responder.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 4.1.6.5.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_unexpectedResponderId: PeerAbortDiagnostic = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unexpectedResponderId
 * @description
 * 
 * The responder-identifier is not the authorized responder (CCSDS 911.1-B-5,
 * section 4.1.6.5).
 * @constant
 * @type {number}
 */
export
const unexpectedResponderId: PeerAbortDiagnostic = PeerAbortDiagnostic_unexpectedResponderId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_operationalRequirement
 * @description
 * 
 * The local system had to terminate the association to accommodate some other
 * operational need.
 * 
 * CCSDS 911.1-B-5, section 3.11.2.2.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_operationalRequirement: PeerAbortDiagnostic = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_operationalRequirement
 * @description
 * 
 * The local system terminated the association for another operational need
 * (CCSDS 911.1-B-5, section 3.11.2.2).
 * @constant
 * @type {number}
 */
export
const operationalRequirement: PeerAbortDiagnostic = PeerAbortDiagnostic_operationalRequirement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_protocolError
 * @description
 * 
 * The local application detected an error in the sequencing of operations. An
 * operation that is not allowed in the current state produces this diagnostic.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 4.1.1.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_protocolError: PeerAbortDiagnostic = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_protocolError
 * @description
 * 
 * An operation is out of sequence for the current state (CCSDS 911.1-B-5,
 * sections 3.11.2.2 and 4.1.1).
 * @constant
 * @type {number}
 */
export
const protocolError: PeerAbortDiagnostic = PeerAbortDiagnostic_protocolError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_communicationsFailure
 * @description
 * 
 * The communications service on the other side of a gateway was disrupted. This
 * diagnostic applies when the SLE applications communicate via a gateway.
 * 
 * CCSDS 911.1-B-5, section 3.11.2.2.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_communicationsFailure: PeerAbortDiagnostic = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_communicationsFailure
 * @description
 * 
 * The communications service beyond a gateway was disrupted (CCSDS 911.1-B-5,
 * section 3.11.2.2).
 * @constant
 * @type {number}
 */
export
const communicationsFailure: PeerAbortDiagnostic = PeerAbortDiagnostic_communicationsFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_encodingError
 * @description
 * 
 * The local application found an encoding error in one or more parameters, or
 * did not recognize the operation. An unrecognized operation type, a parameter
 * of the wrong type, or a PDU that cannot be decoded produces this diagnostic.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 4.1.2.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_encodingError: PeerAbortDiagnostic = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_encodingError
 * @description
 * 
 * A parameter or operation encoding was not recognized (CCSDS 911.1-B-5,
 * sections 3.11.2.2 and 4.1.2).
 * @constant
 * @type {number}
 */
export
const encodingError: PeerAbortDiagnostic = PeerAbortDiagnostic_encodingError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_returnTimeout
 * @description
 * 
 * The return from a confirmed operation was not received within the timeout set
 * by service management. An incorrect responder-port-identifier generally fails
 * with no BIND return and produces this diagnostic on the invoker.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2, 4.1.3, and 3.2.2.6.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_returnTimeout: PeerAbortDiagnostic = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_returnTimeout
 * @description
 * 
 * A confirmed-operation return missed the timeout (CCSDS 911.1-B-5, sections
 * 3.11.2.2 and 4.1.3).
 * @constant
 * @type {number}
 */
export
const returnTimeout: PeerAbortDiagnostic = PeerAbortDiagnostic_returnTimeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_endOfServiceProvisionPeriod
 * @description
 * 
 * The service instance provision period has ended and the initiator has not
 * invoked UNBIND.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 1.6.1.8.13.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_endOfServiceProvisionPeriod: PeerAbortDiagnostic = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_endOfServiceProvisionPeriod
 * @description
 * 
 * The provision period ended with no UNBIND (CCSDS 911.1-B-5, section
 * 3.11.2.2).
 * @constant
 * @type {number}
 */
export
const endOfServiceProvisionPeriod: PeerAbortDiagnostic = PeerAbortDiagnostic_endOfServiceProvisionPeriod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unsolicitedInvokeId
 * @description
 * 
 * A return carried an invoke-ID that does not match any operation for which a
 * return is still pending.
 * 
 * CCSDS 911.1-B-5, sections 3.11.2.2 and 4.1.4.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_unsolicitedInvokeId: PeerAbortDiagnostic = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_unsolicitedInvokeId
 * @description
 * 
 * A return invoke-ID matches no pending operation (CCSDS 911.1-B-5, sections
 * 3.11.2.2 and 4.1.4).
 * @constant
 * @type {number}
 */
export
const unsolicitedInvokeId: PeerAbortDiagnostic = PeerAbortDiagnostic_unsolicitedInvokeId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_otherReason
 * @description
 * 
 * The local application detected an unspecified error while processing one or
 * more operations.
 * 
 * CCSDS 911.1-B-5, section 3.11.2.2.
 * @constant
 * @type {number}
 */
export
const PeerAbortDiagnostic_otherReason: PeerAbortDiagnostic = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PeerAbortDiagnostic_otherReason
 * @description
 * 
 * An unspecified error occurred while processing operations (CCSDS 911.1-B-5,
 * section 3.11.2.2).
 * @constant
 * @type {number}
 */
export
const otherReason: PeerAbortDiagnostic = PeerAbortDiagnostic_otherReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PeerAbortDiagnostic: $.ASN1Decoder<PeerAbortDiagnostic> = $._decodeInteger;
export const _encode_PeerAbortDiagnostic: $.ASN1Encoder<PeerAbortDiagnostic> = $._encodeInteger;


/* eslint-enable */
