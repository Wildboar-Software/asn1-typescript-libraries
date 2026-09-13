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
 * @summary AttributeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeProblem  ::=  ENUMERATED {
 *     no-such-attribute                   (1),
 *     invalid-attribute-syntax            (2),
 *     undefined-attribute-type            (3),
 *     inappropriate-matching              (4),
 *     constraint-violation                (5),
 *     attribute-or-value-already-exists   (6),
 *     illegal-modification                (7),
 *     inconsistent-with-other-attributes  (8),
 *     undefined-for-this-object-class     (9),
 *     unsupported-document-type           (10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AttributeProblem {
    no_such_attribute = 1,
    invalid_attribute_syntax = 2,
    undefined_attribute_type = 3,
    inappropriate_matching = 4,
    constraint_violation = 5,
    attribute_or_value_already_exists = 6,
    illegal_modification = 7,
    inconsistent_with_other_attributes = 8,
    undefined_for_this_object_class = 9,
    unsupported_document_type = 10,
}

/**
 * @summary AttributeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeProblem  ::=  ENUMERATED {
 *     no-such-attribute                   (1),
 *     invalid-attribute-syntax            (2),
 *     undefined-attribute-type            (3),
 *     inappropriate-matching              (4),
 *     constraint-violation                (5),
 *     attribute-or-value-already-exists   (6),
 *     illegal-modification                (7),
 *     inconsistent-with-other-attributes  (8),
 *     undefined-for-this-object-class     (9),
 *     unsupported-document-type           (10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeProblem = _enum_for_AttributeProblem;

/**
 * @summary AttributeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeProblem  ::=  ENUMERATED {
 *     no-such-attribute                   (1),
 *     invalid-attribute-syntax            (2),
 *     undefined-attribute-type            (3),
 *     inappropriate-matching              (4),
 *     constraint-violation                (5),
 *     attribute-or-value-already-exists   (6),
 *     illegal-modification                (7),
 *     inconsistent-with-other-attributes  (8),
 *     undefined-for-this-object-class     (9),
 *     unsupported-document-type           (10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeProblem = _enum_for_AttributeProblem;

/**
 * @summary AttributeProblem_no_such_attribute
 * @constant
 * @type {number}
 */
export
const AttributeProblem_no_such_attribute: AttributeProblem = AttributeProblem.no_such_attribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_such_attribute
 * @constant
 * @type {number}
 */
export
const no_such_attribute: AttributeProblem = AttributeProblem.no_such_attribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_invalid_attribute_syntax
 * @constant
 * @type {number}
 */
export
const AttributeProblem_invalid_attribute_syntax: AttributeProblem = AttributeProblem.invalid_attribute_syntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_attribute_syntax
 * @constant
 * @type {number}
 */
export
const invalid_attribute_syntax: AttributeProblem = AttributeProblem.invalid_attribute_syntax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_undefined_attribute_type
 * @constant
 * @type {number}
 */
export
const AttributeProblem_undefined_attribute_type: AttributeProblem = AttributeProblem.undefined_attribute_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_attribute_type
 * @constant
 * @type {number}
 */
export
const undefined_attribute_type: AttributeProblem = AttributeProblem.undefined_attribute_type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_inappropriate_matching
 * @constant
 * @type {number}
 */
export
const AttributeProblem_inappropriate_matching: AttributeProblem = AttributeProblem.inappropriate_matching; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_matching
 * @constant
 * @type {number}
 */
export
const inappropriate_matching: AttributeProblem = AttributeProblem.inappropriate_matching; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_constraint_violation
 * @constant
 * @type {number}
 */
export
const AttributeProblem_constraint_violation: AttributeProblem = AttributeProblem.constraint_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constraint_violation
 * @constant
 * @type {number}
 */
export
const constraint_violation: AttributeProblem = AttributeProblem.constraint_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export
const AttributeProblem_attribute_or_value_already_exists: AttributeProblem = AttributeProblem.attribute_or_value_already_exists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attribute_or_value_already_exists
 * @constant
 * @type {number}
 */
export
const attribute_or_value_already_exists: AttributeProblem = AttributeProblem.attribute_or_value_already_exists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_illegal_modification
 * @constant
 * @type {number}
 */
export
const AttributeProblem_illegal_modification: AttributeProblem = AttributeProblem.illegal_modification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary illegal_modification
 * @constant
 * @type {number}
 */
export
const illegal_modification: AttributeProblem = AttributeProblem.illegal_modification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_inconsistent_with_other_attributes
 * @constant
 * @type {number}
 */
export
const AttributeProblem_inconsistent_with_other_attributes: AttributeProblem = AttributeProblem.inconsistent_with_other_attributes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistent_with_other_attributes
 * @constant
 * @type {number}
 */
export
const inconsistent_with_other_attributes: AttributeProblem = AttributeProblem.inconsistent_with_other_attributes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_undefined_for_this_object_class
 * @constant
 * @type {number}
 */
export
const AttributeProblem_undefined_for_this_object_class: AttributeProblem = AttributeProblem.undefined_for_this_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_for_this_object_class
 * @constant
 * @type {number}
 */
export
const undefined_for_this_object_class: AttributeProblem = AttributeProblem.undefined_for_this_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeProblem_unsupported_document_type
 * @constant
 * @type {number}
 */
export
const AttributeProblem_unsupported_document_type: AttributeProblem = AttributeProblem.unsupported_document_type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_document_type
 * @constant
 * @type {number}
 */
export
const unsupported_document_type: AttributeProblem = AttributeProblem.unsupported_document_type; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AttributeProblem = $._decodeEnumerated;
export const _encode_AttributeProblem = $._encodeEnumerated;


/* eslint-enable */
