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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION ECPoint */
/**
 * @summary ECPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPoint  ::=  OCTET STRING
 * ```
 */
export
type ECPoint = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ECPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPoint */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPoint */

/* START_OF_SYMBOL_DEFINITION _decode_ECPoint */
export const _decode_ECPoint = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ECPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPoint */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPoint */

/* START_OF_SYMBOL_DEFINITION _encode_ECPoint */
export const _encode_ECPoint = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ECPoint */

/* eslint-enable */
