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
 * @summary Mode_selector_mode_value
 * @description
 *
 * `x410-1984-mode` (0): Presentation Layer operates as in CCITT Rec.
 * X.410-1984; no context definition list, default context name, or
 * presentation requirements on `P-CONNECT` request; User data of
 * P-CONNECT and P-U-ABORT is a single SET, P-TOKEN-PLEASE a single
 * INTEGER, P-DATA a single OCTET STRING (X.216 §10.2.1.10, Annex A).
 * `normal-mode` (1): full presentation protocol.
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
 * @description
 *
 * X.410-1984 mode (X.216 §10.2.1.10, Annex A).
 *
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_x410_1984_mode: 0 = 0 satisfies Mode_selector_mode_value; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_x410_1984_mode
 * @constant
 * @type {number}
 */
export const x410_1984_mode: 0 = Mode_selector_mode_value_x410_1984_mode; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_normal_mode
 * @description
 *
 * Full presentation protocol (X.216 §10.2.1.10).
 *
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_normal_mode: 1 = 1 satisfies Mode_selector_mode_value; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Mode_selector_mode_value_normal_mode
 * @constant
 * @type {number}
 */
export const normal_mode: 1 = Mode_selector_mode_value_normal_mode; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Mode_selector_mode_value: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Mode_selector_mode_value: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
