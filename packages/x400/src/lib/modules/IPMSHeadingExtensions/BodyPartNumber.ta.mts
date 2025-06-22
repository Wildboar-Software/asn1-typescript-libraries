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
 * @summary BodyPartNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartNumber  ::=  INTEGER(1..MAX)
 * ```
 */
export type BodyPartNumber = INTEGER;


export const _decode_BodyPartNumber = $._decodeInteger;


export const _encode_BodyPartNumber = $._encodeInteger;


/* eslint-enable */
