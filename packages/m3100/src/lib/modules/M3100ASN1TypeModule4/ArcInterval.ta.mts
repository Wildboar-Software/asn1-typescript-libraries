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
 * @summary ArcInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcInterval  ::=  INTEGER(0..5940)
 * ```
 */
export type ArcInterval = INTEGER;




export const _decode_ArcInterval = $._decodeInteger;




export const _encode_ArcInterval = $._encodeInteger;


/* eslint-enable */
