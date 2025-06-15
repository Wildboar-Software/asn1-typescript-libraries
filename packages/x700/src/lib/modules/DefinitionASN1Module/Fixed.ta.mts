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

/* START_OF_SYMBOL_DEFINITION Fixed */
/**
 * @summary Fixed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fixed  ::=  BOOLEAN
 * ```
 */
export type Fixed = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Fixed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Fixed */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Fixed */

/* START_OF_SYMBOL_DEFINITION _decode_Fixed */
export const _decode_Fixed = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_Fixed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Fixed */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Fixed */

/* START_OF_SYMBOL_DEFINITION _encode_Fixed */
export const _encode_Fixed = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_Fixed */

/* eslint-enable */
