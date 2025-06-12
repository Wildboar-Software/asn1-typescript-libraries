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
    mixed_mode /* IMPORTED_SHORT_NAMED_BIT */,
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
    mixed_mode /* IMPORTED_SHORT_NAMED_BIT */,
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

/* START_OF_SYMBOL_DEFINITION G3FacsimileParameters */
/**
 * @summary G3FacsimileParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileParameters ::= SET {
 *   number-of-pages       [0]  INTEGER OPTIONAL,
 *   non-basic-parameters  [1]  G3FacsimileNonBasicParameters OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class G3FacsimileParameters {
    constructor(
        /**
         * @summary `number_of_pages`.
         * @public
         * @readonly
         */
        readonly number_of_pages: OPTIONAL<INTEGER>,
        /**
         * @summary `non_basic_parameters`.
         * @public
         * @readonly
         */
        readonly non_basic_parameters: OPTIONAL<G3FacsimileNonBasicParameters>
    ) {}

    /**
     * @summary Restructures an object into a G3FacsimileParameters
     * @description
     *
     * This takes an `object` and converts it to a `G3FacsimileParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `G3FacsimileParameters`.
     * @returns {G3FacsimileParameters}
     */
    public static _from_object(
        _o: { [_K in keyof G3FacsimileParameters]: G3FacsimileParameters[_K] }
    ): G3FacsimileParameters {
        return new G3FacsimileParameters(
            _o.number_of_pages,
            _o.non_basic_parameters
        );
    }
}
/* END_OF_SYMBOL_DEFINITION G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_G3FacsimileParameters */
/**
 * @summary The Leading Root Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'number-of-pages',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'non-basic-parameters',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_G3FacsimileParameters */
/**
 * @summary The Trailing Root Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_G3FacsimileParameters */
/**
 * @summary The Extension Addition Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileParameters */
let _cached_decoder_for_G3FacsimileParameters: $.ASN1Decoder<G3FacsimileParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _decode_G3FacsimileParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileParameters} The decoded data structure.
 */
export function _decode_G3FacsimileParameters(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileParameters) {
        _cached_decoder_for_G3FacsimileParameters = function (
            el: _Element
        ): G3FacsimileParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let number_of_pages: OPTIONAL<INTEGER>;
            let non_basic_parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'number-of-pages': (_el: _Element): void => {
                    number_of_pages = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'non-basic-parameters': (_el: _Element): void => {
                    non_basic_parameters = $._decode_implicit<G3FacsimileNonBasicParameters>(
                        () => _decode_G3FacsimileNonBasicParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_G3FacsimileParameters,
                _extension_additions_list_spec_for_G3FacsimileParameters,
                _root_component_type_list_2_spec_for_G3FacsimileParameters,
                undefined
            );
            return new G3FacsimileParameters /* SET_CONSTRUCTOR_CALL */(
                number_of_pages,
                non_basic_parameters
            );
        };
    }
    return _cached_decoder_for_G3FacsimileParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileParameters */
let _cached_encoder_for_G3FacsimileParameters: $.ASN1Encoder<G3FacsimileParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileParameters */

/* START_OF_SYMBOL_DEFINITION _encode_G3FacsimileParameters */
/**
 * @summary Encodes a(n) G3FacsimileParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileParameters, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileParameters(
    value: G3FacsimileParameters,
    elGetter: $.ASN1Encoder<G3FacsimileParameters>
) {
    if (!_cached_encoder_for_G3FacsimileParameters) {
        _cached_encoder_for_G3FacsimileParameters = function (
            value: G3FacsimileParameters,
            elGetter: $.ASN1Encoder<G3FacsimileParameters>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.number_of_pages === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.number_of_pages, $.BER),
                        /* IF_ABSENT  */ value.non_basic_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_G3FacsimileNonBasicParameters,
                                  $.BER
                              )(value.non_basic_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_G3FacsimileParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_G3FacsimileParameters */

/* eslint-enable */
