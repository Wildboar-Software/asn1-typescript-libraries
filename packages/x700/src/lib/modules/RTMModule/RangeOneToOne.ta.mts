/* eslint-disable */
import {
    INTEGER,
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
 * @summary RangeOneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeOneToOne = INTEGER;


export const _decode_RangeOneToOne = $._decodeInteger;


export const _encode_RangeOneToOne = $._encodeInteger;


/* eslint-enable */
