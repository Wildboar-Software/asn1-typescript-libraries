/* eslint-disable */
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from "../Attribute-ASN1Module/ObservedValue.ta.mjs";



/**
 * @summary GaugeParameters_down
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeParameters-down ::= SEQUENCE {
 *     high  ObservedValue,
 *     low   ObservedValue
 * }
 * ```
 * 
 * @class
 */
export
class GaugeParameters_down {
    constructor (
        /**
         * @summary `high`.
         * @public
         * @readonly
         */
        readonly high: ObservedValue,
        /**
         * @summary `low`.
         * @public
         * @readonly
         */
        readonly low: ObservedValue
    ) {}

    /**
     * @summary Restructures an object into a GaugeParameters_down
     * @description
     * 
     * This takes an `object` and converts it to a `GaugeParameters_down`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GaugeParameters_down`.
     * @returns {GaugeParameters_down}
     */
    public static _from_object (_o: { [_K in keyof (GaugeParameters_down)]: (GaugeParameters_down)[_K] }): GaugeParameters_down {
        return new GaugeParameters_down(_o.high, _o.low);
    }


}

/**
 * @summary The Leading Root Component Types of GaugeParameters_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GaugeParameters_down: $.ComponentSpec[] = [
    new $.ComponentSpec("high", false, $.hasAnyTag),
    new $.ComponentSpec("low", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GaugeParameters_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GaugeParameters_down: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GaugeParameters_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GaugeParameters_down: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GaugeParameters_down: $.ASN1Decoder<GaugeParameters_down> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeParameters_down
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GaugeParameters_down (el: _Element): GaugeParameters_down {
    if (!_cached_decoder_for_GaugeParameters_down) { _cached_decoder_for_GaugeParameters_down = function (el: _Element): GaugeParameters_down {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GaugeParameters-down contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "high";
    sequence[1].name = "low";
    let high!: ObservedValue;
    let low!: ObservedValue;
    high = _decode_ObservedValue(sequence[0]);
    low = _decode_ObservedValue(sequence[1]);
    return new GaugeParameters_down(
        high,
        low,

    );
}; }
    return _cached_decoder_for_GaugeParameters_down(el);
}

let _cached_encoder_for_GaugeParameters_down: $.ASN1Encoder<GaugeParameters_down> | null = null;

/**
 * @summary Encodes a(n) GaugeParameters_down into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeParameters_down, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeParameters_down (value: GaugeParameters_down, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GaugeParameters_down) { _cached_encoder_for_GaugeParameters_down = function (value: GaugeParameters_down, elGetter: $.ASN1Encoder<GaugeParameters_down>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.high, $.BER),
            /* REQUIRED   */ _encode_ObservedValue(value.low, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GaugeParameters_down(value, elGetter);
}


/* eslint-enable */
