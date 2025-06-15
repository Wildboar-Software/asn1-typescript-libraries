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

/* START_OF_SYMBOL_DEFINITION InterchangeLength */
/**
 * @summary InterchangeLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterchangeLength  ::=  INTEGER
 * ```
 */
export type InterchangeLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION InterchangeLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InterchangeLength */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InterchangeLength */

/* START_OF_SYMBOL_DEFINITION _decode_InterchangeLength */
export const _decode_InterchangeLength = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_InterchangeLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InterchangeLength */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InterchangeLength */

/* START_OF_SYMBOL_DEFINITION _encode_InterchangeLength */
export const _encode_InterchangeLength = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_InterchangeLength */

/* eslint-enable */
