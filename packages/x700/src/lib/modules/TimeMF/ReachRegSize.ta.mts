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

/* START_OF_SYMBOL_DEFINITION ReachRegSize */
/**
 * @summary ReachRegSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachRegSize  ::=  INTEGER(0..32)
 * ```
 */
export type ReachRegSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION ReachRegSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachRegSize */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachRegSize */

/* START_OF_SYMBOL_DEFINITION _decode_ReachRegSize */
export const _decode_ReachRegSize = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ReachRegSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachRegSize */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachRegSize */

/* START_OF_SYMBOL_DEFINITION _encode_ReachRegSize */
export const _encode_ReachRegSize = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ReachRegSize */

/* eslint-enable */
