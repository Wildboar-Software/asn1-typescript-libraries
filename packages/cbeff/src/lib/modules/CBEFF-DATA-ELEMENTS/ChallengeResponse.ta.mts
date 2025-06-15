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

/* START_OF_SYMBOL_DEFINITION ChallengeResponse */
/**
 * @summary ChallengeResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChallengeResponse  ::=  OCTET STRING
 * ```
 */
export type ChallengeResponse = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ChallengeResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChallengeResponse */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChallengeResponse */

/* START_OF_SYMBOL_DEFINITION _decode_ChallengeResponse */
export const _decode_ChallengeResponse = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ChallengeResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChallengeResponse */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChallengeResponse */

/* START_OF_SYMBOL_DEFINITION _encode_ChallengeResponse */
export const _encode_ChallengeResponse = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ChallengeResponse */

/* eslint-enable */
