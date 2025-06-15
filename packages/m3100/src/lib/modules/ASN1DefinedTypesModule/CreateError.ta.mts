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
 * @summary CreateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateError  ::=  INTEGER
 * ```
 */
export type CreateError = INTEGER;




export const _decode_CreateError = $._decodeInteger;




export const _encode_CreateError = $._encodeInteger;


/* eslint-enable */
