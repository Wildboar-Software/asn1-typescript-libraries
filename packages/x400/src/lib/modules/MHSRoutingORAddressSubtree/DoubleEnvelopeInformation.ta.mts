/* eslint-disable */
import {
    OPTIONAL,
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
    ORAddressAndDirectoryName,
    _decode_ORAddressAndDirectoryName,
    _encode_ORAddressAndDirectoryName,
} from '../MHSRoutingORAddressSubtree/ORAddressAndDirectoryName.ta.mjs';
import {
    AlgorithmInformation,
    _decode_AlgorithmInformation,
    _encode_AlgorithmInformation,
} from '../MHSRoutingORAddressSubtree/AlgorithmInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DoubleEnvelopeInformation */
/**
 * @summary DoubleEnvelopeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DoubleEnvelopeInformation ::= SEQUENCE {
 *   envelope-opener                               [0]  ORAddressAndDirectoryName,
 *   content-confidentiality-algorithm-preference
 *     [1]  SEQUENCE OF AlgorithmInformation,
 *   key-encryption-algorithm-preference
 *     [2]  SEQUENCE OF AlgorithmInformation OPTIONAL,
 *   message-origin-algorithm-preference
 *     [3]  SEQUENCE OF AlgorithmInformation OPTIONAL,
 *   token-signature-algorithm-preference
 *     [4]  SEQUENCE OF AlgorithmInformation OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class DoubleEnvelopeInformation {
    constructor(
        /**
         * @summary `envelope_opener`.
         * @public
         * @readonly
         */
        readonly envelope_opener: ORAddressAndDirectoryName,
        /**
         * @summary `content_confidentiality_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly content_confidentiality_algorithm_preference: AlgorithmInformation[],
        /**
         * @summary `key_encryption_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly key_encryption_algorithm_preference: OPTIONAL<
            AlgorithmInformation[]
        >,
        /**
         * @summary `message_origin_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly message_origin_algorithm_preference: OPTIONAL<
            AlgorithmInformation[]
        >,
        /**
         * @summary `token_signature_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly token_signature_algorithm_preference: OPTIONAL<
            AlgorithmInformation[]
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DoubleEnvelopeInformation
     * @description
     *
     * This takes an `object` and converts it to a `DoubleEnvelopeInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DoubleEnvelopeInformation`.
     * @returns {DoubleEnvelopeInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof DoubleEnvelopeInformation]: DoubleEnvelopeInformation[_K];
        }
    ): DoubleEnvelopeInformation {
        return new DoubleEnvelopeInformation(
            _o.envelope_opener,
            _o.content_confidentiality_algorithm_preference,
            _o.key_encryption_algorithm_preference,
            _o.message_origin_algorithm_preference,
            _o.token_signature_algorithm_preference,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DoubleEnvelopeInformation */
/**
 * @summary The Leading Root Component Types of DoubleEnvelopeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DoubleEnvelopeInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'envelope-opener',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'content-confidentiality-algorithm-preference',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'key-encryption-algorithm-preference',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-origin-algorithm-preference',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'token-signature-algorithm-preference',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DoubleEnvelopeInformation */
/**
 * @summary The Trailing Root Component Types of DoubleEnvelopeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DoubleEnvelopeInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DoubleEnvelopeInformation */
/**
 * @summary The Extension Addition Component Types of DoubleEnvelopeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DoubleEnvelopeInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DoubleEnvelopeInformation */
let _cached_decoder_for_DoubleEnvelopeInformation: $.ASN1Decoder<DoubleEnvelopeInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DoubleEnvelopeInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DoubleEnvelopeInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DoubleEnvelopeInformation} The decoded data structure.
 */
export function _decode_DoubleEnvelopeInformation(el: _Element) {
    if (!_cached_decoder_for_DoubleEnvelopeInformation) {
        _cached_decoder_for_DoubleEnvelopeInformation = function (
            el: _Element
        ): DoubleEnvelopeInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let envelope_opener!: ORAddressAndDirectoryName;
            let content_confidentiality_algorithm_preference!: AlgorithmInformation[];
            let key_encryption_algorithm_preference: OPTIONAL<
                AlgorithmInformation[]
            >;
            let message_origin_algorithm_preference: OPTIONAL<
                AlgorithmInformation[]
            >;
            let token_signature_algorithm_preference: OPTIONAL<
                AlgorithmInformation[]
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'envelope-opener': (_el: _Element): void => {
                    envelope_opener = $._decode_implicit<ORAddressAndDirectoryName>(
                        () => _decode_ORAddressAndDirectoryName
                    )(_el);
                },
                'content-confidentiality-algorithm-preference': (
                    _el: _Element
                ): void => {
                    content_confidentiality_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
                'key-encryption-algorithm-preference': (
                    _el: _Element
                ): void => {
                    key_encryption_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
                'message-origin-algorithm-preference': (
                    _el: _Element
                ): void => {
                    message_origin_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
                'token-signature-algorithm-preference': (
                    _el: _Element
                ): void => {
                    token_signature_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DoubleEnvelopeInformation,
                _extension_additions_list_spec_for_DoubleEnvelopeInformation,
                _root_component_type_list_2_spec_for_DoubleEnvelopeInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DoubleEnvelopeInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                envelope_opener,
                content_confidentiality_algorithm_preference,
                key_encryption_algorithm_preference,
                message_origin_algorithm_preference,
                token_signature_algorithm_preference,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DoubleEnvelopeInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DoubleEnvelopeInformation */
let _cached_encoder_for_DoubleEnvelopeInformation: $.ASN1Encoder<DoubleEnvelopeInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DoubleEnvelopeInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DoubleEnvelopeInformation */
/**
 * @summary Encodes a(n) DoubleEnvelopeInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DoubleEnvelopeInformation, encoded as an ASN.1 Element.
 */
export function _encode_DoubleEnvelopeInformation(
    value: DoubleEnvelopeInformation,
    elGetter: $.ASN1Encoder<DoubleEnvelopeInformation>
) {
    if (!_cached_encoder_for_DoubleEnvelopeInformation) {
        _cached_encoder_for_DoubleEnvelopeInformation = function (
            value: DoubleEnvelopeInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_ORAddressAndDirectoryName,
                                $.BER
                            )(value.envelope_opener, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSequenceOf<AlgorithmInformation>(
                                        () => _encode_AlgorithmInformation,
                                        $.BER
                                    ),
                                $.BER
                            )(
                                value.content_confidentiality_algorithm_preference,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.key_encryption_algorithm_preference ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInformation>(
                                              () =>
                                                  _encode_AlgorithmInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(
                                      value.key_encryption_algorithm_preference,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.message_origin_algorithm_preference ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInformation>(
                                              () =>
                                                  _encode_AlgorithmInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(
                                      value.message_origin_algorithm_preference,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.token_signature_algorithm_preference ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInformation>(
                                              () =>
                                                  _encode_AlgorithmInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(
                                      value.token_signature_algorithm_preference,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DoubleEnvelopeInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DoubleEnvelopeInformation */

/* eslint-enable */
