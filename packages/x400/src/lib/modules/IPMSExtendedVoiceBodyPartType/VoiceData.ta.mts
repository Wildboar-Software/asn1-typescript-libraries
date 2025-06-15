/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION VoiceData */
/**
 * @summary VoiceData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VoiceData  ::=  OCTET STRING
 * ```
 */
export type VoiceData = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION VoiceData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VoiceData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VoiceData */

/* START_OF_SYMBOL_DEFINITION _decode_VoiceData */
export const _decode_VoiceData = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_VoiceData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VoiceData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VoiceData */

/* START_OF_SYMBOL_DEFINITION _encode_VoiceData */
export const _encode_VoiceData = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_VoiceData */

/* eslint-enable */
