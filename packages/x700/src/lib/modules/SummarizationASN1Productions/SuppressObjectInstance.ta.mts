/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary SuppressObjectInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuppressObjectInstance  ::=  BOOLEAN
 * ```
 */
export type SuppressObjectInstance = BOOLEAN; // BooleanType


export const _decode_SuppressObjectInstance = $._decodeBoolean;


export const _encode_SuppressObjectInstance = $._encodeBoolean;


/* eslint-enable */
