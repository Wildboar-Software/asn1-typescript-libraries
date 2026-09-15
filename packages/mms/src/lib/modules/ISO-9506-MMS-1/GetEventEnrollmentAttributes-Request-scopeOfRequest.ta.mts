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
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest
 * @description
 *
 * Scope of GetEventEnrollmentAttributes. Default `client`.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 * [ISO 9506-2:2003 §21.4.1.1]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventEnrollmentAttributes-Request-scopeOfRequest ::= INTEGER {
 *     specific (0),
 *     client (1),
 *     ec (2),
 *     ea (3)
 * } (0..3)
 * ```
 */
export
type GetEventEnrollmentAttributes_Request_scopeOfRequest = INTEGER;

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @description
 *
 * Named list of Event Enrollment objects.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 * [ISO 9506-2:2003 §21.4.1.1]
 *
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_specific
 * @description
 *
 * Short name of GetEventEnrollmentAttributes_Request_scopeOfRequest_specific.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 *
 * @constant
 * @type {number}
 */
export
const specific: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @description
 *
 * Enrollments of a client application (default).
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 * [ISO 9506-2:2003 §21.4.1.1]
 *
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_client: GetEventEnrollmentAttributes_Request_scopeOfRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_client
 * @description
 *
 * Short name of GetEventEnrollmentAttributes_Request_scopeOfRequest_client.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 *
 * @constant
 * @type {number}
 */
export
const client: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_client; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @description
 *
 * Enrollments of a named Event Condition.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 * [ISO 9506-2:2003 §21.4.1.1]
 *
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ec
 * @description
 *
 * Short name of GetEventEnrollmentAttributes_Request_scopeOfRequest_ec.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 *
 * @constant
 * @type {number}
 */
export
const ec: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ec; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @description
 *
 * Enrollments of a named Event Action.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 * [ISO 9506-2:2003 §21.4.1.1]
 *
 * @constant
 * @type {number}
 */
export
const GetEventEnrollmentAttributes_Request_scopeOfRequest_ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEventEnrollmentAttributes_Request_scopeOfRequest_ea
 * @description
 *
 * Short name of GetEventEnrollmentAttributes_Request_scopeOfRequest_ea.
 *
 * [ISO 9506-1:2003 §21.4.1.1.1]
 *
 * @constant
 * @type {number}
 */
export
const ea: GetEventEnrollmentAttributes_Request_scopeOfRequest = GetEventEnrollmentAttributes_Request_scopeOfRequest_ea; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetEventEnrollmentAttributes_Request_scopeOfRequest = $._decodeInteger;
export const _encode_GetEventEnrollmentAttributes_Request_scopeOfRequest = $._encodeInteger;


/* eslint-enable */
