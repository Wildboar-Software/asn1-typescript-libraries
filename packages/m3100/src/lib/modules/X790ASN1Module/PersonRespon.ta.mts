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

/* START_OF_SYMBOL_DEFINITION PersonRespon */
/**
 * @summary PersonRespon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonRespon  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonRespon = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonRespon */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonRespon */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _decode_PersonRespon */
export const _decode_PersonRespon = $._decodeGraphicString;
/* END_OF_SYMBOL_DEFINITION _decode_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonRespon */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _encode_PersonRespon */
export const _encode_PersonRespon = $._encodeGraphicString;

/* END_OF_SYMBOL_DEFINITION _encode_PersonRespon */

/* eslint-enable */
