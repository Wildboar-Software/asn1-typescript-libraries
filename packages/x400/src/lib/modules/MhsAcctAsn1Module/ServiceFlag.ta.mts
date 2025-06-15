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

/* START_OF_SYMBOL_DEFINITION ServiceFlag */
/**
 * @summary ServiceFlag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceFlag  ::=  BOOLEAN
 * ```
 */
export type ServiceFlag = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceFlag */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceFlag */
export const _decode_ServiceFlag = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceFlag */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceFlag */
export const _encode_ServiceFlag = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_ServiceFlag */

/* eslint-enable */
