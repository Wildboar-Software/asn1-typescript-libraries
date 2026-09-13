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
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityProblem {
    inappropriate_authentication = 1,
    invalid_creds = 2,
    invalid_privilege = 3,
    invalid_pac = 4,
    already_active = 5,
}

/**
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityProblem = _enum_for_SecurityProblem;

/**
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityProblem = _enum_for_SecurityProblem;

/**
 * @summary SecurityProblem_inappropriate_authentication
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriate_authentication: SecurityProblem = SecurityProblem.inappropriate_authentication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_authentication
 * @constant
 * @type {number}
 */
export
const inappropriate_authentication: SecurityProblem = SecurityProblem.inappropriate_authentication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_creds
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_creds: SecurityProblem = SecurityProblem.invalid_creds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_creds
 * @constant
 * @type {number}
 */
export
const invalid_creds: SecurityProblem = SecurityProblem.invalid_creds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_privilege
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_privilege: SecurityProblem = SecurityProblem.invalid_privilege; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_privilege
 * @constant
 * @type {number}
 */
export
const invalid_privilege: SecurityProblem = SecurityProblem.invalid_privilege; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_pac
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_pac: SecurityProblem = SecurityProblem.invalid_pac; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_pac
 * @constant
 * @type {number}
 */
export
const invalid_pac: SecurityProblem = SecurityProblem.invalid_pac; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_already_active
 * @constant
 * @type {number}
 */
export
const SecurityProblem_already_active: SecurityProblem = SecurityProblem.already_active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_active
 * @constant
 * @type {number}
 */
export
const already_active: SecurityProblem = SecurityProblem.already_active; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SecurityProblem = $._decodeEnumerated;
export const _encode_SecurityProblem = $._encodeEnumerated;


/* eslint-enable */
