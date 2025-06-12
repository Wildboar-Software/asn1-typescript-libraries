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
import {
    BuiltInEncodedInformationTypes,
    BuiltInEncodedInformationTypes_unknown /* IMPORTED_LONG_NAMED_BIT */,
    unknown /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_ia5_text /* IMPORTED_LONG_NAMED_BIT */,
    ia5_text /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_g3_facsimile /* IMPORTED_LONG_NAMED_BIT */,
    g3_facsimile /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_g4_class_1 /* IMPORTED_LONG_NAMED_BIT */,
    g4_class_1 /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_teletex /* IMPORTED_LONG_NAMED_BIT */,
    teletex /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_videotex /* IMPORTED_LONG_NAMED_BIT */,
    videotex /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_voice /* IMPORTED_LONG_NAMED_BIT */,
    voice /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_sfd /* IMPORTED_LONG_NAMED_BIT */,
    sfd /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_mixed_mode /* IMPORTED_LONG_NAMED_BIT */,
    _decode_BuiltInEncodedInformationTypes,
    _encode_BuiltInEncodedInformationTypes,
} from '../MTSAbstractService/BuiltInEncodedInformationTypes.ta.js';
export {
    BuiltInEncodedInformationTypes,
    BuiltInEncodedInformationTypes_unknown /* IMPORTED_LONG_NAMED_BIT */,
    unknown /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_ia5_text /* IMPORTED_LONG_NAMED_BIT */,
    ia5_text /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_g3_facsimile /* IMPORTED_LONG_NAMED_BIT */,
    g3_facsimile /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_g4_class_1 /* IMPORTED_LONG_NAMED_BIT */,
    g4_class_1 /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_teletex /* IMPORTED_LONG_NAMED_BIT */,
    teletex /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_videotex /* IMPORTED_LONG_NAMED_BIT */,
    videotex /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_voice /* IMPORTED_LONG_NAMED_BIT */,
    voice /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_sfd /* IMPORTED_LONG_NAMED_BIT */,
    sfd /* IMPORTED_SHORT_NAMED_BIT */,
    BuiltInEncodedInformationTypes_mixed_mode /* IMPORTED_LONG_NAMED_BIT */,
    _decode_BuiltInEncodedInformationTypes,
    _encode_BuiltInEncodedInformationTypes,
} from '../MTSAbstractService/BuiltInEncodedInformationTypes.ta.js';
import {
    NonBasicParameters,
    _decode_NonBasicParameters,
    _encode_NonBasicParameters,
} from '../MTSAbstractService/NonBasicParameters.ta.js';
export {
    NonBasicParameters,
    _decode_NonBasicParameters,
    _encode_NonBasicParameters,
} from '../MTSAbstractService/NonBasicParameters.ta.js';
import {
    ExtendedEncodedInformationTypes,
    _decode_ExtendedEncodedInformationTypes,
    _encode_ExtendedEncodedInformationTypes,
} from '../MTSAbstractService/ExtendedEncodedInformationTypes.ta.js';
export {
    ExtendedEncodedInformationTypes,
    _decode_ExtendedEncodedInformationTypes,
    _encode_ExtendedEncodedInformationTypes,
} from '../MTSAbstractService/ExtendedEncodedInformationTypes.ta.js';
import {
    G3FacsimileNonBasicParameters,
    G3FacsimileNonBasicParameters_two_dimensional /* IMPORTED_LONG_NAMED_BIT */,
    two_dimensional /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_fine_resolution /* IMPORTED_LONG_NAMED_BIT */,
    fine_resolution /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_unlimited_length /* IMPORTED_LONG_NAMED_BIT */,
    unlimited_length /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_length /* IMPORTED_LONG_NAMED_BIT */,
    b4_length /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_a3_width /* IMPORTED_LONG_NAMED_BIT */,
    a3_width /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_width /* IMPORTED_LONG_NAMED_BIT */,
    b4_width /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_t6_coding /* IMPORTED_LONG_NAMED_BIT */,
    t6_coding /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_uncompressed /* IMPORTED_LONG_NAMED_BIT */,
    uncompressed /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_864_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    width_middle_864_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_1216_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    width_middle_1216_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_type /* IMPORTED_LONG_NAMED_BIT */,
    resolution_type /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_400x400 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_400x400 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_300x300 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_300x300 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_8x15 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_8x15 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_edi /* IMPORTED_LONG_NAMED_BIT */,
    edi /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_dtm /* IMPORTED_LONG_NAMED_BIT */,
    dtm /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_bft /* IMPORTED_LONG_NAMED_BIT */,
    bft /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_mixed_mode /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_character_mode /* IMPORTED_LONG_NAMED_BIT */,
    character_mode /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_twelve_bits /* IMPORTED_LONG_NAMED_BIT */,
    twelve_bits /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_preferred_huffmann /* IMPORTED_LONG_NAMED_BIT */,
    preferred_huffmann /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_full_colour /* IMPORTED_LONG_NAMED_BIT */,
    full_colour /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_jpeg /* IMPORTED_LONG_NAMED_BIT */,
    jpeg /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_processable_mode_26 /* IMPORTED_LONG_NAMED_BIT */,
    processable_mode_26 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from '../MTSAbstractService/G3FacsimileNonBasicParameters.ta.js';
export {
    G3FacsimileNonBasicParameters,
    G3FacsimileNonBasicParameters_two_dimensional /* IMPORTED_LONG_NAMED_BIT */,
    two_dimensional /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_fine_resolution /* IMPORTED_LONG_NAMED_BIT */,
    fine_resolution /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_unlimited_length /* IMPORTED_LONG_NAMED_BIT */,
    unlimited_length /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_length /* IMPORTED_LONG_NAMED_BIT */,
    b4_length /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_a3_width /* IMPORTED_LONG_NAMED_BIT */,
    a3_width /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_width /* IMPORTED_LONG_NAMED_BIT */,
    b4_width /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_t6_coding /* IMPORTED_LONG_NAMED_BIT */,
    t6_coding /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_uncompressed /* IMPORTED_LONG_NAMED_BIT */,
    uncompressed /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_864_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    width_middle_864_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_1216_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    width_middle_1216_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_type /* IMPORTED_LONG_NAMED_BIT */,
    resolution_type /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_400x400 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_400x400 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_300x300 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_300x300 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_8x15 /* IMPORTED_LONG_NAMED_BIT */,
    resolution_8x15 /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_edi /* IMPORTED_LONG_NAMED_BIT */,
    edi /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_dtm /* IMPORTED_LONG_NAMED_BIT */,
    dtm /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_bft /* IMPORTED_LONG_NAMED_BIT */,
    bft /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_mixed_mode /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_character_mode /* IMPORTED_LONG_NAMED_BIT */,
    character_mode /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_twelve_bits /* IMPORTED_LONG_NAMED_BIT */,
    twelve_bits /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_preferred_huffmann /* IMPORTED_LONG_NAMED_BIT */,
    preferred_huffmann /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_full_colour /* IMPORTED_LONG_NAMED_BIT */,
    full_colour /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_jpeg /* IMPORTED_LONG_NAMED_BIT */,
    jpeg /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters_processable_mode_26 /* IMPORTED_LONG_NAMED_BIT */,
    processable_mode_26 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from '../MTSAbstractService/G3FacsimileNonBasicParameters.ta.js';
import {
    TeletexNonBasicParameters,
    _decode_TeletexNonBasicParameters,
    _encode_TeletexNonBasicParameters,
} from '../MTSAbstractService/TeletexNonBasicParameters.ta.js';
export {
    TeletexNonBasicParameters,
    _decode_TeletexNonBasicParameters,
    _encode_TeletexNonBasicParameters,
} from '../MTSAbstractService/TeletexNonBasicParameters.ta.js';

/* START_OF_SYMBOL_DEFINITION EncodedInformationTypes */
/**
 * @summary EncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedInformationTypes ::= [APPLICATION 5]  SET {
 *   built-in-encoded-information-types  [0]  BuiltInEncodedInformationTypes,
 *   -- non-basic-parameters --COMPONENTS OF NonBasicParameters,
 *   extended-encoded-information-types
 *     [4]  ExtendedEncodedInformationTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncodedInformationTypes {
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
/* END_OF_SYMBOL_DEFINITION EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedInformationTypes */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'g3-facsimile',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'teletex',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extended-encoded-information-types',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedInformationTypes */
/**
 * @summary The Trailing Root Component Types of EncodedInformationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncodedInformationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedInformationTypes */
/**
 * @summary The Extension Addition Component Types of EncodedInformationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncodedInformationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedInformationTypes */
let _cached_decoder_for_EncodedInformationTypes: $.ASN1Decoder<EncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedInformationTypes */
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
                    /* START_OF_CALLBACKS_MAP */
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
                    /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedInformationTypes */
let _cached_encoder_for_EncodedInformationTypes: $.ASN1Encoder<EncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedInformationTypes */
/**
 * @summary Encodes a(n) EncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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
                    value: EncodedInformationTypes,
                    elGetter: $.ASN1Encoder<EncodedInformationTypes>
                ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_EncodedInformationTypes */

/* eslint-enable */
