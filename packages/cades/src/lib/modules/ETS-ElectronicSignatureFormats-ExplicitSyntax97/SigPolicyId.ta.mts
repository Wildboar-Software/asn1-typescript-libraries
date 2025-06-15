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



/* START_OF_SYMBOL_DEFINITION SigPolicyId */
/**
 * @summary SigPolicyId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SigPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_SigPolicyId */
export const _decode_SigPolicyId = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_SigPolicyId */
export const _encode_SigPolicyId = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_SigPolicyId */

/* eslint-enable */
