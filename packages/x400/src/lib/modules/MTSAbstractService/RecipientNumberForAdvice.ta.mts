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
 * @summary RecipientNumberForAdvice
 * @description
 *
 * This argument contains the Telephone, Telex or Teletex number of the recipient, to be
 * used in conjunction with the counter-collection-with-advice and bureau-fax-delivery
 * physical-delivery-modes . See ITU-T X.411 (1999), §8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientNumberForAdvice  ::=
 *   TeletexString(SIZE (1..ub-recipient-number-for-advice-length))
 * ```
 */
export type RecipientNumberForAdvice = TeletexString; // TeletexString


export const _decode_RecipientNumberForAdvice = $._decodeTeletexString;


export const _encode_RecipientNumberForAdvice = $._encodeTeletexString;


/* eslint-enable */
