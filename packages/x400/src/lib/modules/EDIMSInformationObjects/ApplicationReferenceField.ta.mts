/* eslint-disable */
import {
    type TeletexString,
    type ASN1Element as _Element,
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
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationReferenceField  ::=  TeletexString(SIZE (1..ub-application-reference))
 * ```
 */
export type ApplicationReferenceField = TeletexString; // TeletexString


export const _decode_ApplicationReferenceField: $.ASN1Decoder<TeletexString> = $._decodeTeletexString;


export const _encode_ApplicationReferenceField: $.ASN1Encoder<TeletexString> = $._encodeTeletexString;


/* eslint-enable */
