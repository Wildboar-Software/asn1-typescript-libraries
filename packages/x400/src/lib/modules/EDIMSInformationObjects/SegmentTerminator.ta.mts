/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION SegmentTerminator */
/**
 * @summary SegmentTerminator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SegmentTerminator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type SegmentTerminator = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SegmentTerminator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _decode_SegmentTerminator */
export const _decode_SegmentTerminator = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SegmentTerminator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SegmentTerminator */

/* START_OF_SYMBOL_DEFINITION _encode_SegmentTerminator */
export const _encode_SegmentTerminator = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_SegmentTerminator */

/* eslint-enable */
