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

/* START_OF_SYMBOL_DEFINITION BodyPartNumber */
/**
 * @summary BodyPartNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartNumber  ::=  INTEGER(1..MAX)
 * ```
 */
export type BodyPartNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION BodyPartNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartNumber */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartNumber */
export const _decode_BodyPartNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartNumber */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartNumber */
export const _encode_BodyPartNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartNumber */

/* eslint-enable */
