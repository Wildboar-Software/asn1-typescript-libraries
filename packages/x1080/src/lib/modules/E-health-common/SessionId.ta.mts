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
 * @summary SessionId
 * @description
 *
 * Unique among concurrent sessions of that type between two
 * entities; reusable after the session is terminated. Range
 * 1..32767. ITU-T Rec. X.1080.1 (05/2018)
 * [§11.1.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
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
