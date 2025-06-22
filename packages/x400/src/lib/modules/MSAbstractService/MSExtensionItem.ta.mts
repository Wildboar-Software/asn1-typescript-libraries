/* eslint-disable */
import {
    INSTANCE_OF,
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
 * @summary MSExtensionItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSExtensionItem  ::=  INSTANCE OF MS-EXTENSION
 * ```
 */
export type MSExtensionItem = INSTANCE_OF; // InstanceOfType


export const _decode_MSExtensionItem = $._decodeInstanceOf;


export const _encode_MSExtensionItem = $._encodeInstanceOf;


/* eslint-enable */
