/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Why credentials or privileges were rejected. ISO/IEC 10166-1:1991 §8.3.9.
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
 * Why credentials or privileges were rejected. ISO/IEC 10166-1:1991 §8.3.9.
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
 * Why credentials or privileges were rejected. ISO/IEC 10166-1:1991 §8.3.9.
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
const SecurityProblem: typeof _enum_for_SecurityProblem = _enum_for_SecurityProblem;

/**
 * @summary SecurityProblem_inappropriate_authentication
 * @description
 *
 * Credential protection level does not match what was requested.
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriate_authentication: _enum_for_SecurityProblem.inappropriate_authentication = SecurityProblem.inappropriate_authentication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_authentication
 * @description
 *
 * Credential protection level does not match what was requested.
 * @constant
 * @type {number}
 */
export
const inappropriate_authentication: _enum_for_SecurityProblem.inappropriate_authentication = SecurityProblem.inappropriate_authentication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_creds
 * @description
 *
 * Simple credentials were invalid.
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_creds: _enum_for_SecurityProblem.invalid_creds = SecurityProblem.invalid_creds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_creds
 * @description
 *
 * Simple credentials were invalid.
 * @constant
 * @type {number}
 */
export
const invalid_creds: _enum_for_SecurityProblem.invalid_creds = SecurityProblem.invalid_creds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_privilege
 * @description
 *
 * Privileges inside the PAC are invalid.
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_privilege: _enum_for_SecurityProblem.invalid_privilege = SecurityProblem.invalid_privilege; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_privilege
 * @description
 *
 * Privileges inside the PAC are invalid.
 * @constant
 * @type {number}
 */
export
const invalid_privilege: _enum_for_SecurityProblem.invalid_privilege = SecurityProblem.invalid_privilege; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_pac
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_pac: _enum_for_SecurityProblem.invalid_pac = SecurityProblem.invalid_pac; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_pac
 * @constant
 * @type {number}
 */
export
const invalid_pac: _enum_for_SecurityProblem.invalid_pac = SecurityProblem.invalid_pac; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_already_active
 * @description
 *
 * This user is already bound to the server.
 * @constant
 * @type {number}
 */
export
const SecurityProblem_already_active: _enum_for_SecurityProblem.already_active = SecurityProblem.already_active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_active
 * @description
 *
 * This user is already bound to the server.
 * @constant
 * @type {number}
 */
export
const already_active: _enum_for_SecurityProblem.already_active = SecurityProblem.already_active; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_SecurityProblem(el: _Element): SecurityProblem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case SecurityProblem.inappropriate_authentication: return SecurityProblem.inappropriate_authentication;
        case SecurityProblem.invalid_creds: return SecurityProblem.invalid_creds;
        case SecurityProblem.invalid_privilege: return SecurityProblem.invalid_privilege;
        case SecurityProblem.invalid_pac: return SecurityProblem.invalid_pac;
        case SecurityProblem.already_active: return SecurityProblem.already_active;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for SecurityProblem.",
                el,
            );
    }
}
export const _encode_SecurityProblem: $.ASN1Encoder<SecurityProblem> = $._encodeEnumerated as $.ASN1Encoder<SecurityProblem>;


/* eslint-enable */
