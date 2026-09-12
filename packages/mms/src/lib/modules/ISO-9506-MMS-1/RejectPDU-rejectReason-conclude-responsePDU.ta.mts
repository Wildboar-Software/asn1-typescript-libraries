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
 * @summary RejectPDU_rejectReason_conclude_responsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-conclude-responsePDU ::= INTEGER {
 *     other (0),
 *     invalid-result (1)
 * } (0..1)
 * ```
 */
export
type RejectPDU_rejectReason_conclude_responsePDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_conclude_responsePDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_responsePDU_other: RejectPDU_rejectReason_conclude_responsePDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_responsePDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_conclude_responsePDU = RejectPDU_rejectReason_conclude_responsePDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_responsePDU_invalid_result
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_responsePDU_invalid_result: RejectPDU_rejectReason_conclude_responsePDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_responsePDU_invalid_result
 * @constant
 * @type {number}
 */
export
const invalid_result: RejectPDU_rejectReason_conclude_responsePDU = RejectPDU_rejectReason_conclude_responsePDU_invalid_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_conclude_responsePDU = (el: _Element): RejectPDU_rejectReason_conclude_responsePDU => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("RejectPDU_rejectReason_conclude_responsePDU violates INTEGER range constraint");
    }
    return value;
};
export const _encode_RejectPDU_rejectReason_conclude_responsePDU = $._encodeInteger;


/* eslint-enable */
