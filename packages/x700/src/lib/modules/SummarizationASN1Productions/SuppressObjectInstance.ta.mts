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
 * If true, the observed object instance is omitted from
 * all summary reports (`{summarizationAttribute 26}`).
 * Set true only when the instance can be determined by
 * other means or is not required (e.g. statistics).
 * ITU-T Rec. X.738 (11/93)
 * [§8.1.2.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.2.3, A.4.
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
