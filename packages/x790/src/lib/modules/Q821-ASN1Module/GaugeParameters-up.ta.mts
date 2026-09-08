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
 * @summary GaugeParameters_up
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeParameters-up ::= SEQUENCE {
 *     high  ObservedValue,
 *     low   ObservedValue
 * }
 * ```
 * 
 * @class
 */
export
class GaugeParameters_up {
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
     * @summary Restructures an object into a GaugeParameters_up
     * @description
     * 
     * This takes an `object` and converts it to a `GaugeParameters_up`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GaugeParameters_up`.
     * @returns {GaugeParameters_up}
     */
    public static _from_object (_o: { [_K in keyof (GaugeParameters_up)]: (GaugeParameters_up)[_K] }): GaugeParameters_up {
        return new GaugeParameters_up(_o.high, _o.low);
    }


}

/**
 * @summary The Leading Root Component Types of GaugeParameters_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GaugeParameters_up: $.ComponentSpec[] = [
    new $.ComponentSpec("high", false, $.hasAnyTag),
    new $.ComponentSpec("low", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of GaugeParameters_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GaugeParameters_up: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GaugeParameters_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GaugeParameters_up: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GaugeParameters_up: $.ASN1Decoder<GaugeParameters_up> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeParameters_up
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GaugeParameters_up (el: _Element): GaugeParameters_up {
    if (!_cached_decoder_for_GaugeParameters_up) { _cached_decoder_for_GaugeParameters_up = function (el: _Element): GaugeParameters_up {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GaugeParameters-up contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "high";
    sequence[1].name = "low";
    let high!: ObservedValue;
    let low!: ObservedValue;
    high = _decode_ObservedValue(sequence[0]);
    low = _decode_ObservedValue(sequence[1]);
    return new GaugeParameters_up(
        high,
        low,

    );
}; }
    return _cached_decoder_for_GaugeParameters_up(el);
}

let _cached_encoder_for_GaugeParameters_up: $.ASN1Encoder<GaugeParameters_up> | null = null;

/**
 * @summary Encodes a(n) GaugeParameters_up into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeParameters_up, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeParameters_up (value: GaugeParameters_up, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GaugeParameters_up) { _cached_encoder_for_GaugeParameters_up = function (value: GaugeParameters_up, elGetter: $.ASN1Encoder<GaugeParameters_up>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.high, $.BER),
            /* REQUIRED   */ _encode_ObservedValue(value.low, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GaugeParameters_up(value, elGetter);
}


/* eslint-enable */
