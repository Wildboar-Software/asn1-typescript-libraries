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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


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
export type InitiatingMode = INTEGER;


/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerDirect: InitiatingMode = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const managerDirect: InitiatingMode = InitiatingMode_managerDirect; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirect: InitiatingMode = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const managerIndirect: InitiatingMode = InitiatingMode_managerIndirect; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const InitiatingMode_agentOriginated: InitiatingMode = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const agentOriginated: InitiatingMode = InitiatingMode_agentOriginated; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectEMail: InitiatingMode = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const managerIndirectEMail: InitiatingMode = InitiatingMode_managerIndirectEMail; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectFax: InitiatingMode = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const managerIndirectFax: InitiatingMode = InitiatingMode_managerIndirectFax; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPersonal: InitiatingMode = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const managerIndirectPersonal: InitiatingMode = InitiatingMode_managerIndirectPersonal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPhone: InitiatingMode = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const managerIndirectPhone: InitiatingMode = InitiatingMode_managerIndirectPhone; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_InitiatingMode = $._decodeInteger;




export const _encode_InitiatingMode = $._encodeInteger;


/* eslint-enable */
