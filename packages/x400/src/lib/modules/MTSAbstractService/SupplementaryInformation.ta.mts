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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SupplementaryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplementaryInformation  ::=
 *   PrintableString(SIZE (1..ub-supplementary-info-length))
 * ```
 */
export type SupplementaryInformation = PrintableString; // PrintableString


export const _decode_SupplementaryInformation = $._decodePrintableString;


export const _encode_SupplementaryInformation = $._encodePrintableString;


/* eslint-enable */
