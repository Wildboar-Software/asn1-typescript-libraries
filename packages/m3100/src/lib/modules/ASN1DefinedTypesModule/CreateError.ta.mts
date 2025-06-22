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
