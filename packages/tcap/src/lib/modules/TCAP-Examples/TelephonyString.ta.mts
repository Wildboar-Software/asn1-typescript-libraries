/* eslint-disable */
import {
    IA5String,
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
 * @summary TelephonyString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephonyString  ::=
 *   IA5String
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "*" |
 *            "#"))(SIZE (1..15))
 * ```
 */
export type TelephonyString = IA5String; // IA5String


export const _decode_TelephonyString = $._decodeIA5String;


export const _encode_TelephonyString = $._encodeIA5String;


/* eslint-enable */
