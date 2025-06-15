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

/* START_OF_SYMBOL_DEFINITION PDUString */
/**
 * @summary PDUString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUString  ::=  OCTET STRING
 * ```
 */
export type PDUString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PDUString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUString */

/* START_OF_SYMBOL_DEFINITION _decode_PDUString */
export const _decode_PDUString = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_PDUString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUString */

/* START_OF_SYMBOL_DEFINITION _encode_PDUString */
export const _encode_PDUString = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_PDUString */

/* eslint-enable */
