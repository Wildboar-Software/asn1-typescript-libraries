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
 * @summary StatusResponse_vmdPhysicalStatus
 * @description
 * 
 * VMD `&physicalStatus`: gross operational state of the hardware associated
 * with the device (not communications). ISO 9506-1:2003 §7.2.1.11, §10.2.2;
 * ISO 9506-2:2003 §10.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusResponse-vmdPhysicalStatus ::= INTEGER {
 *     operational (0),
 *     partially-operational (1),
 *     inoperable (2),
 *     needs-commissioning (3)
 * } (0..3)
 * ```
 */
export
type StatusResponse_vmdPhysicalStatus = INTEGER;

/**
 * @summary StatusResponse_vmdPhysicalStatus_operational
 * @description
 *
 * The real device has no known deficiencies and can perform its intended tasks.
 * ISO 9506-1:2003 §7.2.1.11.1.
 *
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_operational = 0 satisfies StatusResponse_vmdPhysicalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_operational
 * @description
 *
 * The real device has no known deficiencies and can perform its intended tasks.
 * ISO 9506-1:2003 §7.2.1.11.1.
 *
 * @constant
 * @type {number}
 */
export
const operational = StatusResponse_vmdPhysicalStatus_operational satisfies StatusResponse_vmdPhysicalStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_partially_operational
 * @description
 *
 * One or more functions cannot be performed due to hardware malfunctions or
 * limitations. ISO 9506-1:2003 §7.2.1.11.2.
 *
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_partially_operational = 1 satisfies StatusResponse_vmdPhysicalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_partially_operational
 * @description
 *
 * One or more functions cannot be performed due to hardware malfunctions or
 * limitations. ISO 9506-1:2003 §7.2.1.11.2.
 *
 * @constant
 * @type {number}
 */
export
const partially_operational = StatusResponse_vmdPhysicalStatus_partially_operational satisfies StatusResponse_vmdPhysicalStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_inoperable
 * @description
 *
 * One or more significant problems prevent any useful task. ISO 9506-1:2003
 * §7.2.1.11.3.
 *
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_inoperable = 2 satisfies StatusResponse_vmdPhysicalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_inoperable
 * @description
 *
 * One or more significant problems prevent any useful task. ISO 9506-1:2003
 * §7.2.1.11.3.
 *
 * @constant
 * @type {number}
 */
export
const inoperable = StatusResponse_vmdPhysicalStatus_inoperable satisfies StatusResponse_vmdPhysicalStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_needs_commissioning
 * @description
 *
 * A local commissioning process must be performed before useful tasks. VMDStop
 * sets `&physicalStatus` to this value. ISO 9506-1:2003 §7.2.1.11.4, §10.9.2.
 *
 * @constant
 * @type {number}
 */
export
const StatusResponse_vmdPhysicalStatus_needs_commissioning = 3 satisfies StatusResponse_vmdPhysicalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatusResponse_vmdPhysicalStatus_needs_commissioning
 * @description
 *
 * A local commissioning process must be performed before useful tasks. VMDStop
 * sets `&physicalStatus` to this value. ISO 9506-1:2003 §7.2.1.11.4, §10.9.2.
 *
 * @constant
 * @type {number}
 */
export
const needs_commissioning = StatusResponse_vmdPhysicalStatus_needs_commissioning satisfies StatusResponse_vmdPhysicalStatus; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StatusResponse_vmdPhysicalStatus = $._decodeInteger;
export const _encode_StatusResponse_vmdPhysicalStatus = $._encodeInteger;


/* eslint-enable */
