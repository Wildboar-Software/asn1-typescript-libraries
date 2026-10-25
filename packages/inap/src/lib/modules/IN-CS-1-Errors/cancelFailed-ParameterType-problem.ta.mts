/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::=
 * ENUMERATED {
 *   unknownOperation(0),
 *   tooLate(1),
 *   operationNotCancellable(2)
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::=
 * ENUMERATED {
 *   unknownOperation(0),
 *   tooLate(1),
 *   operationNotCancellable(2)
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::=
 * ENUMERATED {
 *   unknownOperation(0),
 *   tooLate(1),
 *   operationNotCancellable(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const cancelFailed_ParameterType_problem: typeof _enum_for_cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem_unknownOperation
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_unknownOperation: _enum_for_cancelFailed_ParameterType_problem.unknownOperation = cancelFailed_ParameterType_problem.unknownOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperation
 * @constant
 * @type {number}
 */
export
const unknownOperation: _enum_for_cancelFailed_ParameterType_problem.unknownOperation = cancelFailed_ParameterType_problem.unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_tooLate
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_tooLate: _enum_for_cancelFailed_ParameterType_problem.tooLate = cancelFailed_ParameterType_problem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export
const tooLate: _enum_for_cancelFailed_ParameterType_problem.tooLate = cancelFailed_ParameterType_problem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_operationNotCancellable
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_operationNotCancellable: _enum_for_cancelFailed_ParameterType_problem.operationNotCancellable = cancelFailed_ParameterType_problem.operationNotCancellable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotCancellable
 * @constant
 * @type {number}
 */
export
const operationNotCancellable: _enum_for_cancelFailed_ParameterType_problem.operationNotCancellable = cancelFailed_ParameterType_problem.operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_cancelFailed_ParameterType_problem(el: _Element): cancelFailed_ParameterType_problem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case cancelFailed_ParameterType_problem.unknownOperation: return cancelFailed_ParameterType_problem.unknownOperation;
        case cancelFailed_ParameterType_problem.tooLate: return cancelFailed_ParameterType_problem.tooLate;
        case cancelFailed_ParameterType_problem.operationNotCancellable: return cancelFailed_ParameterType_problem.operationNotCancellable;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for cancelFailed_ParameterType_problem.",
                el,
            );
    }
}

export
const _encode_cancelFailed_ParameterType_problem: $.ASN1Encoder<cancelFailed_ParameterType_problem> = $._encodeEnumerated as $.ASN1Encoder<cancelFailed_ParameterType_problem>;

/* eslint-enable */
