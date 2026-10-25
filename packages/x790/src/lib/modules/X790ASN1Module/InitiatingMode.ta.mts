/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiatingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiatingMode  ::=  INTEGER {
 *   -- Integer values are to be registered in the standard.
 *   managerDirect(0), managerIndirect(1), agentOriginated(2),
 *   managerIndirectEMail(4), managerIndirectFax(5), managerIndirectPersonal(6),
 *   managerIndirectPhone(7)}
 * ```
 */
export
type InitiatingMode = INTEGER;

/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerDirect = 0 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export
const managerDirect = InitiatingMode_managerDirect satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirect = 1 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export
const managerIndirect = InitiatingMode_managerIndirect satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export
const InitiatingMode_agentOriginated = 2 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export
const agentOriginated = InitiatingMode_agentOriginated satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectEMail = 4 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export
const managerIndirectEMail = InitiatingMode_managerIndirectEMail satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectFax = 5 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export
const managerIndirectFax = InitiatingMode_managerIndirectFax satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectPersonal = 6 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export
const managerIndirectPersonal = InitiatingMode_managerIndirectPersonal satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectPhone = 7 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export
const managerIndirectPhone = InitiatingMode_managerIndirectPhone satisfies InitiatingMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InitiatingMode = $._decodeInteger;
export const _encode_InitiatingMode = $._encodeInteger;


/* eslint-enable */
