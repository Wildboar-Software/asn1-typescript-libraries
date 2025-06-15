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

/* START_OF_SYMBOL_DEFINITION MessageSize */
/**
 * @summary MessageSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSize  ::=  INTEGER
 * ```
 */
export type MessageSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MessageSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSize */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSize */
export const _decode_MessageSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MessageSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSize */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSize */
export const _encode_MessageSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MessageSize */

/* eslint-enable */
