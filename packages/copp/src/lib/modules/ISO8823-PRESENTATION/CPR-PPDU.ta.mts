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
    CPR_PPDU_x400_mode_parameters,
    _decode_CPR_PPDU_x400_mode_parameters,
    _encode_CPR_PPDU_x400_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-x400-mode-parameters.ta.mjs';
import {
    CPR_PPDU_normal_mode_parameters,
    _decode_CPR_PPDU_normal_mode_parameters,
    _encode_CPR_PPDU_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-normal-mode-parameters.ta.mjs';

/**
 * @summary CPR_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPR-PPDU  ::=  CHOICE {
 *     x400-mode-parameters      SET {COMPONENTS OF Reliable-Transfer-APDU.RTORJapdu},
 *     normal-mode-parameters    SEQUENCE {
 *         protocol-version                            [0] IMPLICIT Protocol-version DEFAULT {version-1},
 *         responding-presentation-selector            [3] IMPLICIT Responding-presentation-selector OPTIONAL,
 *         presentation-context-definition-result-list [5] IMPLICIT Presentation-context-definition-result-list OPTIONAL,
 *         default-context-result                      [7] IMPLICIT Default-context-result OPTIONAL,
 *         provider-reason                             [10] IMPLICIT Provider-reason OPTIONAL,
 *         user-data                                   User-data OPTIONAL
 *     }
 *     --  Shall be used for normal mode only.
 * }
 * ```
 */
export type CPR_PPDU =
    | {
          x400_mode_parameters: CPR_PPDU_x400_mode_parameters;
      } /* CHOICE_ALT_ROOT */
    | {
          normal_mode_parameters: CPR_PPDU_normal_mode_parameters;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CPR_PPDU: $.ASN1Decoder<CPR_PPDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CPR_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPR_PPDU} The decoded data structure.
 */
export function _decode_CPR_PPDU(el: _Element): CPR_PPDU {
    if (!_cached_decoder_for_CPR_PPDU) {
        _cached_decoder_for_CPR_PPDU = $._decode_inextensible_choice<CPR_PPDU>({
            'UNIVERSAL 17': [
                'x400_mode_parameters',
                _decode_CPR_PPDU_x400_mode_parameters,
            ],
            'UNIVERSAL 16': [
                'normal_mode_parameters',
                _decode_CPR_PPDU_normal_mode_parameters,
            ],
        });
    }
    return _cached_decoder_for_CPR_PPDU(el);
}


let _cached_encoder_for_CPR_PPDU: $.ASN1Encoder<CPR_PPDU> | null = null;


/**
 * @summary Encodes a(n) CPR_PPDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPR_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_CPR_PPDU(
    value: CPR_PPDU,
    elGetter: $.ASN1Encoder<CPR_PPDU>
): _Element {
    if (!_cached_encoder_for_CPR_PPDU) {
        _cached_encoder_for_CPR_PPDU = $._encode_choice<CPR_PPDU>(
            {
                x400_mode_parameters: _encode_CPR_PPDU_x400_mode_parameters,
                normal_mode_parameters: _encode_CPR_PPDU_normal_mode_parameters,
            },
            $.BER
        );
    }
    return _cached_encoder_for_CPR_PPDU(value, elGetter);
}


/* eslint-enable */
