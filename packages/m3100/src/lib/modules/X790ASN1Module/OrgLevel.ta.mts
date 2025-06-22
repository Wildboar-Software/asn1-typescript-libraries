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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary OrgLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrgLevel  ::=  INTEGER {
 *   no-escalation(0), first-level(1), second-level(2), third-level(3),
 *   fourth-level(4), fifth-level(5), sixth-level(6)}
 * ```
 */
export type OrgLevel = INTEGER;


/**
 * @summary OrgLevel_no_escalation
 * @constant
 * @type {number}
 */
export const OrgLevel_no_escalation: OrgLevel = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_no_escalation
 * @constant
 * @type {number}
 */
export const no_escalation: OrgLevel = OrgLevel_no_escalation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const OrgLevel_first_level: OrgLevel = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const first_level: OrgLevel = OrgLevel_first_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const OrgLevel_second_level: OrgLevel = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const second_level: OrgLevel = OrgLevel_second_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const OrgLevel_third_level: OrgLevel = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const third_level: OrgLevel = OrgLevel_third_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fourth_level: OrgLevel = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const fourth_level: OrgLevel = OrgLevel_fourth_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fifth_level: OrgLevel = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const fifth_level: OrgLevel = OrgLevel_fifth_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_sixth_level: OrgLevel = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const sixth_level: OrgLevel = OrgLevel_sixth_level; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_OrgLevel = $._decodeInteger;




export const _encode_OrgLevel = $._encodeInteger;


/* eslint-enable */
