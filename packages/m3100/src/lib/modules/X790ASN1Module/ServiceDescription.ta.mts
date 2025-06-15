/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION ServiceDescription */
/**
 * @summary ServiceDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceDescription  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type ServiceDescription = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceDescription */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceDescription */
export const _decode_ServiceDescription = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceDescription */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceDescription */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceDescription */
export const _encode_ServiceDescription = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_ServiceDescription */

/* eslint-enable */
