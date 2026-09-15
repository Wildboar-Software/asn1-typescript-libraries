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
 * @summary AccessProblem
 * @description
 *
 * Why access to a named entry failed. ISO/IEC 10166-1:1991 §8.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessProblem {
    inappropriate_object_class = 1,
    reserved_by_a_user = 2,
    externally_located_object = 3,
}

/**
 * @summary AccessProblem
 * @description
 *
 * Why access to a named entry failed. ISO/IEC 10166-1:1991 §8.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessProblem = _enum_for_AccessProblem;

/**
 * @summary AccessProblem
 * @description
 *
 * Why access to a named entry failed. ISO/IEC 10166-1:1991 §8.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessProblem = _enum_for_AccessProblem;

/**
 * @summary AccessProblem_inappropriate_object_class
 * @description
 *
 * Named object has the wrong class.
 * @constant
 * @type {number}
 */
export
const AccessProblem_inappropriate_object_class: AccessProblem = AccessProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @description
 *
 * Named object has the wrong class.
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: AccessProblem = AccessProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessProblem_reserved_by_a_user
 * @description
 *
 * Entry or its parent is reserved by this or another user.
 * @constant
 * @type {number}
 */
export
const AccessProblem_reserved_by_a_user: AccessProblem = AccessProblem.reserved_by_a_user; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved_by_a_user
 * @description
 *
 * Entry or its parent is reserved by this or another user.
 * @constant
 * @type {number}
 */
export
const reserved_by_a_user: AccessProblem = AccessProblem.reserved_by_a_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessProblem_externally_located_object
 * @description
 *
 * Entry is in another store and unsuitable for this operation.
 * @constant
 * @type {number}
 */
export
const AccessProblem_externally_located_object: AccessProblem = AccessProblem.externally_located_object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary externally_located_object
 * @description
 *
 * Entry is in another store and unsuitable for this operation.
 * @constant
 * @type {number}
 */
export
const externally_located_object: AccessProblem = AccessProblem.externally_located_object; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessProblem = $._decodeEnumerated;
export const _encode_AccessProblem = $._encodeEnumerated;


/* eslint-enable */
