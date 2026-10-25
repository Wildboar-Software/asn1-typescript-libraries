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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU
 * @description
 *
 * Reject codes when the rejected PDU is a Conclude-RequestPDU (ISO 9506-1:2003
 * §8.6.1.4.9).
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
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.9.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_requestPDU_other: 0 = 0 satisfies RejectPDU_rejectReason_conclude_requestPDU; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.9.1).
 * @constant
 * @type {number}
 */
export
const other: 0 = RejectPDU_rejectReason_conclude_requestPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_invalid_argument
 * @description
 *
 * Request argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.9.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_conclude_requestPDU_invalid_argument: 1 = 1 satisfies RejectPDU_rejectReason_conclude_requestPDU; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_conclude_requestPDU_invalid_argument
 * @description
 *
 * Request argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.9.2).
 * @constant
 * @type {number}
 */
export
const invalid_argument: 1 = RejectPDU_rejectReason_conclude_requestPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_conclude_requestPDU: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_conclude_requestPDU: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
