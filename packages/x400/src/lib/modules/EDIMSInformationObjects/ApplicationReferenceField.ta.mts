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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ApplicationReferenceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationReferenceField  ::=  TeletexString(SIZE (1..ub-application-reference))
 * ```
 */
export type ApplicationReferenceField = TeletexString; // TeletexString


export const _decode_ApplicationReferenceField = $._decodeTeletexString;


export const _encode_ApplicationReferenceField = $._encodeTeletexString;


/* eslint-enable */
