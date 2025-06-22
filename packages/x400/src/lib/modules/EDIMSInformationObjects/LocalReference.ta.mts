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
 * @summary LocalReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalReference  ::=  PrintableString(SIZE (0..ub-local-reference))
 * ```
 */
export type LocalReference = PrintableString; // PrintableString


export const _decode_LocalReference = $._decodePrintableString;


export const _encode_LocalReference = $._encodePrintableString;


/* eslint-enable */
