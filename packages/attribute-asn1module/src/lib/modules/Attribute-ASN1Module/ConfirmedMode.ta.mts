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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION ConfirmedMode */
/**
 * @summary ConfirmedMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedMode  ::=  BOOLEAN
 * ```
 */
export
type ConfirmedMode = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ConfirmedMode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfirmedMode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConfirmedMode */

/* START_OF_SYMBOL_DEFINITION _decode_ConfirmedMode */
export const _decode_ConfirmedMode = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_ConfirmedMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfirmedMode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConfirmedMode */

/* START_OF_SYMBOL_DEFINITION _encode_ConfirmedMode */
export const _encode_ConfirmedMode = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_ConfirmedMode */

/* eslint-enable */
