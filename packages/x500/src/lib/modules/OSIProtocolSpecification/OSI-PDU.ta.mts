/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION OSI_PDU */
/**
 * @summary OSI_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OSI-PDU{APPLICATION-CONTEXT:protocol}  ::=  TYPE-IDENTIFIER.&Type (
 *   OsiBind{{protocol}} |
 *   OsiBindResult{{protocol}} |
 *   OsiBindError{{protocol}} |
 *   OsiOperation{{protocol.&Operations}} |
 *   OsiUnbind |
 *   PresentationAbort )
 * ```
 */
export type OSI_PDU = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OSI_PDU */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_OSI_PDU */
export const _decode_OSI_PDU = $._decodeAny;
/* END_OF_SYMBOL_DEFINITION _decode_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OSI_PDU */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OSI_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_OSI_PDU */
export const _encode_OSI_PDU = $._encodeAny;

/* END_OF_SYMBOL_DEFINITION _encode_OSI_PDU */

/* eslint-enable */
