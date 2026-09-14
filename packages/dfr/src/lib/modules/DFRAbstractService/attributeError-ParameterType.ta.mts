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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { attributeError_ParameterType_problems_Item, _decode_attributeError_ParameterType_problems_Item, _encode_attributeError_ParameterType_problems_Item } from "../DFRAbstractService/attributeError-ParameterType-problems-Item.ta.mjs";
// export { attributeError_ParameterType_problems_Item, _decode_attributeError_ParameterType_problems_Item, _encode_attributeError_ParameterType_problems_Item } from "../DFRAbstractService/attributeError-ParameterType-problems-Item.ta.mjs";


/**
 * @summary attributeError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeError-ParameterType ::= SEQUENCE {
 *         entry       [0] DfrEntryName OPTIONAL,
 *         problems    [1] SEQUENCE OF SEQUENCE {
 *             problem     [0] AttributeProblem,
 *             type        [1] AttributeType,
 *             value       [2] AttributeValue OPTIONAL
 *         }
 *     }
 * ```
 * 
 * @class
 */
export
class attributeError_ParameterType {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<DfrEntryName>,
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: attributeError_ParameterType_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a attributeError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `attributeError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `attributeError_ParameterType`.
     * @returns {attributeError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (attributeError_ParameterType)]: (attributeError_ParameterType)[_K] }): attributeError_ParameterType {
        return new attributeError_ParameterType(_o.entry, _o.problems);
    }


}

/**
 * @summary The Leading Root Component Types of attributeError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_attributeError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problems", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of attributeError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_attributeError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of attributeError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_attributeError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_attributeError_ParameterType: $.ASN1Decoder<attributeError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) attributeError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_attributeError_ParameterType (el: _Element): attributeError_ParameterType {
    if (!_cached_decoder_for_attributeError_ParameterType) { _cached_decoder_for_attributeError_ParameterType = function (el: _Element): attributeError_ParameterType {
    let entry: OPTIONAL<DfrEntryName>;
    let problems!: attributeError_ParameterType_problems_Item[];
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "problems": (_el: _Element): void => { problems = $._decode_implicit<attributeError_ParameterType_problems_Item[]>(() => $._decodeSequenceOf<attributeError_ParameterType_problems_Item>(() => _decode_attributeError_ParameterType_problems_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_attributeError_ParameterType,
        _extension_additions_list_spec_for_attributeError_ParameterType,
        _root_component_type_list_2_spec_for_attributeError_ParameterType,
        undefined,
    );
    return new attributeError_ParameterType(
        entry,
        problems
    );
}; }
    return _cached_decoder_for_attributeError_ParameterType(el);
}

let _cached_encoder_for_attributeError_ParameterType: $.ASN1Encoder<attributeError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) attributeError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The attributeError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_attributeError_ParameterType (value: attributeError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_attributeError_ParameterType) { _cached_encoder_for_attributeError_ParameterType = function (value: attributeError_ParameterType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.entry === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<attributeError_ParameterType_problems_Item>(() => _encode_attributeError_ParameterType_problems_Item, $.BER), $.BER)(value.problems, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_attributeError_ParameterType(value, elGetter);
}


/* eslint-enable */
