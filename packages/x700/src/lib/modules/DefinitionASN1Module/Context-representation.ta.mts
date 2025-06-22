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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Context_representation {
    aCTION_INFO = 0,
    aCTION_REPLY = 1,
    eVENT_INFO = 2,
    eVENT_REPLY = 3,
    sPECIFIC_ERROR = 4,
}


/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type Context_representation = _enum_for_Context_representation;


/**
 * @summary Context_representation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-representation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const Context_representation = _enum_for_Context_representation;


/**
 * @summary Context_representation_aCTION_INFO
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aCTION_INFO
 * @constant
 * @type {number}
 */
export const aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_aCTION_REPLY
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aCTION_REPLY
 * @constant
 * @type {number}
 */
export const aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_eVENT_INFO
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eVENT_INFO
 * @constant
 * @type {number}
 */
export const eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_eVENT_REPLY
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eVENT_REPLY
 * @constant
 * @type {number}
 */
export const eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_sPECIFIC_ERROR
 * @constant
 * @type {number}
 */
export const Context_representation_sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sPECIFIC_ERROR
 * @constant
 * @type {number}
 */
export const sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Context_representation = $._decodeEnumerated;




export const _encode_Context_representation = $._encodeEnumerated;


/* eslint-enable */
