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
 * @summary ServiceError_errorClass_initiate
 * @description
 * 
 * Error Class INITIATE: problems with the Initiate service. Values 1 and 2 are
 * reserved. ISO 9506-1:2003 §24.2.9; ISO 9506-2:2003 §7.4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-initiate ::= INTEGER {
 *     other (0),
 *     -- Values 1 and 2 are reserved for further definition
 *     max-services-outstanding-calling-insufficient (3),
 *     max-services-outstanding-called-insufficient (4),
 *     service-CBB-insufficient (5),
 *     parameter-CBB-insufficient (6),
 *     nesting-level-insufficient (7)
 * } (0..7)
 * ```
 */
export
type ServiceError_errorClass_initiate = INTEGER;

/**
 * @summary ServiceError_errorClass_initiate_other
 * @description
 *
 * Reason other than those identified for INITIATE. ISO 9506-1:2003 §24.2.9.6.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_other: ServiceError_errorClass_initiate = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_other
 * @description
 *
 * Reason other than those identified for INITIATE. ISO 9506-1:2003 §24.2.9.6.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @description
 *
 * Proposed Max Services Outstanding Calling is too small. ISO 9506-1:2003
 * §24.2.9.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient
 * @description
 *
 * Proposed Max Services Outstanding Calling is too small. ISO 9506-1:2003
 * §24.2.9.1.
 *
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_calling_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @description
 *
 * Proposed Max Services Outstanding Called is too small. ISO 9506-1:2003
 * §24.2.9.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient
 * @description
 *
 * Proposed Max Services Outstanding Called is too small. ISO 9506-1:2003
 * §24.2.9.2.
 *
 * @constant
 * @type {number}
 */
export
const max_services_outstanding_called_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @description
 *
 * A service CBB necessary for communication is missing from the proposed list.
 * ISO 9506-1:2003 §24.2.9.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_service_CBB_insufficient: ServiceError_errorClass_initiate = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_service_CBB_insufficient
 * @description
 *
 * A service CBB necessary for communication is missing from the proposed list.
 * ISO 9506-1:2003 §24.2.9.5.
 *
 * @constant
 * @type {number}
 */
export
const service_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_service_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @description
 *
 * A parameter CBB necessary for communication is not present in the proposed
 * list. ISO 9506-1:2003 §24.2.9.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_parameter_CBB_insufficient: ServiceError_errorClass_initiate = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_parameter_CBB_insufficient
 * @description
 *
 * A parameter CBB necessary for communication is not present in the proposed
 * list. ISO 9506-1:2003 §24.2.9.3.
 *
 * @constant
 * @type {number}
 */
export
const parameter_CBB_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_parameter_CBB_insufficient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @description
 *
 * Proposed Data Structure Nesting Level is too small. ISO 9506-1:2003
 * §24.2.9.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_initiate_nesting_level_insufficient: ServiceError_errorClass_initiate = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_initiate_nesting_level_insufficient
 * @description
 *
 * Proposed Data Structure Nesting Level is too small. ISO 9506-1:2003
 * §24.2.9.4.
 *
 * @constant
 * @type {number}
 */
export
const nesting_level_insufficient: ServiceError_errorClass_initiate = ServiceError_errorClass_initiate_nesting_level_insufficient; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_initiate = $._decodeInteger;
export const _encode_ServiceError_errorClass_initiate = $._encodeInteger;


/* eslint-enable */
