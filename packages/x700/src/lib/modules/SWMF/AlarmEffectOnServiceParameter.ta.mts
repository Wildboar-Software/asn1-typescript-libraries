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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary AlarmEffectOnServiceParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmEffectOnServiceParameter  ::=  BOOLEAN
 * ```
 */
export type AlarmEffectOnServiceParameter = BOOLEAN; // BooleanType


export const _decode_AlarmEffectOnServiceParameter = $._decodeBoolean;


export const _encode_AlarmEffectOnServiceParameter = $._encodeBoolean;


/* eslint-enable */
