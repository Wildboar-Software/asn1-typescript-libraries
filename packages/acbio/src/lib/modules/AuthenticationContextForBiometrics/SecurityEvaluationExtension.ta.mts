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

/* START_OF_SYMBOL_DEFINITION SecurityEvaluationExtension */
/**
 * @summary SecurityEvaluationExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityEvaluationExtension  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type SecurityEvaluationExtension = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SecurityEvaluationExtension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEvaluationExtension */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEvaluationExtension */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityEvaluationExtension */
export const _decode_SecurityEvaluationExtension = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SecurityEvaluationExtension */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEvaluationExtension */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEvaluationExtension */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityEvaluationExtension */
export const _encode_SecurityEvaluationExtension = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SecurityEvaluationExtension */

/* eslint-enable */
