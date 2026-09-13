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
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NameProblem {
    invalid_upi = 1,
    invalid_path_name = 2,
    ambiguous_path_name = 3,
    inappropriate_object_class = 4,
}

/**
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NameProblem = _enum_for_NameProblem;

/**
 * @summary NameProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProblem  ::=  ENUMERATED {
 *     invalid-upi                 (1),
 *     invalid-path-name           (2),
 *     ambiguous-path-name         (3),
 *     inappropriate-object-class  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NameProblem = _enum_for_NameProblem;

/**
 * @summary NameProblem_invalid_upi
 * @constant
 * @type {number}
 */
export
const NameProblem_invalid_upi: NameProblem = NameProblem.invalid_upi; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_upi
 * @constant
 * @type {number}
 */
export
const invalid_upi: NameProblem = NameProblem.invalid_upi; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_invalid_path_name
 * @constant
 * @type {number}
 */
export
const NameProblem_invalid_path_name: NameProblem = NameProblem.invalid_path_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_path_name
 * @constant
 * @type {number}
 */
export
const invalid_path_name: NameProblem = NameProblem.invalid_path_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_ambiguous_path_name
 * @constant
 * @type {number}
 */
export
const NameProblem_ambiguous_path_name: NameProblem = NameProblem.ambiguous_path_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ambiguous_path_name
 * @constant
 * @type {number}
 */
export
const ambiguous_path_name: NameProblem = NameProblem.ambiguous_path_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const NameProblem_inappropriate_object_class: NameProblem = NameProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: NameProblem = NameProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NameProblem = $._decodeEnumerated;
export const _encode_NameProblem = $._encodeEnumerated;


/* eslint-enable */
