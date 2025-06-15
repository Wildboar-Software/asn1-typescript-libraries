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
 * @summary Colocated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Colocated  ::=  BOOLEAN
 * ```
 */
export type Colocated = BOOLEAN; // BooleanType


export const _decode_Colocated = $._decodeBoolean;


export const _encode_Colocated = $._encodeBoolean;


/* eslint-enable */
