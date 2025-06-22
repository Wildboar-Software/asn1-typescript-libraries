/* eslint-disable */
import {
    PrintableString,
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
 * @summary PrivacyMark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..ub-privacy-mark-length))
 * ```
 */
export type PrivacyMark = PrintableString; // PrintableString


export const _decode_PrivacyMark = $._decodePrintableString;


export const _encode_PrivacyMark = $._encodePrintableString;


/* eslint-enable */
