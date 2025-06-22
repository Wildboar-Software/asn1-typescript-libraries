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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Boolean
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Boolean  ::=  BOOLEAN
 * ```
 */
export type Boolean = BOOLEAN; // BooleanType


export const _decode_Boolean = $._decodeBoolean;


export const _encode_Boolean = $._encodeBoolean;


/* eslint-enable */
