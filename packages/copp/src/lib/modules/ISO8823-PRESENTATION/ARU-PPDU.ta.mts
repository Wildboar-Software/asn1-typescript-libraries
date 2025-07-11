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
    ARU_PPDU_x400_mode_parameters,
    _decode_ARU_PPDU_x400_mode_parameters,
    _encode_ARU_PPDU_x400_mode_parameters,
} from '../ISO8823-PRESENTATION/ARU-PPDU-x400-mode-parameters.ta.mjs';
import {
    ARU_PPDU_normal_mode_parameters,
    _decode_ARU_PPDU_normal_mode_parameters,
    _encode_ARU_PPDU_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/ARU-PPDU-normal-mode-parameters.ta.mjs';

/**
 * @summary ARU_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU  ::=  CHOICE {
 *   x400-mode-parameters    SET {COMPONENTS OF Reliable-Transfer-APDU.RTABapdu}--  Shall be used for X.410 mode only. Shall be bitwise
 *   --  compatible with CCITT Recommendation X.410-1984.
 *   --  This shall be the User data parameter of the ARU PPDU3. --,
 *   normal-mode-parameters
 *     [0] IMPLICIT SEQUENCE {presentation-context-identifier-list
 *                              [0] IMPLICIT Presentation-context-identifier-list
 *                                OPTIONAL,
 *                            user-data
 *                              User-data OPTIONAL}
 *   --  Shall be used for normal mode only.
 * }
 * ```
 */
export type ARU_PPDU =
    | {
          x400_mode_parameters: ARU_PPDU_x400_mode_parameters;
      } /* CHOICE_ALT_ROOT */
    | {
          normal_mode_parameters: ARU_PPDU_normal_mode_parameters;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ARU_PPDU: $.ASN1Decoder<ARU_PPDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU} The decoded data structure.
 */
export function _decode_ARU_PPDU(el: _Element): ARU_PPDU {
    if (!_cached_decoder_for_ARU_PPDU) {
        _cached_decoder_for_ARU_PPDU = $._decode_inextensible_choice<ARU_PPDU>({
            'UNIVERSAL 17': [
                'x400_mode_parameters',
                _decode_ARU_PPDU_x400_mode_parameters,
            ],
            'CONTEXT 0': [
                'normal_mode_parameters',
                $._decode_implicit<ARU_PPDU_normal_mode_parameters>(
                    () => _decode_ARU_PPDU_normal_mode_parameters
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU(el);
}


let _cached_encoder_for_ARU_PPDU: $.ASN1Encoder<ARU_PPDU> | null = null;


/**
 * @summary Encodes a(n) ARU_PPDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU(
    value: ARU_PPDU,
    elGetter: $.ASN1Encoder<ARU_PPDU>
): _Element {
    if (!_cached_encoder_for_ARU_PPDU) {
        _cached_encoder_for_ARU_PPDU = $._encode_choice<ARU_PPDU>(
            {
                x400_mode_parameters: _encode_ARU_PPDU_x400_mode_parameters,
                normal_mode_parameters: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ARU_PPDU_normal_mode_parameters,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU(value, elGetter);
}


/* eslint-enable */
