/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AlgorithmID_ShortForm, _encode_AlgorithmID_ShortForm, AlgorithmID_ShortForm } from "../CompressedDataType/AlgorithmID-ShortForm.ta.mjs";


/**
 * @summary CompressionAlgorithmIdentifier
 * @description
 * 
 * Which algorithm compressed the APDU. The integer form is mandatory to support
 * on origination and on reception. The object-identifier form is optional on
 * origination and mandatory on reception. Integer 0 is ZLIB and is the form
 * that should be sent.
 *
 * Annex E writes these alternatives as `[0]` and `[1]` in a module that does
 * not say `IMPLICIT TAGS`. This module encodes them as implicit tags. STANAG
 * 4406 (Ed. 2), Annex E, clauses 4.2.6.1 and 4.2.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressionAlgorithmIdentifier  ::=  CHOICE {
 *     algorithmID-ShortForm   [0] IMPLICIT AlgorithmID-ShortForm,
 *     algorithmID-OID         [1] IMPLICIT OBJECT IDENTIFIER
 * }
 * ```
 */
export
type CompressionAlgorithmIdentifier =
    { algorithmID_ShortForm: AlgorithmID_ShortForm } /* CHOICE_ALT_ROOT */
    | { algorithmID_OID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompressionAlgorithmIdentifier: $.ASN1Decoder<CompressionAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressionAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressionAlgorithmIdentifier (el: _Element): CompressionAlgorithmIdentifier {
    if (!_cached_decoder_for_CompressionAlgorithmIdentifier) { _cached_decoder_for_CompressionAlgorithmIdentifier = $._decode_inextensible_choice<CompressionAlgorithmIdentifier>({
    "CONTEXT 0": [ "algorithmID_ShortForm", $._decode_implicit<AlgorithmID_ShortForm>(() => _decode_AlgorithmID_ShortForm) ],
    "CONTEXT 1": [ "algorithmID_OID", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_CompressionAlgorithmIdentifier(el);
}

let _cached_encoder_for_CompressionAlgorithmIdentifier: $.ASN1Encoder<CompressionAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) CompressionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CompressionAlgorithmIdentifier (value: CompressionAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressionAlgorithmIdentifier) { _cached_encoder_for_CompressionAlgorithmIdentifier = $._encode_choice<CompressionAlgorithmIdentifier>({
    "algorithmID_ShortForm": $._encode_implicit(_TagClass.context, 0, () => _encode_AlgorithmID_ShortForm, $.BER),
    "algorithmID_OID": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_CompressionAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
