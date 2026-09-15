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
 * @summary AccessRights
 * @description
 *
 * Increasing privilege on a DFR-Object. Each level includes the one below.
 * Creator/copier is entered as owner. Without at least read on a group,
 * descendants cannot be reached via that group (UPI access may still work).
 * ISO/IEC 10166-1:1991 §6.3.8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessRights {
    read = 0,
    extended_read = 1,
    read_modify = 2,
    read_modify_delete = 3,
    owner = 4,
}

/**
 * @summary AccessRights
 * @description
 *
 * Increasing privilege on a DFR-Object. Each level includes the one below.
 * Creator/copier is entered as owner. Without at least read on a group,
 * descendants cannot be reached via that group (UPI access may still work).
 * ISO/IEC 10166-1:1991 §6.3.8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessRights = _enum_for_AccessRights;

/**
 * @summary AccessRights
 * @description
 *
 * Increasing privilege on a DFR-Object. Each level includes the one below.
 * Creator/copier is entered as owner. Without at least read on a group,
 * descendants cannot be reached via that group (UPI access may still work).
 * ISO/IEC 10166-1:1991 §6.3.8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessRights = _enum_for_AccessRights;

/**
 * @summary AccessRights_read
 * @description
 *
 * Read, Copy, Search, List on content and attributes except others'
 * access-list entries and the *-By attributes. Hits without read are
 * omitted from Search/List. ISO/IEC 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const AccessRights_read: AccessRights = AccessRights.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @description
 *
 * Read, Copy, Search, List on content and attributes except others'
 * access-list entries and the *-By attributes. Hits without read are
 * omitted from Search/List. ISO/IEC 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const read: AccessRights = AccessRights.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_extended_read
 * @description
 *
 * read plus the full access-list and all other attributes. ISO/IEC
 * 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const AccessRights_extended_read: AccessRights = AccessRights.extended_read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extended_read
 * @description
 *
 * read plus the full access-list and all other attributes. ISO/IEC
 * 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const extended_read: AccessRights = AccessRights.extended_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_read_modify
 * @description
 *
 * extended-read plus uncommitted reserve/unreserve and modify of
 * content/attributes except the access-list. Inserting group members
 * allowed; operations on existing members still use those members'
 * lists. ISO/IEC 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const AccessRights_read_modify: AccessRights = AccessRights.read_modify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_modify
 * @description
 *
 * extended-read plus uncommitted reserve/unreserve and modify of
 * content/attributes except the access-list. Inserting group members
 * allowed; operations on existing members still use those members'
 * lists. ISO/IEC 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const read_modify: AccessRights = AccessRights.read_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_read_modify_delete
 * @description
 *
 * read-modify plus delete/move. Deleting a group tree requires this
 * right on every descendant; moving a group does not. ISO/IEC
 * 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const AccessRights_read_modify_delete: AccessRights = AccessRights.read_modify_delete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_modify_delete
 * @description
 *
 * read-modify plus delete/move. Deleting a group tree requires this
 * right on every descendant; moving a group does not. ISO/IEC
 * 10166-1:1991 §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const read_modify_delete: AccessRights = AccessRights.read_modify_delete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_owner
 * @description
 *
 * read-modify-delete plus modify the access-list and apply a committed
 * reservation. Auto-granted to the creator. ISO/IEC 10166-1:1991
 * §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const AccessRights_owner: AccessRights = AccessRights.owner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary owner
 * @description
 *
 * read-modify-delete plus modify the access-list and apply a committed
 * reservation. Auto-granted to the creator. ISO/IEC 10166-1:1991
 * §6.3.8.3.
 * @constant
 * @type {number}
 */
export
const owner: AccessRights = AccessRights.owner; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessRights = $._decodeEnumerated;
export const _encode_AccessRights = $._encodeEnumerated;


/* eslint-enable */
