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

/* START_OF_SYMBOL_DEFINITION SequenceNumber */
/**
 * @summary SequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER(0..ub-messages)
 * ```
 */
export type SequenceNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceNumber */
export const _decode_SequenceNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceNumber */
export const _encode_SequenceNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SequenceNumber */

/* eslint-enable */
