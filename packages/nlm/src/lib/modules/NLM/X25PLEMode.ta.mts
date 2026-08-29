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
 * @summary X25PLEMode
 * @description
 *
 * DCE/DTE mode of an X.25 PLE: (0) DTE for both X.25 and 8208, (1) DCE for X.25
 * only, (2) DTE acting as DCE for 8208 only. Syntax of `x25PLEMode`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_X25PLEMode {
    dTE = 0,
    dCE = 1,
    dTEasDCE = 2,
}


/**
 * @summary X25PLEMode
 * @description
 *
 * DCE/DTE mode of an X.25 PLE: (0) DTE for both X.25 and 8208, (1) DCE for X.25
 * only, (2) DTE acting as DCE for 8208 only. Syntax of `x25PLEMode`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export type X25PLEMode = _enum_for_X25PLEMode;


/**
 * @summary X25PLEMode
 * @description
 *
 * DCE/DTE mode of an X.25 PLE: (0) DTE for both X.25 and 8208, (1) DCE for X.25
 * only, (2) DTE acting as DCE for 8208 only. Syntax of `x25PLEMode`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X25PLEMode  ::=  ENUMERATED {dTE(0), dCE(1), dTEasDCE(2)}
 * ```
 *
 * @enum {number}
 */
export const X25PLEMode = _enum_for_X25PLEMode;


/**
 * @summary X25PLEMode_dTE
 * @description
 *
 * DTE mode (X.25 and ISO/IEC 8208).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTE: X25PLEMode =
    X25PLEMode.dTE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dTE
 * @description
 *
 * DTE mode (X.25 and ISO/IEC 8208).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const dTE: X25PLEMode =
    X25PLEMode.dTE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary X25PLEMode_dCE
 * @description
 *
 * DCE mode (ITU-T X.25 only).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const X25PLEMode_dCE: X25PLEMode =
    X25PLEMode.dCE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dCE
 * @description
 *
 * DCE mode (ITU-T X.25 only).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const dCE: X25PLEMode =
    X25PLEMode.dCE; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary X25PLEMode_dTEasDCE
 * @description
 *
 * DTE acting as DCE (ISO/IEC 8208 only).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const X25PLEMode_dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dTEasDCE
 * @description
 *
 * DTE acting as DCE (ISO/IEC 8208 only).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const dTEasDCE: X25PLEMode =
    X25PLEMode.dTEasDCE; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_X25PLEMode = $._decodeEnumerated;




export const _encode_X25PLEMode = $._encodeEnumerated;


/* eslint-enable */
