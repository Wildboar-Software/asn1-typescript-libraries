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
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary AlterEventConditionMonitoring_Request
 * @description
 *
 * Confirmed request: alter monitoring attributes of a monitored Event
 * Condition. At least one of enabled, priority, alarmSummaryReports, or
 * evaluationInterval shall be present. Enabling/disabling changes `&ecState`;
 * disabled conditions do not notify. `evaluationInterval` requires `cei`.
 * Display Enhancement is CS (`cspi`). Result(+) empty.
 *
 * [ISO 9506-1:2003 §19.6]
 * [ISO 9506-2:2003 §19.6]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventConditionMonitoring-Request ::= SEQUENCE {
 *    eventConditionName            [0] ObjectName,
 *    enabled                       [1] IMPLICIT BOOLEAN OPTIONAL,
 *    priority                      [2] IMPLICIT Priority OPTIONAL,
 *    alarmSummaryReports           [3] IMPLICIT BOOLEAN OPTIONAL
 * ,  evaluationInterval            [4] IMPLICIT Unsigned32 OPTIONAL
 *           -- At least one of enabled, priority, alarmSummaryReports, or
 *           -- evaluationInterval shall be present.
 *    }
 * ```
 * 
 * @class
 */
export
class AlterEventConditionMonitoring_Request {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @description
         *
         * Event Condition to alter.
         *
         * [ISO 9506-1:2003 §19.6.1.1.1]
         *
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `enabled`.
         * @description
         *
         * Replacement `&enabled`. Omitted: unchanged. True starts monitoring; false
         * forces `disabled`.
         *
         * [ISO 9506-1:2003 §19.6.1.1.2]
         *
         * @public
         * @readonly
         */
        readonly enabled: OPTIONAL<BOOLEAN>,
        /**
         * @summary `priority`.
         * @description
         *
         * Replacement `&priority`. Omitted: unchanged. Takes effect immediately.
         *
         * [ISO 9506-1:2003 §19.6.1.1.3]
         *
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `alarmSummaryReports`.
         * @description
         *
         * Replacement `&alarmSummaryReports`. Omitted: unchanged.
         *
         * [ISO 9506-1:2003 §19.6.1.1.4]
         *
         * @public
         * @readonly
         */
        readonly alarmSummaryReports: OPTIONAL<BOOLEAN>,
        /**
         * @summary `evaluationInterval`.
         * @description
         *
         * Proposed `&evaluationInterval` ms. Requires `cei`. Server may return
         * TIME-RESOLUTION.
         *
         * [ISO 9506-1:2003 §19.6.1.1.5]
         *
         * @public
         * @readonly
         */
        readonly evaluationInterval: OPTIONAL<Unsigned32>
    ) {}

    /**
     * @summary Restructures an object into a AlterEventConditionMonitoring_Request
     * @description
     * 
     * This takes an `object` and converts it to a `AlterEventConditionMonitoring_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlterEventConditionMonitoring_Request`.
     * @returns {AlterEventConditionMonitoring_Request}
     */
    public static _from_object (_o: { [_K in keyof (AlterEventConditionMonitoring_Request)]: (AlterEventConditionMonitoring_Request)[_K] }): AlterEventConditionMonitoring_Request {
        return new AlterEventConditionMonitoring_Request(_o.eventConditionName, _o.enabled, _o.priority, _o.alarmSummaryReports, _o.evaluationInterval);
    }


}

/**
 * @summary The Leading Root Component Types of AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("enabled", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alarmSummaryReports", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("evaluationInterval", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlterEventConditionMonitoring_Request: $.ASN1Decoder<AlterEventConditionMonitoring_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventConditionMonitoring_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventConditionMonitoring_Request (el: _Element): AlterEventConditionMonitoring_Request {
    if (!_cached_decoder_for_AlterEventConditionMonitoring_Request) { _cached_decoder_for_AlterEventConditionMonitoring_Request = function (el: _Element): AlterEventConditionMonitoring_Request {
    let eventConditionName!: ObjectName;
    let enabled: OPTIONAL<BOOLEAN>;
    let priority: OPTIONAL<Priority>;
    let alarmSummaryReports: OPTIONAL<BOOLEAN>;
    let evaluationInterval: OPTIONAL<Unsigned32>;
    const callbacks: $.DecodingMap = {
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "enabled": (_el: _Element): void => { enabled = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "alarmSummaryReports": (_el: _Element): void => { alarmSummaryReports = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "evaluationInterval": (_el: _Element): void => { evaluationInterval = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlterEventConditionMonitoring_Request,
        _extension_additions_list_spec_for_AlterEventConditionMonitoring_Request,
        _root_component_type_list_2_spec_for_AlterEventConditionMonitoring_Request,
        undefined,
    );
    return new AlterEventConditionMonitoring_Request(
        eventConditionName,
        enabled,
        priority,
        alarmSummaryReports,
        evaluationInterval
    );
}; }
    return _cached_decoder_for_AlterEventConditionMonitoring_Request(el);
}

let _cached_encoder_for_AlterEventConditionMonitoring_Request: $.ASN1Encoder<AlterEventConditionMonitoring_Request> | null = null;

/**
 * @summary Encodes a(n) AlterEventConditionMonitoring_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventConditionMonitoring_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventConditionMonitoring_Request (value: AlterEventConditionMonitoring_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventConditionMonitoring_Request) { _cached_encoder_for_AlterEventConditionMonitoring_Request = function (value: AlterEventConditionMonitoring_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* IF_ABSENT  */ ((value.enabled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.enabled, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.alarmSummaryReports === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.alarmSummaryReports, $.BER)),
            /* IF_ABSENT  */ ((value.evaluationInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Unsigned32, $.BER)(value.evaluationInterval, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlterEventConditionMonitoring_Request(value, elGetter);
}


/* eslint-enable */
