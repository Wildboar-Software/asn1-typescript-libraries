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

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version */
/**
 * @summary TCPIPBIPMessage_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCPIPBIPMessage-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TCPIPBIPMessage_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version_version_1 */
/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const TCPIPBIPMessage_version_version_1: TCPIPBIPMessage_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TCPIPBIPMessage_version_version_1 */

/* START_OF_SYMBOL_DEFINITION version_1 */
/**
 * @summary TCPIPBIPMessage_version_version_1
 * @constant
 * @type {number}
 */
export const version_1: TCPIPBIPMessage_version = TCPIPBIPMessage_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version_1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_version */
export const _decode_TCPIPBIPMessage_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCPIPBIPMessage_version */

/* START_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_version */
export const _encode_TCPIPBIPMessage_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TCPIPBIPMessage_version */

/* eslint-enable */
