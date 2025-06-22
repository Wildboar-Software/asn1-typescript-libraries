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
 * @summary PerceivedTroubleSeverity_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedTroubleSeverity-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PerceivedTroubleSeverity_number = INTEGER;


/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_outOfService: PerceivedTroubleSeverity_number = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export const outOfService: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_outOfService; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_backInService: PerceivedTroubleSeverity_number = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export const backInService: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_backInService; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_serviceImpairment: PerceivedTroubleSeverity_number = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export const serviceImpairment: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_serviceImpairment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_nonServiceAffectingTrouble: PerceivedTroubleSeverity_number = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export const nonServiceAffectingTrouble: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_nonServiceAffectingTrouble; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PerceivedTroubleSeverity_number = $._decodeInteger;




export const _encode_PerceivedTroubleSeverity_number = $._encodeInteger;


/* eslint-enable */
