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

/* START_OF_SYMBOL_DEFINITION MaxEncodedCmipPduReceiveSize */
/**
 * @summary MaxEncodedCmipPduReceiveSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxEncodedCmipPduReceiveSize  ::=  INTEGER(0..MAX)
 * ```
 */
export type MaxEncodedCmipPduReceiveSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxEncodedCmipPduReceiveSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxEncodedCmipPduReceiveSize */
export const _decode_MaxEncodedCmipPduReceiveSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxEncodedCmipPduReceiveSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxEncodedCmipPduReceiveSize */
export const _encode_MaxEncodedCmipPduReceiveSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaxEncodedCmipPduReceiveSize */

/* eslint-enable */
