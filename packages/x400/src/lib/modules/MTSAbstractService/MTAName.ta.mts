/* eslint-disable */
import {
    IA5String,
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

/* START_OF_SYMBOL_DEFINITION MTAName */
/**
 * @summary MTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTAName  ::=  IA5String(SIZE (1..ub-mta-name-length))
 * ```
 */
export type MTAName = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION MTAName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTAName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTAName */

/* START_OF_SYMBOL_DEFINITION _decode_MTAName */
export const _decode_MTAName = $._decodeIA5String;
/* END_OF_SYMBOL_DEFINITION _decode_MTAName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTAName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTAName */

/* START_OF_SYMBOL_DEFINITION _encode_MTAName */
export const _encode_MTAName = $._encodeIA5String;

/* END_OF_SYMBOL_DEFINITION _encode_MTAName */

/* eslint-enable */
