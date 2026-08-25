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
 * @summary AutoActionType
 * @description
 *
 * This general-attribute identifies the type of the auto-action whose execution is the
 * subject of this entry. The registered auto-action is identified by this attribute
 * combined with the corresponding value of the auto-action-registration-identifier
 * general-attribute. See ITU-T X.413 (1999), §11.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AutoActionType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AutoActionType = $._decodeObjectIdentifier;


export const _encode_AutoActionType = $._encodeObjectIdentifier;


/* eslint-enable */
