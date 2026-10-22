/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingArgument, _decode_ChainingArgument, _encode_ChainingArgument } from "../IN-CS2-SCF-SCF-ops-args/ChainingArgument.ta.mjs";
// export { ChainingArgument, _decode_ChainingArgument, _encode_ChainingArgument } from "../IN-CS2-SCF-SCF-ops-args/ChainingArgument.ta.mjs";


/**
 * @summary scfChained_ArgumentType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfChained-ArgumentType-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class scfChained_ArgumentType_Type {
    /**
     * @summary `chainedArgument`.
     * @public
     * @readonly
     */
    readonly chainedArgument: ChainingArgument;
    /**
     * @summary `argument`.
     * @public
     * @readonly
     */
    readonly argument: OPTIONAL<operation["&ArgumentType"]>;

    constructor (
        chainedArgument: ChainingArgument,
        argument: OPTIONAL<operation["&ArgumentType"]>
    ) {
        this.chainedArgument = chainedArgument;
        this.argument = argument;
    }

    /**
     * @summary Restructures an object into a scfChained_ArgumentType_Type
     * @description
     * 
     * This takes an `object` and converts it to a `scfChained_ArgumentType_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `scfChained_ArgumentType_Type`.
     * @returns {scfChained_ArgumentType_Type}
     */
    public static _from_object (_o: { [_K in keyof (scfChained_ArgumentType_Type)]: (scfChained_ArgumentType_Type)[_K] }): scfChained_ArgumentType_Type {
        return new scfChained_ArgumentType_Type(_o.chainedArgument, _o.argument);
    }


}

/**
 * @summary The Leading Root Component Types of scfChained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("chainedArgument", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argument", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of scfChained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of scfChained_ArgumentType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_scfChained_ArgumentType_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_scfChained_ArgumentType_Type: $.ASN1Decoder<scfChained_ArgumentType_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) scfChained_ArgumentType_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_scfChained_ArgumentType_Type (el: _Element): scfChained_ArgumentType_Type {
    if (!_cached_decoder_for_scfChained_ArgumentType_Type) { _cached_decoder_for_scfChained_ArgumentType_Type = function (el: _Element): scfChained_ArgumentType_Type {
    let chainedArgument!: ChainingArgument;
    let argument: OPTIONAL<operation["&ArgumentType"]>;
    const callbacks: $.DecodingMap = {
        "chainedArgument": (_el: _Element): void => { chainedArgument = _decode_ChainingArgument(_el); },
        "argument": (_el: _Element): void => { argument = $._decode_implicit<operation["&ArgumentType"]>(() => operation.decoderFor["&ArgumentType"])(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_scfChained_ArgumentType_Type,
        _extension_additions_list_spec_for_scfChained_ArgumentType_Type,
        _root_component_type_list_2_spec_for_scfChained_ArgumentType_Type,
        undefined,
    );
    return new scfChained_ArgumentType_Type(
        chainedArgument,
        argument
    );
}; }
    return _cached_decoder_for_scfChained_ArgumentType_Type(el);
}

let _cached_encoder_for_scfChained_ArgumentType_Type: $.ASN1Encoder<scfChained_ArgumentType_Type> | null = null;

/**
 * @summary Encodes a(n) scfChained_ArgumentType_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The scfChained_ArgumentType_Type, encoded as an ASN.1 Element.
 */
export
function _encode_scfChained_ArgumentType_Type (value: scfChained_ArgumentType_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_scfChained_ArgumentType_Type) { _cached_encoder_for_scfChained_ArgumentType_Type = function (value: scfChained_ArgumentType_Type, elGetter: $.ASN1Encoder<scfChained_ArgumentType_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ChainingArgument(value.chainedArgument, $.BER));
    if (value.argument !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => operation.encoderFor["&ArgumentType"], $.BER)(value.argument, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_scfChained_ArgumentType_Type(value, elGetter);
}


/* eslint-enable */
