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
const InitiatingMode_managerDirect: 0 = 0 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export
const managerDirect: 0 = InitiatingMode_managerDirect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirect: 1 = 1 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export
const managerIndirect: 1 = InitiatingMode_managerIndirect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export
const InitiatingMode_agentOriginated: 2 = 2 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export
const agentOriginated: 2 = InitiatingMode_agentOriginated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectEMail: 4 = 4 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export
const managerIndirectEMail: 4 = InitiatingMode_managerIndirectEMail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectFax: 5 = 5 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export
const managerIndirectFax: 5 = InitiatingMode_managerIndirectFax; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectPersonal: 6 = 6 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export
const managerIndirectPersonal: 6 = InitiatingMode_managerIndirectPersonal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export
const InitiatingMode_managerIndirectPhone: 7 = 7 satisfies InitiatingMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export
const managerIndirectPhone: 7 = InitiatingMode_managerIndirectPhone; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InitiatingMode: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_InitiatingMode: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
