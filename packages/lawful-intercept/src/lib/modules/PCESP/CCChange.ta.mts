/* eslint-disable */
import {
    type OPTIONAL,
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
import { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
// export { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
import { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";
// export { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";
import { FlowDirection, _decode_FlowDirection, _encode_FlowDirection, _enum_for_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";
// export { FlowDirection, _enum_for_FlowDirection, FlowDirection_downstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, FlowDirection_downstream_and_upstream /* IMPORTED_LONG_ENUMERATION_ITEM */, downstream_and_upstream /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FlowDirection, _encode_FlowDirection } from "../PCESP/FlowDirection.ta.mjs";
import { ResourceState, _decode_ResourceState, _encode_ResourceState, _enum_for_ResourceState } from "../PCESP/ResourceState.ta.mjs";
// export { ResourceState, _enum_for_ResourceState, ResourceState_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceState_committed /* IMPORTED_LONG_ENUMERATION_ITEM */, committed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceState, _encode_ResourceState } from "../PCESP/ResourceState.ta.mjs";


/**
 * @summary CCChange
 * @description
 *
 * Message alternative carrying a call identifier, a call-content identifier, a
 * flow direction, optional SDP for `subject` and `associate`, and an optional
 * resource state.
 *
 * This edition does not define the event that produces it, how `subject` and
 * `associate` differ, or the meaning of `reserved` and `committed`. See
 * `CCCId`, `SDP`, `FlowDirection`, and `ResourceState`.
 *
 * Annex B says SDP copied to the mediation function includes the encryption
 * keys.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annexes A and B.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCChange ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     cCCId                   [4] EXPLICIT CCCId,
 *     subject                 [5] SDP OPTIONAL,
 *     associate               [6] SDP OPTIONAL,
 *     flowDirection           [7] FlowDirection,
 *     resourceState           [8] ResourceState OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CCChange {
    /**
     * @summary `caseId`.
     * @description
     *
     * Intercept case identifier. This edition does not define how it is
     * assigned. See `CaseId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly caseId: CaseId;
    /**
     * @summary `accessingElementId`.
     * @description
     *
     * Statically configured element number of the reporting element.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly accessingElementId: AccessingElementId;
    /**
     * @summary `eventTime`.
     * @description
     *
     * Time of this message, as `GeneralizedTime`. This edition does not say
     * which instant is recorded. It is a different field from the `UTCTime`
     * timestamp on `TARGETACTIVITYMONITOR` (clause 8.4.2.1.3).
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly eventTime: EventTime;
    /**
     * @summary `callId`.
     * @description
     *
     * Call identifier the Delivery Function builds from the
     * Billing-Correlation-ID in the Event Messages. See `CallId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly callId: CallId;
    /**
     * @summary `cCCId`.
     * @description
     *
     * Call-content identifier. The Delivery Function generates it from the
     * 32-bit CCC-Identifier of the corresponding call-content packet stream.
     * See `CCCId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly cCCId: CCCId;
    /**
     * @summary `subject`.
     * @description
     *
     * SDP for one party to the media. Annex B says SDP copied to the mediation
     * function includes the encryption keys. This edition does not define how
     * this differs from `associate`. See `SDP`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<SDP>;
    /**
     * @summary `associate`.
     * @description
     *
     * SDP for one party to the media. Annex B says SDP copied to the mediation
     * function includes the encryption keys. This edition does not define how
     * this differs from `subject`. See `SDP`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly associate: OPTIONAL<SDP>;
    /**
     * @summary `flowDirection`.
     * @description
     *
     * Downstream, upstream, or both. This edition does not define those
     * directions. See `FlowDirection`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly flowDirection: FlowDirection;
    /**
     * @summary `resourceState`.
     * @description
     *
     * `reserved` or `committed`. Optional. This edition does not define either
     * state. See `ResourceState`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly resourceState: OPTIONAL<ResourceState>;
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
        cCCId: CCCId,
        subject: OPTIONAL<SDP>,
        associate: OPTIONAL<SDP>,
        flowDirection: FlowDirection,
        resourceState?: OPTIONAL<ResourceState>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.cCCId = cCCId;
        this.subject = subject;
        this.associate = associate;
        this.flowDirection = flowDirection;
        this.resourceState = resourceState;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCChange
     * @description
     * 
     * This takes an `object` and converts it to a `CCChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCChange`.
     * @returns {CCChange}
     */
    public static _from_object (_o: { [_K in keyof (CCChange)]: (CCChange)[_K] }): CCChange {
        return new CCChange(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.cCCId, _o.subject, _o.associate, _o.flowDirection, _o.resourceState, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `flowDirection`
         * @public
         * @static
         */

    public static _enum_for_flowDirection = _enum_for_FlowDirection;        /**
         * @summary The enum used as the type of the component `resourceState`
         * @public
         * @static
         */

    public static _enum_for_resourceState = _enum_for_ResourceState;
}

/**
 * @summary The Leading Root Component Types of CCChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCChange: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cCCId", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("associate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("flowDirection", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("resourceState", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of CCChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCChange: $.ASN1Decoder<CCChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCChange (el: _Element): CCChange {
    if (!_cached_decoder_for_CCChange) { _cached_decoder_for_CCChange = function (el: _Element): CCChange {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let cCCId!: CCCId;
    let subject: OPTIONAL<SDP>;
    let associate: OPTIONAL<SDP>;
    let flowDirection!: FlowDirection;
    let resourceState: OPTIONAL<ResourceState>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "cCCId": (_el: _Element): void => { cCCId = $._decode_explicit<CCCId>(() => _decode_CCCId)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<SDP>(() => _decode_SDP)(_el); },
        "associate": (_el: _Element): void => { associate = $._decode_implicit<SDP>(() => _decode_SDP)(_el); },
        "flowDirection": (_el: _Element): void => { flowDirection = $._decode_implicit<FlowDirection>(() => _decode_FlowDirection)(_el); },
        "resourceState": (_el: _Element): void => { resourceState = $._decode_implicit<ResourceState>(() => _decode_ResourceState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCChange,
        _extension_additions_list_spec_for_CCChange,
        _root_component_type_list_2_spec_for_CCChange,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCChange(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        cCCId,
        subject,
        associate,
        flowDirection,
        resourceState,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCChange(el);
}

let _cached_encoder_for_CCChange: $.ASN1Encoder<CCChange> | null = null;

/**
 * @summary Encodes a(n) CCChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCChange, encoded as an ASN.1 Element.
 */
export
function _encode_CCChange (value: CCChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCChange) { _cached_encoder_for_CCChange = function (value: CCChange, elGetter: $.ASN1Encoder<CCChange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_CCCId, $.BER)(value.cCCId, $.BER);
    if (value.subject !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SDP, $.BER)(value.subject, $.BER);
    }
    if (value.associate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SDP, $.BER)(value.associate, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_FlowDirection, $.BER)(value.flowDirection, $.BER);
    if (value.resourceState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ResourceState, $.BER)(value.resourceState, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCChange(value, elGetter);
}


/* eslint-enable */
