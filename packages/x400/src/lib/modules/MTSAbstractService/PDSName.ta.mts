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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary PDSName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSName  ::=  PrintableString(SIZE (1..ub-pds-name-length))
 * ```
 */
export type PDSName = PrintableString; // PrintableString


export const _decode_PDSName = $._decodePrintableString;


export const _encode_PDSName = $._encodePrintableString;


/* eslint-enable */
