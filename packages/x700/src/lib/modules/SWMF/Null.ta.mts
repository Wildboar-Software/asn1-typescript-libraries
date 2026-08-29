/* eslint-disable */
import {
    NULL,
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
 * @summary Null
 * @description
 *
 * Supporting `NULL` production in SWMF. The rec does not assign
 * this alias to a distinct attribute or parameter beyond the ASN.1
 * supporting productions. ITU-T Rec. X.744 (10/96)
 * [A.8](https://www.itu.int/rec/T-REC-X.744-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Null  ::=  NULL
 * ```
 */
export type Null = NULL; // NullType


export const _decode_Null = $._decodeNull;


export const _encode_Null = $._encodeNull;


/* eslint-enable */
