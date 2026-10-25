/* eslint-disable */
import {
    type ENUMERATED,
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


export enum _enum_for_ContactFunction {
    other = 0,
    customerMaintenanceManager = 1,
    providerMaintenanceManager = 2,
    customerAccountManager = 3,
    providerAccountManager = 4,
    fieldServiceManager = 5,
    repairman = 6,
    tester = 7,
    screener = 8,
}


/**
 * @summary ContactFunction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactFunction  ::=  ENUMERATED {
 *   other(0), customerMaintenanceManager(1), providerMaintenanceManager(2),
 *   customerAccountManager(3), providerAccountManager(4), fieldServiceManager(5),
 *   repairman(6), tester(7), screener(8), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type ContactFunction = _enum_for_ContactFunction | ENUMERATED;


/**
 * @summary ContactFunction_other
 * @constant
 * @type {number}
 */
export const ContactFunction_other = _enum_for_ContactFunction.other; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other = ContactFunction_other; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_customerMaintenanceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_customerMaintenanceManager = _enum_for_ContactFunction.customerMaintenanceManager; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary customerMaintenanceManager
 * @constant
 * @type {number}
 */
export const customerMaintenanceManager = ContactFunction_customerMaintenanceManager; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_providerMaintenanceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_providerMaintenanceManager = _enum_for_ContactFunction.providerMaintenanceManager; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary providerMaintenanceManager
 * @constant
 * @type {number}
 */
export const providerMaintenanceManager = ContactFunction_providerMaintenanceManager; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_customerAccountManager
 * @constant
 * @type {number}
 */
export const ContactFunction_customerAccountManager = _enum_for_ContactFunction.customerAccountManager; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary customerAccountManager
 * @constant
 * @type {number}
 */
export const customerAccountManager = ContactFunction_customerAccountManager; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_providerAccountManager
 * @constant
 * @type {number}
 */
export const ContactFunction_providerAccountManager = _enum_for_ContactFunction.providerAccountManager; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary providerAccountManager
 * @constant
 * @type {number}
 */
export const providerAccountManager = ContactFunction_providerAccountManager; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_fieldServiceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_fieldServiceManager = _enum_for_ContactFunction.fieldServiceManager; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fieldServiceManager
 * @constant
 * @type {number}
 */
export const fieldServiceManager = ContactFunction_fieldServiceManager; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_repairman
 * @constant
 * @type {number}
 */
export const ContactFunction_repairman = _enum_for_ContactFunction.repairman; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary repairman
 * @constant
 * @type {number}
 */
export const repairman = ContactFunction_repairman; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_tester
 * @constant
 * @type {number}
 */
export const ContactFunction_tester = _enum_for_ContactFunction.tester; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tester
 * @constant
 * @type {number}
 */
export const tester = ContactFunction_tester; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ContactFunction_screener
 * @constant
 * @type {number}
 */
export const ContactFunction_screener = _enum_for_ContactFunction.screener; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary screener
 * @constant
 * @type {number}
 */
export const screener = ContactFunction_screener; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ContactFunction = $._decodeEnumerated;




export const _encode_ContactFunction = $._encodeEnumerated;


/* eslint-enable */
