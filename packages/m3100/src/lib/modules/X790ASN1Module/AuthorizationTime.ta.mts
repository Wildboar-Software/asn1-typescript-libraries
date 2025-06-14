/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION AuthorizationTime */
/**
 * @summary AuthorizationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationTime  ::=  GeneralizedTime
 * ```
 */
export type AuthorizationTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationTime */
let _cached_decoder_for_AuthorizationTime: $.ASN1Decoder<AuthorizationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationTime} The decoded data structure.
 */
export function _decode_AuthorizationTime(el: _Element) {
    if (!_cached_decoder_for_AuthorizationTime) {
        _cached_decoder_for_AuthorizationTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_AuthorizationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationTime */
let _cached_encoder_for_AuthorizationTime: $.ASN1Encoder<AuthorizationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationTime */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationTime */
/**
 * @summary Encodes a(n) AuthorizationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationTime, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationTime(
    value: AuthorizationTime,
    elGetter: $.ASN1Encoder<AuthorizationTime>
) {
    if (!_cached_encoder_for_AuthorizationTime) {
        _cached_encoder_for_AuthorizationTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_AuthorizationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationTime */

/* eslint-enable */
