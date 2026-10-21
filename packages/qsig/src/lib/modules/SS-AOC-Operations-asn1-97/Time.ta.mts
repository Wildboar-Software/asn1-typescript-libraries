/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LengthOfTimeUnit, _decode_LengthOfTimeUnit, _encode_LengthOfTimeUnit } from "../SS-AOC-Operations-asn1-97/LengthOfTimeUnit.ta.mjs";
import { Scale, _decode_Scale, _encode_Scale, _enum_for_Scale } from "../SS-AOC-Operations-asn1-97/Scale.ta.mjs";

/**
 * @summary Time
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Time ::= SEQUENCE {
 *     lengthOfTimeUnit [1] IMPLICIT LengthOfTimeUnit,
 *     scale [2] IMPLICIT Scale
 * }
 * ```
 * 
 * @class
 */
export
class Time {
    /**
     * @summary `lengthOfTimeUnit`.
     * @public
     * @readonly
     */
    readonly lengthOfTimeUnit: LengthOfTimeUnit;
    /**
     * @summary `scale`.
     * @public
     * @readonly
     */
    readonly scale: Scale;

    constructor (
        lengthOfTimeUnit: LengthOfTimeUnit,
        scale: Scale
    ) {
        this.lengthOfTimeUnit = lengthOfTimeUnit;
        this.scale = scale;
    }

    /**
     * @summary Restructures an object into a Time
     * @description
     * 
     * This takes an `object` and converts it to a `Time`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Time`.
     * @returns {Time}
     */
    public static _from_object (_o: { [_K in keyof (Time)]: (Time)[_K] }): Time {
        return new Time(_o.lengthOfTimeUnit, _o.scale);
    }

        /**
         * @summary The enum used as the type of the component `scale`
         * @public
         * @static
         */

    public static _enum_for_scale = _enum_for_Scale;
}

/**
 * @summary The Leading Root Component Types of Time
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Time: $.ComponentSpec[] = [
    new $.ComponentSpec("lengthOfTimeUnit", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scale", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Time
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Time: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Time
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Time: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Time (el: _Element): Time {
    if (!_cached_decoder_for_Time) { _cached_decoder_for_Time = function (el: _Element): Time {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Time contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lengthOfTimeUnit";
    sequence[1].name = "scale";
    const lengthOfTimeUnit: LengthOfTimeUnit = $._decode_implicit<LengthOfTimeUnit>(() => _decode_LengthOfTimeUnit)(sequence[0]);
    const scale: Scale = $._decode_implicit<Scale>(() => _decode_Scale)(sequence[1]);
    return new Time(
        lengthOfTimeUnit,
        scale,

    );
}; }
    return _cached_decoder_for_Time(el);
}

let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;

/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export
function _encode_Time (value: Time, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Time) { _cached_encoder_for_Time = function (value: Time, _elGetter: $.ASN1Encoder<Time>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LengthOfTimeUnit, $.BER)(value.lengthOfTimeUnit, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Scale, $.BER)(value.scale, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Time(value, elGetter);
}

/* eslint-enable */
