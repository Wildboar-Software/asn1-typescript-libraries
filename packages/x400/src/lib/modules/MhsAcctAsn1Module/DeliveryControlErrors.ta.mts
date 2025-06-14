/* eslint-disable */
import {
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
import {
    DeliveryError,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeliveryControlErrors */
/**
 * @summary DeliveryControlErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControlErrors  ::=
 *   DeliveryError(control-violates-registration | security-error)
 * ```
 */
export type DeliveryControlErrors = DeliveryError; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlErrors */
let _cached_decoder_for_DeliveryControlErrors: $.ASN1Decoder<DeliveryControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControlErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlErrors} The decoded data structure.
 */
export function _decode_DeliveryControlErrors(el: _Element) {
    if (!_cached_decoder_for_DeliveryControlErrors) {
        _cached_decoder_for_DeliveryControlErrors = _decode_DeliveryError;
    }
    return _cached_decoder_for_DeliveryControlErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlErrors */
let _cached_encoder_for_DeliveryControlErrors: $.ASN1Encoder<DeliveryControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControlErrors */
/**
 * @summary Encodes a(n) DeliveryControlErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlErrors, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControlErrors(
    value: DeliveryControlErrors,
    elGetter: $.ASN1Encoder<DeliveryControlErrors>
) {
    if (!_cached_encoder_for_DeliveryControlErrors) {
        _cached_encoder_for_DeliveryControlErrors = _encode_DeliveryError;
    }
    return _cached_encoder_for_DeliveryControlErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControlErrors */

/* eslint-enable */
