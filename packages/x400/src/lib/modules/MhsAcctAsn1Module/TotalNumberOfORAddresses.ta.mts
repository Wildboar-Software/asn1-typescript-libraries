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
 * @summary TotalNumberOfORAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TotalNumberOfORAddresses  ::=  INTEGER
 * ```
 */
export type TotalNumberOfORAddresses = INTEGER;


export const _decode_TotalNumberOfORAddresses = $._decodeInteger;


export const _encode_TotalNumberOfORAddresses = $._encodeInteger;


/* eslint-enable */
