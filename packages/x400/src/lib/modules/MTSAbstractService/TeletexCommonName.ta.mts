/* eslint-disable */
import {
    TeletexString,
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
 * @summary TeletexCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexCommonName  ::=  TeletexString(SIZE (1..ub-common-name-length))
 * ```
 */
export type TeletexCommonName = TeletexString; // TeletexString


export const _decode_TeletexCommonName = $._decodeTeletexString;


export const _encode_TeletexCommonName = $._encodeTeletexString;


/* eslint-enable */
