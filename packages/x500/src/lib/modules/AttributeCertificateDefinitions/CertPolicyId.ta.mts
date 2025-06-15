/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CertPolicyId */
/**
 * @summary CertPolicyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_CertPolicyId */
export const _decode_CertPolicyId = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_CertPolicyId */
export const _encode_CertPolicyId = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_CertPolicyId */

/* eslint-enable */
