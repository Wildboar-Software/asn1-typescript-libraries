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
 * @summary SessionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionId  ::=  INTEGER (1..32767)
 * ```
 */
export type SessionId = INTEGER;




export const _decode_SessionId = $._decodeInteger;




export const _encode_SessionId = $._encodeInteger;


/* eslint-enable */
