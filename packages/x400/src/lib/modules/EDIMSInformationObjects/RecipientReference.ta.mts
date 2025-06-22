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
 * @summary RecipientReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReference  ::=  TeletexString(SIZE (1..ub-recipient-reference))
 * ```
 */
export type RecipientReference = TeletexString; // TeletexString


export const _decode_RecipientReference = $._decodeTeletexString;


export const _encode_RecipientReference = $._encodeTeletexString;


/* eslint-enable */
