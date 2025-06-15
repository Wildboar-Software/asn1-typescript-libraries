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

/* START_OF_SYMBOL_DEFINITION EndToEndDelay */
/**
 * @summary EndToEndDelay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndToEndDelay  ::=  INTEGER(0..65535)
 * ```
 */
export type EndToEndDelay = INTEGER;
/* END_OF_SYMBOL_DEFINITION EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndToEndDelay */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _decode_EndToEndDelay */
export const _decode_EndToEndDelay = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndToEndDelay */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _encode_EndToEndDelay */
export const _encode_EndToEndDelay = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_EndToEndDelay */

/* eslint-enable */
