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
import { GetEventConditionAttributes_Response_monitoredVariable, _decode_GetEventConditionAttributes_Response_monitoredVariable, _encode_GetEventConditionAttributes_Response_monitoredVariable } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Response-monitoredVariable.ta.mjs";
// export { GetEventConditionAttributes_Response_monitoredVariable, _decode_GetEventConditionAttributes_Response_monitoredVariable, _encode_GetEventConditionAttributes_Response_monitoredVariable } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Response-monitoredVariable.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetEventConditionAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEventConditionAttributes-Response ::= SEQUENCE {
 *    mmsDeletable                  [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    class                         [1] IMPLICIT EC-Class,
 *    priority                      [2] IMPLICIT Priority DEFAULT normalPriority,
 *    severity                      [3] IMPLICIT Unsigned8 DEFAULT normalSeverity,
 *    alarmSummaryReports           [4] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    monitoredVariable             [6] CHOICE {
 *        variableReference             [0] VariableSpecification,
 *        undefined                     [1] IMPLICIT NULL   } OPTIONAL,
 *    evaluationInterval            [7] IMPLICIT Unsigned32 OPTIONAL,
 *    accessControlList             [8] IMPLICIT Identifier OPTIONAL
 *                     -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class GetEventConditionAttributes_Response {
    constructor (
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: OPTIONAL<BOOLEAN>,
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
        readonly monitoredVariable: OPTIONAL<GetEventConditionAttributes_Response_monitoredVariable>,
        /**
         * @summary `evaluationInterval`.
         * @public
         * @readonly
         */
        readonly evaluationInterval: OPTIONAL<Unsigned32>,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetEventConditionAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetEventConditionAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEventConditionAttributes_Response`.
     * @returns {GetEventConditionAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetEventConditionAttributes_Response)]: (GetEventConditionAttributes_Response)[_K] }): GetEventConditionAttributes_Response {
        return new GetEventConditionAttributes_Response(_o.mmsDeletable, _o.class_, _o.priority, _o.severity, _o.alarmSummaryReports, _o.monitoredVariable, _o.evaluationInterval, _o.accessControlList);
    }

    /**
     * @summary Getter that returns the default value for `mmsDeletable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mmsDeletable () { return false; }
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
    /**
     * @summary Getter that returns the default value for `alarmSummaryReports`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_alarmSummaryReports () { return false; }
}

/**
 * @summary The Leading Root Component Types of GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("mmsDeletable", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("severity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alarmSummaryReports", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("monitoredVariable", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("evaluationInterval", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEventConditionAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEventConditionAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEventConditionAttributes_Response: $.ASN1Decoder<GetEventConditionAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEventConditionAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEventConditionAttributes_Response (el: _Element): GetEventConditionAttributes_Response {
    if (!_cached_decoder_for_GetEventConditionAttributes_Response) { _cached_decoder_for_GetEventConditionAttributes_Response = function (el: _Element): GetEventConditionAttributes_Response {
    let mmsDeletable: OPTIONAL<BOOLEAN> = GetEventConditionAttributes_Response._default_value_for_mmsDeletable;
    let class_!: EC_Class;
    let priority: OPTIONAL<Priority> = GetEventConditionAttributes_Response._default_value_for_priority;
    let severity: OPTIONAL<Unsigned8> = GetEventConditionAttributes_Response._default_value_for_severity;
    let alarmSummaryReports: OPTIONAL<BOOLEAN> = GetEventConditionAttributes_Response._default_value_for_alarmSummaryReports;
    let monitoredVariable: OPTIONAL<GetEventConditionAttributes_Response_monitoredVariable>;
    let evaluationInterval: OPTIONAL<Unsigned32>;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "class": (_el: _Element): void => { class_ = $._decode_implicit<EC_Class>(() => _decode_EC_Class)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(_el); },
        "alarmSummaryReports": (_el: _Element): void => { alarmSummaryReports = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitoredVariable": (_el: _Element): void => { monitoredVariable = $._decode_explicit<GetEventConditionAttributes_Response_monitoredVariable>(() => _decode_GetEventConditionAttributes_Response_monitoredVariable)(_el); },
        "evaluationInterval": (_el: _Element): void => { evaluationInterval = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEventConditionAttributes_Response,
        _extension_additions_list_spec_for_GetEventConditionAttributes_Response,
        _root_component_type_list_2_spec_for_GetEventConditionAttributes_Response,
        undefined,
    );
    return new GetEventConditionAttributes_Response(
        mmsDeletable,
        class_,
        priority,
        severity,
        alarmSummaryReports,
        monitoredVariable,
        evaluationInterval,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetEventConditionAttributes_Response(el);
}

let _cached_encoder_for_GetEventConditionAttributes_Response: $.ASN1Encoder<GetEventConditionAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetEventConditionAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEventConditionAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetEventConditionAttributes_Response (value: GetEventConditionAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEventConditionAttributes_Response) { _cached_encoder_for_GetEventConditionAttributes_Response = function (value: GetEventConditionAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.mmsDeletable === undefined || $.deepEq(value.mmsDeletable, GetEventConditionAttributes_Response._default_value_for_mmsDeletable) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EC_Class, $.BER)(value.class_, $.BER),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, GetEventConditionAttributes_Response._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_DEFAULT */ (value.severity === undefined || $.deepEq(value.severity, GetEventConditionAttributes_Response._default_value_for_severity) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned8, $.BER)(value.severity, $.BER)),
            /* IF_DEFAULT */ (value.alarmSummaryReports === undefined || $.deepEq(value.alarmSummaryReports, GetEventConditionAttributes_Response._default_value_for_alarmSummaryReports) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.alarmSummaryReports, $.BER)),
            /* IF_ABSENT  */ ((value.monitoredVariable === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_GetEventConditionAttributes_Response_monitoredVariable, $.BER)(value.monitoredVariable, $.BER)),
            /* IF_ABSENT  */ ((value.evaluationInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Unsigned32, $.BER)(value.evaluationInterval, $.BER)),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetEventConditionAttributes_Response(value, elGetter);
}


/* eslint-enable */
