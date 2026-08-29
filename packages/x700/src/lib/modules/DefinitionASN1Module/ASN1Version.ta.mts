/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ASN1Version
 * @description
 *
 * ASN.1 editions a module conforms to. One bit is set for each edition
 * that should be able to parse the module. `v1990(0)` is ASN.1:1990;
 * `v1994(1)` is ASN.1:1994. Syntax of `asn1Version`. ITU-T Rec. X.750
 * (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1Version  ::=  BIT STRING {v1990(0), v1994(1)}
 * ```
 */
export type ASN1Version = BIT_STRING;

/**
 * @summary ASN1Version_v1990
 * @description
 *
 * Bit 0: module conforms to ASN.1:1990. X.750 A.3.3, A.3.5.
 * @constant
 */
export const ASN1Version_v1990: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1990
 * @description
 *
 * Bit 0: ASN.1:1990. Same as `ASN1Version_v1990`.
 * @constant
 */
export const v1990: number = ASN1Version_v1990; /* SHORT_NAMED_BIT */

/**
 * @summary ASN1Version_v1994
 * @description
 *
 * Bit 1: module conforms to ASN.1:1994. X.750 A.3.3, A.3.5.
 * @constant
 */
export const ASN1Version_v1994: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary v1994
 * @description
 *
 * Bit 1: ASN.1:1994. Same as `ASN1Version_v1994`.
 * @constant
 */
export const v1994: number = ASN1Version_v1994; /* SHORT_NAMED_BIT */


export const _decode_ASN1Version = $._decodeBitString;


export const _encode_ASN1Version = $._encodeBitString;


/* eslint-enable */
