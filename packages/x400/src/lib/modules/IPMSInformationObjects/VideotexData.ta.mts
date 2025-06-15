/* eslint-disable */
import {
    VideotexString,
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

/* START_OF_SYMBOL_DEFINITION VideotexData */
/**
 * @summary VideotexData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexData  ::=  VideotexString
 * ```
 */
export type VideotexData = VideotexString; // VideotexString
/* END_OF_SYMBOL_DEFINITION VideotexData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexData */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexData */

/* START_OF_SYMBOL_DEFINITION _decode_VideotexData */
export const _decode_VideotexData = $._decodeVideotexString;
/* END_OF_SYMBOL_DEFINITION _decode_VideotexData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexData */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexData */

/* START_OF_SYMBOL_DEFINITION _encode_VideotexData */
export const _encode_VideotexData = $._encodeVideotexString;

/* END_OF_SYMBOL_DEFINITION _encode_VideotexData */

/* eslint-enable */
