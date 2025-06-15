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

/* START_OF_SYMBOL_DEFINITION EncodedForwardingInformation */
/**
 * @summary EncodedForwardingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedForwardingInformation  ::=
 *   OCTET STRING
 * ```
 */
export type EncodedForwardingInformation = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedForwardingInformation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedForwardingInformation */
export const _decode_EncodedForwardingInformation = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedForwardingInformation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedForwardingInformation */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedForwardingInformation */
export const _encode_EncodedForwardingInformation = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_EncodedForwardingInformation */

/* eslint-enable */
