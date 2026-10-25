/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectPDU_rejectReason_pdu_error
 * @description
 *
 * Reject codes when the PDU is not a syntactically valid MMSpdu or is illegally
 * mapped to ACSE (ISO 9506-1:2003 §8.6.1.4.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-pdu-error ::= INTEGER {
 *     unknown-pdu-type (0),
 *     invalid-pdu (1),
 *     illegal-acse-mapping (2)
 * }
 * ```
 */
export
type RejectPDU_rejectReason_pdu_error = INTEGER;

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @description
 *
 * PDU type not recognized or not supported (ISO 9506-1:2003 §8.6.1.4.5.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_unknown_pdu_type: 0 = 0 satisfies RejectPDU_rejectReason_pdu_error; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @description
 *
 * PDU type not recognized or not supported (ISO 9506-1:2003 §8.6.1.4.5.1).
 * @constant
 * @type {number}
 */
export
const unknown_pdu_type: 0 = RejectPDU_rejectReason_pdu_error_unknown_pdu_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @description
 *
 * PDU is syntactically incorrect; further diagnostics cannot be given
 * (ISO 9506-1:2003 §8.6.1.4.5.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_invalid_pdu: 1 = 1 satisfies RejectPDU_rejectReason_pdu_error; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @description
 *
 * PDU is syntactically incorrect; further diagnostics cannot be given
 * (ISO 9506-1:2003 §8.6.1.4.5.2).
 * @constant
 * @type {number}
 */
export
const invalid_pdu: 1 = RejectPDU_rejectReason_pdu_error_invalid_pdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @description
 *
 * PDU type is not properly mapped to an ACSE service primitive (ISO 9506-1:2003
 * §8.6.1.4.5.3).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_illegal_acse_mapping: 2 = 2 satisfies RejectPDU_rejectReason_pdu_error; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @description
 *
 * PDU type is not properly mapped to an ACSE service primitive (ISO 9506-1:2003
 * §8.6.1.4.5.3).
 * @constant
 * @type {number}
 */
export
const illegal_acse_mapping: 2 = RejectPDU_rejectReason_pdu_error_illegal_acse_mapping; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_pdu_error: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_pdu_error: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
