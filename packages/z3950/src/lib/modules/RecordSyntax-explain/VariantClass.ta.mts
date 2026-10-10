/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { VariantType, _decode_VariantType, _encode_VariantType } from "../RecordSyntax-explain/VariantType.ta.mjs";


/**
 * @summary VariantClass
 * @description
 * One class in a variant set definition. The class has a name, a description,
 * and the types supported for that class. The integer identifies the class
 * within the variant set; Explain does not assign those integers. ANSI/NISO
 * Z39.50-2003 §3.2.10.3.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariantClass ::= SEQUENCE {
 *     name            [0] IMPLICIT InternationalString OPTIONAL,
 *     description     [1] IMPLICIT HumanString OPTIONAL,
 *     variantClass    [2] IMPLICIT INTEGER,
 *     variantTypes    [3] IMPLICIT SEQUENCE OF VariantType
 * }
 * ```
 * 
 * @class
 */
export
class VariantClass {
    /**
     * @summary `name`.
     * @description
     * Name of the class. ANSI/NISO Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<InternationalString>;
    /**
     * @summary `description`.
     * @description
     * Description of the class. ANSI/NISO Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `variantClass`.
     * @description
     * Class identifier within the variant set. The Explain category does not
     * assign these integers; they belong to the variant set definition.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly variantClass: INTEGER;
    /**
     * @summary `variantTypes`.
     * @description
     * Types supported for this class. For each, a name, a description, and the
     * supported values. ANSI/NISO Z39.50-2003 §3.2.10.3.15.
     * @public
     * @readonly
     */
    readonly variantTypes: VariantType[];

    constructor (
        name: OPTIONAL<InternationalString>,
        description: OPTIONAL<HumanString>,
        variantClass: INTEGER,
        variantTypes: VariantType[]
    ) {
        this.name = name;
        this.description = description;
        this.variantClass = variantClass;
        this.variantTypes = variantTypes;
    }

    /**
     * @summary Restructures an object into a VariantClass
     * @description
     * 
     * This takes an `object` and converts it to a `VariantClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariantClass`.
     * @returns {VariantClass}
     */
    public static _from_object (_o: { [_K in keyof (VariantClass)]: (VariantClass)[_K] }): VariantClass {
        return new VariantClass(_o.name, _o.description, _o.variantClass, _o.variantTypes);
    }


}

/**
 * @summary The Leading Root Component Types of VariantClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariantClass: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("variantClass", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("variantTypes", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of VariantClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariantClass: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariantClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariantClass: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariantClass: $.ASN1Decoder<VariantClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariantClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariantClass (el: _Element): VariantClass {
    if (!_cached_decoder_for_VariantClass) { _cached_decoder_for_VariantClass = function (el: _Element): VariantClass {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let variantClass!: INTEGER;
    let variantTypes!: VariantType[];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "variantClass": (_el: _Element): void => { variantClass = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "variantTypes": (_el: _Element): void => { variantTypes = $._decode_implicit<VariantType[]>(() => $._decodeSequenceOf<VariantType>(() => _decode_VariantType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VariantClass,
        _extension_additions_list_spec_for_VariantClass,
        _root_component_type_list_2_spec_for_VariantClass,
        undefined,
    );
    return new VariantClass(
        name,
        description,
        variantClass,
        variantTypes
    );
}; }
    return _cached_decoder_for_VariantClass(el);
}

let _cached_encoder_for_VariantClass: $.ASN1Encoder<VariantClass> | null = null;

/**
 * @summary Encodes a(n) VariantClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariantClass, encoded as an ASN.1 Element.
 */
export
function _encode_VariantClass (value: VariantClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariantClass) { _cached_encoder_for_VariantClass = function (value: VariantClass, elGetter: $.ASN1Encoder<VariantClass>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.variantClass, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<VariantType>(() => _encode_VariantType, $.BER), $.BER)(value.variantTypes, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_VariantClass(value, elGetter);
}


/* eslint-enable */
