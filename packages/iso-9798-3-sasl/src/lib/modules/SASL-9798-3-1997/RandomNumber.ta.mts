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



/* START_OF_SYMBOL_DEFINITION RandomNumber */
/**
 * @summary RandomNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RandomNumber  ::=  OCTET STRING (SIZE(8..MAX))
 * ```
 */
export
type RandomNumber = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RandomNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _decode_RandomNumber */
export const _decode_RandomNumber = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _encode_RandomNumber */
export const _encode_RandomNumber = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_RandomNumber */

/* eslint-enable */
