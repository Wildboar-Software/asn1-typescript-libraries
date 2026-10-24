/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-SCF-SDF-Classes/SupportedMethods.osa.mjs";
import { MethodIdentifier_inputAttributes, _decode_MethodIdentifier_inputAttributes, _encode_MethodIdentifier_inputAttributes } from "../IN-SCF-SDF-datatypes/MethodIdentifier-inputAttributes.ta.mjs";
// export { MethodIdentifier_inputAttributes, _decode_MethodIdentifier_inputAttributes, _encode_MethodIdentifier_inputAttributes } from "../IN-SCF-SDF-datatypes/MethodIdentifier-inputAttributes.ta.mjs";


/**
 * @summary MethodIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodIdentifier ::= SEQUENCE {
 *   methodid         METHOD.&id({SupportedMethods}),
 *   inputAttributes
 *     SEQUENCE {type
 *                 METHOD.&InputAttributes.&id
 *                   ({SupportedMethods}{@methodid}),
 *               values
 *                 SET OF
 *                   METHOD.&InputAttributes.&Type
 *                     ({SupportedMethods}{@methodid, @inputAttributes.type})
 *   } OPTIONAL,
 *   specific-Input
 *     [0]  METHOD.&SpecificInput({SupportedMethods}{@methodid}) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MethodIdentifier {
    /**
     * @summary `methodid`.
     * @public
     * @readonly
     */
    readonly methodid: OBJECT_IDENTIFIER;
    /**
     * @summary `inputAttributes`.
     * @public
     * @readonly
     */
    readonly inputAttributes: OPTIONAL<MethodIdentifier_inputAttributes>;
    /**
     * @summary `specific_Input`.
     * @public
     * @readonly
     */
    readonly specific_Input: OPTIONAL<_Element>;

    constructor (
        methodid: OBJECT_IDENTIFIER,
        inputAttributes?: OPTIONAL<MethodIdentifier_inputAttributes>,
        specific_Input?: OPTIONAL<_Element>
    ) {
        this.methodid = methodid;
        this.inputAttributes = inputAttributes;
        this.specific_Input = specific_Input;
    }

    /**
     * @summary Restructures an object into a MethodIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `MethodIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MethodIdentifier`.
     * @returns {MethodIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (MethodIdentifier)]: (MethodIdentifier)[_K] }): MethodIdentifier {
        return new MethodIdentifier(_o.methodid, _o.inputAttributes, _o.specific_Input);
    }


}

/**
 * @summary The Leading Root Component Types of MethodIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MethodIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("methodid", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("inputAttributes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("specific-Input", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of MethodIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MethodIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MethodIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MethodIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MethodIdentifier: $.ASN1Decoder<MethodIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MethodIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MethodIdentifier (el: _Element): MethodIdentifier {
    if (!_cached_decoder_for_MethodIdentifier) { _cached_decoder_for_MethodIdentifier = function (el: _Element): MethodIdentifier {
    let methodid!: OBJECT_IDENTIFIER;
    let inputAttributes: OPTIONAL<MethodIdentifier_inputAttributes>;
    let specific_Input: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "methodid": (_el: _Element): void => { methodid = $._decodeObjectIdentifier(_el); },
        "inputAttributes": (_el: _Element): void => { inputAttributes = _decode_MethodIdentifier_inputAttributes(_el); },
        "specific-Input": (_el: _Element): void => { specific_Input = $._decode_explicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MethodIdentifier,
        _extension_additions_list_spec_for_MethodIdentifier,
        _root_component_type_list_2_spec_for_MethodIdentifier,
        undefined,
    );
    return new MethodIdentifier(
        methodid,
        inputAttributes,
        specific_Input
    );
}; }
    return _cached_decoder_for_MethodIdentifier(el);
}

let _cached_encoder_for_MethodIdentifier: $.ASN1Encoder<MethodIdentifier> | null = null;

/**
 * @summary Encodes a(n) MethodIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MethodIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_MethodIdentifier (value: MethodIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MethodIdentifier) { _cached_encoder_for_MethodIdentifier = function (value: MethodIdentifier, elGetter: $.ASN1Encoder<MethodIdentifier>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.methodid, $.BER));
    if (value.inputAttributes !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MethodIdentifier_inputAttributes(value.inputAttributes, $.BER));
    }
    if (value.specific_Input !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.specific_Input, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MethodIdentifier(value, elGetter);
}


/* eslint-enable */
