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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FreeFormName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FreeFormName  ::=  TeletexString(SIZE (0..ub-free-form-name))
 * ```
 */
export type FreeFormName = TeletexString; // TeletexString


export const _decode_FreeFormName = $._decodeTeletexString;


export const _encode_FreeFormName = $._encodeTeletexString;


/* eslint-enable */
