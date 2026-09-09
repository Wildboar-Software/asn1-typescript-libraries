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
import { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";
// export { CriticalityType, _enum_for_CriticalityType, CriticalityType_ignore /* IMPORTED_LONG_ENUMERATION_ITEM */, ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */, CriticalityType_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";


/**
 * @summary ExtensionField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField{EXTENSION:SupportedExtensions} ::= SEQUENCE {
 *   type         EXTENSION.&id({SupportedExtensions}),
 *   -- shall identify the value of an EXTENSION type
 *   criticality  CriticalityType DEFAULT ignore,
 *   value        [1]  EXTENSION.&ExtensionType({SupportedExtensions}{@type})
 * }
 * ```
 * 
 * @class
 */
export
class ExtensionField {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        /**
         * @summary `criticality`.
         * @public
         * @readonly
         */
        readonly criticality: OPTIONAL<CriticalityType>,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */
    ) {}

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
    public static get _default_value_for_criticality () { return CriticalityType_ignore; }        /**
         * @summary The enum used as the type of the component `criticality`
         * @public
         * @static
         */

    public static _enum_for_criticality = _enum_for_CriticalityType;
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
    new $.ComponentSpec("type", false, $.hasAnyTag),
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
    let type_!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
    let criticality: OPTIONAL<CriticalityType> = ExtensionField._default_value_for_criticality;
    let value!: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(_el); },
        "criticality": (_el: _Element): void => { criticality = _decode_CriticalityType(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<_Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */>(() => $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */)(_el); }
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
    if (!_cached_encoder_for_ExtensionField) { _cached_encoder_for_ExtensionField = function (value: ExtensionField): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */(value.type_, $.BER),
            /* IF_DEFAULT */ (value.criticality === undefined || $.deepEq(value.criticality, ExtensionField._default_value_for_criticality) ? undefined : _encode_CriticalityType(value.criticality, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */, $.BER)(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensionField(value, elGetter);
}


/* eslint-enable */
