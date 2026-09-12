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
 * @summary RejectPDU_rejectReason_conclude_requestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-conclude-requestPDU ::= INTEGER {
 *     other (0),
 *     invalid-argument (1)
 * } (0..1)
 * ```
 */
export
type RejectPDU_rejectReason_conclude_requestPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_requestPDU_other: RejectPDU_rejectReason_conclude_requestPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_conclude_requestPDU = RejectPDU_rejectReason_conclude_requestPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_requestPDU_invalid_argument: RejectPDU_rejectReason_conclude_requestPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_conclude_requestPDU = RejectPDU_rejectReason_conclude_requestPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_conclude_requestPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_conclude_requestPDU = $._encodeInteger;


/* eslint-enable */
