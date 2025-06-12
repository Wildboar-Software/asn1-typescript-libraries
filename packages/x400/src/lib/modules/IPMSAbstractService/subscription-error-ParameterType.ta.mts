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
    SubscriptionProblem,
    _enum_for_SubscriptionProblem,
    SubscriptionProblem_ipms_eos_not_subscribed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipms_eos_not_subscribed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubscriptionProblem_mts_eos_not_subscribed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mts_eos_not_subscribed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SubscriptionProblem,
    _encode_SubscriptionProblem,
} from '../IPMSAbstractService/SubscriptionProblem.ta.mjs';
export {
    SubscriptionProblem,
    _enum_for_SubscriptionProblem,
    SubscriptionProblem_ipms_eos_not_subscribed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipms_eos_not_subscribed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SubscriptionProblem_mts_eos_not_subscribed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mts_eos_not_subscribed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SubscriptionProblem,
    _encode_SubscriptionProblem,
} from '../IPMSAbstractService/SubscriptionProblem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION subscription_error_ParameterType */
/**
 * @summary subscription_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subscription-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class subscription_error_ParameterType {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: SubscriptionProblem
    ) {}

    /**
     * @summary Restructures an object into a subscription_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `subscription_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `subscription_error_ParameterType`.
     * @returns {subscription_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof subscription_error_ParameterType]: subscription_error_ParameterType[_K];
        }
    ): subscription_error_ParameterType {
        return new subscription_error_ParameterType(_o.problem);
    }

    /**
     * @summary The enum used as the type of the component `problem`
     * @public
     * @static
     */

    public static _enum_for_problem = _enum_for_SubscriptionProblem;
}
/* END_OF_SYMBOL_DEFINITION subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_subscription_error_ParameterType */
/**
 * @summary The Leading Root Component Types of subscription_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_subscription_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_subscription_error_ParameterType */
/**
 * @summary The Trailing Root Component Types of subscription_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_subscription_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_subscription_error_ParameterType */
/**
 * @summary The Extension Addition Component Types of subscription_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_subscription_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_subscription_error_ParameterType */
let _cached_decoder_for_subscription_error_ParameterType: $.ASN1Decoder<subscription_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_subscription_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) subscription_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {subscription_error_ParameterType} The decoded data structure.
 */
export function _decode_subscription_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_subscription_error_ParameterType) {
        _cached_decoder_for_subscription_error_ParameterType = function (
            el: _Element
        ): subscription_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: SubscriptionProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<SubscriptionProblem>(
                        () => _decode_SubscriptionProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_subscription_error_ParameterType,
                _extension_additions_list_spec_for_subscription_error_ParameterType,
                _root_component_type_list_2_spec_for_subscription_error_ParameterType,
                undefined
            );
            return new subscription_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problem
            );
        };
    }
    return _cached_decoder_for_subscription_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_subscription_error_ParameterType */
let _cached_encoder_for_subscription_error_ParameterType: $.ASN1Encoder<subscription_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_subscription_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_subscription_error_ParameterType */
/**
 * @summary Encodes a(n) subscription_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The subscription_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_subscription_error_ParameterType(
    value: subscription_error_ParameterType,
    elGetter: $.ASN1Encoder<subscription_error_ParameterType>
) {
    if (!_cached_encoder_for_subscription_error_ParameterType) {
        _cached_encoder_for_subscription_error_ParameterType = function (
            value: subscription_error_ParameterType,
            elGetter: $.ASN1Encoder<subscription_error_ParameterType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_SubscriptionProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_subscription_error_ParameterType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_subscription_error_ParameterType */

/* eslint-enable */
