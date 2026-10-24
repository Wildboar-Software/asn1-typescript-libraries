/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionType, _decode_ExtensionType, _encode_ExtensionType } from "../IN-CS-1-Datatypes/ExtensionType.ta.mjs";
// export { EXTENSION } from "../IN-CS-1-Datatypes/EXTENSION.oca.mjs";
// export { SupportedExtensions } from "../IN-CS-1-Datatypes/SupportedExtensions.osa.mjs";
import { Criticality, Criticality_ignored /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Criticality, _encode_Criticality, _enum_for_Criticality } from "../IN-CS-1-Datatypes/Criticality.ta.mjs";
// export { Criticality, _enum_for_Criticality, Criticality_ignored /* IMPORTED_LONG_ENUMERATION_ITEM */, ignored /* IMPORTED_SHORT_ENUMERATION_ITEM */, Criticality_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Criticality, _encode_Criticality } from "../IN-CS-1-Datatypes/Criticality.ta.mjs";


/**
 * @summary ExtensionField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField ::= SEQUENCE {
 *   type         EXTENSION.&id({SupportedExtensions}),
 *   criticality  Criticality DEFAULT ignored,
 *   value        [1]  EXTENSION.&Type({SupportedExtensions}{@type})
 * }
 * ```
 * 
 * @class
 */
export
class ExtensionField {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: ExtensionType;
    /**
     * @summary `criticality`.
     * @public
     * @readonly
     */
    readonly criticality: OPTIONAL<Criticality>;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element;

    constructor (
        type_: ExtensionType,
        criticality: OPTIONAL<Criticality>,
        value: _Element
    ) {
        this.type_ = type_;
        this.criticality = criticality;
        this.value = value;
    }

    /**
     * @summary Restructures an object into a ExtensionField
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensionField`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionField`.
     * @returns {ExtensionField}
     */
    public static _from_object (_o: { [_K in keyof (ExtensionField)]: (ExtensionField)[_K] }): ExtensionField {
        return new ExtensionField(_o.type_, _o.criticality, _o.value);
    }

    /**
     * @summary Getter that returns the default value for `criticality`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_criticality () { return Criticality_ignored; }        /**
         * @summary The enum used as the type of the component `criticality`
         * @public
         * @static
         */

    public static _enum_for_criticality = _enum_for_Criticality;
}

/**
 * @summary The Leading Root Component Types of ExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensionField: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("criticality", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensionField: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensionField
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensionField: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtensionField: $.ASN1Decoder<ExtensionField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionField (el: _Element): ExtensionField {
    if (!_cached_decoder_for_ExtensionField) { _cached_decoder_for_ExtensionField = function (el: _Element): ExtensionField {
    let type_!: ExtensionType;
    let criticality: OPTIONAL<Criticality> = ExtensionField._default_value_for_criticality;
    let value!: _Element;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = _decode_ExtensionType(_el); },
        "criticality": (_el: _Element): void => { criticality = _decode_Criticality(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensionField,
        _extension_additions_list_spec_for_ExtensionField,
        _root_component_type_list_2_spec_for_ExtensionField,
        undefined,
    );
    return new ExtensionField(
        type_,
        criticality,
        value
    );
}; }
    return _cached_decoder_for_ExtensionField(el);
}

let _cached_encoder_for_ExtensionField: $.ASN1Encoder<ExtensionField> | null = null;

/**
 * @summary Encodes a(n) ExtensionField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionField, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionField (value: ExtensionField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionField) { _cached_encoder_for_ExtensionField = function (value: ExtensionField, elGetter: $.ASN1Encoder<ExtensionField>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ExtensionType(value.type_, $.BER));
    if (value.criticality !== undefined && !$.deepEq(value.criticality, ExtensionField._default_value_for_criticality)) {
        _components.push(/* IF_DEFAULT */ _encode_Criticality(value.criticality, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.value, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtensionField(value, elGetter);
}


/* eslint-enable */
