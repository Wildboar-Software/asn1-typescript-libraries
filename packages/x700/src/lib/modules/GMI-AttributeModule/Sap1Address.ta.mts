/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Sap1Address */
/**
 * @summary Sap1Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap1Address  ::=  INTEGER
 * ```
 */
export type Sap1Address = INTEGER;
/* END_OF_SYMBOL_DEFINITION Sap1Address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap1Address */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _decode_Sap1Address */
export const _decode_Sap1Address = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap1Address */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _encode_Sap1Address */
export const _encode_Sap1Address = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Sap1Address */

/* eslint-enable */
