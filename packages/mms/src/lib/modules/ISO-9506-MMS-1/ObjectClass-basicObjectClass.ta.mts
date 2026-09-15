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
 * Basic Object Class values (ISO 9506-1:2003 §7.6.2). Some values depend on
 * CBBs or minor version (ISO 9506-2:2003 §7.5.4).
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
 * @description
 *
 * Named Variable. CBB `vnam` (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariable: ObjectClass_basicObjectClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariable
 * @description
 *
 * Named Variable. CBB `vnam` (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const namedVariable: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @description
 *
 * Scattered Access (Annex E). CBB `vsca`. ASN.1 notes value 1 as reserved for
 * Annex E (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_scatteredAccess: ObjectClass_basicObjectClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_scatteredAccess
 * @description
 *
 * Scattered Access (Annex E). CBB `vsca`. ASN.1 notes value 1 as reserved for
 * Annex E (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const scatteredAccess: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_scatteredAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @description
 *
 * Named Variable List. CBB `vlis` (ISO 9506-1:2003 §7.6.2;
 * ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedVariableList: ObjectClass_basicObjectClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedVariableList
 * @description
 *
 * Named Variable List. CBB `vlis` (ISO 9506-1:2003 §7.6.2;
 * ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const namedVariableList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedVariableList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @description
 *
 * Named Type. CBB `vnam` (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_namedType: ObjectClass_basicObjectClass = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_namedType
 * @description
 *
 * Named Type. CBB `vnam` (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const namedType: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_namedType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @description
 *
 * Semaphore (ISO 9506-1:2003 §7.6.2). Creating a semaphore also creates an
 * Event Condition of the same name (§7.4.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_semaphore: ObjectClass_basicObjectClass = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_semaphore
 * @description
 *
 * Semaphore (ISO 9506-1:2003 §7.6.2). Creating a semaphore also creates an
 * Event Condition of the same name (§7.4.2).
 * @constant
 * @type {number}
 */
export
const semaphore: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_semaphore; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @description
 *
 * Event Condition (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventCondition: ObjectClass_basicObjectClass = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventCondition
 * @description
 *
 * Event Condition (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const eventCondition: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventCondition; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @description
 *
 * Event Action (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventAction: ObjectClass_basicObjectClass = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventAction
 * @description
 *
 * Event Action (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const eventAction: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventAction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @description
 *
 * Event Enrollment (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_eventEnrollment: ObjectClass_basicObjectClass = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_eventEnrollment
 * @description
 *
 * Event Enrollment (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const eventEnrollment: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_eventEnrollment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @description
 *
 * Journal (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_journal: ObjectClass_basicObjectClass = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_journal
 * @description
 *
 * Journal (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const journal: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_journal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @description
 *
 * Domain (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_domain: ObjectClass_basicObjectClass = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_domain
 * @description
 *
 * Domain (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const domain: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @description
 *
 * Program Invocation (ISO 9506-1:2003 §7.6.2). With monitor, creation also
 * creates Event Condition, Event Action, and Event Enrollment of the same name
 * (§7.4.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_programInvocation: ObjectClass_basicObjectClass = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_programInvocation
 * @description
 *
 * Program Invocation (ISO 9506-1:2003 §7.6.2). With monitor, creation also
 * creates Event Condition, Event Action, and Event Enrollment of the same name
 * (§7.4.2).
 * @constant
 * @type {number}
 */
export
const programInvocation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_programInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @description
 *
 * Operator Station (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_operatorStation: ObjectClass_basicObjectClass = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_operatorStation
 * @description
 *
 * Operator Station (ISO 9506-1:2003 §7.6.2).
 * @constant
 * @type {number}
 */
export
const operatorStation: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_operatorStation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @description
 *
 * Data Exchange. Shall not appear in minor version 1 (ISO 9506-1:2003 §7.6.2;
 * ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_dataExchange: ObjectClass_basicObjectClass = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_dataExchange
 * @description
 *
 * Data Exchange. Shall not appear in minor version 1 (ISO 9506-1:2003 §7.6.2;
 * ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const dataExchange: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_dataExchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @description
 *
 * Access Control List. Shall not appear in minor version 1 or 2
 * (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const ObjectClass_basicObjectClass_accessControlList: ObjectClass_basicObjectClass = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_basicObjectClass_accessControlList
 * @description
 *
 * Access Control List. Shall not appear in minor version 1 or 2
 * (ISO 9506-1:2003 §7.6.2; ISO 9506-2:2003 §7.5.4).
 * @constant
 * @type {number}
 */
export
const accessControlList: ObjectClass_basicObjectClass = ObjectClass_basicObjectClass_accessControlList; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ObjectClass_basicObjectClass = $._decodeInteger;
export const _encode_ObjectClass_basicObjectClass = $._encodeInteger;


/* eslint-enable */
