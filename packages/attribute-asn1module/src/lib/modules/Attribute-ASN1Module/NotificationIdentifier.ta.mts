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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION NotificationIdentifier */
/**
 * @summary NotificationIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationIdentifier  ::=  INTEGER
 * ```
 */
export
type NotificationIdentifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationIdentifier */
export const _decode_NotificationIdentifier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationIdentifier */
export const _encode_NotificationIdentifier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NotificationIdentifier */

/* eslint-enable */
