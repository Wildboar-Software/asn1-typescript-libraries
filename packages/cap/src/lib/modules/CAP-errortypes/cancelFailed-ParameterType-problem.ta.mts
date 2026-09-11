/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 *
 * `cancelFailed`.`problem`: `unknownOperation` (0) InvokeID unknown or the
 * operation already completed; `tooLate` (1) InvokeID known but execution
 * can no longer be cancelled (e.g. announcement finished but
 * SpecializedResourceReport not yet sent; conditions are implementation
 * dependent); `operationNotCancellable` (2) InvokeID points to an
 * operation the gsmSCF is not allowed to cancel.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED {
 *     unknownOperation    (0),
 *     tooLate             (1),
 *     operationNotCancellable    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_cancelFailed_ParameterType_problem {
    unknownOperation = 0,
    tooLate = 1,
    operationNotCancellable = 2,
}

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 *
 * `cancelFailed`.`problem`: `unknownOperation` (0) InvokeID unknown or the
 * operation already completed; `tooLate` (1) InvokeID known but execution
 * can no longer be cancelled (e.g. announcement finished but
 * SpecializedResourceReport not yet sent; conditions are implementation
 * dependent); `operationNotCancellable` (2) InvokeID points to an
 * operation the gsmSCF is not allowed to cancel.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED {
 *     unknownOperation    (0),
 *     tooLate             (1),
 *     operationNotCancellable    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 *
 * `cancelFailed`.`problem`: `unknownOperation` (0) InvokeID unknown or the
 * operation already completed; `tooLate` (1) InvokeID known but execution
 * can no longer be cancelled (e.g. announcement finished but
 * SpecializedResourceReport not yet sent; conditions are implementation
 * dependent); `operationNotCancellable` (2) InvokeID points to an
 * operation the gsmSCF is not allowed to cancel.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED {
 *     unknownOperation    (0),
 *     tooLate             (1),
 *     operationNotCancellable    (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem_unknownOperation
 * @description
 *
 * InvokeID of the operation to cancel is not known to the gsmSRF (may
 * also happen when the operation has already completed).
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperation
 * @description
 *
 * InvokeID of the operation to cancel is not known to the gsmSRF (may
 * also happen when the operation has already completed).
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_tooLate
 * @description
 *
 * InvokeID is known but execution is in a state that cannot be cancelled
 * anymore (e.g. announcement finished but SpecializedResourceReport not
 * yet sent). Conditions for `tooLate` are implementation dependent.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @description
 *
 * InvokeID is known but execution is in a state that cannot be cancelled
 * anymore (e.g. announcement finished but SpecializedResourceReport not
 * yet sent). Conditions for `tooLate` are implementation dependent.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_operationNotCancellable
 * @description
 *
 * InvokeID points to a CAP operation the gsmSCF is not allowed to cancel.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotCancellable
 * @description
 *
 * InvokeID points to a CAP operation the gsmSCF is not allowed to cancel.
 * (3GPP TS 29.078 V19.0.0 clause 10.1.2).
 *
 * @constant
 * @type {number}
 */
export
const operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_cancelFailed_ParameterType_problem = $._decodeEnumerated;
export const _encode_cancelFailed_ParameterType_problem = $._encodeEnumerated;


/* eslint-enable */
