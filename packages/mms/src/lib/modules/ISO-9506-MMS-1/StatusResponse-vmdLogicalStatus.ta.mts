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
 * @summary StatusResponse_vmdLogicalStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusResponse-vmdLogicalStatus ::= INTEGER {
 *     state-changes-allowed (0),
 *     no-state-changes-allowed (1),
 *     limited-services-permitted (2),
 *     support-services-allowed (3)
 * } (0..3)
 * ```
 */
export
type StatusResponse_vmdLogicalStatus = INTEGER;

/**
 * @summary StatusResponse_vmdLogicalStatus_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_state_changes_allowed: StatusResponse_vmdLogicalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const state_changes_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_no_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_no_state_changes_allowed: StatusResponse_vmdLogicalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_no_state_changes_allowed
 * @constant
 * @type {number}
 */
export
const no_state_changes_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_no_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_limited_services_permitted
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_limited_services_permitted: StatusResponse_vmdLogicalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_limited_services_permitted
 * @constant
 * @type {number}
 */
export
const limited_services_permitted: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_limited_services_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_support_services_allowed
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdLogicalStatus_support_services_allowed: StatusResponse_vmdLogicalStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdLogicalStatus_support_services_allowed
 * @constant
 * @type {number}
 */
export
const support_services_allowed: StatusResponse_vmdLogicalStatus = StatusResponse_vmdLogicalStatus_support_services_allowed; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StatusResponse_vmdLogicalStatus = $._decodeInteger;
export const _encode_StatusResponse_vmdLogicalStatus = $._encodeInteger;


/* eslint-enable */
