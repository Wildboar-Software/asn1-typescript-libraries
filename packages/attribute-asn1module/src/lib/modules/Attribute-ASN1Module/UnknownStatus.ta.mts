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



/* START_OF_SYMBOL_DEFINITION UnknownStatus */
/**
 * @summary UnknownStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownStatus  ::=  BOOLEAN
 * ```
 */
export
type UnknownStatus = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _decode_UnknownStatus */
export const _decode_UnknownStatus = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _encode_UnknownStatus */
export const _encode_UnknownStatus = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_UnknownStatus */

/* eslint-enable */
