/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Unit, _decode_Unit, _encode_Unit } from "../Z39-50-APDU-2001/Unit.ta.mjs";


/**
 * @summary IntUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntUnit ::= SEQUENCE {
 *     value       [1] IMPLICIT INTEGER,
 *     unitUsed    [2] IMPLICIT Unit
 * }
 * ```
 * 
 * @class
 */
export
class IntUnit {
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: INTEGER;
    /**
     * @summary `unitUsed`.
     * @public
     * @readonly
     */
    readonly unitUsed: Unit;

    constructor (
        value: INTEGER,
        unitUsed: Unit
    ) {
        this.value = value;
        this.unitUsed = unitUsed;
    }

    /**
     * @summary Restructures an object into a IntUnit
     * @description
     * 
     * This takes an `object` and converts it to a `IntUnit`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntUnit`.
     * @returns {IntUnit}
     */
    public static _from_object (_o: { [_K in keyof (IntUnit)]: (IntUnit)[_K] }): IntUnit {
        return new IntUnit(_o.value, _o.unitUsed);
    }


}

/**
 * @summary The Leading Root Component Types of IntUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntUnit: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitUsed", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IntUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntUnit: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntUnit
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntUnit: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntUnit: $.ASN1Decoder<IntUnit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntUnit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntUnit (el: _Element): IntUnit {
    if (!_cached_decoder_for_IntUnit) { _cached_decoder_for_IntUnit = function (el: _Element): IntUnit {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IntUnit contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    sequence[1].name = "unitUsed";
    let value!: INTEGER;
    let unitUsed!: Unit;
    value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    unitUsed = $._decode_implicit<Unit>(() => _decode_Unit)(sequence[1]);
    return new IntUnit(
        value,
        unitUsed,

    );
}; }
    return _cached_decoder_for_IntUnit(el);
}

let _cached_encoder_for_IntUnit: $.ASN1Encoder<IntUnit> | null = null;

/**
 * @summary Encodes a(n) IntUnit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntUnit, encoded as an ASN.1 Element.
 */
export
function _encode_IntUnit (value: IntUnit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntUnit) { _cached_encoder_for_IntUnit = function (value: IntUnit, elGetter: $.ASN1Encoder<IntUnit>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.value, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Unit, $.BER)(value.unitUsed, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_IntUnit(value, elGetter);
}


/* eslint-enable */
