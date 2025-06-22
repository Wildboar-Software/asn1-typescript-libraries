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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Document_Type_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-Type-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Document_Type_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Document_Type_Name = $._decodeObjectIdentifier;


export const _encode_Document_Type_Name = $._encodeObjectIdentifier;


/* eslint-enable */
