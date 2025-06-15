/* eslint-disable */
import {
    IA5String,
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



/* START_OF_SYMBOL_DEFINITION SPuri */
/**
 * @summary SPuri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SPuri  ::=  IA5String
 * ```
 */
export
type SPuri = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION SPuri */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPuri */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPuri */

/* START_OF_SYMBOL_DEFINITION _decode_SPuri */
export const _decode_SPuri = $._decodeIA5String;
/* END_OF_SYMBOL_DEFINITION _decode_SPuri */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPuri */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPuri */

/* START_OF_SYMBOL_DEFINITION _encode_SPuri */
export const _encode_SPuri = $._encodeIA5String;

/* END_OF_SYMBOL_DEFINITION _encode_SPuri */

/* eslint-enable */
