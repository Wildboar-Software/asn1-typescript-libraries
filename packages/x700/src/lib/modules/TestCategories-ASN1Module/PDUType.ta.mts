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
 * @summary PDUType
 * @description
 *
 * OID identifying a protocol element type for protocol
 * integrity tests. The rec does not register values. ITU-T Rec.
 * X.737 (11/95) [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PDUType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_PDUType = $._decodeObjectIdentifier;


export const _encode_PDUType = $._encodeObjectIdentifier;


/* eslint-enable */
