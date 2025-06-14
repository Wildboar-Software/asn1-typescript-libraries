/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION AuthorizationInformation */
/**
 * @summary AuthorizationInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformation  ::=
 *   TeletexString(SIZE (1..ub-authorization-information))
 * ```
 */
export type AuthorizationInformation = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformation */
let _cached_decoder_for_AuthorizationInformation: $.ASN1Decoder<AuthorizationInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationInformation} The decoded data structure.
 */
export function _decode_AuthorizationInformation(el: _Element) {
    if (!_cached_decoder_for_AuthorizationInformation) {
        _cached_decoder_for_AuthorizationInformation = $._decodeTeletexString;
    }
    return _cached_decoder_for_AuthorizationInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformation */
let _cached_encoder_for_AuthorizationInformation: $.ASN1Encoder<AuthorizationInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationInformation */
/**
 * @summary Encodes a(n) AuthorizationInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationInformation, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationInformation(
    value: AuthorizationInformation,
    elGetter: $.ASN1Encoder<AuthorizationInformation>
) {
    if (!_cached_encoder_for_AuthorizationInformation) {
        _cached_encoder_for_AuthorizationInformation = $._encodeTeletexString;
    }
    return _cached_encoder_for_AuthorizationInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationInformation */

/* eslint-enable */
