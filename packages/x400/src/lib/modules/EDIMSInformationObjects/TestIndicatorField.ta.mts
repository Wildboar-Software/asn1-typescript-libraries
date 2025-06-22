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
 * @summary TestIndicatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestIndicatorField  ::=  BOOLEAN
 * ```
 */
export type TestIndicatorField = BOOLEAN; // BooleanType


export const _decode_TestIndicatorField = $._decodeBoolean;


export const _encode_TestIndicatorField = $._encodeBoolean;


/* eslint-enable */
