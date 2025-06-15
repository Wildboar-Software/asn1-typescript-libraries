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



/* START_OF_SYMBOL_DEFINITION NameBinding */
/**
 * @summary NameBinding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameBinding  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type NameBinding = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION NameBinding */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameBinding */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameBinding */

/* START_OF_SYMBOL_DEFINITION _decode_NameBinding */
export const _decode_NameBinding = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_NameBinding */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameBinding */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameBinding */

/* START_OF_SYMBOL_DEFINITION _encode_NameBinding */
export const _encode_NameBinding = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_NameBinding */

/* eslint-enable */
