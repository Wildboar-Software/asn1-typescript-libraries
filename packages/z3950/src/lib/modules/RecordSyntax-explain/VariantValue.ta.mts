/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrimitiveDataType, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
import { ValueSet, _decode_ValueSet, _encode_ValueSet } from "../RecordSyntax-explain/ValueSet.ta.mjs";


/**
 * @summary VariantValue
 * @description
 * Datatype of a variant value, and the values supported for a variant type when
 * those values are supplied. ANSI/NISO Z39.50-2003 §3.2.10.3.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariantValue ::= SEQUENCE {
 *     dataType    [0] PrimitiveDataType,
 *     values      [1] ValueSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class VariantValue {
    /**
     * @summary `dataType`.
     * @description
     * Primitive datatype of the variant value. ANSI/NISO Z39.50-2003 Explain
     * ASN.1; §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly dataType: PrimitiveDataType;
    /**
     * @summary `values`.
     * @description
     * Supported values, as a range or as an enumeration. Optional. The category
     * prose calls these the list of supported values for the type. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly values: OPTIONAL<ValueSet>;

    constructor (
        dataType: PrimitiveDataType,
        values: OPTIONAL<ValueSet>
    ) {
        this.dataType = dataType;
        this.values = values;
    }

    /**
     * @summary Restructures an object into a VariantValue
     * @description
     * 
     * This takes an `object` and converts it to a `VariantValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariantValue`.
     * @returns {VariantValue}
     */
    public static _from_object (_o: { [_K in keyof (VariantValue)]: (VariantValue)[_K] }): VariantValue {
        return new VariantValue(_o.dataType, _o.values);
    }


}

/**
 * @summary The Leading Root Component Types of VariantValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariantValue: $.ComponentSpec[] = [
    new $.ComponentSpec("dataType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("values", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of VariantValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariantValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariantValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariantValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariantValue: $.ASN1Decoder<VariantValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariantValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariantValue (el: _Element): VariantValue {
    if (!_cached_decoder_for_VariantValue) { _cached_decoder_for_VariantValue = function (el: _Element): VariantValue {
    let dataType!: PrimitiveDataType;
    let values: OPTIONAL<ValueSet>;
    const callbacks: $.DecodingMap = {
        "dataType": (_el: _Element): void => { dataType = $._decode_explicit<PrimitiveDataType>(() => _decode_PrimitiveDataType)(_el); },
        "values": (_el: _Element): void => { values = $._decode_explicit<ValueSet>(() => _decode_ValueSet)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VariantValue,
        _extension_additions_list_spec_for_VariantValue,
        _root_component_type_list_2_spec_for_VariantValue,
        undefined,
    );
    return new VariantValue(
        dataType,
        values
    );
}; }
    return _cached_decoder_for_VariantValue(el);
}

let _cached_encoder_for_VariantValue: $.ASN1Encoder<VariantValue> | null = null;

/**
 * @summary Encodes a(n) VariantValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariantValue, encoded as an ASN.1 Element.
 */
export
function _encode_VariantValue (value: VariantValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariantValue) { _cached_encoder_for_VariantValue = function (value: VariantValue, elGetter: $.ASN1Encoder<VariantValue>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_PrimitiveDataType, $.BER)(value.dataType, $.BER);
    if (value.values !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ValueSet, $.BER)(value.values, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_VariantValue(value, elGetter);
}


/* eslint-enable */
