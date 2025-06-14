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

/* START_OF_SYMBOL_DEFINITION AP_invocation_id */
/**
 * @summary AP_invocation_id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-id  ::=  INTEGER
 * ```
 */
export type AP_invocation_id = INTEGER;
/* END_OF_SYMBOL_DEFINITION AP_invocation_id */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_id */
let _cached_decoder_for_AP_invocation_id: $.ASN1Decoder<AP_invocation_id> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_id */

/* START_OF_SYMBOL_DEFINITION _decode_AP_invocation_id */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_invocation_id
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_invocation_id} The decoded data structure.
 */
export function _decode_AP_invocation_id(el: _Element) {
    if (!_cached_decoder_for_AP_invocation_id) {
        _cached_decoder_for_AP_invocation_id = $._decodeInteger;
    }
    return _cached_decoder_for_AP_invocation_id(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_invocation_id */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_id */
let _cached_encoder_for_AP_invocation_id: $.ASN1Encoder<AP_invocation_id> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_id */

/* START_OF_SYMBOL_DEFINITION _encode_AP_invocation_id */
/**
 * @summary Encodes a(n) AP_invocation_id into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_invocation_id, encoded as an ASN.1 Element.
 */
export function _encode_AP_invocation_id(
    value: AP_invocation_id,
    elGetter: $.ASN1Encoder<AP_invocation_id>
) {
    if (!_cached_encoder_for_AP_invocation_id) {
        _cached_encoder_for_AP_invocation_id = $._encodeInteger;
    }
    return _cached_encoder_for_AP_invocation_id(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_invocation_id */

/* eslint-enable */
