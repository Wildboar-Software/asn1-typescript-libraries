/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
    INTEGER,
    OPTIONAL,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DigitMapValue
 * @description
 * 
 * A digit map and the timers that override the MG's provisioned defaults (ITU-T
 * Rec. H.248.1 (03/2013) clause 7.1.14 and Annex A).
 *
 * Start (T), short (S), and long (L) timers are in seconds, from 1 to 99,
 * except that start may be 0, which disables it and waits indefinitely for the
 * first digit. `durationTimer` is in hundreds of milliseconds, from 100 ms to
 * 9.9 s. The body is one or more alternative event sequences; the formal syntax
 * in Annex A.3 is illustrative and Annex B wins if they differ.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMapValue ::= SEQUENCE
 *     {
 *         startTimer                [0] INTEGER(0..99) OPTIONAL,
 *         shortTimer                [1] INTEGER(0..99) OPTIONAL,
 *         longTimer                [2] INTEGER(0..99) OPTIONAL,
 *         digitMapBody            [3] IA5String,
 *         -- Units are seconds for start, short and long timers, and hundreds
 *         -- of milliseconds for duration timer. Thus start, short, and long
 *         -- range from 1 to 99 seconds and duration from 100 ms to 9.9 s
 *         -- See A.3 for explanation of DigitMap syntax
 *         ...,
 *         durationTimer            [4] INTEGER (0..99) OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class DigitMapValue {
    constructor (
        /**
         * @summary `startTimer`.
         * @description
         *
         * Start timer T, in seconds, 0 to 99. Zero disables it. Used before any
         * digit has been collected (clause 7.1.14.2).
         *
         * @public
         * @readonly
         */
        readonly startTimer: OPTIONAL<INTEGER>,
        /**
         * @summary `shortTimer`.
         * @description
         *
         * Short inter-event timer S, in seconds, 0 to 99. Applied when the
         * digits already match a pattern but a longer pattern is still possible
         * (clause 7.1.14.2).
         *
         * @public
         * @readonly
         */
        readonly shortTimer: OPTIONAL<INTEGER>,
        /**
         * @summary `longTimer`.
         * @description
         *
         * Long inter-event timer L, in seconds, 0 to 99. Applied when at least
         * one more digit is required to match any pattern (clause 7.1.14.2).
         *
         * @public
         * @readonly
         */
        readonly longTimer: OPTIONAL<INTEGER>,
        /**
         * @summary `digitMapBody`.
         * @description
         *
         * The map. Digits 0-9 and letters A-K are events. `x` is any digit 0-9.
         * A dot repeats the preceding selector. `S` and `L` override the
         * inter-event timer, `Z` requires a long-duration event, and `|`
         * separates alternatives (clauses 7.1.14.3 and A.3). An example is
         * `(0|00|[1-7]xxx|8xxxxxxx|Fxxxxxxx|Exx|91xxxxxxxxxx|9011x.)`.
         *
         * @public
         * @readonly
         */
        readonly digitMapBody: IA5String,
        /**
         * @summary `durationTimer`.
         * @description
         *
         * Long-duration threshold used by `Z`, in hundreds of milliseconds, 0
         * to 99, so 100 ms to 9.9 s (Annex A). Overrides the value provisioned
         * in the MG.
         *
         * @public
         * @readonly
         */
        readonly durationTimer: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (startTimer !== undefined) {
            const n = typeof startTimer === "bigint" ? startTimer : BigInt(startTimer);
            if (n < 0n || n > 99n) {
                throw new ASN1OverflowError("DigitMapValue.startTimer violates INTEGER range");
            }
        }
        if (shortTimer !== undefined) {
            const n = typeof shortTimer === "bigint" ? shortTimer : BigInt(shortTimer);
            if (n < 0n || n > 99n) {
                throw new ASN1OverflowError("DigitMapValue.shortTimer violates INTEGER range");
            }
        }
        if (longTimer !== undefined) {
            const n = typeof longTimer === "bigint" ? longTimer : BigInt(longTimer);
            if (n < 0n || n > 99n) {
                throw new ASN1OverflowError("DigitMapValue.longTimer violates INTEGER range");
            }
        }
        if (durationTimer !== undefined) {
            const n = typeof durationTimer === "bigint" ? durationTimer : BigInt(durationTimer);
            if (n < 0n || n > 99n) {
                throw new ASN1OverflowError("DigitMapValue.durationTimer violates INTEGER range");
            }
        }
    }

    /**
     * @summary Restructures an object into a DigitMapValue
     * @description
     * 
     * This takes an `object` and converts it to a `DigitMapValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitMapValue`.
     * @returns {DigitMapValue}
     */
    public static _from_object (_o: { [_K in keyof (DigitMapValue)]: (DigitMapValue)[_K] }): DigitMapValue {
        return new DigitMapValue(_o.startTimer, _o.shortTimer, _o.longTimer, _o.digitMapBody, _o.durationTimer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DigitMapValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitMapValue: $.ComponentSpec[] = [
    new $.ComponentSpec("startTimer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("shortTimer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("longTimer", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("digitMapBody", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DigitMapValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitMapValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitMapValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitMapValue: $.ComponentSpec[] = [
    new $.ComponentSpec("durationTimer", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_DigitMapValue: $.ASN1Decoder<DigitMapValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitMapValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitMapValue (el: _Element): DigitMapValue {
    if (!_cached_decoder_for_DigitMapValue) { _cached_decoder_for_DigitMapValue = function (el: _Element): DigitMapValue {
    let startTimer: OPTIONAL<INTEGER>;
    let shortTimer: OPTIONAL<INTEGER>;
    let longTimer: OPTIONAL<INTEGER>;
    let digitMapBody!: IA5String;
    let durationTimer: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "startTimer": (_el: _Element): void => { startTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "shortTimer": (_el: _Element): void => { shortTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "longTimer": (_el: _Element): void => { longTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "digitMapBody": (_el: _Element): void => { digitMapBody = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "durationTimer": (_el: _Element): void => { durationTimer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitMapValue,
        _extension_additions_list_spec_for_DigitMapValue,
        _root_component_type_list_2_spec_for_DigitMapValue,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DigitMapValue(
        startTimer,
        shortTimer,
        longTimer,
        digitMapBody,
        durationTimer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DigitMapValue(el);
}

let _cached_encoder_for_DigitMapValue: $.ASN1Encoder<DigitMapValue> | null = null;

/**
 * @summary Encodes a(n) DigitMapValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitMapValue, encoded as an ASN.1 Element.
 */
export
function _encode_DigitMapValue (value: DigitMapValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitMapValue) { _cached_encoder_for_DigitMapValue = function (value: DigitMapValue, elGetter: $.ASN1Encoder<DigitMapValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.startTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.startTimer, $.BER)),
            /* IF_ABSENT  */ ((value.shortTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.shortTimer, $.BER)),
            /* IF_ABSENT  */ ((value.longTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.longTimer, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.digitMapBody, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.durationTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.durationTimer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitMapValue(value, elGetter);
}


/* eslint-enable */
