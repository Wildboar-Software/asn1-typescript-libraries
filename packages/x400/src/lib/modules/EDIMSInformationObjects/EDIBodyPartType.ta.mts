/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary EDIBodyPartType
 * @description
 *
 * `EDIBodyPartType`. Indicates the EDI standard and EDI character sets used in the
 * Primary Body Part. It is represented by a single object identifier. See ITU-T X.435
 * (1999), §8.2.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIBodyPartType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type EDIBodyPartType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_EDIBodyPartType = $._decodeObjectIdentifier;


export const _encode_EDIBodyPartType = $._encodeObjectIdentifier;


/* eslint-enable */
