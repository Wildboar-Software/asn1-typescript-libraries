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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta';
export {
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta';
import {
    Bundle,
    _decode_Bundle,
    _encode_Bundle,
} from '../ASN1DefinedTypesModule/Bundle.ta';
export {
    Bundle,
    _decode_Bundle,
    _encode_Bundle,
} from '../ASN1DefinedTypesModule/Bundle.ta';

/* START_OF_SYMBOL_DEFINITION SignalType */
/**
 * @summary SignalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalType  ::=  CHOICE {
 *   simple   CharacteristicInformation,
 *   bundle   Bundle,
 *   complex  [0]  SEQUENCE OF Bundle
 * }
 * ```
 */
export type SignalType =
    | { simple: CharacteristicInformation } /* CHOICE_ALT_ROOT */
    | { bundle: Bundle } /* CHOICE_ALT_ROOT */
    | { complex: Bundle[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignalType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalType */
let _cached_decoder_for_SignalType: $.ASN1Decoder<SignalType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalType */

/* START_OF_SYMBOL_DEFINITION _decode_SignalType */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalType} The decoded data structure.
 */
export function _decode_SignalType(el: _Element) {
    if (!_cached_decoder_for_SignalType) {
        _cached_decoder_for_SignalType = $._decode_inextensible_choice<SignalType>(
            {
                'UNIVERSAL 6': ['simple', _decode_CharacteristicInformation],
                'UNIVERSAL 16': ['bundle', _decode_Bundle],
                'CONTEXT 0': [
                    'complex',
                    $._decode_implicit<Bundle[]>(() =>
                        $._decodeSequenceOf<Bundle>(() => _decode_Bundle)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SignalType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignalType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalType */
let _cached_encoder_for_SignalType: $.ASN1Encoder<SignalType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalType */

/* START_OF_SYMBOL_DEFINITION _encode_SignalType */
/**
 * @summary Encodes a(n) SignalType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalType, encoded as an ASN.1 Element.
 */
export function _encode_SignalType(
    value: SignalType,
    elGetter: $.ASN1Encoder<SignalType>
) {
    if (!_cached_encoder_for_SignalType) {
        _cached_encoder_for_SignalType = $._encode_choice<SignalType>(
            {
                simple: _encode_CharacteristicInformation,
                bundle: _encode_Bundle,
                complex: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<Bundle>(
                            () => _encode_Bundle,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SignalType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignalType */

/* eslint-enable */
