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
 * @summary RejectPDU_rejectReason_conclude_errorPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-conclude-errorPDU ::= INTEGER {
 *     other (0),
 *     invalid-serviceError (1),
 *     value-out-of-range (2)
 * } (0..2)
 * ```
 */
export
type RejectPDU_rejectReason_conclude_errorPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_errorPDU_other: RejectPDU_rejectReason_conclude_errorPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_conclude_errorPDU = RejectPDU_rejectReason_conclude_errorPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError: RejectPDU_rejectReason_conclude_errorPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError
 * @constant
 * @type {number}
 */
export
const invalid_serviceError: RejectPDU_rejectReason_conclude_errorPDU = RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range: RejectPDU_rejectReason_conclude_errorPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_conclude_errorPDU = RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_conclude_errorPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_conclude_errorPDU = $._encodeInteger;


/* eslint-enable */
