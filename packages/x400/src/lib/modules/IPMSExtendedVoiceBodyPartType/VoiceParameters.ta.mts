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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION VoiceParameters */
/**
 * @summary VoiceParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VoiceParameters ::= SEQUENCE {
 *   voice-message-duration     [0]  INTEGER OPTIONAL, -- In seconds
 *   voice-encoding-type        [1]  OBJECT IDENTIFIER,
 *   supplementary-information  [2]  IA5String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class VoiceParameters {
    constructor(
        /**
         * @summary `voice_message_duration`.
         * @public
         * @readonly
         */
        readonly voice_message_duration: OPTIONAL<INTEGER>,
        /**
         * @summary `voice_encoding_type`.
         * @public
         * @readonly
         */
        readonly voice_encoding_type: OBJECT_IDENTIFIER,
        /**
         * @summary `supplementary_information`.
         * @public
         * @readonly
         */
        readonly supplementary_information: OPTIONAL<IA5String>
    ) {}

    /**
     * @summary Restructures an object into a VoiceParameters
     * @description
     *
     * This takes an `object` and converts it to a `VoiceParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceParameters`.
     * @returns {VoiceParameters}
     */
    public static _from_object(
        _o: { [_K in keyof VoiceParameters]: VoiceParameters[_K] }
    ): VoiceParameters {
        return new VoiceParameters(
            _o.voice_message_duration,
            _o.voice_encoding_type,
            _o.supplementary_information
        );
    }
}
/* END_OF_SYMBOL_DEFINITION VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VoiceParameters */
/**
 * @summary The Leading Root Component Types of VoiceParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VoiceParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'voice-message-duration',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'voice-encoding-type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'supplementary-information',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VoiceParameters */
/**
 * @summary The Trailing Root Component Types of VoiceParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VoiceParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VoiceParameters */
/**
 * @summary The Extension Addition Component Types of VoiceParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VoiceParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VoiceParameters */
let _cached_decoder_for_VoiceParameters: $.ASN1Decoder<VoiceParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _decode_VoiceParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) VoiceParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VoiceParameters} The decoded data structure.
 */
export function _decode_VoiceParameters(el: _Element) {
    if (!_cached_decoder_for_VoiceParameters) {
        _cached_decoder_for_VoiceParameters = function (
            el: _Element
        ): VoiceParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let voice_message_duration: OPTIONAL<INTEGER>;
            let voice_encoding_type!: OBJECT_IDENTIFIER;
            let supplementary_information: OPTIONAL<IA5String>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'voice-message-duration': (_el: _Element): void => {
                    voice_message_duration = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'voice-encoding-type': (_el: _Element): void => {
                    voice_encoding_type = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                'supplementary-information': (_el: _Element): void => {
                    supplementary_information = $._decode_implicit<IA5String>(
                        () => $._decodeIA5String
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_VoiceParameters,
                _extension_additions_list_spec_for_VoiceParameters,
                _root_component_type_list_2_spec_for_VoiceParameters,
                undefined
            );
            return new VoiceParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                voice_message_duration,
                voice_encoding_type,
                supplementary_information
            );
        };
    }
    return _cached_decoder_for_VoiceParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VoiceParameters */
let _cached_encoder_for_VoiceParameters: $.ASN1Encoder<VoiceParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VoiceParameters */

/* START_OF_SYMBOL_DEFINITION _encode_VoiceParameters */
/**
 * @summary Encodes a(n) VoiceParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceParameters, encoded as an ASN.1 Element.
 */
export function _encode_VoiceParameters(
    value: VoiceParameters,
    elGetter: $.ASN1Encoder<VoiceParameters>
) {
    if (!_cached_encoder_for_VoiceParameters) {
        _cached_encoder_for_VoiceParameters = function (
            value: VoiceParameters,
            elGetter: $.ASN1Encoder<VoiceParameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.voice_message_duration ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.voice_message_duration, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.voice_encoding_type, $.BER),
                        /* IF_ABSENT  */ value.supplementary_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeIA5String,
                                  $.BER
                              )(value.supplementary_information, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VoiceParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VoiceParameters */

/* eslint-enable */
