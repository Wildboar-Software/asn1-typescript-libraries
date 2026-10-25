/* eslint-disable */
import {
    type PrintableString,
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
 * @summary PrivacyMark
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..ub-privacy-mark-length))
 * ```
 */
export type PrivacyMark = PrintableString; // PrintableString


export const _decode_PrivacyMark: $.ASN1Decoder<string> = $._decodePrintableString;


export const _encode_PrivacyMark: $.ASN1Encoder<string> = $._encodePrintableString;


/* eslint-enable */
