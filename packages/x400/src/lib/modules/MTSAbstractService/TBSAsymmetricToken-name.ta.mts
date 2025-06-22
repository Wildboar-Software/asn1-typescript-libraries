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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta.mjs';
import {
    TBSAsymmetricToken_name_mta,
    _decode_TBSAsymmetricToken_name_mta,
    _encode_TBSAsymmetricToken_name_mta,
} from '../MTSAbstractService/TBSAsymmetricToken-name-mta.ta.mjs';
/**
 * @summary TBSAsymmetricToken_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAsymmetricToken-name  ::=  CHOICE {
 *     recipient-name  RecipientName,
 *     mta             [3] TBSAsymmetricToken-name-mta }
 * ```
 */
export type TBSAsymmetricToken_name =
    | { recipient_name: RecipientName } /* CHOICE_ALT_ROOT */
    | { mta: TBSAsymmetricToken_name_mta } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TBSAsymmetricToken_name: $.ASN1Decoder<TBSAsymmetricToken_name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSAsymmetricToken_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAsymmetricToken_name} The decoded data structure.
 */
export function _decode_TBSAsymmetricToken_name(el: _Element) {
    if (!_cached_decoder_for_TBSAsymmetricToken_name) {
        _cached_decoder_for_TBSAsymmetricToken_name = $._decode_inextensible_choice<TBSAsymmetricToken_name>(
            {
                'APPLICATION 0': ['recipient_name', _decode_RecipientName],
                'CONTEXT 3': [
                    'mta',
                    $._decode_implicit<TBSAsymmetricToken_name_mta>(
                        () => _decode_TBSAsymmetricToken_name_mta
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TBSAsymmetricToken_name(el);
}

let _cached_encoder_for_TBSAsymmetricToken_name: $.ASN1Encoder<TBSAsymmetricToken_name> | null = null;

/**
 * @summary Encodes a(n) TBSAsymmetricToken_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAsymmetricToken_name, encoded as an ASN.1 Element.
 */
export function _encode_TBSAsymmetricToken_name(
    value: TBSAsymmetricToken_name,
    elGetter: $.ASN1Encoder<TBSAsymmetricToken_name>
) {
    if (!_cached_encoder_for_TBSAsymmetricToken_name) {
        _cached_encoder_for_TBSAsymmetricToken_name = $._encode_choice<TBSAsymmetricToken_name>(
            {
                recipient_name: _encode_RecipientName,
                mta: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TBSAsymmetricToken_name_mta,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBSAsymmetricToken_name(value, elGetter);
}


/* eslint-enable */
