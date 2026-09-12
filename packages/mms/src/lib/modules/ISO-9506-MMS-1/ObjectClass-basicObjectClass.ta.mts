/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObjectClass_basicObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClass-basicObjectClass ::= INTEGER {
 *     namedVariable (0) -- value 1 is reserved for definition in Annex E
 *     ,
 *     scatteredAccess (1),
 *     namedVariableList (2),
 *     namedType (3),
 *     semaphore (4),
 *     eventCondition (5),
 *     eventAction (6),
 *     eventEnrollment (7),
 *     journal (8),
 *     domain (9),
 *     programInvocation (10),
 *     operatorStation (11),
 *     dataExchange (12),
 *     -- Shall not appear in minor version 1
 *     accessControlList (13) -- Shall not appear in minor version 1 or 2
 * } (0..13)
 * ```
 */
export
type ObjectClass_basicObjectClass = INTEGER;

/**
 * @summary ObjectClass_basicObjectClass_namedVariable
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariable: ObjectClass_basicObjectClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariable
 * @constant
 * @type {number}
 */
export
const namedVariable: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_scatteredAccess: ObjectClass_basicObjectClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @constant
 * @type {number}
 */
export
const scatteredAccess: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_scatteredAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariableList: ObjectClass_basicObjectClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @constant
 * @type {number}
 */
export
const namedVariableList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariableList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedType: ObjectClass_basicObjectClass = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @constant
 * @type {number}
 */
export
const namedType: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_semaphore: ObjectClass_basicObjectClass = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @constant
 * @type {number}
 */
export
const semaphore: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_semaphore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventCondition: ObjectClass_basicObjectClass = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @constant
 * @type {number}
 */
export
const eventCondition: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventCondition; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventAction: ObjectClass_basicObjectClass = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @constant
 * @type {number}
 */
export
const eventAction: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventAction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventEnrollment: ObjectClass_basicObjectClass = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @constant
 * @type {number}
 */
export
const eventEnrollment: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventEnrollment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_journal: ObjectClass_basicObjectClass = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @constant
 * @type {number}
 */
export
const journal: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_journal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_domain: ObjectClass_basicObjectClass = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @constant
 * @type {number}
 */
export
const domain: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_programInvocation: ObjectClass_basicObjectClass = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @constant
 * @type {number}
 */
export
const programInvocation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_programInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_operatorStation: ObjectClass_basicObjectClass = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @constant
 * @type {number}
 */
export
const operatorStation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_operatorStation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_dataExchange: ObjectClass_basicObjectClass = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @constant
 * @type {number}
 */
export
const dataExchange: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_dataExchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_accessControlList: ObjectClass_basicObjectClass = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @constant
 * @type {number}
 */
export
const accessControlList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_accessControlList; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ObjectClass_basicObjectClass = $._decodeInteger;
export const _encode_ObjectClass_basicObjectClass = $._encodeInteger;


/* eslint-enable */
