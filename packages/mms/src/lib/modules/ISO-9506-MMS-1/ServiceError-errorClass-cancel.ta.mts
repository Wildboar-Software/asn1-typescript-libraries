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
 * @summary ServiceError_errorClass_cancel
 * @description
 * 
 * Error Class CANCEL: problems with the Cancel service. Encoded as INTEGER when
 * the `cancel` CBB is selected; otherwise the `cancel` Error Class alternative
 * is NULL. ISO 9506-1:2003 §24.2.11; ISO 9506-2:2003 §7.4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-cancel ::= INTEGER {
 *     other (0),
 *     invoke-id-unknown (1),
 *     cancel-not-possible (2)
 * } (0..2)
 * ```
 */
export
type ServiceError_errorClass_cancel = INTEGER;

/**
 * @summary ServiceError_errorClass_cancel_other
 * @description
 *
 * Reason other than those identified for CANCEL. ISO 9506-1:2003 §24.2.11.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_other: ServiceError_errorClass_cancel = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_other
 * @description
 *
 * Reason other than those identified for CANCEL. ISO 9506-1:2003 §24.2.11.3.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @description
 *
 * No confirmed request / protocol machine exists with the specified Invoke ID.
 * ISO 9506-1:2003 §24.2.11.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_invoke_id_unknown: ServiceError_errorClass_cancel = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @description
 *
 * No confirmed request / protocol machine exists with the specified Invoke ID.
 * ISO 9506-1:2003 §24.2.11.1.
 *
 * @constant
 * @type {number}
 */
export
const invoke_id_unknown: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_invoke_id_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @description
 *
 * Cancel cannot be performed according to the service requirements.
 * ISO 9506-1:2003 §24.2.11.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_cancel_not_possible: ServiceError_errorClass_cancel = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @description
 *
 * Cancel cannot be performed according to the service requirements.
 * ISO 9506-1:2003 §24.2.11.2.
 *
 * @constant
 * @type {number}
 */
export
const cancel_not_possible: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_cancel_not_possible; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_cancel = $._decodeInteger;
export const _encode_ServiceError_errorClass_cancel = $._encodeInteger;


/* eslint-enable */
