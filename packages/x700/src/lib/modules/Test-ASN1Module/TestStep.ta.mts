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

/* START_OF_SYMBOL_DEFINITION TestStep */
/**
 * @summary TestStep
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestStep  ::=  INTEGER
 * ```
 */
export type TestStep = INTEGER;
/* END_OF_SYMBOL_DEFINITION TestStep */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStep */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestStep */

/* START_OF_SYMBOL_DEFINITION _decode_TestStep */
export const _decode_TestStep = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TestStep */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStep */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestStep */

/* START_OF_SYMBOL_DEFINITION _encode_TestStep */
export const _encode_TestStep = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TestStep */

/* eslint-enable */
