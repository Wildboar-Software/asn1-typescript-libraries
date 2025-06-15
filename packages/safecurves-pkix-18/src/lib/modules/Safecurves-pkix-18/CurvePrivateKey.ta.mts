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



/* START_OF_SYMBOL_DEFINITION CurvePrivateKey */
/**
 * @summary CurvePrivateKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurvePrivateKey  ::=  OCTET STRING
 * ```
 */
export
type CurvePrivateKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CurvePrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_CurvePrivateKey */
export const _decode_CurvePrivateKey = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CurvePrivateKey */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_CurvePrivateKey */
export const _encode_CurvePrivateKey = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_CurvePrivateKey */

/* eslint-enable */
