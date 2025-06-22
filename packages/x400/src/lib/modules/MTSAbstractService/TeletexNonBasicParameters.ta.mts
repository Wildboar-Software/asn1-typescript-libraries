/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    TeletexString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TeletexNonBasicParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexNonBasicParameters ::= SET {
 *   graphic-character-sets               [0]  TeletexString OPTIONAL,
 *   control-character-sets               [1]  TeletexString OPTIONAL,
 *   page-formats                         [2]  OCTET STRING OPTIONAL,
 *   miscellaneous-terminal-capabilities  [3]  TeletexString OPTIONAL,
 *   private-use
 *     [4]  OCTET STRING
 *       OPTIONAL -- maximum ub-teletex-private-use-length octets --
 * }
 * ```
 *
 * @class
 */
export class TeletexNonBasicParameters {
    constructor(
        /**
         * @summary `graphic_character_sets`.
         * @public
         * @readonly
         */
        readonly graphic_character_sets: OPTIONAL<TeletexString>,
        /**
         * @summary `control_character_sets`.
         * @public
         * @readonly
         */
        readonly control_character_sets: OPTIONAL<TeletexString>,
        /**
         * @summary `page_formats`.
         * @public
         * @readonly
         */
        readonly page_formats: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `miscellaneous_terminal_capabilities`.
         * @public
         * @readonly
         */
        readonly miscellaneous_terminal_capabilities: OPTIONAL<TeletexString>,
        /**
         * @summary `private_use`.
         * @public
         * @readonly
         */
        readonly private_use: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TeletexNonBasicParameters
     * @description
     *
     * This takes an `object` and converts it to a `TeletexNonBasicParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexNonBasicParameters`.
     * @returns {TeletexNonBasicParameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof TeletexNonBasicParameters]: TeletexNonBasicParameters[_K];
        }
    ): TeletexNonBasicParameters {
        return new TeletexNonBasicParameters(
            _o.graphic_character_sets,
            _o.control_character_sets,
            _o.page_formats,
            _o.miscellaneous_terminal_capabilities,
            _o.private_use
        );
    }
}

/**
 * @summary The Leading Root Component Types of TeletexNonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexNonBasicParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'graphic-character-sets',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'control-character-sets',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'page-formats',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'miscellaneous-terminal-capabilities',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'private-use',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexNonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexNonBasicParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexNonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexNonBasicParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexNonBasicParameters: $.ASN1Decoder<TeletexNonBasicParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexNonBasicParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexNonBasicParameters} The decoded data structure.
 */
export function _decode_TeletexNonBasicParameters(el: _Element) {
    if (!_cached_decoder_for_TeletexNonBasicParameters) {
        _cached_decoder_for_TeletexNonBasicParameters = function (
            el: _Element
        ): TeletexNonBasicParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let graphic_character_sets: OPTIONAL<TeletexString>;
            let control_character_sets: OPTIONAL<TeletexString>;
            let page_formats: OPTIONAL<OCTET_STRING>;
            let miscellaneous_terminal_capabilities: OPTIONAL<TeletexString>;
            let private_use: OPTIONAL<OCTET_STRING>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'graphic-character-sets': (_el: _Element): void => {
                    graphic_character_sets = $._decode_implicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                'control-character-sets': (_el: _Element): void => {
                    control_character_sets = $._decode_implicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                'page-formats': (_el: _Element): void => {
                    page_formats = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                'miscellaneous-terminal-capabilities': (
                    _el: _Element
                ): void => {
                    miscellaneous_terminal_capabilities = $._decode_implicit<TeletexString>(
                        () => $._decodeTeletexString
                    )(_el);
                },
                'private-use': (_el: _Element): void => {
                    private_use = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TeletexNonBasicParameters,
                _extension_additions_list_spec_for_TeletexNonBasicParameters,
                _root_component_type_list_2_spec_for_TeletexNonBasicParameters,
                undefined
            );
            return new TeletexNonBasicParameters /* SET_CONSTRUCTOR_CALL */(
                graphic_character_sets,
                control_character_sets,
                page_formats,
                miscellaneous_terminal_capabilities,
                private_use
            );
        };
    }
    return _cached_decoder_for_TeletexNonBasicParameters(el);
}

let _cached_encoder_for_TeletexNonBasicParameters: $.ASN1Encoder<TeletexNonBasicParameters> | null = null;

/**
 * @summary Encodes a(n) TeletexNonBasicParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexNonBasicParameters, encoded as an ASN.1 Element.
 */
export function _encode_TeletexNonBasicParameters(
    value: TeletexNonBasicParameters,
    elGetter: $.ASN1Encoder<TeletexNonBasicParameters>
) {
    if (!_cached_encoder_for_TeletexNonBasicParameters) {
        _cached_encoder_for_TeletexNonBasicParameters = function (
            value: TeletexNonBasicParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.graphic_character_sets ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(value.graphic_character_sets, $.BER),
                        /* IF_ABSENT  */ value.control_character_sets ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(value.control_character_sets, $.BER),
                        /* IF_ABSENT  */ value.page_formats === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.page_formats, $.BER),
                        /* IF_ABSENT  */ value.miscellaneous_terminal_capabilities ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeTeletexString,
                                  $.BER
                              )(
                                  value.miscellaneous_terminal_capabilities,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.private_use === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.private_use, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TeletexNonBasicParameters(value, elGetter);
}


/* eslint-enable */
