/* eslint-disable */
import {
    INTEGER,
    SEQUENCE,
    SET,
    GeneralizedTime,
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
 * @summary CountInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountInterval ::= SEQUENCE {
 *   count      INTEGER,
 *   startTime  GeneralizedTime,
 *   window     TimeInterval
 * }
 * ```
 * 
 * @class
 */
export
class CountInterval {
    constructor (
        /**
         * @summary `count`.
         * @public
         * @readonly
         */
        readonly count: INTEGER,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: GeneralizedTime,
        /**
         * @summary `window`.
         * @public
         * @readonly
         */
        readonly window: TimeInterval
    ) {}

    /**
     * @summary Restructures an object into a CountInterval
     * @description
     * 
     * This takes an `object` and converts it to a `CountInterval`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CountInterval`.
     * @returns {CountInterval}
     */
    public static _from_object (_o: { [_K in keyof (CountInterval)]: (CountInterval)[_K] }): CountInterval {
        return new CountInterval(_o.count, _o.startTime, _o.window);
    }


}

/**
 * @summary The Leading Root Component Types of CountInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CountInterval: $.ComponentSpec[] = [
    new $.ComponentSpec("count", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("startTime", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("window", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CountInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CountInterval: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CountInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CountInterval: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CountInterval: $.ASN1Decoder<CountInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountInterval (el: _Element): CountInterval {
    if (!_cached_decoder_for_CountInterval) { _cached_decoder_for_CountInterval = function (el: _Element): CountInterval {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CountInterval contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "count";
    sequence[1].name = "startTime";
    sequence[2].name = "window";
    let count!: INTEGER;
    let startTime!: GeneralizedTime;
    let window!: TimeInterval;
    count = $._decodeInteger(sequence[0]);
    startTime = $._decodeGeneralizedTime(sequence[1]);
    window = _decode_TimeInterval(sequence[2]);
    return new CountInterval(
        count,
        startTime,
        window,

    );
}; }
    return _cached_decoder_for_CountInterval(el);
}

let _cached_encoder_for_CountInterval: $.ASN1Encoder<CountInterval> | null = null;

/**
 * @summary Encodes a(n) CountInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountInterval, encoded as an ASN.1 Element.
 */
export
function _encode_CountInterval (value: CountInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountInterval) { _cached_encoder_for_CountInterval = function (value: CountInterval, elGetter: $.ASN1Encoder<CountInterval>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.count, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.startTime, $.BER),
            /* REQUIRED   */ _encode_TimeInterval(value.window, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CountInterval(value, elGetter);
}


/* eslint-enable */
