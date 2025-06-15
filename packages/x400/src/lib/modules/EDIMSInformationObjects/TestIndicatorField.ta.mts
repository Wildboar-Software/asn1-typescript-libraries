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

/* START_OF_SYMBOL_DEFINITION TestIndicatorField */
/**
 * @summary TestIndicatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestIndicatorField  ::=  BOOLEAN
 * ```
 */
export type TestIndicatorField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestIndicatorField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _decode_TestIndicatorField */
export const _decode_TestIndicatorField = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestIndicatorField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _encode_TestIndicatorField */
export const _encode_TestIndicatorField = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_TestIndicatorField */

/* eslint-enable */
