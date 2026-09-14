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
 * @summary ServiceError_errorClass_vmd_state
 * @description
 * 
 * Error Class VMD-STATE: the VMD state does not allow the requested service.
 * ISO 9506-1:2003 §24.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-vmd-state ::= INTEGER {
 *     other (0),
 *     vmd-state-conflict (1),
 *     vmd-operational-problem (2),
 *     domain-transfer-problem (3),
 *     state-machine-id-invalid (4)
 * } (0..4)
 * ```
 */
export
type ServiceError_errorClass_vmd_state = INTEGER;

/**
 * @summary ServiceError_errorClass_vmd_state_other
 * @description
 *
 * Reason other than those identified for VMD-STATE. ISO 9506-1:2003 §24.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_vmd_state_other: ServiceError_errorClass_vmd_state = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_other
 * @description
 *
 * Reason other than those identified for VMD-STATE. ISO 9506-1:2003 §24.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_vmd_state = ServiceError_errorClass_vmd_state_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_vmd_state_conflict
 * @description
 *
 * The request would alter VMD state in a way that conflicts with the current
 * state. ISO 9506-1:2003 §24.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_vmd_state_vmd_state_conflict: ServiceError_errorClass_vmd_state = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_vmd_state_conflict
 * @description
 *
 * The request would alter VMD state in a way that conflicts with the current
 * state. ISO 9506-1:2003 §24.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const vmd_state_conflict: ServiceError_errorClass_vmd_state = ServiceError_errorClass_vmd_state_vmd_state_conflict; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_vmd_operational_problem
 * @description
 *
 * The request may not be honoured because of an operational problem with the
 * VMD. ISO 9506-1:2003 §24.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_vmd_state_vmd_operational_problem: ServiceError_errorClass_vmd_state = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_vmd_operational_problem
 * @description
 *
 * The request may not be honoured because of an operational problem with the
 * VMD. ISO 9506-1:2003 §24.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const vmd_operational_problem: ServiceError_errorClass_vmd_state = ServiceError_errorClass_vmd_state_vmd_operational_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_domain_transfer_problem
 * @description
 *
 * Load Data contains an inconsistency that prevents it from being used.
 * ISO 9506-1:2003 §24.2.1.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_vmd_state_domain_transfer_problem: ServiceError_errorClass_vmd_state = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_domain_transfer_problem
 * @description
 *
 * Load Data contains an inconsistency that prevents it from being used.
 * ISO 9506-1:2003 §24.2.1.3.
 *
 * @constant
 * @type {number}
 */
export
const domain_transfer_problem: ServiceError_errorClass_vmd_state = ServiceError_errorClass_vmd_state_domain_transfer_problem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_state_machine_id_invalid
 * @description
 *
 * No state machine is associated with the given state-machine ID.
 * ISO 9506-1:2003 §24.2.1.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_vmd_state_state_machine_id_invalid: ServiceError_errorClass_vmd_state = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_vmd_state_state_machine_id_invalid
 * @description
 *
 * No state machine is associated with the given state-machine ID.
 * ISO 9506-1:2003 §24.2.1.4.
 *
 * @constant
 * @type {number}
 */
export
const state_machine_id_invalid: ServiceError_errorClass_vmd_state = ServiceError_errorClass_vmd_state_state_machine_id_invalid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_vmd_state = $._decodeInteger;
export const _encode_ServiceError_errorClass_vmd_state = $._encodeInteger;


/* eslint-enable */
