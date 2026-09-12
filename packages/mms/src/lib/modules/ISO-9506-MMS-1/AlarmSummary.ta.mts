/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { AlarmSummary_unacknowledgedState, _decode_AlarmSummary_unacknowledgedState, _encode_AlarmSummary_unacknowledgedState } from "../ISO-9506-MMS-1/AlarmSummary-unacknowledgedState.ta.mjs";
// export { AlarmSummary_unacknowledgedState, AlarmSummary_unacknowledgedState_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmSummary_unacknowledgedState_active /* IMPORTED_LONG_NAMED_INTEGER */, AlarmSummary_unacknowledgedState_idle /* IMPORTED_LONG_NAMED_INTEGER */, AlarmSummary_unacknowledgedState_both /* IMPORTED_LONG_NAMED_INTEGER */, both /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmSummary_unacknowledgedState, _encode_AlarmSummary_unacknowledgedState } from "../ISO-9506-MMS-1/AlarmSummary-unacknowledgedState.ta.mjs";
import { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
// export { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
import { EN_Additional_Detail, _decode_EN_Additional_Detail, _encode_EN_Additional_Detail } from "../ISO-9506-MMS-1/EN-Additional-Detail.ta.mjs";
// export { EN_Additional_Detail, _decode_EN_Additional_Detail, _encode_EN_Additional_Detail } from "../ISO-9506-MMS-1/EN-Additional-Detail.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary AlarmSummary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummary ::= SEQUENCE {
 *    eventConditionName            [0] ObjectName,
 *    severity                      [1] IMPLICIT Unsigned8,
 *    currentState                  [2] IMPLICIT EC-State,
 *    unacknowledgedState           [3] IMPLICIT INTEGER {
 *        none                          (0),
 *        active                        (1),
 *        idle                          (2),
 *        both                          (3)
 *        } (0..3),
 *    displayEnhancement            [4] Nullable{EN-Additional-Detail} OPTIONAL,
 *    timeOfLastTransitionToActive  [5] EventTime OPTIONAL,
 *    timeOfLastTransitionToIdle    [6] EventTime OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AlarmSummary {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `severity`.
         * @public
         * @readonly
         */
        readonly severity: Unsigned8,
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: EC_State,
        /**
         * @summary `unacknowledgedState`.
         * @public
         * @readonly
         */
        readonly unacknowledgedState: AlarmSummary_unacknowledgedState,
        /**
         * @summary `displayEnhancement`.
         * @public
         * @readonly
         */
        readonly displayEnhancement: OPTIONAL<Nullable<EN_Additional_Detail>>,
        /**
         * @summary `timeOfLastTransitionToActive`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToActive: OPTIONAL<EventTime>,
        /**
         * @summary `timeOfLastTransitionToIdle`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToIdle: OPTIONAL<EventTime>
    ) {}

    /**
     * @summary Restructures an object into a AlarmSummary
     * @description
     * 
     * This takes an `object` and converts it to a `AlarmSummary`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmSummary`.
     * @returns {AlarmSummary}
     */
    public static _from_object (_o: { [_K in keyof (AlarmSummary)]: (AlarmSummary)[_K] }): AlarmSummary {
        return new AlarmSummary(_o.eventConditionName, _o.severity, _o.currentState, _o.unacknowledgedState, _o.displayEnhancement, _o.timeOfLastTransitionToActive, _o.timeOfLastTransitionToIdle);
    }


}

/**
 * @summary The Leading Root Component Types of AlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlarmSummary: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("severity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unacknowledgedState", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("displayEnhancement", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfLastTransitionToActive", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfLastTransitionToIdle", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlarmSummary: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlarmSummary: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlarmSummary: $.ASN1Decoder<AlarmSummary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSummary
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmSummary (el: _Element): AlarmSummary {
    if (!_cached_decoder_for_AlarmSummary) { _cached_decoder_for_AlarmSummary = function (el: _Element): AlarmSummary {
    let eventConditionName!: ObjectName;
    let severity!: Unsigned8;
    let currentState!: EC_State;
    let unacknowledgedState!: AlarmSummary_unacknowledgedState;
    let displayEnhancement: OPTIONAL<Nullable<EN_Additional_Detail>>;
    let timeOfLastTransitionToActive: OPTIONAL<EventTime>;
    let timeOfLastTransitionToIdle: OPTIONAL<EventTime>;
    const callbacks: $.DecodingMap = {
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(_el); },
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "unacknowledgedState": (_el: _Element): void => { unacknowledgedState = $._decode_implicit<AlarmSummary_unacknowledgedState>(() => _decode_AlarmSummary_unacknowledgedState)(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = $._decode_explicit<Nullable<EN_Additional_Detail>>(() => _get_decoder_for_Nullable<EN_Additional_Detail>(_decode_EN_Additional_Detail))(_el); },
        "timeOfLastTransitionToActive": (_el: _Element): void => { timeOfLastTransitionToActive = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeOfLastTransitionToIdle": (_el: _Element): void => { timeOfLastTransitionToIdle = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlarmSummary,
        _extension_additions_list_spec_for_AlarmSummary,
        _root_component_type_list_2_spec_for_AlarmSummary,
        undefined,
    );
    return new AlarmSummary(
        eventConditionName,
        severity,
        currentState,
        unacknowledgedState,
        displayEnhancement,
        timeOfLastTransitionToActive,
        timeOfLastTransitionToIdle
    );
}; }
    return _cached_decoder_for_AlarmSummary(el);
}

let _cached_encoder_for_AlarmSummary: $.ASN1Encoder<AlarmSummary> | null = null;

/**
 * @summary Encodes a(n) AlarmSummary into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSummary, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmSummary (value: AlarmSummary, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmSummary) { _cached_encoder_for_AlarmSummary = function (value: AlarmSummary): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned8, $.BER)(value.severity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EC_State, $.BER)(value.currentState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AlarmSummary_unacknowledgedState, $.BER)(value.unacknowledgedState, $.BER),
            /* IF_ABSENT  */ ((value.displayEnhancement === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _get_encoder_for_Nullable<EN_Additional_Detail>(_encode_EN_Additional_Detail), $.BER)(value.displayEnhancement, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToActive === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToActive, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToIdle === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToIdle, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlarmSummary(value, elGetter);
}


/* eslint-enable */
