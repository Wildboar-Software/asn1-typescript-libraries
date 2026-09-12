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
 * @summary RejectPDU_rejectReason_confirmed_requestPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-requestPDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     unrecognized-modifier (2),
 *     invalid-invokeID (3),
 *     invalid-argument (4),
 *     invalid-modifier (5),
 *     max-serv-outstanding-exceeded (6),
 *     -- Value 7 reserved for further definition
 *     max-recursion-exceeded (8),
 *     value-out-of-range (9)
 * } (0..9)
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_requestPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_other: RejectPDU_rejectReason_confirmed_requestPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @constant
 * @type {number}
 */
export
const unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @constant
 * @type {number}
 */
export
const invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @constant
 * @type {number}
 */
export
const max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_confirmed_requestPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_confirmed_requestPDU = $._encodeInteger;


/* eslint-enable */
