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
import { Transitions, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary AttachToEventCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttachToEventCondition ::= SEQUENCE {
 *    eventEnrollmentName           [0] ObjectName,
 *    eventConditionName            [1] ObjectName,
 *    causingTransitions            [2] IMPLICIT Transitions,
 *    acceptableDelay               [3] IMPLICIT Unsigned32 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AttachToEventCondition {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `causingTransitions`.
         * @public
         * @readonly
         */
        readonly causingTransitions: Transitions,
        /**
         * @summary `acceptableDelay`.
         * @public
         * @readonly
         */
        readonly acceptableDelay: OPTIONAL<Unsigned32>
    ) {}

    /**
     * @summary Restructures an object into a AttachToEventCondition
     * @description
     * 
     * This takes an `object` and converts it to a `AttachToEventCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttachToEventCondition`.
     * @returns {AttachToEventCondition}
     */
    public static _from_object (_o: { [_K in keyof (AttachToEventCondition)]: (AttachToEventCondition)[_K] }): AttachToEventCondition {
        return new AttachToEventCondition(_o.eventEnrollmentName, _o.eventConditionName, _o.causingTransitions, _o.acceptableDelay);
    }


}

/**
 * @summary The Leading Root Component Types of AttachToEventCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttachToEventCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("causingTransitions", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("acceptableDelay", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttachToEventCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttachToEventCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttachToEventCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttachToEventCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttachToEventCondition: $.ASN1Decoder<AttachToEventCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttachToEventCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttachToEventCondition (el: _Element): AttachToEventCondition {
    if (!_cached_decoder_for_AttachToEventCondition) { _cached_decoder_for_AttachToEventCondition = function (el: _Element): AttachToEventCondition {
    let eventEnrollmentName!: ObjectName;
    let eventConditionName!: ObjectName;
    let causingTransitions!: Transitions;
    let acceptableDelay: OPTIONAL<Unsigned32>;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "causingTransitions": (_el: _Element): void => { causingTransitions = $._decode_implicit<Transitions>(() => _decode_Transitions)(_el); },
        "acceptableDelay": (_el: _Element): void => { acceptableDelay = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttachToEventCondition,
        _extension_additions_list_spec_for_AttachToEventCondition,
        _root_component_type_list_2_spec_for_AttachToEventCondition,
        undefined,
    );
    return new AttachToEventCondition(
        eventEnrollmentName,
        eventConditionName,
        causingTransitions,
        acceptableDelay
    );
}; }
    return _cached_decoder_for_AttachToEventCondition(el);
}

let _cached_encoder_for_AttachToEventCondition: $.ASN1Encoder<AttachToEventCondition> | null = null;

/**
 * @summary Encodes a(n) AttachToEventCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachToEventCondition, encoded as an ASN.1 Element.
 */
export
function _encode_AttachToEventCondition (value: AttachToEventCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttachToEventCondition) { _cached_encoder_for_AttachToEventCondition = function (value: AttachToEventCondition): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Transitions, $.BER)(value.causingTransitions, $.BER),
            /* IF_ABSENT  */ ((value.acceptableDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned32, $.BER)(value.acceptableDelay, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttachToEventCondition(value, elGetter);
}


/* eslint-enable */
