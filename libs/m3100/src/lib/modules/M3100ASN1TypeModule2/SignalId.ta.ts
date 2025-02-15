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
import {
    Bundle,
    _decode_Bundle,
    _encode_Bundle,
} from '../ASN1DefinedTypesModule/Bundle.ta';

/* START_OF_SYMBOL_DEFINITION SignalId */
/**
 * @summary SignalId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalId  ::=  CHOICE {
 *   simple   [0]  CharacteristicInformation,
 *   bundle   [1]  Bundle,
 *   complex  [3]  SEQUENCE OF Bundle
 * }
 * ```
 */
export type SignalId =
    | { simple: CharacteristicInformation } /* CHOICE_ALT_ROOT */
    | { bundle: Bundle } /* CHOICE_ALT_ROOT */
    | { complex: Bundle[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SignalId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalId */
let _cached_decoder_for_SignalId: $.ASN1Decoder<SignalId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalId */

/* START_OF_SYMBOL_DEFINITION _decode_SignalId */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalId} The decoded data structure.
 */
export function _decode_SignalId(el: _Element) {
    if (!_cached_decoder_for_SignalId) {
        _cached_decoder_for_SignalId = $._decode_inextensible_choice<SignalId>({
            'CONTEXT 0': [
                'simple',
                $._decode_implicit<CharacteristicInformation>(
                    () => _decode_CharacteristicInformation
                ),
            ],
            'CONTEXT 1': [
                'bundle',
                $._decode_implicit<Bundle>(() => _decode_Bundle),
            ],
            'CONTEXT 3': [
                'complex',
                $._decode_implicit<Bundle[]>(() =>
                    $._decodeSequenceOf<Bundle>(() => _decode_Bundle)
                ),
            ],
        });
    }
    return _cached_decoder_for_SignalId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignalId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalId */
let _cached_encoder_for_SignalId: $.ASN1Encoder<SignalId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalId */

/* START_OF_SYMBOL_DEFINITION _encode_SignalId */
/**
 * @summary Encodes a(n) SignalId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalId, encoded as an ASN.1 Element.
 */
export function _encode_SignalId(
    value: SignalId,
    elGetter: $.ASN1Encoder<SignalId>
) {
    if (!_cached_encoder_for_SignalId) {
        _cached_encoder_for_SignalId = $._encode_choice<SignalId>(
            {
                simple: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CharacteristicInformation,
                    $.BER
                ),
                bundle: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Bundle,
                    $.BER
                ),
                complex: $._encode_implicit(
                    _TagClass.context,
                    3,
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
    return _cached_encoder_for_SignalId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignalId */

/* eslint-enable */
