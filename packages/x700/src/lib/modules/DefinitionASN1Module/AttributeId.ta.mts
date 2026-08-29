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
 * @summary AttributeId
 * @description
 *
 * Object identifier of a managed-object attribute. Argument of
 * `getTextualRepresentation`: names the attribute whose value is
 * returned as a sequence of line images. ITU-T Rec. X.750 (10/96)
 * [§8.3.1.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.4](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AttributeId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AttributeId = $._decodeObjectIdentifier;


export const _encode_AttributeId = $._encodeObjectIdentifier;


/* eslint-enable */
