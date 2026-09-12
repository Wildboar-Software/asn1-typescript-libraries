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
 * @summary ServiceError_errorClass_conclude
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-conclude ::= INTEGER {
 *     other (0),
 *     further-communication-required (1)
 * } (0..1)
 * ```
 */
export
type ServiceError_errorClass_conclude = INTEGER;

/**
 * @summary ServiceError_errorClass_conclude_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_conclude_other: ServiceError_errorClass_conclude = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_conclude_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_conclude = ServiceError_errorClass_conclude_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_conclude_further_communication_required
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_conclude_further_communication_required: ServiceError_errorClass_conclude = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_conclude_further_communication_required
 * @constant
 * @type {number}
 */
export
const further_communication_required: ServiceError_errorClass_conclude = ServiceError_errorClass_conclude_further_communication_required; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_conclude = $._decodeInteger;
export const _encode_ServiceError_errorClass_conclude = $._encodeInteger;


/* eslint-enable */
