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

/* START_OF_SYMBOL_DEFINITION ProcessingErrorFlag */
/**
 * @summary ProcessingErrorFlag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingErrorFlag  ::=  BOOLEAN
 * ```
 */
export type ProcessingErrorFlag = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingErrorFlag */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessingErrorFlag */
export const _decode_ProcessingErrorFlag = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingErrorFlag */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingErrorFlag */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessingErrorFlag */
export const _encode_ProcessingErrorFlag = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_ProcessingErrorFlag */

/* eslint-enable */
