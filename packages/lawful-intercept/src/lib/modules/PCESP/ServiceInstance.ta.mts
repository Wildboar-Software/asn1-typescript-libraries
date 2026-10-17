/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";


/**
 * @summary ServiceInstance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInstance ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     relatedCallId           [4] CallId OPTIONAL,
 *     serviceName             [5] VisibleString (SIZE (1..128, ...)),
 *     firstCallCalling        [6] PartyId OPTIONAL,
 *     secondCallCalling       [7] PartyId OPTIONAL,
 *     called                  [8] PartyId OPTIONAL,
 *     calling                 [9] PartyId OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceInstance {
    /**
     * @summary `caseId`.
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `callId`.
     * @public
     * @readonly
     */
    readonly callId: CallId;
    /**
     * @summary `relatedCallId`.
     * @public
     * @readonly
     */
    readonly relatedCallId: OPTIONAL<CallId>;
    /**
     * @summary `serviceName`.
     * @public
     * @readonly
     */
    readonly serviceName: VisibleString;
    /**
     * @summary `firstCallCalling`.
     * @public
     * @readonly
     */
    readonly firstCallCalling: OPTIONAL<PartyId>;
    /**
     * @summary `secondCallCalling`.
     * @public
     * @readonly
     */
    readonly secondCallCalling: OPTIONAL<PartyId>;
    /**
     * @summary `called`.
     * @public
     * @readonly
     */
    readonly called: OPTIONAL<PartyId>;
    /**
     * @summary `calling`.
     * @public
     * @readonly
     */
    readonly calling: OPTIONAL<PartyId>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        caseId: CaseId,
        accessingElementId: AccessingElementId,
        eventTime: EventTime,
        callId: CallId,
        relatedCallId: OPTIONAL<CallId>,
        serviceName: VisibleString,
        firstCallCalling: OPTIONAL<PartyId>,
        secondCallCalling: OPTIONAL<PartyId>,
        called: OPTIONAL<PartyId>,
        calling: OPTIONAL<PartyId>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.relatedCallId = relatedCallId;
        this.serviceName = serviceName;
        this.firstCallCalling = firstCallCalling;
        this.secondCallCalling = secondCallCalling;
        this.called = called;
        this.calling = calling;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServiceInstance
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceInstance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceInstance`.
     * @returns {ServiceInstance}
     */
    public static _from_object (_o: { [_K in keyof (ServiceInstance)]: (ServiceInstance)[_K] }): ServiceInstance {
        return new ServiceInstance(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.relatedCallId, _o.serviceName, _o.firstCallCalling, _o.secondCallCalling, _o.called, _o.calling, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceInstance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceInstance: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("relatedCallId", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceName", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("firstCallCalling", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("secondCallCalling", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("called", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("calling", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ServiceInstance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceInstance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceInstance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceInstance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceInstance: $.ASN1Decoder<ServiceInstance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInstance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInstance (el: _Element): ServiceInstance {
    if (!_cached_decoder_for_ServiceInstance) { _cached_decoder_for_ServiceInstance = function (el: _Element): ServiceInstance {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let relatedCallId: OPTIONAL<CallId>;
    let serviceName!: VisibleString;
    let firstCallCalling: OPTIONAL<PartyId>;
    let secondCallCalling: OPTIONAL<PartyId>;
    let called: OPTIONAL<PartyId>;
    let calling: OPTIONAL<PartyId>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "relatedCallId": (_el: _Element): void => { relatedCallId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "serviceName": (_el: _Element): void => { serviceName = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "firstCallCalling": (_el: _Element): void => { firstCallCalling = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "secondCallCalling": (_el: _Element): void => { secondCallCalling = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "called": (_el: _Element): void => { called = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "calling": (_el: _Element): void => { calling = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceInstance,
        _extension_additions_list_spec_for_ServiceInstance,
        _root_component_type_list_2_spec_for_ServiceInstance,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceInstance(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        relatedCallId,
        serviceName,
        firstCallCalling,
        secondCallCalling,
        called,
        calling,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceInstance(el);
}

let _cached_encoder_for_ServiceInstance: $.ASN1Encoder<ServiceInstance> | null = null;

/**
 * @summary Encodes a(n) ServiceInstance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInstance, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInstance (value: ServiceInstance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInstance) { _cached_encoder_for_ServiceInstance = function (value: ServiceInstance, elGetter: $.ASN1Encoder<ServiceInstance>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (value.relatedCallId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallId, $.BER)(value.relatedCallId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.serviceName, $.BER);
    if (value.firstCallCalling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PartyId, $.BER)(value.firstCallCalling, $.BER);
    }
    if (value.secondCallCalling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PartyId, $.BER)(value.secondCallCalling, $.BER);
    }
    if (value.called !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PartyId, $.BER)(value.called, $.BER);
    }
    if (value.calling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PartyId, $.BER)(value.calling, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceInstance(value, elGetter);
}


/* eslint-enable */
