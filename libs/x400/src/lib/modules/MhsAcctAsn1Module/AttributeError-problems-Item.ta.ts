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
    AttributeProblem,
    AttributeProblem_invalid_attribute_value /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_attribute_value /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_unavailable_attribute_type /* IMPORTED_LONG_NAMED_INTEGER */,
    unavailable_attribute_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_matching /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_matching /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_attribute_type_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_type_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_for_operation /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_for_operation /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_modification /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_modification /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_single_valued_attribute /* IMPORTED_LONG_NAMED_INTEGER */,
    single_valued_attribute /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AttributeProblem,
    _encode_AttributeProblem,
} from '../MSAbstractService/AttributeProblem.ta';
export {
    AttributeProblem,
    AttributeProblem_invalid_attribute_value /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_attribute_value /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_unavailable_attribute_type /* IMPORTED_LONG_NAMED_INTEGER */,
    unavailable_attribute_type /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_matching /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_matching /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_attribute_type_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_type_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_for_operation /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_for_operation /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_inappropriate_modification /* IMPORTED_LONG_NAMED_INTEGER */,
    inappropriate_modification /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem_single_valued_attribute /* IMPORTED_LONG_NAMED_INTEGER */,
    single_valued_attribute /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AttributeProblem,
    _encode_AttributeProblem,
} from '../MSAbstractService/AttributeProblem.ta';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';

/* START_OF_SYMBOL_DEFINITION AttributeError_problems_Item */
/**
 * @summary AttributeError_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeError_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: AttributeProblem,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType
    ) {}

    /**
     * @summary Restructures an object into a AttributeError_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `AttributeError_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeError_problems_Item`.
     * @returns {AttributeError_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof AttributeError_problems_Item]: AttributeError_problems_Item[_K];
        }
    ): AttributeError_problems_Item {
        return new AttributeError_problems_Item(_o.problem, _o.type_);
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError_problems_Item */
/**
 * @summary The Leading Root Component Types of AttributeError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeError_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError_problems_Item */
/**
 * @summary The Trailing Root Component Types of AttributeError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeError_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError_problems_Item */
/**
 * @summary The Extension Addition Component Types of AttributeError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeError_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError_problems_Item */
let _cached_decoder_for_AttributeError_problems_Item: $.ASN1Decoder<AttributeError_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeError_problems_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeError_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeError_problems_Item} The decoded data structure.
 */
export function _decode_AttributeError_problems_Item(el: _Element) {
    if (!_cached_decoder_for_AttributeError_problems_Item) {
        _cached_decoder_for_AttributeError_problems_Item = function (
            el: _Element
        ): AttributeError_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: AttributeProblem;
            let type_!: AttributeType;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<AttributeProblem>(
                        () => _decode_AttributeProblem
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeError_problems_Item,
                _extension_additions_list_spec_for_AttributeError_problems_Item,
                _root_component_type_list_2_spec_for_AttributeError_problems_Item,
                undefined
            );
            return new AttributeError_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                type_
            );
        };
    }
    return _cached_decoder_for_AttributeError_problems_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError_problems_Item */
let _cached_encoder_for_AttributeError_problems_Item: $.ASN1Encoder<AttributeError_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError_problems_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeError_problems_Item */
/**
 * @summary Encodes a(n) AttributeError_problems_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeError_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_AttributeError_problems_Item(
    value: AttributeError_problems_Item,
    elGetter: $.ASN1Encoder<AttributeError_problems_Item>
) {
    if (!_cached_encoder_for_AttributeError_problems_Item) {
        _cached_encoder_for_AttributeError_problems_Item = function (
            value: AttributeError_problems_Item,
            elGetter: $.ASN1Encoder<AttributeError_problems_Item>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AttributeProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_AttributeType,
                            $.BER
                        )(value.type_, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeError_problems_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeError_problems_Item */

/* eslint-enable */
