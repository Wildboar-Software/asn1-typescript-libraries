/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-SCF-SDF-Classes/SupportedMethods.osa.mjs";


/**
 * @summary MethodIdentifier_inputAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodIdentifier-inputAttributes ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class MethodIdentifier_inputAttributes {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: _Element;
    /**
     * @summary `values`.
     * @public
     * @readonly
     */
    readonly values: _Element[];

    constructor (
        type_: _Element,
        values: _Element[]
    ) {
        this.type_ = type_;
        this.values = values;
    }

    /**
     * @summary Restructures an object into a MethodIdentifier_inputAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `MethodIdentifier_inputAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MethodIdentifier_inputAttributes`.
     * @returns {MethodIdentifier_inputAttributes}
     */
    public static _from_object (_o: { [_K in keyof (MethodIdentifier_inputAttributes)]: (MethodIdentifier_inputAttributes)[_K] }): MethodIdentifier_inputAttributes {
        return new MethodIdentifier_inputAttributes(_o.type_, _o.values);
    }


}

/**
 * @summary The Leading Root Component Types of MethodIdentifier_inputAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MethodIdentifier_inputAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("values", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of MethodIdentifier_inputAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MethodIdentifier_inputAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MethodIdentifier_inputAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MethodIdentifier_inputAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MethodIdentifier_inputAttributes: $.ASN1Decoder<MethodIdentifier_inputAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MethodIdentifier_inputAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MethodIdentifier_inputAttributes (el: _Element): MethodIdentifier_inputAttributes {
    if (!_cached_decoder_for_MethodIdentifier_inputAttributes) { _cached_decoder_for_MethodIdentifier_inputAttributes = function (el: _Element): MethodIdentifier_inputAttributes {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MethodIdentifier-inputAttributes contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "values";
    let type_!: _Element;
    let values!: _Element[];
    type_ = $._decodeAny(sequence[0]);
    values = $._decodeSetOf<_Element>(() => $._decodeAny)(sequence[1]);
    return new MethodIdentifier_inputAttributes(
        type_,
        values,

    );
}; }
    return _cached_decoder_for_MethodIdentifier_inputAttributes(el);
}

let _cached_encoder_for_MethodIdentifier_inputAttributes: $.ASN1Encoder<MethodIdentifier_inputAttributes> | null = null;

/**
 * @summary Encodes a(n) MethodIdentifier_inputAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MethodIdentifier_inputAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_MethodIdentifier_inputAttributes (value: MethodIdentifier_inputAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MethodIdentifier_inputAttributes) { _cached_encoder_for_MethodIdentifier_inputAttributes = function (value: MethodIdentifier_inputAttributes, elGetter: $.ASN1Encoder<MethodIdentifier_inputAttributes>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeAny(value.type_, $.BER),
        /* REQUIRED   */ $._encodeSetOf<_Element>(() => $._encodeAny, $.BER)(value.values, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MethodIdentifier_inputAttributes(value, elGetter);
}


/* eslint-enable */
