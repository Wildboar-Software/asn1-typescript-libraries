/* eslint-disable */
import {
    type INTEGER,
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
export const OrgLevel_no_escalation: 0 = 0 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_no_escalation
 * @constant
 * @type {number}
 */
export const no_escalation: 0 = OrgLevel_no_escalation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const OrgLevel_first_level: 1 = 1 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const first_level: 1 = OrgLevel_first_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const OrgLevel_second_level: 2 = 2 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const second_level: 2 = OrgLevel_second_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const OrgLevel_third_level: 3 = 3 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const third_level: 3 = OrgLevel_third_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fourth_level: 4 = 4 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const fourth_level: 4 = OrgLevel_fourth_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fifth_level: 5 = 5 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const fifth_level: 5 = OrgLevel_fifth_level; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_sixth_level: 6 = 6 satisfies OrgLevel; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const sixth_level: 6 = OrgLevel_sixth_level; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_OrgLevel: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_OrgLevel: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
