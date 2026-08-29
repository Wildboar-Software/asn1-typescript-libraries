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
 * Built-in GDMO parameter contexts (X.722 §8.5.3.1):
 * `aCTION-INFO(0)` — CMIS Action information;
 * `aCTION-REPLY(1)` — CMIS Action reply;
 * `eVENT-INFO(2)` — CMIS Event information;
 * `eVENT-REPLY(3)` — CMIS Event reply;
 * `sPECIFIC-ERROR(4)` — CMIS processing-failure error.
 * ITU-T Rec. X.750 (10/96)
 * [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722 (01/92)
 * [§8.5.3.1](https://www.itu.int/rec/T-REC-X.722-199201-I).
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
 * @description
 *
 * ACTION-INFO: parameter in CMIS Action information. X.722 §8.5.3.1.
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aCTION_INFO
 * @description
 *
 * ACTION-INFO. Same as `Context_representation_aCTION_INFO`.
 * @constant
 * @type {number}
 */
export const aCTION_INFO: Context_representation =
    Context_representation.aCTION_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_aCTION_REPLY
 * @description
 *
 * ACTION-REPLY: parameter in CMIS Action reply. X.722 §8.5.3.1.
 * @constant
 * @type {number}
 */
export const Context_representation_aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aCTION_REPLY
 * @description
 *
 * ACTION-REPLY. Same as `Context_representation_aCTION_REPLY`.
 * @constant
 * @type {number}
 */
export const aCTION_REPLY: Context_representation =
    Context_representation.aCTION_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_eVENT_INFO
 * @description
 *
 * EVENT-INFO: parameter in CMIS Event information. X.722 §8.5.3.1.
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eVENT_INFO
 * @description
 *
 * EVENT-INFO. Same as `Context_representation_eVENT_INFO`.
 * @constant
 * @type {number}
 */
export const eVENT_INFO: Context_representation =
    Context_representation.eVENT_INFO; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_eVENT_REPLY
 * @description
 *
 * EVENT-REPLY: parameter in CMIS Event reply. X.722 §8.5.3.1.
 * @constant
 * @type {number}
 */
export const Context_representation_eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary eVENT_REPLY
 * @description
 *
 * EVENT-REPLY. Same as `Context_representation_eVENT_REPLY`.
 * @constant
 * @type {number}
 */
export const eVENT_REPLY: Context_representation =
    Context_representation.eVENT_REPLY; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Context_representation_sPECIFIC_ERROR
 * @description
 *
 * SPECIFIC-ERROR: CMIS processing-failure error. X.722 §8.5.3.1.
 * @constant
 * @type {number}
 */
export const Context_representation_sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sPECIFIC_ERROR
 * @description
 *
 * SPECIFIC-ERROR. Same as `Context_representation_sPECIFIC_ERROR`.
 * @constant
 * @type {number}
 */
export const sPECIFIC_ERROR: Context_representation =
    Context_representation.sPECIFIC_ERROR; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Context_representation = $._decodeEnumerated;




export const _encode_Context_representation = $._encodeEnumerated;


/* eslint-enable */
