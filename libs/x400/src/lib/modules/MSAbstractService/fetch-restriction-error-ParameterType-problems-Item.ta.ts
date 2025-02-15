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
    FetchRestrictionProblem,
    FetchRestrictionProblem_content_type_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    content_type_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    FetchRestrictionProblem_eit_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    eit_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    FetchRestrictionProblem_maximum_length_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    maximum_length_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_FetchRestrictionProblem,
    _encode_FetchRestrictionProblem,
} from '../MSAbstractService/FetchRestrictionProblem.ta';
export {
    FetchRestrictionProblem,
    FetchRestrictionProblem_content_type_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    content_type_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    FetchRestrictionProblem_eit_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    eit_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    FetchRestrictionProblem_maximum_length_problem /* IMPORTED_LONG_NAMED_INTEGER */,
    maximum_length_problem /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_FetchRestrictionProblem,
    _encode_FetchRestrictionProblem,
} from '../MSAbstractService/FetchRestrictionProblem.ta';
import {
    fetch_restriction_error_ParameterType_problems_Item_restriction,
    _decode_fetch_restriction_error_ParameterType_problems_Item_restriction,
    _encode_fetch_restriction_error_ParameterType_problems_Item_restriction,
} from '../MSAbstractService/fetch-restriction-error-ParameterType-problems-Item-restriction.ta';
export {
    fetch_restriction_error_ParameterType_problems_Item_restriction,
    _decode_fetch_restriction_error_ParameterType_problems_Item_restriction,
    _encode_fetch_restriction_error_ParameterType_problems_Item_restriction,
} from '../MSAbstractService/fetch-restriction-error-ParameterType-problems-Item-restriction.ta';

/* START_OF_SYMBOL_DEFINITION fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary fetch_restriction_error_ParameterType_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fetch-restriction-error-ParameterType-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class fetch_restriction_error_ParameterType_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: FetchRestrictionProblem,
        /**
         * @summary `restriction`.
         * @public
         * @readonly
         */
        readonly restriction: fetch_restriction_error_ParameterType_problems_Item_restriction
    ) {}

    /**
     * @summary Restructures an object into a fetch_restriction_error_ParameterType_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `fetch_restriction_error_ParameterType_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `fetch_restriction_error_ParameterType_problems_Item`.
     * @returns {fetch_restriction_error_ParameterType_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof fetch_restriction_error_ParameterType_problems_Item]: fetch_restriction_error_ParameterType_problems_Item[_K];
        }
    ): fetch_restriction_error_ParameterType_problems_Item {
        return new fetch_restriction_error_ParameterType_problems_Item(
            _o.problem,
            _o.restriction
        );
    }
}
/* END_OF_SYMBOL_DEFINITION fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary The Leading Root Component Types of fetch_restriction_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'restriction',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary The Trailing Root Component Types of fetch_restriction_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary The Extension Addition Component Types of fetch_restriction_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_fetch_restriction_error_ParameterType_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item */
let _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item: $.ASN1Decoder<fetch_restriction_error_ParameterType_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _decode_fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) fetch_restriction_error_ParameterType_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {fetch_restriction_error_ParameterType_problems_Item} The decoded data structure.
 */
export function _decode_fetch_restriction_error_ParameterType_problems_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item
    ) {
        _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item = function (
            el: _Element
        ): fetch_restriction_error_ParameterType_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: FetchRestrictionProblem;
            let restriction!: fetch_restriction_error_ParameterType_problems_Item_restriction;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<FetchRestrictionProblem>(
                        () => _decode_FetchRestrictionProblem
                    )(_el);
                },
                restriction: (_el: _Element): void => {
                    restriction = _decode_fetch_restriction_error_ParameterType_problems_Item_restriction(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_fetch_restriction_error_ParameterType_problems_Item,
                _extension_additions_list_spec_for_fetch_restriction_error_ParameterType_problems_Item,
                _root_component_type_list_2_spec_for_fetch_restriction_error_ParameterType_problems_Item,
                undefined
            );
            return new fetch_restriction_error_ParameterType_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                restriction
            );
        };
    }
    return _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item */
let _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item: $.ASN1Encoder<fetch_restriction_error_ParameterType_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _encode_fetch_restriction_error_ParameterType_problems_Item */
/**
 * @summary Encodes a(n) fetch_restriction_error_ParameterType_problems_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The fetch_restriction_error_ParameterType_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_fetch_restriction_error_ParameterType_problems_Item(
    value: fetch_restriction_error_ParameterType_problems_Item,
    elGetter: $.ASN1Encoder<fetch_restriction_error_ParameterType_problems_Item>
) {
    if (
        !_cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item
    ) {
        _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item = function (
            value: fetch_restriction_error_ParameterType_problems_Item,
            elGetter: $.ASN1Encoder<fetch_restriction_error_ParameterType_problems_Item>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_FetchRestrictionProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ _encode_fetch_restriction_error_ParameterType_problems_Item_restriction(
                            value.restriction,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_fetch_restriction_error_ParameterType_problems_Item */

/* eslint-enable */
