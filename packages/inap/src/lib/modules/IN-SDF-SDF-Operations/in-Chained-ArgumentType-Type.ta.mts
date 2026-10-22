/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IN_ChainingArguments, _decode_IN_ChainingArguments, _encode_IN_ChainingArguments } from "../IN-SDF-SDF-Operations/IN-ChainingArguments.ta.mjs";
// export { IN_ChainingArguments, _decode_IN_ChainingArguments, _encode_IN_ChainingArguments } from "../IN-SDF-SDF-Operations/IN-ChainingArguments.ta.mjs";


/**
 * @summary in_Chained_ArgumentType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-Chained-ArgumentType-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class in_Chained_ArgumentType_Type {
    /**
     * @summary `in_chainedArgument`.
     * @public
     * @readonly
     */
    readonly in_chainedArgument: IN_ChainingArguments;
    /**
     * @summary `argument`.
     * @public
     * @readonly
     */
    readonly argument: operation["&ArgumentType"];

    constructor (
        in_chainedArgument: IN_ChainingArguments,
        argument: operation["&ArgumentType"]
    ) {
        this.in_chainedArgument = in_chainedArgument;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a in_Chained_ArgumentType_Type
     * @description
     * 
     * This takes an `object` and converts it to a `in_Chained_ArgumentType_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `in_Chained_ArgumentType_Type`.
     * @returns {in_Chained_ArgumentType_Type}
     */
    public static _from_object (_o: { [_K in keyof (in_Chained_ArgumentType_Type)]: (in_Chained_ArgumentType_Type)[_K] }): in_Chained_ArgumentType_Type {
        return new in_Chained_ArgumentType_Type(_o.in_chainedArgument, _o.argument);
    }


}

/**
 * @summary The Leading Root Component Types of in_Chained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("in-chainedArgument", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("argument", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of in_Chained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of in_Chained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_in_Chained_ArgumentType_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_in_Chained_ArgumentType_Type: $.ASN1Decoder<in_Chained_ArgumentType_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) in_Chained_ArgumentType_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_in_Chained_ArgumentType_Type (el: _Element): in_Chained_ArgumentType_Type {
    if (!_cached_decoder_for_in_Chained_ArgumentType_Type) { _cached_decoder_for_in_Chained_ArgumentType_Type = function (el: _Element): in_Chained_ArgumentType_Type {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let in_chainedArgument!: IN_ChainingArguments;
    let argument!: operation["&ArgumentType"];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "in-chainedArgument": (_el: _Element): void => { in_chainedArgument = _decode_IN_ChainingArguments(_el); },
        "argument": (_el: _Element): void => { argument = $._decode_explicit<operation["&ArgumentType"]>(() => operation.decoderFor["&ArgumentType"])(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_in_Chained_ArgumentType_Type,
        _extension_additions_list_spec_for_in_Chained_ArgumentType_Type,
        _root_component_type_list_2_spec_for_in_Chained_ArgumentType_Type,
        undefined,
    );
    return new in_Chained_ArgumentType_Type( /* SET_CONSTRUCTOR_CALL */
        in_chainedArgument,
        argument
    );
}; }
    return _cached_decoder_for_in_Chained_ArgumentType_Type(el);
}

let _cached_encoder_for_in_Chained_ArgumentType_Type: $.ASN1Encoder<in_Chained_ArgumentType_Type> | null = null;

/**
 * @summary Encodes a(n) in_Chained_ArgumentType_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The in_Chained_ArgumentType_Type, encoded as an ASN.1 Element.
 */
export
function _encode_in_Chained_ArgumentType_Type (value: in_Chained_ArgumentType_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_in_Chained_ArgumentType_Type) { _cached_encoder_for_in_Chained_ArgumentType_Type = function (value: in_Chained_ArgumentType_Type, elGetter: $.ASN1Encoder<in_Chained_ArgumentType_Type>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ _encode_IN_ChainingArguments(value.in_chainedArgument, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => operation.encoderFor["&ArgumentType"], $.BER)(value.argument, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_in_Chained_ArgumentType_Type(value, elGetter);
}


/* eslint-enable */
