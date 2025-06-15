/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION JoinContextType */
/**
 * @summary JoinContextType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinContextType  ::=  CONTEXT.&id({SupportedContexts})
 * ```
 */
export type JoinContextType = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION JoinContextType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinContextType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _decode_JoinContextType */
export const _decode_JoinContextType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinContextType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinContextType */

/* START_OF_SYMBOL_DEFINITION _encode_JoinContextType */
export const _encode_JoinContextType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_JoinContextType */

/* eslint-enable */
