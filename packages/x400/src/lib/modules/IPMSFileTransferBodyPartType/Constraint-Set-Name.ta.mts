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
 * @summary Constraint_Set_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Constraint-Set-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Constraint_Set_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Constraint_Set_Name = $._decodeObjectIdentifier;


export const _encode_Constraint_Set_Name = $._encodeObjectIdentifier;


/* eslint-enable */
