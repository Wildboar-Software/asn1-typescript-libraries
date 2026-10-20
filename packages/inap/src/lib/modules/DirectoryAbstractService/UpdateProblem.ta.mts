/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UpdateProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateProblem  ::=  INTEGER {
 *   namingViolation(1), objectClassViolation(2), notAllowedOnNonLeaf(3),
 *   notAllowedOnRDN(4), entryAlreadyExists(5), affectsMultipleDSAs(6),
 *   objectClassModificationProhibited(7), notAncestor(8), parentNotAncestor(9),
 *   hierarchyRuleViolation(10), familyRuleViolation(11)}
 * ```
 */
export
type UpdateProblem = INTEGER;

/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_namingViolation: UpdateProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export
const namingViolation: UpdateProblem = UpdateProblem_namingViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_objectClassViolation: UpdateProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export
const objectClassViolation: UpdateProblem = UpdateProblem_objectClassViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAllowedOnNonLeaf: UpdateProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export
const notAllowedOnNonLeaf: UpdateProblem = UpdateProblem_notAllowedOnNonLeaf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAllowedOnRDN: UpdateProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export
const notAllowedOnRDN: UpdateProblem = UpdateProblem_notAllowedOnRDN; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export
const UpdateProblem_entryAlreadyExists: UpdateProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export
const entryAlreadyExists: UpdateProblem = UpdateProblem_entryAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export
const UpdateProblem_affectsMultipleDSAs: UpdateProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export
const affectsMultipleDSAs: UpdateProblem = UpdateProblem_affectsMultipleDSAs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export
const UpdateProblem_objectClassModificationProhibited: UpdateProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export
const objectClassModificationProhibited: UpdateProblem = UpdateProblem_objectClassModificationProhibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export
const UpdateProblem_notAncestor: UpdateProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export
const notAncestor: UpdateProblem = UpdateProblem_notAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export
const UpdateProblem_parentNotAncestor: UpdateProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export
const parentNotAncestor: UpdateProblem = UpdateProblem_parentNotAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_hierarchyRuleViolation: UpdateProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export
const hierarchyRuleViolation: UpdateProblem = UpdateProblem_hierarchyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export
const UpdateProblem_familyRuleViolation: UpdateProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export
const familyRuleViolation: UpdateProblem = UpdateProblem_familyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_UpdateProblem: $.ASN1Decoder<UpdateProblem> = $._decodeInteger;

export
const _encode_UpdateProblem: $.ASN1Encoder<UpdateProblem> = $._encodeInteger;

/* eslint-enable */
