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
 * @summary CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonName  ::=  PrintableString(SIZE (1..ub-common-name-length))
 * ```
 */
export type CommonName = PrintableString; // PrintableString


export const _decode_CommonName = $._decodePrintableString;


export const _encode_CommonName = $._encodePrintableString;


/* eslint-enable */
