/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Protocol_version */
/**
 * @summary Protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-version  ::=  BIT STRING {version-1(0)}
 * ```
 */
export type Protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Protocol_version */

/* START_OF_SYMBOL_DEFINITION Protocol_version_version_1 */
/**
 * @summary Protocol_version_version_1
 * @constant
 */
export const Protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_version_version_1 */

/* START_OF_SYMBOL_DEFINITION version_1 */
/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_version_version_1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version_1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_version */
let _cached_decoder_for_Protocol_version: $.ASN1Decoder<Protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_Protocol_version */
/**
 * @summary Decodes an ASN.1 element into a(n) Protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Protocol_version} The decoded data structure.
 */
export function _decode_Protocol_version(el: _Element) {
    if (!_cached_decoder_for_Protocol_version) {
        _cached_decoder_for_Protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_Protocol_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_version */
let _cached_encoder_for_Protocol_version: $.ASN1Encoder<Protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_Protocol_version */
/**
 * @summary Encodes a(n) Protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_Protocol_version(
    value: Protocol_version,
    elGetter: $.ASN1Encoder<Protocol_version>
) {
    if (!_cached_encoder_for_Protocol_version) {
        _cached_encoder_for_Protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_Protocol_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Protocol_version */

/* eslint-enable */
