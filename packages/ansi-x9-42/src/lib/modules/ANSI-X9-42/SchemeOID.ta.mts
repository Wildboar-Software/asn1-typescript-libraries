/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION SchemeOID */
/**
 * @summary SchemeOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeOID  ::=  KEY-AGREEMENT.&id({NamedSchemes})
 * ```
 */
export type SchemeOID = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION SchemeOID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeOID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeOID */
export const _decode_SchemeOID = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeOID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeOID */
export const _encode_SchemeOID = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_SchemeOID */

/* eslint-enable */
