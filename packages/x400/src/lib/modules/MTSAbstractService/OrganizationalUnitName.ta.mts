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
 * @summary OrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitName  ::=
 *   PrintableString(SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export type OrganizationalUnitName = PrintableString; // PrintableString


export const _decode_OrganizationalUnitName = $._decodePrintableString;


export const _encode_OrganizationalUnitName = $._encodePrintableString;


/* eslint-enable */
