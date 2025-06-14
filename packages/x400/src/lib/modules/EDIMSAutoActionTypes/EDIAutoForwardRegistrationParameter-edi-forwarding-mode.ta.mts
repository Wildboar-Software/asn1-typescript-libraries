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
    NewRecipient,
    _decode_NewRecipient,
    _encode_NewRecipient,
} from '../EDIMSAutoActionTypes/NewRecipient.ta.mjs';
import {
    ForwardWithRespAccepted,
    _decode_ForwardWithRespAccepted,
    _encode_ForwardWithRespAccepted,
} from '../EDIMSAutoActionTypes/ForwardWithRespAccepted.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EDIAutoForwardRegistrationParameter_edi_forwarding_mode */
/**
 * @summary EDIAutoForwardRegistrationParameter_edi_forwarding_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIAutoForwardRegistrationParameter-edi-forwarding-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EDIAutoForwardRegistrationParameter_edi_forwarding_mode =
    | {
          forwarding_with_responsibility_not_accepted: NewRecipient;
      } /* CHOICE_ALT_ROOT */
    | {
          forwarding_with_responsibility_accepted: ForwardWithRespAccepted;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EDIAutoForwardRegistrationParameter_edi_forwarding_mode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */
let _cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode: $.ASN1Decoder<EDIAutoForwardRegistrationParameter_edi_forwarding_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */

/* START_OF_SYMBOL_DEFINITION _decode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIAutoForwardRegistrationParameter_edi_forwarding_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIAutoForwardRegistrationParameter_edi_forwarding_mode} The decoded data structure.
 */
export function _decode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
    el: _Element
) {
    if (
        !_cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode
    ) {
        _cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode = $._decode_inextensible_choice<EDIAutoForwardRegistrationParameter_edi_forwarding_mode>(
            {
                'CONTEXT 3': [
                    'forwarding_with_responsibility_not_accepted',
                    $._decode_implicit<NewRecipient>(
                        () => _decode_NewRecipient
                    ),
                ],
                'CONTEXT 4': [
                    'forwarding_with_responsibility_accepted',
                    $._decode_implicit<ForwardWithRespAccepted>(
                        () => _decode_ForwardWithRespAccepted
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */
let _cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode: $.ASN1Encoder<EDIAutoForwardRegistrationParameter_edi_forwarding_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */

/* START_OF_SYMBOL_DEFINITION _encode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */
/**
 * @summary Encodes a(n) EDIAutoForwardRegistrationParameter_edi_forwarding_mode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIAutoForwardRegistrationParameter_edi_forwarding_mode, encoded as an ASN.1 Element.
 */
export function _encode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
    value: EDIAutoForwardRegistrationParameter_edi_forwarding_mode,
    elGetter: $.ASN1Encoder<EDIAutoForwardRegistrationParameter_edi_forwarding_mode>
) {
    if (
        !_cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode
    ) {
        _cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode = $._encode_choice<EDIAutoForwardRegistrationParameter_edi_forwarding_mode>(
            {
                forwarding_with_responsibility_not_accepted: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_NewRecipient,
                    $.BER
                ),
                forwarding_with_responsibility_accepted: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_ForwardWithRespAccepted,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EDIAutoForwardRegistrationParameter_edi_forwarding_mode(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIAutoForwardRegistrationParameter_edi_forwarding_mode */

/* eslint-enable */
