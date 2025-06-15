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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
import {
    GenericMessageId,
    _decode_GenericMessageId,
    _encode_GenericMessageId,
} from '../MhsMTAAsn1Module/GenericMessageId.ta.mjs';
/**
 * @summary EMailMpduIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailMpduIdentifier  ::=  CHOICE {
 *   x400MTSIdentifier      [0]  MTSIdentifier,
 *   genericMpduIdentifier  [1]  GenericMessageId
 * }
 * ```
 */
export type EMailMpduIdentifier =
    | { x400MTSIdentifier: MTSIdentifier } /* CHOICE_ALT_ROOT */
    | { genericMpduIdentifier: GenericMessageId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailMpduIdentifier: $.ASN1Decoder<EMailMpduIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailMpduIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailMpduIdentifier} The decoded data structure.
 */
export function _decode_EMailMpduIdentifier(el: _Element) {
    if (!_cached_decoder_for_EMailMpduIdentifier) {
        _cached_decoder_for_EMailMpduIdentifier = $._decode_inextensible_choice<EMailMpduIdentifier>(
            {
                'CONTEXT 0': [
                    'x400MTSIdentifier',
                    $._decode_implicit<MTSIdentifier>(
                        () => _decode_MTSIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'genericMpduIdentifier',
                    $._decode_implicit<GenericMessageId>(
                        () => _decode_GenericMessageId
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailMpduIdentifier(el);
}

let _cached_encoder_for_EMailMpduIdentifier: $.ASN1Encoder<EMailMpduIdentifier> | null = null;

/**
 * @summary Encodes a(n) EMailMpduIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailMpduIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EMailMpduIdentifier(
    value: EMailMpduIdentifier,
    elGetter: $.ASN1Encoder<EMailMpduIdentifier>
) {
    if (!_cached_encoder_for_EMailMpduIdentifier) {
        _cached_encoder_for_EMailMpduIdentifier = $._encode_choice<EMailMpduIdentifier>(
            {
                x400MTSIdentifier: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MTSIdentifier,
                    $.BER
                ),
                genericMpduIdentifier: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericMessageId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailMpduIdentifier(value, elGetter);
}


/* eslint-enable */
