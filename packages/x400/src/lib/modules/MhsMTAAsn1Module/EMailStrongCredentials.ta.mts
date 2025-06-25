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
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from '../MTSAbstractService/StrongCredentials.ta.mjs';
import {
    GenericStrongCredentials,
    _decode_GenericStrongCredentials,
    _encode_GenericStrongCredentials,
} from '../MhsMTAAsn1Module/GenericStrongCredentials.ta.mjs';
/**
 * @summary EMailStrongCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailStrongCredentials  ::=  CHOICE {
 *   x400StrongCredentials     [0]  StrongCredentials,
 *   genericStrongCredentials  [1]  GenericStrongCredentials
 * }
 * ```
 */
export type EMailStrongCredentials =
    | { x400StrongCredentials: StrongCredentials } /* CHOICE_ALT_ROOT */
    | {
          genericStrongCredentials: GenericStrongCredentials;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EMailStrongCredentials: $.ASN1Decoder<EMailStrongCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMailStrongCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailStrongCredentials} The decoded data structure.
 */
export function _decode_EMailStrongCredentials(el: _Element): EMailStrongCredentials {
    if (!_cached_decoder_for_EMailStrongCredentials) {
        _cached_decoder_for_EMailStrongCredentials = $._decode_inextensible_choice<EMailStrongCredentials>(
            {
                'CONTEXT 0': [
                    'x400StrongCredentials',
                    $._decode_implicit<StrongCredentials>(
                        () => _decode_StrongCredentials
                    ),
                ],
                'CONTEXT 1': [
                    'genericStrongCredentials',
                    $._decode_implicit<GenericStrongCredentials>(
                        () => _decode_GenericStrongCredentials
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailStrongCredentials(el);
}

let _cached_encoder_for_EMailStrongCredentials: $.ASN1Encoder<EMailStrongCredentials> | null = null;

/**
 * @summary Encodes a(n) EMailStrongCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailStrongCredentials, encoded as an ASN.1 Element.
 */
export function _encode_EMailStrongCredentials(
    value: EMailStrongCredentials,
    elGetter: $.ASN1Encoder<EMailStrongCredentials>
): _Element {
    if (!_cached_encoder_for_EMailStrongCredentials) {
        _cached_encoder_for_EMailStrongCredentials = $._encode_choice<EMailStrongCredentials>(
            {
                x400StrongCredentials: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_StrongCredentials,
                    $.BER
                ),
                genericStrongCredentials: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericStrongCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailStrongCredentials(value, elGetter);
}


/* eslint-enable */
