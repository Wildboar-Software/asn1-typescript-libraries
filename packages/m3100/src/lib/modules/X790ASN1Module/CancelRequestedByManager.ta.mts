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

/* START_OF_SYMBOL_DEFINITION CancelRequestedByManager */
/**
 * @summary CancelRequestedByManager
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelRequestedByManager  ::=  BOOLEAN
 * ```
 */
export type CancelRequestedByManager = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelRequestedByManager */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _decode_CancelRequestedByManager */
export const _decode_CancelRequestedByManager = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelRequestedByManager */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelRequestedByManager */

/* START_OF_SYMBOL_DEFINITION _encode_CancelRequestedByManager */
export const _encode_CancelRequestedByManager = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_CancelRequestedByManager */

/* eslint-enable */
