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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SummarizeErrors,
    _decode_SummarizeErrors,
    _encode_SummarizeErrors,
} from '../MhsAcctAsn1Module/SummarizeErrors.ta.mjs';
/**
 * @summary ListErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListErrors  ::=  SummarizeErrors
 * ```
 */
export type ListErrors = SummarizeErrors; // DefinedType

let _cached_decoder_for_ListErrors: $.ASN1Decoder<ListErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListErrors} The decoded data structure.
 */
export function _decode_ListErrors(el: _Element): ListErrors {
    if (!_cached_decoder_for_ListErrors) {
        _cached_decoder_for_ListErrors = _decode_SummarizeErrors;
    }
    return _cached_decoder_for_ListErrors(el);
}

let _cached_encoder_for_ListErrors: $.ASN1Encoder<ListErrors> | null = null;

/**
 * @summary Encodes a(n) ListErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListErrors, encoded as an ASN.1 Element.
 */
export function _encode_ListErrors(
    value: ListErrors,
    elGetter: $.ASN1Encoder<ListErrors>
): _Element {
    if (!_cached_encoder_for_ListErrors) {
        _cached_encoder_for_ListErrors = _encode_SummarizeErrors;
    }
    return _cached_encoder_for_ListErrors(value, elGetter);
}


/* eslint-enable */
