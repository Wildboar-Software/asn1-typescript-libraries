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
    AdministrationError,
    _decode_AdministrationError,
    _encode_AdministrationError,
} from '../MhsAcctAsn1Module/AdministrationError.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RegisterErrors */
/**
 * @summary RegisterErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterErrors  ::=  AdministrationError(register-rejected | remote-bind-error)
 * ```
 */
export type RegisterErrors = AdministrationError; // DefinedType
/* END_OF_SYMBOL_DEFINITION RegisterErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterErrors */
let _cached_decoder_for_RegisterErrors: $.ASN1Decoder<RegisterErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterErrors */

/* START_OF_SYMBOL_DEFINITION _decode_RegisterErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) RegisterErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterErrors} The decoded data structure.
 */
export function _decode_RegisterErrors(el: _Element) {
    if (!_cached_decoder_for_RegisterErrors) {
        _cached_decoder_for_RegisterErrors = _decode_AdministrationError;
    }
    return _cached_decoder_for_RegisterErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegisterErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterErrors */
let _cached_encoder_for_RegisterErrors: $.ASN1Encoder<RegisterErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterErrors */

/* START_OF_SYMBOL_DEFINITION _encode_RegisterErrors */
/**
 * @summary Encodes a(n) RegisterErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterErrors, encoded as an ASN.1 Element.
 */
export function _encode_RegisterErrors(
    value: RegisterErrors,
    elGetter: $.ASN1Encoder<RegisterErrors>
) {
    if (!_cached_encoder_for_RegisterErrors) {
        _cached_encoder_for_RegisterErrors = _encode_AdministrationError;
    }
    return _cached_encoder_for_RegisterErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegisterErrors */

/* eslint-enable */
