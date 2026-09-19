/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Day, _decode_Day, _encode_Day, _enum_for_Day } from "../TS33128Payloads/Day.ta.mjs";
// export { Day, _enum_for_Day, Day_monday /* IMPORTED_LONG_ENUMERATION_ITEM */, monday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */, tuesday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */, wednesday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */, thursday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_friday /* IMPORTED_LONG_ENUMERATION_ITEM */, friday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */, saturday /* IMPORTED_SHORT_ENUMERATION_ITEM */, Day_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */, sunday /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Day, _encode_Day } from "../TS33128Payloads/Day.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary Daytime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Daytime ::= SEQUENCE
 * {
 *     daysOfWeek       [1] Day OPTIONAL,
 *     timeOfDayStart   [2] Timestamp OPTIONAL,
 *     timeOfDayEnd     [3] Timestamp OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Daytime {
    constructor (
        /**
         * @summary `daysOfWeek`.
         * @public
         * @readonly
         */
        readonly daysOfWeek: OPTIONAL<Day>,
        /**
         * @summary `timeOfDayStart`.
         * @public
         * @readonly
         */
        readonly timeOfDayStart: OPTIONAL<Timestamp>,
        /**
         * @summary `timeOfDayEnd`.
         * @public
         * @readonly
         */
        readonly timeOfDayEnd: OPTIONAL<Timestamp>
    ) {}

    /**
     * @summary Restructures an object into a Daytime
     * @description
     * 
     * This takes an `object` and converts it to a `Daytime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Daytime`.
     * @returns {Daytime}
     */
    public static _from_object (_o: { [_K in keyof (Daytime)]: (Daytime)[_K] }): Daytime {
        return new Daytime(_o.daysOfWeek, _o.timeOfDayStart, _o.timeOfDayEnd);
    }

        /**
         * @summary The enum used as the type of the component `daysOfWeek`
         * @public
         * @static
         */

    public static _enum_for_daysOfWeek = _enum_for_Day;
}

/**
 * @summary The Leading Root Component Types of Daytime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Daytime: $.ComponentSpec[] = [
    new $.ComponentSpec("daysOfWeek", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeOfDayStart", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfDayEnd", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Daytime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Daytime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Daytime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Daytime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Daytime: $.ASN1Decoder<Daytime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Daytime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Daytime (el: _Element): Daytime {
    if (!_cached_decoder_for_Daytime) { _cached_decoder_for_Daytime = function (el: _Element): Daytime {
    let daysOfWeek: OPTIONAL<Day>;
    let timeOfDayStart: OPTIONAL<Timestamp>;
    let timeOfDayEnd: OPTIONAL<Timestamp>;
    const callbacks: $.DecodingMap = {
        "daysOfWeek": (_el: _Element): void => { daysOfWeek = $._decode_implicit<Day>(() => _decode_Day)(_el); },
        "timeOfDayStart": (_el: _Element): void => { timeOfDayStart = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "timeOfDayEnd": (_el: _Element): void => { timeOfDayEnd = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Daytime,
        _extension_additions_list_spec_for_Daytime,
        _root_component_type_list_2_spec_for_Daytime,
        undefined,
    );
    return new Daytime(
        daysOfWeek,
        timeOfDayStart,
        timeOfDayEnd
    );
}; }
    return _cached_decoder_for_Daytime(el);
}

let _cached_encoder_for_Daytime: $.ASN1Encoder<Daytime> | null = null;

/**
 * @summary Encodes a(n) Daytime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Daytime, encoded as an ASN.1 Element.
 */
export
function _encode_Daytime (value: Daytime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Daytime) { _cached_encoder_for_Daytime = function (value: Daytime, elGetter: $.ASN1Encoder<Daytime>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.daysOfWeek === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Day, $.BER)(value.daysOfWeek, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfDayStart === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Timestamp, $.BER)(value.timeOfDayStart, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfDayEnd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.timeOfDayEnd, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Daytime(value, elGetter);
}


/* eslint-enable */
