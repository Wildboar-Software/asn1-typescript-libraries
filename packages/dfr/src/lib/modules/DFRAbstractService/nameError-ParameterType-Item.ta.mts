/* eslint-disable */
import {
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
import { NameProblem, _enum_for_NameProblem, _decode_NameProblem, _encode_NameProblem } from "../DFRAbstractService/NameProblem.ta.mjs";


/**
 * @summary nameError_ParameterType_Item
 * @description
 *
 * One name problem, with the name as the user supplied it. ISO/IEC
 * 10166-1:1991 §8.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nameError-ParameterType-Item ::= SEQUENCE {
 *         entry       [0] DfrEntryName,
 *         problem     [1] NameProblem
 *     }
 * ```
 * 
 * @class
 */
export
class nameError_ParameterType_Item {
    constructor (
        /**
         * @summary `entry`.
         * @description
         *
         * Name that failed.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `problem`.
         * @description
         *
         * Why.
         * @public
         * @readonly
         */
        readonly problem: NameProblem
    ) {}

    /**
     * @summary Restructures an object into a nameError_ParameterType_Item
     * @description
     * 
     * This takes an `object` and converts it to a `nameError_ParameterType_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `nameError_ParameterType_Item`.
     * @returns {nameError_ParameterType_Item}
     */
    public static _from_object (_o: { [_K in keyof (nameError_ParameterType_Item)]: (nameError_ParameterType_Item)[_K] }): nameError_ParameterType_Item {
        return new nameError_ParameterType_Item(_o.entry, _o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_NameProblem;
}

/**
 * @summary The Leading Root Component Types of nameError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_nameError_ParameterType_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of nameError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_nameError_ParameterType_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of nameError_ParameterType_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_nameError_ParameterType_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_nameError_ParameterType_Item: $.ASN1Decoder<nameError_ParameterType_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) nameError_ParameterType_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_nameError_ParameterType_Item (el: _Element): nameError_ParameterType_Item {
    if (!_cached_decoder_for_nameError_ParameterType_Item) { _cached_decoder_for_nameError_ParameterType_Item = function (el: _Element): nameError_ParameterType_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("nameError-ParameterType-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "problem";
    let entry!: DfrEntryName;
    let problem!: NameProblem;
    entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(sequence[0]);
    problem = $._decode_implicit<NameProblem>(() => _decode_NameProblem)(sequence[1]);
    return new nameError_ParameterType_Item(
        entry,
        problem,

    );
}; }
    return _cached_decoder_for_nameError_ParameterType_Item(el);
}

let _cached_encoder_for_nameError_ParameterType_Item: $.ASN1Encoder<nameError_ParameterType_Item> | null = null;

/**
 * @summary Encodes a(n) nameError_ParameterType_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The nameError_ParameterType_Item, encoded as an ASN.1 Element.
 */
export
function _encode_nameError_ParameterType_Item (value: nameError_ParameterType_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_nameError_ParameterType_Item) { _cached_encoder_for_nameError_ParameterType_Item = function (value: nameError_ParameterType_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NameProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_nameError_ParameterType_Item(value, elGetter);
}


/* eslint-enable */
