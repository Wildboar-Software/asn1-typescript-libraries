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
 * @summary Mode_selector_mode_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mode-selector-mode-value ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Mode_selector_mode_value = INTEGER;


/**
 * @summary Mode_selector_mode_value_x410_1984_mode
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_x410_1984_mode: Mode_selector_mode_value = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_x410_1984_mode
 * @constant
 * @type {number}
 */
export const x410_1984_mode: Mode_selector_mode_value = Mode_selector_mode_value_x410_1984_mode; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_normal_mode
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_normal_mode: Mode_selector_mode_value = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_normal_mode
 * @constant
 * @type {number}
 */
export const normal_mode: Mode_selector_mode_value = Mode_selector_mode_value_normal_mode; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Mode_selector_mode_value = $._decodeInteger;




export const _encode_Mode_selector_mode_value = $._encodeInteger;


/* eslint-enable */
