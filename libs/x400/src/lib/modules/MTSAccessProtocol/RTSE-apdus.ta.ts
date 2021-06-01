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
    RTORQapdu,
    _decode_RTORQapdu,
    _encode_RTORQapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORQapdu.ta';
export {
    RTORQapdu,
    _decode_RTORQapdu,
    _encode_RTORQapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORQapdu.ta';
import {
    RTOACapdu,
    _decode_RTOACapdu,
    _encode_RTOACapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTOACapdu.ta';
export {
    RTOACapdu,
    _decode_RTOACapdu,
    _encode_RTOACapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTOACapdu.ta';
import {
    RTORJapdu,
    _decode_RTORJapdu,
    _encode_RTORJapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORJapdu.ta';
export {
    RTORJapdu,
    _decode_RTORJapdu,
    _encode_RTORJapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORJapdu.ta';
import {
    RTTPapdu,
    _decode_RTTPapdu,
    _encode_RTTPapdu,
} from '../MTSAccessProtocol/RTTPapdu.ta';
export {
    RTTPapdu,
    _decode_RTTPapdu,
    _encode_RTTPapdu,
} from '../MTSAccessProtocol/RTTPapdu.ta';
import {
    RTTRapdu,
    _decode_RTTRapdu,
    _encode_RTTRapdu,
} from '../MTSAccessProtocol/RTTRapdu.ta';
export {
    RTTRapdu,
    _decode_RTTRapdu,
    _encode_RTTRapdu,
} from '../MTSAccessProtocol/RTTRapdu.ta';
import {
    RTABapdu,
    _decode_RTABapdu,
    _encode_RTABapdu,
} from '../MTSAccessProtocol/RTABapdu.ta';
export {
    RTABapdu,
    _decode_RTABapdu,
    _encode_RTABapdu,
} from '../MTSAccessProtocol/RTABapdu.ta';

/* START_OF_SYMBOL_DEFINITION RTSE_apdus */
/**
 * @summary RTSE_apdus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTSE-apdus  ::=  CHOICE {
 *   rtorq-apdu  [16] IMPLICIT RTORQapdu,
 *   rtoac-apdu  [17] IMPLICIT RTOACapdu,
 *   rtorj-apdu  [18] IMPLICIT RTORJapdu,
 *   rttp-apdu   RTTPapdu,
 *   rttr-apdu   RTTRapdu,
 *   rtab-apdu   [22] IMPLICIT RTABapdu
 * }
 * ```
 */
export type RTSE_apdus =
    | { rtorq_apdu: RTORQapdu } /* CHOICE_ALT_ROOT */
    | { rtoac_apdu: RTOACapdu } /* CHOICE_ALT_ROOT */
    | { rtorj_apdu: RTORJapdu } /* CHOICE_ALT_ROOT */
    | { rttp_apdu: RTTPapdu } /* CHOICE_ALT_ROOT */
    | { rttr_apdu: RTTRapdu } /* CHOICE_ALT_ROOT */
    | { rtab_apdu: RTABapdu } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RTSE_apdus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTSE_apdus */
let _cached_decoder_for_RTSE_apdus: $.ASN1Decoder<RTSE_apdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTSE_apdus */

/* START_OF_SYMBOL_DEFINITION _decode_RTSE_apdus */
/**
 * @summary Decodes an ASN.1 element into a(n) RTSE_apdus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTSE_apdus} The decoded data structure.
 */
export function _decode_RTSE_apdus(el: _Element) {
    if (!_cached_decoder_for_RTSE_apdus) {
        _cached_decoder_for_RTSE_apdus = $._decode_inextensible_choice<RTSE_apdus>(
            {
                'CONTEXT 16': [
                    'rtorq_apdu',
                    $._decode_implicit<RTORQapdu>(() => _decode_RTORQapdu),
                ],
                'CONTEXT 17': [
                    'rtoac_apdu',
                    $._decode_implicit<RTOACapdu>(() => _decode_RTOACapdu),
                ],
                'CONTEXT 18': [
                    'rtorj_apdu',
                    $._decode_implicit<RTORJapdu>(() => _decode_RTORJapdu),
                ],
                'UNIVERSAL 2': ['rttp_apdu', _decode_RTTPapdu],
                'UNIVERSAL 4': ['rttr_apdu', _decode_RTTRapdu],
                'CONTEXT 22': [
                    'rtab_apdu',
                    $._decode_implicit<RTABapdu>(() => _decode_RTABapdu),
                ],
            }
        );
    }
    return _cached_decoder_for_RTSE_apdus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RTSE_apdus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTSE_apdus */
let _cached_encoder_for_RTSE_apdus: $.ASN1Encoder<RTSE_apdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTSE_apdus */

/* START_OF_SYMBOL_DEFINITION _encode_RTSE_apdus */
/**
 * @summary Encodes a(n) RTSE_apdus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTSE_apdus, encoded as an ASN.1 Element.
 */
export function _encode_RTSE_apdus(
    value: RTSE_apdus,
    elGetter: $.ASN1Encoder<RTSE_apdus>
) {
    if (!_cached_encoder_for_RTSE_apdus) {
        _cached_encoder_for_RTSE_apdus = $._encode_choice<RTSE_apdus>(
            {
                rtorq_apdu: $._encode_implicit(
                    _TagClass.context,
                    16,
                    () => _encode_RTORQapdu,
                    $.BER
                ),
                rtoac_apdu: $._encode_implicit(
                    _TagClass.context,
                    17,
                    () => _encode_RTOACapdu,
                    $.BER
                ),
                rtorj_apdu: $._encode_implicit(
                    _TagClass.context,
                    18,
                    () => _encode_RTORJapdu,
                    $.BER
                ),
                rttp_apdu: _encode_RTTPapdu,
                rttr_apdu: _encode_RTTRapdu,
                rtab_apdu: $._encode_implicit(
                    _TagClass.context,
                    22,
                    () => _encode_RTABapdu,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RTSE_apdus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RTSE_apdus */

/* eslint-enable */
