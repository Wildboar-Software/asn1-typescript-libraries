/* eslint-disable */
import {
    INTEGER,
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
 * @summary CountWindow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CountWindow ::= SEQUENCE {count   INTEGER,
 *                           window  TimeInterval
 * }
 * ```
 * 
 * @class
 */
export
class CountWindow {
    constructor (
        /**
         * @summary `count`.
         * @public
         * @readonly
         */
        readonly count: INTEGER,
        /**
         * @summary `window`.
         * @public
         * @readonly
         */
        readonly window: TimeInterval
    ) {}

    /**
     * @summary Restructures an object into a CountWindow
     * @description
     * 
     * This takes an `object` and converts it to a `CountWindow`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CountWindow`.
     * @returns {CountWindow}
     */
    public static _from_object (_o: { [_K in keyof (CountWindow)]: (CountWindow)[_K] }): CountWindow {
        return new CountWindow(_o.count, _o.window);
    }


}

/**
 * @summary The Leading Root Component Types of CountWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CountWindow: $.ComponentSpec[] = [
    new $.ComponentSpec("count", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("window", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CountWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CountWindow: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CountWindow
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CountWindow: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CountWindow: $.ASN1Decoder<CountWindow> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountWindow
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountWindow (el: _Element): CountWindow {
    if (!_cached_decoder_for_CountWindow) { _cached_decoder_for_CountWindow = function (el: _Element): CountWindow {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CountWindow contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "count";
    sequence[1].name = "window";
    let count!: INTEGER;
    let window!: TimeInterval;
    count = $._decodeInteger(sequence[0]);
    window = _decode_TimeInterval(sequence[1]);
    return new CountWindow(
        count,
        window,

    );
}; }
    return _cached_decoder_for_CountWindow(el);
}

let _cached_encoder_for_CountWindow: $.ASN1Encoder<CountWindow> | null = null;

/**
 * @summary Encodes a(n) CountWindow into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountWindow, encoded as an ASN.1 Element.
 */
export
function _encode_CountWindow (value: CountWindow, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountWindow) { _cached_encoder_for_CountWindow = function (value: CountWindow, elGetter: $.ASN1Encoder<CountWindow>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.count, $.BER),
            /* REQUIRED   */ _encode_TimeInterval(value.window, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CountWindow(value, elGetter);
}


/* eslint-enable */
