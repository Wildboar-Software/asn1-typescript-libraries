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
 * @summary NumberOfCircuits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfCircuits  ::=  INTEGER
 * ```
 */
export type NumberOfCircuits = INTEGER;




export const _decode_NumberOfCircuits = $._decodeInteger;




export const _encode_NumberOfCircuits = $._encodeInteger;


/* eslint-enable */
