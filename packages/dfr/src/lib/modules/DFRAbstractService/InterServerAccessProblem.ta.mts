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
 * @summary InterServerAccessProblem
 * @description
 *
 * Why an external referent store could not be used. ISO/IEC 10166-1:1991
 * §8.3.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InterServerAccessProblem {
    referent_store_not_found = 1,
    referent_store_unreachable = 2,
    referent_store_unavailable = 3,
    referent_store_security_problem = 4,
}

/**
 * @summary InterServerAccessProblem
 * @description
 *
 * Why an external referent store could not be used. ISO/IEC 10166-1:1991
 * §8.3.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InterServerAccessProblem = _enum_for_InterServerAccessProblem;

/**
 * @summary InterServerAccessProblem
 * @description
 *
 * Why an external referent store could not be used. ISO/IEC 10166-1:1991
 * §8.3.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterServerAccessProblem  ::=  ENUMERATED {
 *     referent-store-not-found        (1),    -- bad store identification
 *     referent-store-unreachable      (2),    -- no port to reach it
 *     referent-store-unavailable      (3),    -- temporarily
 *     referent-store-security-problem (4)     -- access rights
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InterServerAccessProblem = _enum_for_InterServerAccessProblem;

/**
 * @summary InterServerAccessProblem_referent_store_not_found
 * @description
 *
 * Accessee identification in the DOR (or Directory) is bad.
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_not_found: InterServerAccessProblem = InterServerAccessProblem.referent_store_not_found; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_not_found
 * @description
 *
 * Accessee identification in the DOR (or Directory) is bad.
 * @constant
 * @type {number}
 */
export
const referent_store_not_found: InterServerAccessProblem = InterServerAccessProblem.referent_store_not_found; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_unreachable
 * @description
 *
 * No protocol in common with the accessee.
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_unreachable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_unreachable
 * @description
 *
 * No protocol in common with the accessee.
 * @constant
 * @type {number}
 */
export
const referent_store_unreachable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_unavailable
 * @description
 *
 * Accessee temporarily unavailable.
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_unavailable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_unavailable
 * @description
 *
 * Accessee temporarily unavailable.
 * @constant
 * @type {number}
 */
export
const referent_store_unavailable: InterServerAccessProblem = InterServerAccessProblem.referent_store_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterServerAccessProblem_referent_store_security_problem
 * @description
 *
 * User or accessor lacks rights at the accessee.
 * @constant
 * @type {number}
 */
export
const InterServerAccessProblem_referent_store_security_problem: InterServerAccessProblem = InterServerAccessProblem.referent_store_security_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referent_store_security_problem
 * @description
 *
 * User or accessor lacks rights at the accessee.
 * @constant
 * @type {number}
 */
export
const referent_store_security_problem: InterServerAccessProblem = InterServerAccessProblem.referent_store_security_problem; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InterServerAccessProblem = $._decodeEnumerated;
export const _encode_InterServerAccessProblem = $._encodeEnumerated;


/* eslint-enable */
