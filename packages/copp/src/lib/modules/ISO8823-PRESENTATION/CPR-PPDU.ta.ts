/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    CPR_PPDU_x400_mode_parameters,
    _decode_CPR_PPDU_x400_mode_parameters,
    _encode_CPR_PPDU_x400_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-x400-mode-parameters.ta';
export {
    CPR_PPDU_x400_mode_parameters,
    _decode_CPR_PPDU_x400_mode_parameters,
    _encode_CPR_PPDU_x400_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-x400-mode-parameters.ta';
import {
    CPR_PPDU_normal_mode_parameters,
    _decode_CPR_PPDU_normal_mode_parameters,
    _encode_CPR_PPDU_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-normal-mode-parameters.ta';
export {
    CPR_PPDU_normal_mode_parameters,
    _decode_CPR_PPDU_normal_mode_parameters,
    _encode_CPR_PPDU_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/CPR-PPDU-normal-mode-parameters.ta';

/* START_OF_SYMBOL_DEFINITION CPR_PPDU */
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
/* END_OF_SYMBOL_DEFINITION CPR_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPR_PPDU */
let _cached_decoder_for_CPR_PPDU: $.ASN1Decoder<CPR_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPR_PPDU */

/* START_OF_SYMBOL_DEFINITION _decode_CPR_PPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) CPR_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPR_PPDU} The decoded data structure.
 */
export function _decode_CPR_PPDU(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_CPR_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPR_PPDU */
let _cached_encoder_for_CPR_PPDU: $.ASN1Encoder<CPR_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPR_PPDU */

/* START_OF_SYMBOL_DEFINITION _encode_CPR_PPDU */
/**
 * @summary Encodes a(n) CPR_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPR_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_CPR_PPDU(
    value: CPR_PPDU,
    elGetter: $.ASN1Encoder<CPR_PPDU>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_CPR_PPDU */

/* eslint-enable */
