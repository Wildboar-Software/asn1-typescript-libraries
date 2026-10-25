/* eslint-disable */
import {
    type ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ContactFunction {
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
export
type ContactFunction = _enum_for_ContactFunction | ENUMERATED;

/**
 * @summary ContactFunction_other
 * @constant
 * @type {number}
 */
export
const ContactFunction_other = _enum_for_ContactFunction.other satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other = ContactFunction_other satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_customerMaintenanceManager
 * @constant
 * @type {number}
 */
export
const ContactFunction_customerMaintenanceManager = _enum_for_ContactFunction.customerMaintenanceManager satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customerMaintenanceManager
 * @constant
 * @type {number}
 */
export
const customerMaintenanceManager = ContactFunction_customerMaintenanceManager satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_providerMaintenanceManager
 * @constant
 * @type {number}
 */
export
const ContactFunction_providerMaintenanceManager = _enum_for_ContactFunction.providerMaintenanceManager satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary providerMaintenanceManager
 * @constant
 * @type {number}
 */
export
const providerMaintenanceManager = ContactFunction_providerMaintenanceManager satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_customerAccountManager
 * @constant
 * @type {number}
 */
export
const ContactFunction_customerAccountManager = _enum_for_ContactFunction.customerAccountManager satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary customerAccountManager
 * @constant
 * @type {number}
 */
export
const customerAccountManager = ContactFunction_customerAccountManager satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_providerAccountManager
 * @constant
 * @type {number}
 */
export
const ContactFunction_providerAccountManager = _enum_for_ContactFunction.providerAccountManager satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary providerAccountManager
 * @constant
 * @type {number}
 */
export
const providerAccountManager = ContactFunction_providerAccountManager satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_fieldServiceManager
 * @constant
 * @type {number}
 */
export
const ContactFunction_fieldServiceManager = _enum_for_ContactFunction.fieldServiceManager satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fieldServiceManager
 * @constant
 * @type {number}
 */
export
const fieldServiceManager = ContactFunction_fieldServiceManager satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_repairman
 * @constant
 * @type {number}
 */
export
const ContactFunction_repairman = _enum_for_ContactFunction.repairman satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repairman
 * @constant
 * @type {number}
 */
export
const repairman = ContactFunction_repairman satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_tester
 * @constant
 * @type {number}
 */
export
const ContactFunction_tester = _enum_for_ContactFunction.tester satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tester
 * @constant
 * @type {number}
 */
export
const tester = ContactFunction_tester satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContactFunction_screener
 * @constant
 * @type {number}
 */
export
const ContactFunction_screener = _enum_for_ContactFunction.screener satisfies ContactFunction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary screener
 * @constant
 * @type {number}
 */
export
const screener = ContactFunction_screener satisfies ContactFunction; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ContactFunction = $._decodeEnumerated;
export const _encode_ContactFunction = $._encodeEnumerated;


/* eslint-enable */
