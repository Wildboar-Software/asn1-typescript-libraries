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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BuiltInEncodedInformationTypes,
    _decode_BuiltInEncodedInformationTypes,
    _encode_BuiltInEncodedInformationTypes,
} from '../MTSAbstractService/BuiltInEncodedInformationTypes.ta.mjs';
import {
    NonBasicParameters,
    _decode_NonBasicParameters,
    _encode_NonBasicParameters,
} from '../MTSAbstractService/NonBasicParameters.ta.mjs';
import {
    ExtendedEncodedInformationTypes,
    _decode_ExtendedEncodedInformationTypes,
    _encode_ExtendedEncodedInformationTypes,
} from '../MTSAbstractService/ExtendedEncodedInformationTypes.ta.mjs';
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from '../MTSAbstractService/G3FacsimileNonBasicParameters.ta.mjs';
import {
    TeletexNonBasicParameters,
    _decode_TeletexNonBasicParameters,
    _encode_TeletexNonBasicParameters,
} from '../MTSAbstractService/TeletexNonBasicParameters.ta.mjs';
import {
    _root_component_type_list_1_spec_for_NonBasicParameters,
    _root_component_type_list_2_spec_for_NonBasicParameters,
    _extension_additions_list_spec_for_NonBasicParameters,
} from '../MTSAbstractService/NonBasicParameters.ta.mjs';

/**
 * @summary EncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedInformationTypes ::= [APPLICATION 5]  SET {
 *   built-in-encoded-information-types  [0]  BuiltInEncodedInformationTypes,
 *   COMPONENTS OF NonBasicParameters,
 *   extended-encoded-information-types
 *     [4]  ExtendedEncodedInformationTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncodedInformationTypes implements NonBasicParameters {
    constructor(
        /**
         * @summary `built_in_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly built_in_encoded_information_types: BuiltInEncodedInformationTypes,
        /**
         * @summary `g3_facsimile`.
         * @public
         * @readonly
         */
        readonly g3_facsimile: OPTIONAL<G3FacsimileNonBasicParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `teletex`.
         * @public
         * @readonly
         */
        readonly teletex: OPTIONAL<TeletexNonBasicParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extended_encoded_information_types`.
         * @public
         * @readonly
         */
        readonly extended_encoded_information_types: OPTIONAL<ExtendedEncodedInformationTypes>
    ) {}

    /**
     * @summary Restructures an object into a EncodedInformationTypes
     * @description
     *
     * This takes an `object` and converts it to a `EncodedInformationTypes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncodedInformationTypes`.
     * @returns {EncodedInformationTypes}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncodedInformationTypes]: EncodedInformationTypes[_K];
        }
    ): EncodedInformationTypes {
        return new EncodedInformationTypes(
            _o.built_in_encoded_information_types,
            _o.g3_facsimile,
            _o.teletex,
            _o.extended_encoded_information_types
        );
    }

    /**
     * @summary Getter that returns the default value for `g3_facsimile`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_g3_facsimile() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `teletex`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_teletex() {
        return TeletexNonBasicParameters._from_object(new TeletexNonBasicParameters(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ));
    }
}

/**
 * @summary The Leading Root Component Types of EncodedInformationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncodedInformationTypes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'built-in-encoded-information-types',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    ..._root_component_type_list_1_spec_for_NonBasicParameters,
    new $.ComponentSpec(
        'extended-encoded-information-types',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of EncodedInformationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncodedInformationTypes: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_NonBasicParameters,
];

/**
 * @summary The Extension Addition Component Types of EncodedInformationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncodedInformationTypes: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_NonBasicParameters,
];

let _cached_decoder_for_EncodedInformationTypes: $.ASN1Decoder<EncodedInformationTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedInformationTypes} The decoded data structure.
 */
export function _decode_EncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_EncodedInformationTypes) {
        _cached_decoder_for_EncodedInformationTypes = $._decode_implicit<EncodedInformationTypes>(
            () =>
                function (el: _Element): EncodedInformationTypes {
                    /* START_OF_SET_COMPONENT_DECLARATIONS */
                    let built_in_encoded_information_types!: BuiltInEncodedInformationTypes;
                    let g3_facsimile: OPTIONAL<G3FacsimileNonBasicParameters> =
                        EncodedInformationTypes._default_value_for_g3_facsimile;
                    let teletex: OPTIONAL<TeletexNonBasicParameters> =
                        EncodedInformationTypes._default_value_for_teletex;
                    let extended_encoded_information_types: OPTIONAL<ExtendedEncodedInformationTypes>;
                    /* END_OF_SET_COMPONENT_DECLARATIONS */
                    const callbacks: $.DecodingMap = {
                        'built-in-encoded-information-types': (
                            _el: _Element
                        ): void => {
                            built_in_encoded_information_types = $._decode_implicit<BuiltInEncodedInformationTypes>(
                                () => _decode_BuiltInEncodedInformationTypes
                            )(_el);
                        },
                        'g3-facsimile': (_el: _Element): void => {
                            g3_facsimile = $._decode_implicit<G3FacsimileNonBasicParameters>(
                                () => _decode_G3FacsimileNonBasicParameters
                            )(_el);
                        },
                        teletex: (_el: _Element): void => {
                            teletex = $._decode_implicit<TeletexNonBasicParameters>(
                                () => _decode_TeletexNonBasicParameters
                            )(_el);
                        },
                        'extended-encoded-information-types': (
                            _el: _Element
                        ): void => {
                            extended_encoded_information_types = $._decode_implicit<ExtendedEncodedInformationTypes>(
                                () => _decode_ExtendedEncodedInformationTypes
                            )(_el);
                        },
                    };
                    $._parse_set(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_EncodedInformationTypes,
                        _extension_additions_list_spec_for_EncodedInformationTypes,
                        _root_component_type_list_2_spec_for_EncodedInformationTypes,
                        undefined
                    );
                    return new EncodedInformationTypes /* SET_CONSTRUCTOR_CALL */(
                        built_in_encoded_information_types,
                        g3_facsimile,
                        teletex,
                        extended_encoded_information_types
                    );
                }
        );
    }
    return _cached_decoder_for_EncodedInformationTypes(el);
}

let _cached_encoder_for_EncodedInformationTypes: $.ASN1Encoder<EncodedInformationTypes> | null = null;

/**
 * @summary Encodes a(n) EncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_EncodedInformationTypes(
    value: EncodedInformationTypes,
    elGetter: $.ASN1Encoder<EncodedInformationTypes>
) {
    if (!_cached_encoder_for_EncodedInformationTypes) {
        _cached_encoder_for_EncodedInformationTypes = $._encode_implicit(
            _TagClass.application,
            5,
            () =>
                function (
                    value: EncodedInformationTypes                ): _Element {
                    return $._encodeSet(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.context,
                                    0,
                                    () =>
                                        _encode_BuiltInEncodedInformationTypes,
                                    $.BER
                                )(
                                    value.built_in_encoded_information_types,
                                    $.BER
                                ),
                                /* IF_DEFAULT */ value.g3_facsimile ===
                                    undefined ||
                                $.deepEq(
                                    value.g3_facsimile,
                                    EncodedInformationTypes._default_value_for_g3_facsimile
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          1,
                                          () =>
                                              _encode_G3FacsimileNonBasicParameters,
                                          $.BER
                                      )(value.g3_facsimile, $.BER),
                                /* IF_DEFAULT */ value.teletex === undefined ||
                                $.deepEq(
                                    value.teletex,
                                    EncodedInformationTypes._default_value_for_teletex
                                )
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          2,
                                          () =>
                                              _encode_TeletexNonBasicParameters,
                                          $.BER
                                      )(value.teletex, $.BER),
                                /* IF_ABSENT  */ value.extended_encoded_information_types ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          4,
                                          () =>
                                              _encode_ExtendedEncodedInformationTypes,
                                          $.BER
                                      )(
                                          value.extended_encoded_information_types,
                                          $.BER
                                      ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_EncodedInformationTypes(value, elGetter);
}


/* eslint-enable */
