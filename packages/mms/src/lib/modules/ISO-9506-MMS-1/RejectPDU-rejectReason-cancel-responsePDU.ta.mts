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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-cancel-responsePDU ::= INTEGER {
 *     other (0),
 *     invalid-invokeID (1)
 * } (0..1)
 * ```
 */
export
type RejectPDU_rejectReason_cancel_responsePDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_cancel_responsePDU_other: RejectPDU_rejectReason_cancel_responsePDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_cancel_responsePDU = RejectPDU_rejectReason_cancel_responsePDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID: RejectPDU_rejectReason_cancel_responsePDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_cancel_responsePDU = RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_cancel_responsePDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_cancel_responsePDU = $._encodeInteger;


/* eslint-enable */
