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

/* START_OF_SYMBOL_DEFINITION ModeConfirmed */
/**
 * @summary ModeConfirmed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModeConfirmed  ::=  BOOLEAN
 * ```
 */
export type ModeConfirmed = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModeConfirmed */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _decode_ModeConfirmed */
export const _decode_ModeConfirmed = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModeConfirmed */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _encode_ModeConfirmed */
export const _encode_ModeConfirmed = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_ModeConfirmed */

/* eslint-enable */
