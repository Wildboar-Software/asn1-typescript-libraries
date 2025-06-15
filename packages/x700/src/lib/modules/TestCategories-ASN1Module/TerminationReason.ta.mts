/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION TerminationReason */
/**
 * @summary TerminationReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminationReason  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TerminationReason = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION TerminationReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminationReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _decode_TerminationReason */
export const _decode_TerminationReason = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminationReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminationReason */

/* START_OF_SYMBOL_DEFINITION _encode_TerminationReason */
export const _encode_TerminationReason = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_TerminationReason */

/* eslint-enable */
