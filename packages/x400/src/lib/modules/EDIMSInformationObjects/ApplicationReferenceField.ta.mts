/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION ApplicationReferenceField */
/**
 * @summary ApplicationReferenceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationReferenceField  ::=  TeletexString(SIZE (1..ub-application-reference))
 * ```
 */
export type ApplicationReferenceField = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationReferenceField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationReferenceField */
export const _decode_ApplicationReferenceField = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationReferenceField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationReferenceField */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationReferenceField */
export const _encode_ApplicationReferenceField = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationReferenceField */

/* eslint-enable */
