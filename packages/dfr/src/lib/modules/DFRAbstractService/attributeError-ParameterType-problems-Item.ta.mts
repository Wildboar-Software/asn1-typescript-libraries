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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeProblem, _enum_for_AttributeProblem, _decode_AttributeProblem, _encode_AttributeProblem } from "../DFRAbstractService/AttributeProblem.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../InformationFramework/AttributeValue.ta.mjs";


/**
 * @summary attributeError_ParameterType_problems_Item
 * @description
 *
 * One attribute problem. ISO/IEC 10166-1:1991 §8.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeError-ParameterType-problems-Item ::= SEQUENCE {
 *             problem     [0] AttributeProblem,
 *             type        [1] AttributeType,
 *             value       [2] AttributeValue OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class attributeError_ParameterType_problems_Item {
    constructor (
        /**
         * @summary `problem`.
         * @description
         *
         * Why the attribute failed.
         * @public
         * @readonly
         */
        readonly problem: AttributeProblem,
        /**
         * @summary `type_`.
         * @description
         *
         * Attribute type involved.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `value`.
         * @description
         *
         * Value, when needed to disambiguate.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<AttributeValue>
    ) {}

    /**
     * @summary Restructures an object into a attributeError_ParameterType_problems_Item
     * @description
     * 
     * This takes an `object` and converts it to a `attributeError_ParameterType_problems_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `attributeError_ParameterType_problems_Item`.
     * @returns {attributeError_ParameterType_problems_Item}
     */
    public static _from_object (_o: { [_K in keyof (attributeError_ParameterType_problems_Item)]: (attributeError_ParameterType_problems_Item)[_K] }): attributeError_ParameterType_problems_Item {
        return new attributeError_ParameterType_problems_Item(_o.problem, _o.type_, _o.value);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_AttributeProblem;
}

/**
 * @summary The Leading Root Component Types of attributeError_ParameterType_problems_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_attributeError_ParameterType_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of attributeError_ParameterType_problems_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_attributeError_ParameterType_problems_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of attributeError_ParameterType_problems_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_attributeError_ParameterType_problems_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_attributeError_ParameterType_problems_Item: $.ASN1Decoder<attributeError_ParameterType_problems_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) attributeError_ParameterType_problems_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_attributeError_ParameterType_problems_Item (el: _Element): attributeError_ParameterType_problems_Item {
    if (!_cached_decoder_for_attributeError_ParameterType_problems_Item) { _cached_decoder_for_attributeError_ParameterType_problems_Item = function (el: _Element): attributeError_ParameterType_problems_Item {
    let problem!: AttributeProblem;
    let type_!: AttributeType;
    let value: OPTIONAL<AttributeValue>;
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_implicit<AttributeProblem>(() => _decode_AttributeProblem)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<AttributeType>(() => _decode_AttributeType)(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<AttributeValue>(() => _decode_AttributeValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_attributeError_ParameterType_problems_Item,
        _extension_additions_list_spec_for_attributeError_ParameterType_problems_Item,
        _root_component_type_list_2_spec_for_attributeError_ParameterType_problems_Item,
        undefined,
    );
    return new attributeError_ParameterType_problems_Item(
        problem,
        type_,
        value
    );
}; }
    return _cached_decoder_for_attributeError_ParameterType_problems_Item(el);
}

let _cached_encoder_for_attributeError_ParameterType_problems_Item: $.ASN1Encoder<attributeError_ParameterType_problems_Item> | null = null;

/**
 * @summary Encodes a(n) attributeError_ParameterType_problems_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The attributeError_ParameterType_problems_Item, encoded as an ASN.1 Element.
 */
export
function _encode_attributeError_ParameterType_problems_Item (value: attributeError_ParameterType_problems_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_attributeError_ParameterType_problems_Item) { _cached_encoder_for_attributeError_ParameterType_problems_Item = function (value: attributeError_ParameterType_problems_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeProblem, $.BER)(value.problem, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeType, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.value === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AttributeValue, $.BER)(value.value, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_attributeError_ParameterType_problems_Item(value, elGetter);
}


/* eslint-enable */
