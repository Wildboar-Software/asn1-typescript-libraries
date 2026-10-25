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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary OperationType
 * @description
 *
 * Effective action on a managed object as a result of a
 * management request (X.741 §3.11.2). Naming attribute of
 * the `operations` managed object (read-only); also the
 * element type of `operationsList`. Values are the X.720
 * operations plus `filter` and `multipleObjectSelection`.
 * At most one operations object per type may be contained
 * in a given targets object. ITU-T Rec. X.741 (04/95)
 * [§8.1.6](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §3.11.2, A.5.20–A.5.21.
 *
 * Values: `action`(0), `create`(1), `delete`(2), `get`(3),
 * `replace`(4), `addMember`(5), `removeMember`(6),
 * `replaceWithDefault`(7), `multipleObjectSelection`(8),
 * `filter`(9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationType  ::=  INTEGER {
 *   action(0), create(1), delete(2), get(3), replace(4), addMember(5),
 *   removeMember(6), replaceWithDefault(7), multipleObjectSelection(8),
 *   filter(9)}
 * ```
 */
export type OperationType = INTEGER;

/**
 * @summary OperationType_action
 * @description
 *
 * CMIS action on a managed object. Operations of this type
 * use the actions package (`actionFilterList`). X.741
 * §8.1.6, A.2.6.
 *
 * @constant
 * @type {number}
 */
export const OperationType_action = 0 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_action
 * @description
 *
 * CMIS action on a managed object. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const action = OperationType_action satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_create
 * @description
 *
 * Create a managed object. Attribute-modification package
 * may constrain initial attribute values. Action ADI may
 * create Target ADI for the new object. X.741 §8.1.6,
 * §7.4.5.1.
 *
 * @constant
 * @type {number}
 */
export const OperationType_create = 1 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_create
 * @description
 *
 * Create a managed object. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const create = OperationType_create satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_delete_
 * @description
 *
 * Delete a managed object. Action ADI may modify or remove
 * Target ADI of the deleted object. X.741 §8.1.6, §7.4.5.2.
 *
 * @constant
 * @type {number}
 */
export const OperationType_delete_ = 2 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_delete_
 * @description
 *
 * Delete a managed object. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const delete_ = OperationType_delete_ satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_get_
 * @description
 *
 * Get attribute values. Attribute-ids package identifies
 * which attributes are part of the target. X.741 §8.1.6.3.1.
 *
 * @constant
 * @type {number}
 */
export const OperationType_get_ = 3 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_get_
 * @description
 *
 * Get attribute values. X.741 §8.1.6.3.1.
 *
 * @constant
 * @type {number}
 */
export const get_ = OperationType_get_ satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replace
 * @description
 *
 * Replace attribute values. Attribute-ids and
 * attribute-modification packages apply. Action ADI may
 * modify Target ADI of the target attribute(s). X.741
 * §8.1.6, §7.4.5.3.
 *
 * @constant
 * @type {number}
 */
export const OperationType_replace = 4 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replace
 * @description
 *
 * Replace attribute values. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const replace = OperationType_replace satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_addMember
 * @description
 *
 * Add a member of a set-valued attribute. Attribute-
 * modification package applies. X.741 §8.1.6, §7.4.5.3.
 *
 * @constant
 * @type {number}
 */
export const OperationType_addMember = 5 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_addMember
 * @description
 *
 * Add a member of a set-valued attribute. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const addMember = OperationType_addMember satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_removeMember
 * @description
 *
 * Remove a member of a set-valued attribute. Attribute-
 * modification package applies. X.741 §8.1.6, §7.4.5.3.
 *
 * @constant
 * @type {number}
 */
export const OperationType_removeMember = 6 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_removeMember
 * @description
 *
 * Remove a member of a set-valued attribute. X.741 §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const removeMember = OperationType_removeMember satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replaceWithDefault
 * @description
 *
 * Replace attributes with their default values. Attribute-
 * ids package applies. X.741 §8.1.6, §7.4.5.3.
 *
 * @constant
 * @type {number}
 */
export const OperationType_replaceWithDefault = 7 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_replaceWithDefault
 * @description
 *
 * Replace attributes with their default values. X.741
 * §8.1.6.
 *
 * @constant
 * @type {number}
 */
export const replaceWithDefault = OperationType_replaceWithDefault satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_multipleObjectSelection
 * @description
 *
 * Scoped/synchronized operations over multiple managed
 * objects. Scope package (`scopeFilter`,
 * `synchronizationFilter`) applies; used e.g. to block
 * scoped get of a whole subtree or scoped delete. X.741
 * §8.1.6.3.4.
 *
 * @constant
 * @type {number}
 */
export const OperationType_multipleObjectSelection = 8 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_multipleObjectSelection
 * @description
 *
 * Scoped/synchronized operations over multiple managed
 * objects. X.741 §8.1.6.3.4.
 *
 * @constant
 * @type {number}
 */
export const multipleObjectSelection = OperationType_multipleObjectSelection satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_filter
 * @description
 *
 * Access control on the CMIS filter of a request.
 * Attribute-ids package applies. X.741 §8.1.6.3.1.
 *
 * @constant
 * @type {number}
 */
export const OperationType_filter = 9 satisfies OperationType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationType_filter
 * @description
 *
 * Access control on the CMIS filter of a request. X.741
 * §8.1.6.3.1.
 *
 * @constant
 * @type {number}
 */
export const filter = OperationType_filter satisfies OperationType; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_OperationType = $._decodeInteger;


export const _encode_OperationType = $._encodeInteger;


/* eslint-enable */
