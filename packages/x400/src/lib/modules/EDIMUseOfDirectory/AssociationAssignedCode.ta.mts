/* eslint-disable */
import {
    TeletexString,
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
 * @summary AssociationAssignedCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationAssignedCode  ::=
 *   TeletexString(SIZE (1..ub-edi-association-assigned-code))
 * ```
 */
export type AssociationAssignedCode = TeletexString; // TeletexString


export const _decode_AssociationAssignedCode = $._decodeTeletexString;


export const _encode_AssociationAssignedCode = $._encodeTeletexString;


/* eslint-enable */
