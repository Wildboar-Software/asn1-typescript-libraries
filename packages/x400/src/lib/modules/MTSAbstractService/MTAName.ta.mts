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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary MTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTAName  ::=  IA5String(SIZE (1..ub-mta-name-length))
 * ```
 */
export type MTAName = IA5String; // IA5String


export const _decode_MTAName = $._decodeIA5String;


export const _encode_MTAName = $._encodeIA5String;


/* eslint-enable */
