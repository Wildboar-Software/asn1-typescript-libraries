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

/* START_OF_SYMBOL_DEFINITION GenericCounter */
/**
 * @summary GenericCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericCounter  ::=  INTEGER
 * ```
 */
export type GenericCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION GenericCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericCounter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericCounter */

/* START_OF_SYMBOL_DEFINITION _decode_GenericCounter */
export const _decode_GenericCounter = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_GenericCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericCounter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericCounter */

/* START_OF_SYMBOL_DEFINITION _encode_GenericCounter */
export const _encode_GenericCounter = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_GenericCounter */

/* eslint-enable */
