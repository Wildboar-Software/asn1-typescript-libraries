/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeQuotaType, _decode_TimeQuotaType, _encode_TimeQuotaType, _enum_for_TimeQuotaType } from "../GPRSChargingDataTypes/TimeQuotaType.ta.mjs";


/**
 * @summary TimeQuotaMechanism
 * @description
 * 
 * Included in a List of Service Data container (table 6.1.3.3). That table
 * refers the definition to TS 32.298. Clause 5.2.3.4.1 describes
 * time-envelope reporting, whose completed envelopes are added to the
 * PGW-CDR and whose completion rules are in TS 32.299, but it does not
 * define this type's quota type or base interval.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeQuotaMechanism ::= SEQUENCE {
 *    timeQuotaType      [1] IMPLICIT TimeQuotaType,
 *    baseTimeInterval   [2] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class TimeQuotaMechanism {
    /**
     * @summary `timeQuotaType`.
     * @public
     * @readonly
     */
    readonly timeQuotaType: TimeQuotaType;
    /**
     * @summary `baseTimeInterval`.
     * @public
     * @readonly
     */
    readonly baseTimeInterval: INTEGER;

    constructor (
        timeQuotaType: TimeQuotaType,
        baseTimeInterval: INTEGER
    ) {
        this.timeQuotaType = timeQuotaType;
        this.baseTimeInterval = baseTimeInterval;
    }

    /**
     * @summary Restructures an object into a TimeQuotaMechanism
     * @description
     * 
     * This takes an `object` and converts it to a `TimeQuotaMechanism`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeQuotaMechanism`.
     * @returns {TimeQuotaMechanism}
     */
    public static _from_object (_o: { [_K in keyof (TimeQuotaMechanism)]: (TimeQuotaMechanism)[_K] }): TimeQuotaMechanism {
        return new TimeQuotaMechanism(_o.timeQuotaType, _o.baseTimeInterval);
    }

        /**
         * @summary The enum used as the type of the component `timeQuotaType`
         * @public
         * @static
         */

    public static _enum_for_timeQuotaType: typeof _enum_for_TimeQuotaType = _enum_for_TimeQuotaType;
}

/**
 * @summary The Leading Root Component Types of TimeQuotaMechanism
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeQuotaMechanism: $.ComponentSpec[] = [
    new $.ComponentSpec("timeQuotaType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("baseTimeInterval", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TimeQuotaMechanism
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeQuotaMechanism: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeQuotaMechanism
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeQuotaMechanism: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeQuotaMechanism: $.ASN1Decoder<TimeQuotaMechanism> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeQuotaMechanism
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeQuotaMechanism (el: _Element): TimeQuotaMechanism {
    if (!_cached_decoder_for_TimeQuotaMechanism) { _cached_decoder_for_TimeQuotaMechanism = function (el: _Element): TimeQuotaMechanism {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TimeQuotaMechanism contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeQuotaType";
    sequence[1].name = "baseTimeInterval";
    const timeQuotaType: TimeQuotaType = $._decode_implicit<TimeQuotaType>(() => _decode_TimeQuotaType)(sequence[0]);
    const baseTimeInterval: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new TimeQuotaMechanism(
        timeQuotaType,
        baseTimeInterval,

    );
}; }
    return _cached_decoder_for_TimeQuotaMechanism(el);
}

let _cached_encoder_for_TimeQuotaMechanism: $.ASN1Encoder<TimeQuotaMechanism> | null = null;

/**
 * @summary Encodes a(n) TimeQuotaMechanism into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeQuotaMechanism, encoded as an ASN.1 Element.
 */
export
function _encode_TimeQuotaMechanism (value: TimeQuotaMechanism, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeQuotaMechanism) { _cached_encoder_for_TimeQuotaMechanism = function (value: TimeQuotaMechanism, _elGetter: $.ASN1Encoder<TimeQuotaMechanism>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimeQuotaType, $.BER)(value.timeQuotaType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.baseTimeInterval, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TimeQuotaMechanism(value, elGetter);
}


/* eslint-enable */
