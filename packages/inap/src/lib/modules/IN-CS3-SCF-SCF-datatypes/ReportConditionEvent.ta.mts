/* eslint-disable */
import {
    type INTEGER,
    type NULL,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS3-SCF-SCF-datatypes/UserCredit.ta.mjs";
// export { UserCredit, _decode_UserCredit, _encode_UserCredit } from "../IN-CS3-SCF-SCF-datatypes/UserCredit.ta.mjs";


/**
 * @summary ReportConditionEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportConditionEvent ::= SEQUENCE {
 *   now                 [1]  NULL OPTIONAL,
 *   endOfCall           [2]  NULL OPTIONAL,
 *   period              [3]  INTEGER(0..maxPeriodTime),
 *   remainingthreshold  [5]  UserCredit OPTIONAL,
 *   eachNumOfUnit       [6]  INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReportConditionEvent {
    /**
     * @summary `now`.
     * @public
     * @readonly
     */
    readonly now: OPTIONAL<NULL>;
    /**
     * @summary `endOfCall`.
     * @public
     * @readonly
     */
    readonly endOfCall: OPTIONAL<NULL>;
    /**
     * @summary `period`.
     * @public
     * @readonly
     */
    readonly period: INTEGER;
    /**
     * @summary `remainingthreshold`.
     * @public
     * @readonly
     */
    readonly remainingthreshold: OPTIONAL<UserCredit>;
    /**
     * @summary `eachNumOfUnit`.
     * @public
     * @readonly
     */
    readonly eachNumOfUnit: OPTIONAL<INTEGER>;

    constructor (
        now: OPTIONAL<NULL>,
        endOfCall: OPTIONAL<NULL>,
        period: INTEGER,
        remainingthreshold?: OPTIONAL<UserCredit>,
        eachNumOfUnit?: OPTIONAL<INTEGER>
    ) {
        this.now = now;
        this.endOfCall = endOfCall;
        this.period = period;
        this.remainingthreshold = remainingthreshold;
        this.eachNumOfUnit = eachNumOfUnit;
    }

    /**
     * @summary Restructures an object into a ReportConditionEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ReportConditionEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportConditionEvent`.
     * @returns {ReportConditionEvent}
     */
    public static _from_object (_o: { [_K in keyof (ReportConditionEvent)]: (ReportConditionEvent)[_K] }): ReportConditionEvent {
        return new ReportConditionEvent(_o.now, _o.endOfCall, _o.period, _o.remainingthreshold, _o.eachNumOfUnit);
    }


}

/**
 * @summary The Leading Root Component Types of ReportConditionEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportConditionEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("now", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("endOfCall", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("period", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("remainingthreshold", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eachNumOfUnit", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ReportConditionEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportConditionEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportConditionEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportConditionEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportConditionEvent: $.ASN1Decoder<ReportConditionEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportConditionEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportConditionEvent (el: _Element): ReportConditionEvent {
    if (!_cached_decoder_for_ReportConditionEvent) { _cached_decoder_for_ReportConditionEvent = function (el: _Element): ReportConditionEvent {
    let now: OPTIONAL<NULL>;
    let endOfCall: OPTIONAL<NULL>;
    let period!: INTEGER;
    let remainingthreshold: OPTIONAL<UserCredit>;
    let eachNumOfUnit: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "now": (_el: _Element): void => { now = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "endOfCall": (_el: _Element): void => { endOfCall = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "period": (_el: _Element): void => { period = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "remainingthreshold": (_el: _Element): void => { remainingthreshold = $._decode_explicit<UserCredit>(() => _decode_UserCredit)(_el); },
        "eachNumOfUnit": (_el: _Element): void => { eachNumOfUnit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportConditionEvent,
        _extension_additions_list_spec_for_ReportConditionEvent,
        _root_component_type_list_2_spec_for_ReportConditionEvent,
        undefined,
    );
    return new ReportConditionEvent(
        now,
        endOfCall,
        period,
        remainingthreshold,
        eachNumOfUnit
    );
}; }
    return _cached_decoder_for_ReportConditionEvent(el);
}

let _cached_encoder_for_ReportConditionEvent: $.ASN1Encoder<ReportConditionEvent> | null = null;

/**
 * @summary Encodes a(n) ReportConditionEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportConditionEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ReportConditionEvent (value: ReportConditionEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportConditionEvent) { _cached_encoder_for_ReportConditionEvent = function (value: ReportConditionEvent, elGetter: $.ASN1Encoder<ReportConditionEvent>): _Element {
    const _components: _Element[] = [];
    if (value.now !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.now, $.BER));
    }
    if (value.endOfCall !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.endOfCall, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.period, $.BER));
    if (value.remainingthreshold !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_UserCredit, $.BER)(value.remainingthreshold, $.BER));
    }
    if (value.eachNumOfUnit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.eachNumOfUnit, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReportConditionEvent(value, elGetter);
}


/* eslint-enable */
