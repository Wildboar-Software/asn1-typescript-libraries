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

/* START_OF_SYMBOL_DEFINITION AcknowledgementRequestField */
/**
 * @summary AcknowledgementRequestField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcknowledgementRequestField  ::=  BOOLEAN
 * ```
 */
export type AcknowledgementRequestField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION AcknowledgementRequestField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AcknowledgementRequestField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AcknowledgementRequestField */

/* START_OF_SYMBOL_DEFINITION _decode_AcknowledgementRequestField */
export const _decode_AcknowledgementRequestField = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_AcknowledgementRequestField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgementRequestField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AcknowledgementRequestField */

/* START_OF_SYMBOL_DEFINITION _encode_AcknowledgementRequestField */
export const _encode_AcknowledgementRequestField = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_AcknowledgementRequestField */

/* eslint-enable */
