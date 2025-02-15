/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField */
/**
 * @summary NNUAMSDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUAMSDiagnosticField  ::=  INTEGER {
 *   -- This field may be used to further specify the error signalled in nn-ua-ms
 *   -- basic-code.
 *   -- Additional information may be indicated in nn-supplementary-information general
 *   -- diagnostic codes
 *   protocol-violation(1), -- used if the UA detects a protocol error
 *   edim-originator-unknown(2), edim-recipient-unknown(3),
 *   edim-recipient-ambiguous(4), -- used if the EDIM recipients or originator are
 *
 *   -- not valid
 *   action-request-not-supported(5), -- used when the action requested by the
 *
 *   -- recipient is not performed
 *   edim-expired(6), -- used when the expiry date of the received
 *
 *   -- EDIM occurred before the subject EDIM was
 *   -- successfully passed to the user or forwarded
 *   -- by the EDI-UA
 *   edim-obsoleted(7), -- used when the EDIM Identifier of the received
 *
 *   -- EDIM was contained in the Obsoleted EDIM
 *   -- field of a previously received EDIM
 *   duplicate-edim(8), -- used when the same EDIM is received more than
 *
 *   -- once from the same originator
 *   unsupported-extension(9), -- used if the EDIM contains an extension which
 *
 *   -- is not supported by the UA
 *   incomplete-copy-rejected(10), -- used if the EDI-UA does not accept EDIMs with
 *
 *   -- the Incomplete Copy Indication true
 *   edim-too-large-for-application(11), -- used if the EDIM cannot be delivered to the
 *
 *   -- user due to length constraints
 *   -- FORWARDING ERROR DIAGNOSTIC CODES
 *   forwarded-edim-not-delivered(12), -- used when an Non-Delivery Report is received
 *
 *   -- for forwarded EDIM
 *   forwarded-edim-delivery-time-out(13), -- used when no Delivery Report is received
 *
 *   -- within a given period
 *   forwarding-loop-detected(14), -- used if the UA receives an EDIM which
 *
 *   -- contains a previously forwarded EDIM
 *   unable-to-accept-responsibility(15), -- used if the EDI-UA cannot accept or forward
 *
 *   -- responsibility
 *   -- INTERCHANGE HEADER DIAGNOSTIC CODES
 *   interchange-sender-unknown(16), -- used when the UA does not recognize the
 *
 *   -- interchange-sender of the EDI interchange
 *   interchange-recipient-unknown(17), -- used when the UA cannot find a valid
 *
 *   -- interchange recipient in the Recipient
 *   -- Specifier
 *   invalid-heading-field(18), invalid-bodypart-type(19),
 *   invalid-message-type(20),
 *   invalid-syntax-id(21),
 *   -- SECURITY ERROR DIAGNOSTIC CODES
 *   message-integrity-failure(22), forwarded-message-integrity-failure(23),
 *   unsupported-algorithm(24), decryption-failed(25), token-error(26),
 *   unable-to-sign-notification(27), unable-to-sign-message-receipt(28),
 *   authentication-failure(29), security-context-failure(30),
 *   message-sequence-failure(31), message-security-labelling-failure(32),
 *   repudiation-failure(33), proof-service-failure(34),
 *   compression-unsupported(35)
 *  -- the received compression is not supported--}(1..ub-reason-code)
 * ```
 */
export type NNUAMSDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_protocol_violation */
/**
 * @summary NNUAMSDiagnosticField_protocol_violation
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_protocol_violation: NNUAMSDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_protocol_violation */

/* START_OF_SYMBOL_DEFINITION protocol_violation */
/**
 * @summary NNUAMSDiagnosticField_protocol_violation
 * @constant
 * @type {number}
 */
export const protocol_violation: NNUAMSDiagnosticField = NNUAMSDiagnosticField_protocol_violation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protocol_violation */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_originator_unknown */
/**
 * @summary NNUAMSDiagnosticField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_originator_unknown: NNUAMSDiagnosticField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_originator_unknown */

/* START_OF_SYMBOL_DEFINITION edim_originator_unknown */
/**
 * @summary NNUAMSDiagnosticField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const edim_originator_unknown: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_originator_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_originator_unknown */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_recipient_unknown */
/**
 * @summary NNUAMSDiagnosticField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_recipient_unknown: NNUAMSDiagnosticField = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION edim_recipient_unknown */
/**
 * @summary NNUAMSDiagnosticField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const edim_recipient_unknown: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_recipient_ambiguous */
/**
 * @summary NNUAMSDiagnosticField_edim_recipient_ambiguous
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_recipient_ambiguous: NNUAMSDiagnosticField = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_recipient_ambiguous */

/* START_OF_SYMBOL_DEFINITION edim_recipient_ambiguous */
/**
 * @summary NNUAMSDiagnosticField_edim_recipient_ambiguous
 * @constant
 * @type {number}
 */
export const edim_recipient_ambiguous: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_recipient_ambiguous; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_recipient_ambiguous */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_action_request_not_supported */
/**
 * @summary NNUAMSDiagnosticField_action_request_not_supported
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_action_request_not_supported: NNUAMSDiagnosticField = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_action_request_not_supported */

/* START_OF_SYMBOL_DEFINITION action_request_not_supported */
/**
 * @summary NNUAMSDiagnosticField_action_request_not_supported
 * @constant
 * @type {number}
 */
export const action_request_not_supported: NNUAMSDiagnosticField = NNUAMSDiagnosticField_action_request_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION action_request_not_supported */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_expired */
/**
 * @summary NNUAMSDiagnosticField_edim_expired
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_expired: NNUAMSDiagnosticField = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_expired */

/* START_OF_SYMBOL_DEFINITION edim_expired */
/**
 * @summary NNUAMSDiagnosticField_edim_expired
 * @constant
 * @type {number}
 */
export const edim_expired: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_expired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_expired */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_obsoleted */
/**
 * @summary NNUAMSDiagnosticField_edim_obsoleted
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_obsoleted: NNUAMSDiagnosticField = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_obsoleted */

/* START_OF_SYMBOL_DEFINITION edim_obsoleted */
/**
 * @summary NNUAMSDiagnosticField_edim_obsoleted
 * @constant
 * @type {number}
 */
export const edim_obsoleted: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_obsoleted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_obsoleted */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_duplicate_edim */
/**
 * @summary NNUAMSDiagnosticField_duplicate_edim
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_duplicate_edim: NNUAMSDiagnosticField = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_duplicate_edim */

/* START_OF_SYMBOL_DEFINITION duplicate_edim */
/**
 * @summary NNUAMSDiagnosticField_duplicate_edim
 * @constant
 * @type {number}
 */
export const duplicate_edim: NNUAMSDiagnosticField = NNUAMSDiagnosticField_duplicate_edim; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicate_edim */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unsupported_extension */
/**
 * @summary NNUAMSDiagnosticField_unsupported_extension
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_unsupported_extension: NNUAMSDiagnosticField = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unsupported_extension */

/* START_OF_SYMBOL_DEFINITION unsupported_extension */
/**
 * @summary NNUAMSDiagnosticField_unsupported_extension
 * @constant
 * @type {number}
 */
export const unsupported_extension: NNUAMSDiagnosticField = NNUAMSDiagnosticField_unsupported_extension; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_extension */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_incomplete_copy_rejected */
/**
 * @summary NNUAMSDiagnosticField_incomplete_copy_rejected
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_incomplete_copy_rejected: NNUAMSDiagnosticField = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_incomplete_copy_rejected */

/* START_OF_SYMBOL_DEFINITION incomplete_copy_rejected */
/**
 * @summary NNUAMSDiagnosticField_incomplete_copy_rejected
 * @constant
 * @type {number}
 */
export const incomplete_copy_rejected: NNUAMSDiagnosticField = NNUAMSDiagnosticField_incomplete_copy_rejected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION incomplete_copy_rejected */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_too_large_for_application */
/**
 * @summary NNUAMSDiagnosticField_edim_too_large_for_application
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_edim_too_large_for_application: NNUAMSDiagnosticField = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_edim_too_large_for_application */

/* START_OF_SYMBOL_DEFINITION edim_too_large_for_application */
/**
 * @summary NNUAMSDiagnosticField_edim_too_large_for_application
 * @constant
 * @type {number}
 */
export const edim_too_large_for_application: NNUAMSDiagnosticField = NNUAMSDiagnosticField_edim_too_large_for_application; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_too_large_for_application */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_edim_not_delivered */
/**
 * @summary NNUAMSDiagnosticField_forwarded_edim_not_delivered
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_forwarded_edim_not_delivered: NNUAMSDiagnosticField = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_edim_not_delivered */

/* START_OF_SYMBOL_DEFINITION forwarded_edim_not_delivered */
/**
 * @summary NNUAMSDiagnosticField_forwarded_edim_not_delivered
 * @constant
 * @type {number}
 */
export const forwarded_edim_not_delivered: NNUAMSDiagnosticField = NNUAMSDiagnosticField_forwarded_edim_not_delivered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_edim_not_delivered */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_edim_delivery_time_out */
/**
 * @summary NNUAMSDiagnosticField_forwarded_edim_delivery_time_out
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_forwarded_edim_delivery_time_out: NNUAMSDiagnosticField = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_edim_delivery_time_out */

/* START_OF_SYMBOL_DEFINITION forwarded_edim_delivery_time_out */
/**
 * @summary NNUAMSDiagnosticField_forwarded_edim_delivery_time_out
 * @constant
 * @type {number}
 */
export const forwarded_edim_delivery_time_out: NNUAMSDiagnosticField = NNUAMSDiagnosticField_forwarded_edim_delivery_time_out; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_edim_delivery_time_out */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarding_loop_detected */
/**
 * @summary NNUAMSDiagnosticField_forwarding_loop_detected
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_forwarding_loop_detected: NNUAMSDiagnosticField = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarding_loop_detected */

/* START_OF_SYMBOL_DEFINITION forwarding_loop_detected */
/**
 * @summary NNUAMSDiagnosticField_forwarding_loop_detected
 * @constant
 * @type {number}
 */
export const forwarding_loop_detected: NNUAMSDiagnosticField = NNUAMSDiagnosticField_forwarding_loop_detected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarding_loop_detected */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_accept_responsibility */
/**
 * @summary NNUAMSDiagnosticField_unable_to_accept_responsibility
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_unable_to_accept_responsibility: NNUAMSDiagnosticField = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_accept_responsibility */

/* START_OF_SYMBOL_DEFINITION unable_to_accept_responsibility */
/**
 * @summary NNUAMSDiagnosticField_unable_to_accept_responsibility
 * @constant
 * @type {number}
 */
export const unable_to_accept_responsibility: NNUAMSDiagnosticField = NNUAMSDiagnosticField_unable_to_accept_responsibility; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_accept_responsibility */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_interchange_sender_unknown */
/**
 * @summary NNUAMSDiagnosticField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_interchange_sender_unknown: NNUAMSDiagnosticField = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION interchange_sender_unknown */
/**
 * @summary NNUAMSDiagnosticField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown: NNUAMSDiagnosticField = NNUAMSDiagnosticField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_interchange_recipient_unknown */
/**
 * @summary NNUAMSDiagnosticField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_interchange_recipient_unknown: NNUAMSDiagnosticField = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_interchange_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION interchange_recipient_unknown */
/**
 * @summary NNUAMSDiagnosticField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const interchange_recipient_unknown: NNUAMSDiagnosticField = NNUAMSDiagnosticField_interchange_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interchange_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_heading_field */
/**
 * @summary NNUAMSDiagnosticField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_invalid_heading_field: NNUAMSDiagnosticField = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_heading_field */

/* START_OF_SYMBOL_DEFINITION invalid_heading_field */
/**
 * @summary NNUAMSDiagnosticField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const invalid_heading_field: NNUAMSDiagnosticField = NNUAMSDiagnosticField_invalid_heading_field; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_heading_field */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_bodypart_type */
/**
 * @summary NNUAMSDiagnosticField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_invalid_bodypart_type: NNUAMSDiagnosticField = 19; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_bodypart_type */

/* START_OF_SYMBOL_DEFINITION invalid_bodypart_type */
/**
 * @summary NNUAMSDiagnosticField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const invalid_bodypart_type: NNUAMSDiagnosticField = NNUAMSDiagnosticField_invalid_bodypart_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_bodypart_type */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_message_type */
/**
 * @summary NNUAMSDiagnosticField_invalid_message_type
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_invalid_message_type: NNUAMSDiagnosticField = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_message_type */

/* START_OF_SYMBOL_DEFINITION invalid_message_type */
/**
 * @summary NNUAMSDiagnosticField_invalid_message_type
 * @constant
 * @type {number}
 */
export const invalid_message_type: NNUAMSDiagnosticField = NNUAMSDiagnosticField_invalid_message_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_message_type */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_syntax_id */
/**
 * @summary NNUAMSDiagnosticField_invalid_syntax_id
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_invalid_syntax_id: NNUAMSDiagnosticField = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_invalid_syntax_id */

/* START_OF_SYMBOL_DEFINITION invalid_syntax_id */
/**
 * @summary NNUAMSDiagnosticField_invalid_syntax_id
 * @constant
 * @type {number}
 */
export const invalid_syntax_id: NNUAMSDiagnosticField = NNUAMSDiagnosticField_invalid_syntax_id; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_syntax_id */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_integrity_failure */
/**
 * @summary NNUAMSDiagnosticField_message_integrity_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_message_integrity_failure: NNUAMSDiagnosticField = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_integrity_failure */

/* START_OF_SYMBOL_DEFINITION message_integrity_failure */
/**
 * @summary NNUAMSDiagnosticField_message_integrity_failure
 * @constant
 * @type {number}
 */
export const message_integrity_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_message_integrity_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_integrity_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_message_integrity_failure */
/**
 * @summary NNUAMSDiagnosticField_forwarded_message_integrity_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_forwarded_message_integrity_failure: NNUAMSDiagnosticField = 23; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_forwarded_message_integrity_failure */

/* START_OF_SYMBOL_DEFINITION forwarded_message_integrity_failure */
/**
 * @summary NNUAMSDiagnosticField_forwarded_message_integrity_failure
 * @constant
 * @type {number}
 */
export const forwarded_message_integrity_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_forwarded_message_integrity_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_message_integrity_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unsupported_algorithm */
/**
 * @summary NNUAMSDiagnosticField_unsupported_algorithm
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_unsupported_algorithm: NNUAMSDiagnosticField = 24; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unsupported_algorithm */

/* START_OF_SYMBOL_DEFINITION unsupported_algorithm */
/**
 * @summary NNUAMSDiagnosticField_unsupported_algorithm
 * @constant
 * @type {number}
 */
export const unsupported_algorithm: NNUAMSDiagnosticField = NNUAMSDiagnosticField_unsupported_algorithm; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_algorithm */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_decryption_failed */
/**
 * @summary NNUAMSDiagnosticField_decryption_failed
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_decryption_failed: NNUAMSDiagnosticField = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_decryption_failed */

/* START_OF_SYMBOL_DEFINITION decryption_failed */
/**
 * @summary NNUAMSDiagnosticField_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed: NNUAMSDiagnosticField = NNUAMSDiagnosticField_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION decryption_failed */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_token_error */
/**
 * @summary NNUAMSDiagnosticField_token_error
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_token_error: NNUAMSDiagnosticField = 26; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_token_error */

/* START_OF_SYMBOL_DEFINITION token_error */
/**
 * @summary NNUAMSDiagnosticField_token_error
 * @constant
 * @type {number}
 */
export const token_error: NNUAMSDiagnosticField = NNUAMSDiagnosticField_token_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION token_error */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_sign_notification */
/**
 * @summary NNUAMSDiagnosticField_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_unable_to_sign_notification: NNUAMSDiagnosticField = 27; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_sign_notification */

/* START_OF_SYMBOL_DEFINITION unable_to_sign_notification */
/**
 * @summary NNUAMSDiagnosticField_unable_to_sign_notification
 * @constant
 * @type {number}
 */
export const unable_to_sign_notification: NNUAMSDiagnosticField = NNUAMSDiagnosticField_unable_to_sign_notification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_sign_notification */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_sign_message_receipt */
/**
 * @summary NNUAMSDiagnosticField_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_unable_to_sign_message_receipt: NNUAMSDiagnosticField = 28; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_unable_to_sign_message_receipt */

/* START_OF_SYMBOL_DEFINITION unable_to_sign_message_receipt */
/**
 * @summary NNUAMSDiagnosticField_unable_to_sign_message_receipt
 * @constant
 * @type {number}
 */
export const unable_to_sign_message_receipt: NNUAMSDiagnosticField = NNUAMSDiagnosticField_unable_to_sign_message_receipt; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unable_to_sign_message_receipt */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_authentication_failure */
/**
 * @summary NNUAMSDiagnosticField_authentication_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_authentication_failure: NNUAMSDiagnosticField = 29; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_authentication_failure */

/* START_OF_SYMBOL_DEFINITION authentication_failure */
/**
 * @summary NNUAMSDiagnosticField_authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_authentication_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_security_context_failure */
/**
 * @summary NNUAMSDiagnosticField_security_context_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_security_context_failure: NNUAMSDiagnosticField = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_security_context_failure */

/* START_OF_SYMBOL_DEFINITION security_context_failure */
/**
 * @summary NNUAMSDiagnosticField_security_context_failure
 * @constant
 * @type {number}
 */
export const security_context_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_security_context_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_context_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_sequence_failure */
/**
 * @summary NNUAMSDiagnosticField_message_sequence_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_message_sequence_failure: NNUAMSDiagnosticField = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_sequence_failure */

/* START_OF_SYMBOL_DEFINITION message_sequence_failure */
/**
 * @summary NNUAMSDiagnosticField_message_sequence_failure
 * @constant
 * @type {number}
 */
export const message_sequence_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_message_sequence_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_sequence_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_security_labelling_failure */
/**
 * @summary NNUAMSDiagnosticField_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_message_security_labelling_failure: NNUAMSDiagnosticField = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_message_security_labelling_failure */

/* START_OF_SYMBOL_DEFINITION message_security_labelling_failure */
/**
 * @summary NNUAMSDiagnosticField_message_security_labelling_failure
 * @constant
 * @type {number}
 */
export const message_security_labelling_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_message_security_labelling_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_security_labelling_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_repudiation_failure */
/**
 * @summary NNUAMSDiagnosticField_repudiation_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_repudiation_failure: NNUAMSDiagnosticField = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_repudiation_failure */

/* START_OF_SYMBOL_DEFINITION repudiation_failure */
/**
 * @summary NNUAMSDiagnosticField_repudiation_failure
 * @constant
 * @type {number}
 */
export const repudiation_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_repudiation_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION repudiation_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_proof_service_failure */
/**
 * @summary NNUAMSDiagnosticField_proof_service_failure
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_proof_service_failure: NNUAMSDiagnosticField = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_proof_service_failure */

/* START_OF_SYMBOL_DEFINITION proof_service_failure */
/**
 * @summary NNUAMSDiagnosticField_proof_service_failure
 * @constant
 * @type {number}
 */
export const proof_service_failure: NNUAMSDiagnosticField = NNUAMSDiagnosticField_proof_service_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION proof_service_failure */

/* START_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_compression_unsupported */
/**
 * @summary NNUAMSDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const NNUAMSDiagnosticField_compression_unsupported: NNUAMSDiagnosticField = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSDiagnosticField_compression_unsupported */

/* START_OF_SYMBOL_DEFINITION compression_unsupported */
/**
 * @summary NNUAMSDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const compression_unsupported: NNUAMSDiagnosticField = NNUAMSDiagnosticField_compression_unsupported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION compression_unsupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSDiagnosticField */
let _cached_decoder_for_NNUAMSDiagnosticField: $.ASN1Decoder<NNUAMSDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUAMSDiagnosticField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUAMSDiagnosticField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUAMSDiagnosticField} The decoded data structure.
 */
export function _decode_NNUAMSDiagnosticField(el: _Element) {
    if (!_cached_decoder_for_NNUAMSDiagnosticField) {
        _cached_decoder_for_NNUAMSDiagnosticField = $._decodeInteger;
    }
    return _cached_decoder_for_NNUAMSDiagnosticField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSDiagnosticField */
let _cached_encoder_for_NNUAMSDiagnosticField: $.ASN1Encoder<NNUAMSDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUAMSDiagnosticField */
/**
 * @summary Encodes a(n) NNUAMSDiagnosticField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUAMSDiagnosticField, encoded as an ASN.1 Element.
 */
export function _encode_NNUAMSDiagnosticField(
    value: NNUAMSDiagnosticField,
    elGetter: $.ASN1Encoder<NNUAMSDiagnosticField>
) {
    if (!_cached_encoder_for_NNUAMSDiagnosticField) {
        _cached_encoder_for_NNUAMSDiagnosticField = $._encodeInteger;
    }
    return _cached_encoder_for_NNUAMSDiagnosticField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUAMSDiagnosticField */

/* eslint-enable */
