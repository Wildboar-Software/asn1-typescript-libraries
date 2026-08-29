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
 * @summary TerminationReason
 * @description
 *
 * OID identifying a termination reason. A.7 only; the rec
 * does not register values or assign this type to a clause-8
 * attribute. ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminationReason  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TerminationReason = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_TerminationReason = $._decodeObjectIdentifier;


export const _encode_TerminationReason = $._encodeObjectIdentifier;


/* eslint-enable */
