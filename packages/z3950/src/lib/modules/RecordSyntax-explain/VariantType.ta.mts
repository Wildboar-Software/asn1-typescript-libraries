/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { VariantValue, _decode_VariantValue, _encode_VariantValue } from "../RecordSyntax-explain/VariantValue.ta.mjs";
// export { VariantValue, _decode_VariantValue, _encode_VariantValue } from "../RecordSyntax-explain/VariantValue.ta.mjs";


/**
 * @summary VariantType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariantType ::= SEQUENCE {
 *     name            [0] IMPLICIT InternationalString OPTIONAL,
 *     description     [1] IMPLICIT HumanString OPTIONAL,
 *     variantType     [2] IMPLICIT INTEGER,
 *     variantValue    [3] IMPLICIT VariantValue OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class VariantType {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<InternationalString>;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `variantType`.
     * @public
     * @readonly
     */
    readonly variantType: INTEGER;
    /**
     * @summary `variantValue`.
     * @public
     * @readonly
     */
    readonly variantValue: OPTIONAL<VariantValue>;

    constructor (
        name: OPTIONAL<InternationalString>,
        description: OPTIONAL<HumanString>,
        variantType: INTEGER,
        variantValue: OPTIONAL<VariantValue>
    ) {
        this.name = name;
        this.description = description;
        this.variantType = variantType;
        this.variantValue = variantValue;
    }

    /**
     * @summary Restructures an object into a VariantType
     * @description
     * 
     * This takes an `object` and converts it to a `VariantType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariantType`.
     * @returns {VariantType}
     */
    public static _from_object (_o: { [_K in keyof (VariantType)]: (VariantType)[_K] }): VariantType {
        return new VariantType(_o.name, _o.description, _o.variantType, _o.variantValue);
    }


}

/**
 * @summary The Leading Root Component Types of VariantType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariantType: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("variantType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("variantValue", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VariantType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariantType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariantType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariantType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariantType: $.ASN1Decoder<VariantType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariantType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariantType (el: _Element): VariantType {
    if (!_cached_decoder_for_VariantType) { _cached_decoder_for_VariantType = function (el: _Element): VariantType {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let variantType!: INTEGER;
    let variantValue: OPTIONAL<VariantValue>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "variantType": (_el: _Element): void => { variantType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "variantValue": (_el: _Element): void => { variantValue = $._decode_implicit<VariantValue>(() => _decode_VariantValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VariantType,
        _extension_additions_list_spec_for_VariantType,
        _root_component_type_list_2_spec_for_VariantType,
        undefined,
    );
    return new VariantType(
        name,
        description,
        variantType,
        variantValue
    );
}; }
    return _cached_decoder_for_VariantType(el);
}

let _cached_encoder_for_VariantType: $.ASN1Encoder<VariantType> | null = null;

/**
 * @summary Encodes a(n) VariantType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariantType, encoded as an ASN.1 Element.
 */
export
function _encode_VariantType (value: VariantType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariantType) { _cached_encoder_for_VariantType = function (value: VariantType, elGetter: $.ASN1Encoder<VariantType>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.variantType, $.BER);
    if (value.variantValue !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_VariantValue, $.BER)(value.variantValue, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_VariantType(value, elGetter);
}


/* eslint-enable */
