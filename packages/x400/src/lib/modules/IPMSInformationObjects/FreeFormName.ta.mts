/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION FreeFormName */
/**
 * @summary FreeFormName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FreeFormName  ::=  TeletexString(SIZE (0..ub-free-form-name))
 * ```
 */
export type FreeFormName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION FreeFormName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeFormName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _decode_FreeFormName */
export const _decode_FreeFormName = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeFormName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _encode_FreeFormName */
export const _encode_FreeFormName = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_FreeFormName */

/* eslint-enable */
