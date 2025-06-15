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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION InitiatingMode */
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
/* END_OF_SYMBOL_DEFINITION InitiatingMode */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerDirect */
/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerDirect: InitiatingMode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerDirect */

/* START_OF_SYMBOL_DEFINITION managerDirect */
/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const managerDirect: InitiatingMode = InitiatingMode_managerDirect; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerDirect */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirect */
/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirect: InitiatingMode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirect */

/* START_OF_SYMBOL_DEFINITION managerIndirect */
/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const managerIndirect: InitiatingMode = InitiatingMode_managerIndirect; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirect */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_agentOriginated */
/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const InitiatingMode_agentOriginated: InitiatingMode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_agentOriginated */

/* START_OF_SYMBOL_DEFINITION agentOriginated */
/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const agentOriginated: InitiatingMode = InitiatingMode_agentOriginated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION agentOriginated */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectEMail */
/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectEMail: InitiatingMode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectEMail */

/* START_OF_SYMBOL_DEFINITION managerIndirectEMail */
/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const managerIndirectEMail: InitiatingMode = InitiatingMode_managerIndirectEMail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectEMail */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectFax */
/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectFax: InitiatingMode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectFax */

/* START_OF_SYMBOL_DEFINITION managerIndirectFax */
/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const managerIndirectFax: InitiatingMode = InitiatingMode_managerIndirectFax; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectFax */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPersonal */
/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPersonal: InitiatingMode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPersonal */

/* START_OF_SYMBOL_DEFINITION managerIndirectPersonal */
/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const managerIndirectPersonal: InitiatingMode = InitiatingMode_managerIndirectPersonal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectPersonal */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPhone */
/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPhone: InitiatingMode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPhone */

/* START_OF_SYMBOL_DEFINITION managerIndirectPhone */
/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const managerIndirectPhone: InitiatingMode = InitiatingMode_managerIndirectPhone; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectPhone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatingMode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _decode_InitiatingMode */
export const _decode_InitiatingMode = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatingMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _encode_InitiatingMode */
export const _encode_InitiatingMode = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_InitiatingMode */

/* eslint-enable */
