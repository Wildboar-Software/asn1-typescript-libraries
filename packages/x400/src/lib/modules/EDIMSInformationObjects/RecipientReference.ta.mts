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
 * `RecipientReference`. The Recipient Reference identifies a reference meaningful to the
 * recipient’s EDI application. This is semantically identical to the "Recipient’s
 * Reference, Password" of the EDIFACT UNB segment. See ITU-T X.435 (1999), §8.2.3.6.
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
