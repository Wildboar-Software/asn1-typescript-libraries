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
    RegistrationProblem,
    _enum_for_RegistrationProblem,
    RegistrationProblem_registration_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RegistrationProblem_registration_improperly_specified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_improperly_specified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RegistrationProblem_registration_limit_exceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_limit_exceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RegistrationProblem,
    _encode_RegistrationProblem,
} from '../MSAbstractService/RegistrationProblem.ta';
export {
    RegistrationProblem,
    _enum_for_RegistrationProblem,
    RegistrationProblem_registration_not_supported /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_not_supported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RegistrationProblem_registration_improperly_specified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_improperly_specified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RegistrationProblem_registration_limit_exceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    registration_limit_exceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RegistrationProblem,
    _encode_RegistrationProblem,
} from '../MSAbstractService/RegistrationProblem.ta';
import {
    RegistrationTypes,
    _decode_RegistrationTypes,
    _encode_RegistrationTypes,
} from '../MSAbstractService/RegistrationTypes.ta';
export {
    RegistrationTypes,
    _decode_RegistrationTypes,
    _encode_RegistrationTypes,
} from '../MSAbstractService/RegistrationTypes.ta';

/* START_OF_SYMBOL_DEFINITION register_ms_error_ParameterType */
/**
 * @summary register_ms_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register-ms-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class register_ms_error_ParameterType {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: RegistrationProblem,
        /**
         * @summary `registration_type`.
         * @public
         * @readonly
         */
        readonly registration_type: RegistrationTypes
    ) {}

    /**
     * @summary Restructures an object into a register_ms_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `register_ms_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `register_ms_error_ParameterType`.
     * @returns {register_ms_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof register_ms_error_ParameterType]: register_ms_error_ParameterType[_K];
        }
    ): register_ms_error_ParameterType {
        return new register_ms_error_ParameterType(
            _o.problem,
            _o.registration_type
        );
    }

    /**
     * @summary The enum used as the type of the component `problem`
     * @public
     * @static
     */

    public static _enum_for_problem = _enum_for_RegistrationProblem;
}
/* END_OF_SYMBOL_DEFINITION register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_register_ms_error_ParameterType */
/**
 * @summary The Leading Root Component Types of register_ms_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_register_ms_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'registration-type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_register_ms_error_ParameterType */
/**
 * @summary The Trailing Root Component Types of register_ms_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_register_ms_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_register_ms_error_ParameterType */
/**
 * @summary The Extension Addition Component Types of register_ms_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_register_ms_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_register_ms_error_ParameterType */
let _cached_decoder_for_register_ms_error_ParameterType: $.ASN1Decoder<register_ms_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_register_ms_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) register_ms_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {register_ms_error_ParameterType} The decoded data structure.
 */
export function _decode_register_ms_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_register_ms_error_ParameterType) {
        _cached_decoder_for_register_ms_error_ParameterType = function (
            el: _Element
        ): register_ms_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: RegistrationProblem;
            let registration_type!: RegistrationTypes;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<RegistrationProblem>(
                        () => _decode_RegistrationProblem
                    )(_el);
                },
                'registration-type': (_el: _Element): void => {
                    registration_type = $._decode_explicit<RegistrationTypes>(
                        () => _decode_RegistrationTypes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_register_ms_error_ParameterType,
                _extension_additions_list_spec_for_register_ms_error_ParameterType,
                _root_component_type_list_2_spec_for_register_ms_error_ParameterType,
                undefined
            );
            return new register_ms_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problem,
                registration_type
            );
        };
    }
    return _cached_decoder_for_register_ms_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_register_ms_error_ParameterType */
let _cached_encoder_for_register_ms_error_ParameterType: $.ASN1Encoder<register_ms_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_register_ms_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_register_ms_error_ParameterType */
/**
 * @summary Encodes a(n) register_ms_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The register_ms_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_register_ms_error_ParameterType(
    value: register_ms_error_ParameterType,
    elGetter: $.ASN1Encoder<register_ms_error_ParameterType>
) {
    if (!_cached_encoder_for_register_ms_error_ParameterType) {
        _cached_encoder_for_register_ms_error_ParameterType = function (
            value: register_ms_error_ParameterType,
            elGetter: $.ASN1Encoder<register_ms_error_ParameterType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_RegistrationProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_RegistrationTypes,
                            $.BER
                        )(value.registration_type, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_register_ms_error_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_register_ms_error_ParameterType */

/* eslint-enable */
