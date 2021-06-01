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
    MessageGroupProblem,
    MessageGroupProblem_name_not_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    name_not_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_name_already_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    name_already_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_parent_not_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    parent_not_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_group_not_empty /* IMPORTED_LONG_NAMED_INTEGER */,
    group_not_empty /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_name_in_use /* IMPORTED_LONG_NAMED_INTEGER */,
    name_in_use /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_child_group_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    child_group_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_group_depth_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    group_depth_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_MessageGroupProblem,
    _encode_MessageGroupProblem,
} from '../MSAbstractService/MessageGroupProblem.ta';
export {
    MessageGroupProblem,
    MessageGroupProblem_name_not_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    name_not_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_name_already_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    name_already_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_parent_not_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    parent_not_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_group_not_empty /* IMPORTED_LONG_NAMED_INTEGER */,
    group_not_empty /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_name_in_use /* IMPORTED_LONG_NAMED_INTEGER */,
    name_in_use /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_child_group_registered /* IMPORTED_LONG_NAMED_INTEGER */,
    child_group_registered /* IMPORTED_SHORT_NAMED_INTEGER */,
    MessageGroupProblem_group_depth_exceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    group_depth_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_MessageGroupProblem,
    _encode_MessageGroupProblem,
} from '../MSAbstractService/MessageGroupProblem.ta';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';
export {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta';

/* START_OF_SYMBOL_DEFINITION MessageGroupErrorParameter */
/**
 * @summary MessageGroupErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupErrorParameter ::= SET {
 *   problem  [0]  MessageGroupProblem,
 *   name     [1]  MessageGroupName
 * }
 * ```
 *
 * @class
 */
export class MessageGroupErrorParameter {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: MessageGroupProblem,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: MessageGroupName
    ) {}

    /**
     * @summary Restructures an object into a MessageGroupErrorParameter
     * @description
     *
     * This takes an `object` and converts it to a `MessageGroupErrorParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageGroupErrorParameter`.
     * @returns {MessageGroupErrorParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageGroupErrorParameter]: MessageGroupErrorParameter[_K];
        }
    ): MessageGroupErrorParameter {
        return new MessageGroupErrorParameter(_o.problem, _o.name);
    }
}
/* END_OF_SYMBOL_DEFINITION MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageGroupErrorParameter */
/**
 * @summary The Leading Root Component Types of MessageGroupErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageGroupErrorParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'name',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageGroupErrorParameter */
/**
 * @summary The Trailing Root Component Types of MessageGroupErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageGroupErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageGroupErrorParameter */
/**
 * @summary The Extension Addition Component Types of MessageGroupErrorParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageGroupErrorParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupErrorParameter */
let _cached_decoder_for_MessageGroupErrorParameter: $.ASN1Decoder<MessageGroupErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _decode_MessageGroupErrorParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupErrorParameter} The decoded data structure.
 */
export function _decode_MessageGroupErrorParameter(el: _Element) {
    if (!_cached_decoder_for_MessageGroupErrorParameter) {
        _cached_decoder_for_MessageGroupErrorParameter = function (
            el: _Element
        ): MessageGroupErrorParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: MessageGroupProblem;
            let name!: MessageGroupName;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<MessageGroupProblem>(
                        () => _decode_MessageGroupProblem
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<MessageGroupName>(
                        () => _decode_MessageGroupName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageGroupErrorParameter,
                _extension_additions_list_spec_for_MessageGroupErrorParameter,
                _root_component_type_list_2_spec_for_MessageGroupErrorParameter,
                undefined
            );
            return new MessageGroupErrorParameter /* SET_CONSTRUCTOR_CALL */(
                problem,
                name
            );
        };
    }
    return _cached_decoder_for_MessageGroupErrorParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupErrorParameter */
let _cached_encoder_for_MessageGroupErrorParameter: $.ASN1Encoder<MessageGroupErrorParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupErrorParameter */

/* START_OF_SYMBOL_DEFINITION _encode_MessageGroupErrorParameter */
/**
 * @summary Encodes a(n) MessageGroupErrorParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupErrorParameter(
    value: MessageGroupErrorParameter,
    elGetter: $.ASN1Encoder<MessageGroupErrorParameter>
) {
    if (!_cached_encoder_for_MessageGroupErrorParameter) {
        _cached_encoder_for_MessageGroupErrorParameter = function (
            value: MessageGroupErrorParameter,
            elGetter: $.ASN1Encoder<MessageGroupErrorParameter>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageGroupProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageGroupName,
                            $.BER
                        )(value.name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageGroupErrorParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageGroupErrorParameter */

/* eslint-enable */
