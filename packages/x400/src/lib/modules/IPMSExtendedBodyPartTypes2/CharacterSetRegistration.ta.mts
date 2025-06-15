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

/* START_OF_SYMBOL_DEFINITION CharacterSetRegistration */
/**
 * @summary CharacterSetRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterSetRegistration  ::=  INTEGER(1..32767)
 * ```
 */
export type CharacterSetRegistration = INTEGER;
/* END_OF_SYMBOL_DEFINITION CharacterSetRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterSetRegistration */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterSetRegistration */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterSetRegistration */
export const _decode_CharacterSetRegistration = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CharacterSetRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterSetRegistration */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterSetRegistration */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterSetRegistration */
export const _encode_CharacterSetRegistration = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CharacterSetRegistration */

/* eslint-enable */
