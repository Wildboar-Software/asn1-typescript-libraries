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

/* START_OF_SYMBOL_DEFINITION PortNumber */
/**
 * @summary PortNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortNumber  ::=  INTEGER
 * ```
 */
export type PortNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION PortNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PortNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PortNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PortNumber */
export const _decode_PortNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PortNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PortNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PortNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PortNumber */
export const _encode_PortNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PortNumber */

/* eslint-enable */
