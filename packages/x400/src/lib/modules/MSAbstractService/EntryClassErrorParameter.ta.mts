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
    EntryClass,
    EntryClass_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission /* IMPORTED_LONG_NAMED_INTEGER */,
    submission /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_draft /* IMPORTED_LONG_NAMED_INTEGER */,
    draft /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_stored_message /* IMPORTED_LONG_NAMED_INTEGER */,
    stored_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_delivery_log /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission_log /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_message_log /* IMPORTED_LONG_NAMED_INTEGER */,
    message_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_auto_action_log /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
export {
    EntryClass,
    EntryClass_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission /* IMPORTED_LONG_NAMED_INTEGER */,
    submission /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_draft /* IMPORTED_LONG_NAMED_INTEGER */,
    draft /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_stored_message /* IMPORTED_LONG_NAMED_INTEGER */,
    stored_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_delivery_log /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_submission_log /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_message_log /* IMPORTED_LONG_NAMED_INTEGER */,
    message_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryClass_auto_action_log /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_log /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryClass,
    _encode_EntryClass,
} from '../MSAbstractService/EntryClass.ta.mjs';
import {
    EntryClassErrorParameter_problem,
    EntryClassErrorParameter_problem_unsupported_entry_class /* IMPORTED_LONG_NAMED_BIT */,
    unsupported_entry_class /* IMPORTED_SHORT_NAMED_BIT */,
    EntryClassErrorParameter_problem_entry_class_not_subscribed /* IMPORTED_LONG_NAMED_BIT */,
    entry_class_not_subscribed /* IMPORTED_SHORT_NAMED_BIT */,
    EntryClassErrorParameter_problem_inappropriate_entry_class /* IMPORTED_LONG_NAMED_BIT */,
    inappropriate_entry_class /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EntryClassErrorParameter_problem,
    _encode_EntryClassErrorParameter_problem,
} from '../MSAbstractService/EntryClassErrorParameter-problem.ta.mjs';
export {
    EntryClassErrorParameter_problem,
    EntryClassErrorParameter_problem_unsupported_entry_class /* IMPORTED_LONG_NAMED_BIT */,
    unsupported_entry_class /* IMPORTED_SHORT_NAMED_BIT */,
    EntryClassErrorParameter_problem_entry_class_not_subscribed /* IMPORTED_LONG_NAMED_BIT */,
    entry_class_not_subscribed /* IMPORTED_SHORT_NAMED_BIT */,
    EntryClassErrorParameter_problem_inappropriate_entry_class /* IMPORTED_LONG_NAMED_BIT */,
    inappropriate_entry_class /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EntryClassErrorParameter_problem,
    _encode_EntryClassErrorParameter_problem,
} from '../MSAbstractService/EntryClassErrorParameter-problem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EntryClassErrorParameter */
/**
 * @summary EntryClassErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryClassErrorParameter ::= SET {
 *   entry-class  [0]  EntryClass,
 *   problem
 *     [1]  BIT STRING {unsupported-entry-class(0), entry-class-not-subscribed(1),
 *                      inappropriate-entry-class(2)}
 * }
 * ```
 *
 * @class
 */
export class EntryClassErrorParameter {
    constructor(
        /**
         * @summary `entry_class`.
         * @public
         * @readonly
         */
        readonly entry_class: EntryClass,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: EntryClassErrorParameter_problem
    ) {}

    /**
     * @summary Restructures an object into a EntryClassErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `EntryClassErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryClassErrorParameter`.
     * @returns {EntryClassErrorParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof EntryClassErrorParameter]: EntryClassErrorParameter[_K];
        }
    ): EntryClassErrorParameter {
        return new EntryClassErrorParameter(_o.entry_class, _o.problem);
    }
}
/* END_OF_SYMBOL_DEFINITION EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryClassErrorParameter */
/**
 * @summary The Leading Root Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'entry-class',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryClassErrorParameter */
/**
 * @summary The Trailing Root Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryClassErrorParameter */
/**
 * @summary The Extension Addition Component Types of EntryClassErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryClassErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClassErrorParameter */
let _cached_decoder_for_EntryClassErrorParameter: $.ASN1Decoder<EntryClassErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _decode_EntryClassErrorParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryClassErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryClassErrorParameter} The decoded data structure.
 */
export function _decode_EntryClassErrorParameter(el: _Element) {
    if (!_cached_decoder_for_EntryClassErrorParameter) {
        _cached_decoder_for_EntryClassErrorParameter = function (
            el: _Element
        ): EntryClassErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let entry_class!: EntryClass;
            let problem!: EntryClassErrorParameter_problem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'entry-class': (_el: _Element): void => {
                    entry_class = $._decode_explicit<EntryClass>(
                        () => _decode_EntryClass
                    )(_el);
                },
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<EntryClassErrorParameter_problem>(
                        () => _decode_EntryClassErrorParameter_problem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryClassErrorParameter,
                _extension_additions_list_spec_for_EntryClassErrorParameter,
                _root_component_type_list_2_spec_for_EntryClassErrorParameter,
                undefined
            );
            return new EntryClassErrorParameter /* SET_CONSTRUCTOR_CALL */(
                entry_class,
                problem
            );
        };
    }
    return _cached_decoder_for_EntryClassErrorParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClassErrorParameter */
let _cached_encoder_for_EntryClassErrorParameter: $.ASN1Encoder<EntryClassErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClassErrorParameter */

/* START_OF_SYMBOL_DEFINITION _encode_EntryClassErrorParameter */
/**
 * @summary Encodes a(n) EntryClassErrorParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryClassErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_EntryClassErrorParameter(
    value: EntryClassErrorParameter,
    elGetter: $.ASN1Encoder<EntryClassErrorParameter>
) {
    if (!_cached_encoder_for_EntryClassErrorParameter) {
        _cached_encoder_for_EntryClassErrorParameter = function (
            value: EntryClassErrorParameter,
            elGetter: $.ASN1Encoder<EntryClassErrorParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_EntryClass,
                            $.BER
                        )(value.entry_class, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_EntryClassErrorParameter_problem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EntryClassErrorParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryClassErrorParameter */

/* eslint-enable */
