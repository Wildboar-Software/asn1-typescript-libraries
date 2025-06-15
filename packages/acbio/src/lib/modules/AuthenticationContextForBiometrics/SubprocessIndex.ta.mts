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

/* START_OF_SYMBOL_DEFINITION SubprocessIndex */
/**
 * @summary SubprocessIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubprocessIndex  ::=  INTEGER (0..65535)
 * ```
 */
export type SubprocessIndex = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndex */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _decode_SubprocessIndex */
export const _decode_SubprocessIndex = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndex */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _encode_SubprocessIndex */
export const _encode_SubprocessIndex = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SubprocessIndex */

/* eslint-enable */
