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

/* START_OF_SYMBOL_DEFINITION MtsUserType */
/**
 * @summary MtsUserType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MtsUserType  ::=  INTEGER {ms(1), ua(2), au(3)}
 * ```
 */
export type MtsUserType = INTEGER;
/* END_OF_SYMBOL_DEFINITION MtsUserType */

/* START_OF_SYMBOL_DEFINITION MtsUserType_ms */
/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const MtsUserType_ms: MtsUserType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_ms */

/* START_OF_SYMBOL_DEFINITION ms */
/**
 * @summary MtsUserType_ms
 * @constant
 * @type {number}
 */
export const ms: MtsUserType = MtsUserType_ms; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ms */

/* START_OF_SYMBOL_DEFINITION MtsUserType_ua */
/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const MtsUserType_ua: MtsUserType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_ua */

/* START_OF_SYMBOL_DEFINITION ua */
/**
 * @summary MtsUserType_ua
 * @constant
 * @type {number}
 */
export const ua: MtsUserType = MtsUserType_ua; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ua */

/* START_OF_SYMBOL_DEFINITION MtsUserType_au */
/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const MtsUserType_au: MtsUserType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MtsUserType_au */

/* START_OF_SYMBOL_DEFINITION au */
/**
 * @summary MtsUserType_au
 * @constant
 * @type {number}
 */
export const au: MtsUserType = MtsUserType_au; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION au */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MtsUserType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _decode_MtsUserType */
export const _decode_MtsUserType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MtsUserType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MtsUserType */

/* START_OF_SYMBOL_DEFINITION _encode_MtsUserType */
export const _encode_MtsUserType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MtsUserType */

/* eslint-enable */
