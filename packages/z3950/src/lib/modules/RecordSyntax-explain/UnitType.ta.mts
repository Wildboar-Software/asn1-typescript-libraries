/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
// export { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";
import { Units, _decode_Units, _encode_Units } from "../RecordSyntax-explain/Units.ta.mjs";
// export { Units, _decode_Units, _encode_Units } from "../RecordSyntax-explain/Units.ta.mjs";


/**
 * @summary UnitType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitType ::= SEQUENCE {
 *     name        [0] IMPLICIT InternationalString OPTIONAL,
 *     description [1] IMPLICIT HumanString OPTIONAL,
 *     unitType    [2] StringOrNumeric,
 *     units       [3] IMPLICIT SEQUENCE OF Units
 * }
 * ```
 * 
 * @class
 */
export
class UnitType {
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
     * @summary `unitType`.
     * @public
     * @readonly
     */
    readonly unitType: StringOrNumeric;
    /**
     * @summary `units`.
     * @public
     * @readonly
     */
    readonly units: Units[];

    constructor (
        name: OPTIONAL<InternationalString>,
        description: OPTIONAL<HumanString>,
        unitType: StringOrNumeric,
        units: Units[]
    ) {
        this.name = name;
        this.description = description;
        this.unitType = unitType;
        this.units = units;
    }

    /**
     * @summary Restructures an object into a UnitType
     * @description
     * 
     * This takes an `object` and converts it to a `UnitType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitType`.
     * @returns {UnitType}
     */
    public static _from_object (_o: { [_K in keyof (UnitType)]: (UnitType)[_K] }): UnitType {
        return new UnitType(_o.name, _o.description, _o.unitType, _o.units);
    }


}

/**
 * @summary The Leading Root Component Types of UnitType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnitType: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("units", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UnitType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnitType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnitType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnitType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnitType: $.ASN1Decoder<UnitType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitType (el: _Element): UnitType {
    if (!_cached_decoder_for_UnitType) { _cached_decoder_for_UnitType = function (el: _Element): UnitType {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let unitType!: StringOrNumeric;
    let units!: Units[];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "unitType": (_el: _Element): void => { unitType = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "units": (_el: _Element): void => { units = $._decode_implicit<Units[]>(() => $._decodeSequenceOf<Units>(() => _decode_Units))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnitType,
        _extension_additions_list_spec_for_UnitType,
        _root_component_type_list_2_spec_for_UnitType,
        undefined,
    );
    return new UnitType(
        name,
        description,
        unitType,
        units
    );
}; }
    return _cached_decoder_for_UnitType(el);
}

let _cached_encoder_for_UnitType: $.ASN1Encoder<UnitType> | null = null;

/**
 * @summary Encodes a(n) UnitType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitType, encoded as an ASN.1 Element.
 */
export
function _encode_UnitType (value: UnitType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitType) { _cached_encoder_for_UnitType = function (value: UnitType, elGetter: $.ASN1Encoder<UnitType>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.unitType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Units>(() => _encode_Units, $.BER), $.BER)(value.units, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UnitType(value, elGetter);
}


/* eslint-enable */
