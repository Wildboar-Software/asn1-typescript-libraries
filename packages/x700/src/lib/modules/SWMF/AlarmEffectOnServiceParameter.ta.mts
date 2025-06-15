/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION AlarmEffectOnServiceParameter */
/**
 * @summary AlarmEffectOnServiceParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmEffectOnServiceParameter  ::=  BOOLEAN
 * ```
 */
export type AlarmEffectOnServiceParameter = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmEffectOnServiceParameter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmEffectOnServiceParameter */
export const _decode_AlarmEffectOnServiceParameter = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmEffectOnServiceParameter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmEffectOnServiceParameter */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmEffectOnServiceParameter */
export const _encode_AlarmEffectOnServiceParameter = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_AlarmEffectOnServiceParameter */

/* eslint-enable */
