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

/* START_OF_SYMBOL_DEFINITION Implicit */
/**
 * @summary Implicit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implicit  ::=  BOOLEAN(TRUE)
 * ```
 */
export type Implicit = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Implicit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Implicit */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Implicit */

/* START_OF_SYMBOL_DEFINITION _decode_Implicit */
export const _decode_Implicit = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_Implicit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Implicit */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Implicit */

/* START_OF_SYMBOL_DEFINITION _encode_Implicit */
export const _encode_Implicit = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_Implicit */

/* eslint-enable */
