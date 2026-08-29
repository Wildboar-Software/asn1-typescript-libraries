/* eslint-disable */
import {
    ENUMERATED,
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


export enum _enum_for_ExchangeMode {
    sync = 0,
    async = 1,
}


/**
 * @summary ExchangeMode
 * @description
 *
 * Whether the sender may start another operation before this
 * one's response or error arrives. ITU-T Rec. X.1080.1 (05/2018)
 * [§10.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExchangeMode  ::=  ENUMERATED {
 *   sync     (0),
 *   async    (1),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type ExchangeMode = _enum_for_ExchangeMode | ENUMERATED;


/**
 * @summary ExchangeMode_sync
 * @description
 *
 * Sender shall not initiate another operation until a response or
 * error for this operation is received. ITU-T Rec. X.1080.1
 * (05/2018) §10.1 i).
 *
 * @constant
 * @type {number}
 */
export const ExchangeMode_sync: ExchangeMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sync
 * @description
 *
 * Sender shall not initiate another operation until a response or
 * error for this operation is received. ITU-T Rec. X.1080.1
 * (05/2018) §10.1 i).
 *
 * @constant
 * @type {number}
 */
export const sync: ExchangeMode = ExchangeMode_sync; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ExchangeMode_async
 * @description
 *
 * No restriction on starting another operation before this one's
 * response or error. ITU-T Rec. X.1080.1 (05/2018) §10.1 i).
 *
 * @constant
 * @type {number}
 */
export const ExchangeMode_async: ExchangeMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary async
 * @description
 *
 * No restriction on starting another operation before this one's
 * response or error. ITU-T Rec. X.1080.1 (05/2018) §10.1 i).
 *
 * @constant
 * @type {number}
 */
export const async: ExchangeMode = ExchangeMode_async; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ExchangeMode = $._decodeEnumerated;




export const _encode_ExchangeMode = $._encodeEnumerated;


/* eslint-enable */
