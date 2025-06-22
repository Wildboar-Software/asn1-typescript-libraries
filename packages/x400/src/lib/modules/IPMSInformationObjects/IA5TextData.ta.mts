/* eslint-disable */
import {
    IA5String,
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
 * @summary IA5TextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextData  ::=  IA5String
 * ```
 */
export type IA5TextData = IA5String; // IA5String


export const _decode_IA5TextData = $._decodeIA5String;


export const _encode_IA5TextData = $._encodeIA5String;


/* eslint-enable */
