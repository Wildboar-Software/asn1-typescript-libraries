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
 * @summary SelectionPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectionPriority  ::=  INTEGER(1..10)
 * ```
 */
export type SelectionPriority = INTEGER;




export const _decode_SelectionPriority = $._decodeInteger;




export const _encode_SelectionPriority = $._encodeInteger;


/* eslint-enable */
