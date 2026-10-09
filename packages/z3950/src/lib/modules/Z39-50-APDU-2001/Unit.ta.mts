/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { StringOrNumeric, _decode_StringOrNumeric, _encode_StringOrNumeric } from "../Z39-50-APDU-2001/StringOrNumeric.ta.mjs";


/**
 * @summary Unit
 * @description
 * 
 * A unit of measure, without a numeric value (ANSI/NISO Z39.50-2003 §4.1,
 * comment 6). `IntUnit` is used when a value and a unit travel together. The
 * comment illustrates a system, a type, a unit name, and a scale factor; this
 * standard does not register a vocabulary.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unit ::= SEQUENCE {
 *     unitSystem  [1] InternationalString OPTIONAL,   -- e.g. 'SI'
 *     unitType    [2] StringOrNumeric OPTIONAL,       -- e.g. 'mass'
 *     unit        [3] StringOrNumeric OPTIONAL,       -- e.g. 'kilograms'
 *     scaleFactor [4] IMPLICIT INTEGER OPTIONAL       -- e.g. 9 means 10**9
 * }
 * ```
 * 
 * @class
 */
export
class Unit {
    /**
     * @summary `unitSystem`.
     * @description
     * 
     * Unit system. The ASN.1 comment gives 'SI' as an example. The standard
     * registers no values (ANSI/NISO Z39.50-2003 §4.1, comment 6).
     * 
     * @public
     * @readonly
     */
    readonly unitSystem: OPTIONAL<InternationalString>;
    /**
     * @summary `unitType`.
     * @description
     * 
     * Kind of unit. The ASN.1 comment gives 'mass' as an example. The standard
     * registers no values (ANSI/NISO Z39.50-2003 §4.1, comment 6).
     * 
     * @public
     * @readonly
     */
    readonly unitType: OPTIONAL<StringOrNumeric>;
    /**
     * @summary `unit`.
     * @description
     * 
     * Unit name. The ASN.1 comment gives 'kilograms' as an example. The
     * standard registers no values (ANSI/NISO Z39.50-2003 §4.1, comment 6).
     * 
     * @public
     * @readonly
     */
    readonly unit: OPTIONAL<StringOrNumeric>;
    /**
     * @summary `scaleFactor`.
     * @description
     * 
     * Power of ten applied to the unit. The ASN.1 comment says 9 means 10**9
     * (ANSI/NISO Z39.50-2003 §4.1, comment 6).
     * 
     * @public
     * @readonly
     */
    readonly scaleFactor: OPTIONAL<INTEGER>;

    constructor (
        unitSystem: OPTIONAL<InternationalString>,
        unitType: OPTIONAL<StringOrNumeric>,
        unit: OPTIONAL<StringOrNumeric>,
        scaleFactor: OPTIONAL<INTEGER>
    ) {
        this.unitSystem = unitSystem;
        this.unitType = unitType;
        this.unit = unit;
        this.scaleFactor = scaleFactor;
    }

    /**
     * @summary Restructures an object into a Unit
     * @description
     * 
     * This takes an `object` and converts it to a `Unit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Unit`.
     * @returns {Unit}
     */
    public static _from_object (_o: { [_K in keyof (Unit)]: (Unit)[_K] }): Unit {
        return new Unit(_o.unitSystem, _o.unitType, _o.unit, _o.scaleFactor);
    }


}

/**
 * @summary The Leading Root Component Types of Unit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Unit: $.ComponentSpec[] = [
    new $.ComponentSpec("unitSystem", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scaleFactor", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Unit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Unit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Unit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Unit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Unit: $.ASN1Decoder<Unit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unit (el: _Element): Unit {
    if (!_cached_decoder_for_Unit) { _cached_decoder_for_Unit = function (el: _Element): Unit {
    let unitSystem: OPTIONAL<InternationalString>;
    let unitType: OPTIONAL<StringOrNumeric>;
    let unit: OPTIONAL<StringOrNumeric>;
    let scaleFactor: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "unitSystem": (_el: _Element): void => { unitSystem = $._decode_explicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "unitType": (_el: _Element): void => { unitType = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "unit": (_el: _Element): void => { unit = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "scaleFactor": (_el: _Element): void => { scaleFactor = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Unit,
        _extension_additions_list_spec_for_Unit,
        _root_component_type_list_2_spec_for_Unit,
        undefined,
    );
    return new Unit(
        unitSystem,
        unitType,
        unit,
        scaleFactor
    );
}; }
    return _cached_decoder_for_Unit(el);
}

let _cached_encoder_for_Unit: $.ASN1Encoder<Unit> | null = null;

/**
 * @summary Encodes a(n) Unit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unit, encoded as an ASN.1 Element.
 */
export
function _encode_Unit (value: Unit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unit) { _cached_encoder_for_Unit = function (value: Unit, elGetter: $.ASN1Encoder<Unit>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.unitSystem !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.unitSystem, $.BER);
    }
    if (value.unitType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.unitType, $.BER);
    }
    if (value.unit !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_StringOrNumeric, $.BER)(value.unit, $.BER);
    }
    if (value.scaleFactor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.scaleFactor, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Unit(value, elGetter);
}


/* eslint-enable */
