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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary DiscardReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReason  ::=  INTEGER(0..255)
 * ```
 */
export type DiscardReason = INTEGER;




export const _decode_DiscardReason = $._decodeInteger;




export const _encode_DiscardReason = $._encodeInteger;


/* eslint-enable */
