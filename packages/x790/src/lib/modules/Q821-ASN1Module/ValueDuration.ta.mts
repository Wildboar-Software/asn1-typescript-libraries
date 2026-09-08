/* eslint-disable */
import {
    REAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from "../Q821-ASN1Module/TimeInterval.ta.mjs";



/**
 * @summary ValueDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValueDuration ::= SEQUENCE {value     REAL,
 *                             duration  TimeInterval
 * }
 * ```
 * 
 * @class
 */
export
class ValueDuration {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: REAL,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: TimeInterval
    ) {}

    /**
     * @summary Restructures an object into a ValueDuration
     * @description
     * 
     * This takes an `object` and converts it to a `ValueDuration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValueDuration`.
     * @returns {ValueDuration}
     */
    public static _from_object (_o: { [_K in keyof (ValueDuration)]: (ValueDuration)[_K] }): ValueDuration {
        return new ValueDuration(_o.value, _o.duration);
    }


}

/**
 * @summary The Leading Root Component Types of ValueDuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ValueDuration: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.universal, 9)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ValueDuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ValueDuration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ValueDuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ValueDuration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ValueDuration: $.ASN1Decoder<ValueDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValueDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValueDuration (el: _Element): ValueDuration {
    if (!_cached_decoder_for_ValueDuration) { _cached_decoder_for_ValueDuration = function (el: _Element): ValueDuration {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ValueDuration contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "value";
    sequence[1].name = "duration";
    let value!: REAL;
    let duration!: TimeInterval;
    value = $._decodeReal(sequence[0]);
    duration = _decode_TimeInterval(sequence[1]);
    return new ValueDuration(
        value,
        duration,

    );
}; }
    return _cached_decoder_for_ValueDuration(el);
}

let _cached_encoder_for_ValueDuration: $.ASN1Encoder<ValueDuration> | null = null;

/**
 * @summary Encodes a(n) ValueDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValueDuration, encoded as an ASN.1 Element.
 */
export
function _encode_ValueDuration (value: ValueDuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValueDuration) { _cached_encoder_for_ValueDuration = function (value: ValueDuration, elGetter: $.ASN1Encoder<ValueDuration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeReal(value.value, $.BER),
            /* REQUIRED   */ _encode_TimeInterval(value.duration, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ValueDuration(value, elGetter);
}


/* eslint-enable */
