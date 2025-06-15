/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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



/* START_OF_SYMBOL_DEFINITION SecurityAlarmCause */
/**
 * @summary SecurityAlarmCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmCause  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SecurityAlarmCause = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmCause */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAlarmCause */
export const _decode_SecurityAlarmCause = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmCause */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmCause */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAlarmCause */
export const _encode_SecurityAlarmCause = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAlarmCause */

/* eslint-enable */
