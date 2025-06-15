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



/* START_OF_SYMBOL_DEFINITION BackedUpStatus */
/**
 * @summary BackedUpStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackedUpStatus  ::=  BOOLEAN
 * ```
 */
export
type BackedUpStatus = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackedUpStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _decode_BackedUpStatus */
export const _decode_BackedUpStatus = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackedUpStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackedUpStatus */

/* START_OF_SYMBOL_DEFINITION _encode_BackedUpStatus */
export const _encode_BackedUpStatus = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_BackedUpStatus */

/* eslint-enable */
