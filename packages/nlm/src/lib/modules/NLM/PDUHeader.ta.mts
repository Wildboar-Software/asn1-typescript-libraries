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

/* START_OF_SYMBOL_DEFINITION PDUHeader */
/**
 * @summary PDUHeader
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUHeader  ::=  OCTET STRING(SIZE (1..255))
 * ```
 */
export type PDUHeader = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PDUHeader */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUHeader */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _decode_PDUHeader */
export const _decode_PDUHeader = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUHeader */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUHeader */

/* START_OF_SYMBOL_DEFINITION _encode_PDUHeader */
export const _encode_PDUHeader = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_PDUHeader */

/* eslint-enable */
