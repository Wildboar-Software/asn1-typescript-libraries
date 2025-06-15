/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION Criticality */
/**
 * @summary Criticality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criticality  ::=  BOOLEAN
 * ```
 */
export type Criticality = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _decode_Criticality */
export const _decode_Criticality = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _encode_Criticality */
export const _encode_Criticality = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_Criticality */

/* eslint-enable */
