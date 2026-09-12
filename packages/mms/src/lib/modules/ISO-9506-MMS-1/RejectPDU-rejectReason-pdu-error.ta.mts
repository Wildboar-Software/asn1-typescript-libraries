/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_unknown_pdu_type: RejectPDU_rejectReason_pdu_error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @constant
 * @type {number}
 */
export
const unknown_pdu_type: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_unknown_pdu_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_invalid_pdu: RejectPDU_rejectReason_pdu_error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const invalid_pdu: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_invalid_pdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_illegal_acse_mapping; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_pdu_error = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_pdu_error = $._encodeInteger;


/* eslint-enable */
