/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { EC_Class, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
// export { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
// export { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
import { normalSeverity } from "../MMS-Object-Module-1/normalSeverity.va.mjs";
// export { normalSeverity } from "../MMS-Object-Module-1/normalSeverity.va.mjs";
import { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
// export { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DefineEventCondition_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineEventCondition-Request ::= SEQUENCE {
 *    eventConditionName            [0] ObjectName,
 *    class                         [1] IMPLICIT EC-Class,
 *    priority                      [2] IMPLICIT Priority DEFAULT normalPriority,
 *    severity                      [3] IMPLICIT Unsigned8 DEFAULT normalSeverity,
 *    alarmSummaryReports           [4] IMPLICIT BOOLEAN OPTIONAL,
 *    monitoredVariable             [6] VariableSpecification OPTIONAL,
 *    evaluationInterval            [7] IMPLICIT Unsigned32 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DefineEventCondition_Request {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: EC_Class,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `severity`.
         * @public
         * @readonly
         */
        readonly severity: OPTIONAL<Unsigned8>,
        /**
         * @summary `alarmSummaryReports`.
         * @public
         * @readonly
         */
        readonly alarmSummaryReports: OPTIONAL<BOOLEAN>,
        /**
         * @summary `monitoredVariable`.
         * @public
         * @readonly
         */
        readonly monitoredVariable: OPTIONAL<VariableSpecification>,
        /**
         * @summary `evaluationInterval`.
         * @public
         * @readonly
         */
        readonly evaluationInterval: OPTIONAL<Unsigned32>
    ) {}

    /**
     * @summary Restructures an object into a DefineEventCondition_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineEventCondition_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineEventCondition_Request`.
     * @returns {DefineEventCondition_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineEventCondition_Request)]: (DefineEventCondition_Request)[_K] }): DefineEventCondition_Request {
        return new DefineEventCondition_Request(_o.eventConditionName, _o.class_, _o.priority, _o.severity, _o.alarmSummaryReports, _o.monitoredVariable, _o.evaluationInterval);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return normalPriority; }
    /**
     * @summary Getter that returns the default value for `severity`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_severity () { return normalSeverity; }
}

/**
 * @summary The Leading Root Component Types of DefineEventCondition_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineEventCondition_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("severity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alarmSummaryReports", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("monitoredVariable", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("evaluationInterval", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of DefineEventCondition_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineEventCondition_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineEventCondition_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineEventCondition_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineEventCondition_Request: $.ASN1Decoder<DefineEventCondition_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineEventCondition_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineEventCondition_Request (el: _Element): DefineEventCondition_Request {
    if (!_cached_decoder_for_DefineEventCondition_Request) { _cached_decoder_for_DefineEventCondition_Request = function (el: _Element): DefineEventCondition_Request {
    let eventConditionName!: ObjectName;
    let class_!: EC_Class;
    let priority: OPTIONAL<Priority> = DefineEventCondition_Request._default_value_for_priority;
    let severity: OPTIONAL<Unsigned8> = DefineEventCondition_Request._default_value_for_severity;
    let alarmSummaryReports: OPTIONAL<BOOLEAN>;
    let monitoredVariable: OPTIONAL<VariableSpecification>;
    let evaluationInterval: OPTIONAL<Unsigned32>;
    const callbacks: $.DecodingMap = {
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<EC_Class>(() => _decode_EC_Class)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(_el); },
        "alarmSummaryReports": (_el: _Element): void => { alarmSummaryReports = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitoredVariable": (_el: _Element): void => { monitoredVariable = $._decode_explicit<VariableSpecification>(() => _decode_VariableSpecification)(_el); },
        "evaluationInterval": (_el: _Element): void => { evaluationInterval = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineEventCondition_Request,
        _extension_additions_list_spec_for_DefineEventCondition_Request,
        _root_component_type_list_2_spec_for_DefineEventCondition_Request,
        undefined,
    );
    return new DefineEventCondition_Request(
        eventConditionName,
        class_,
        priority,
        severity,
        alarmSummaryReports,
        monitoredVariable,
        evaluationInterval
    );
}; }
    return _cached_decoder_for_DefineEventCondition_Request(el);
}

let _cached_encoder_for_DefineEventCondition_Request: $.ASN1Encoder<DefineEventCondition_Request> | null = null;

/**
 * @summary Encodes a(n) DefineEventCondition_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineEventCondition_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineEventCondition_Request (value: DefineEventCondition_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineEventCondition_Request) { _cached_encoder_for_DefineEventCondition_Request = function (value: DefineEventCondition_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EC_Class, $.BER)(value.class_, $.BER),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, DefineEventCondition_Request._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_DEFAULT */ (value.severity === undefined || $.deepEq(value.severity, DefineEventCondition_Request._default_value_for_severity) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned8, $.BER)(value.severity, $.BER)),
            /* IF_ABSENT  */ ((value.alarmSummaryReports === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.alarmSummaryReports, $.BER)),
            /* IF_ABSENT  */ ((value.monitoredVariable === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_VariableSpecification, $.BER)(value.monitoredVariable, $.BER)),
            /* IF_ABSENT  */ ((value.evaluationInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Unsigned32, $.BER)(value.evaluationInterval, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineEventCondition_Request(value, elGetter);
}


/* eslint-enable */
