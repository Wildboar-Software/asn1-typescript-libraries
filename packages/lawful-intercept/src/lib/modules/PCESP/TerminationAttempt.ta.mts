/* eslint-disable */
import {
    NULL,
    OPTIONAL,
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
import { RedirectedFromInfo, _decode_RedirectedFromInfo, _encode_RedirectedFromInfo } from "../PCESP/RedirectedFromInfo.ta.mjs";
// export { RedirectedFromInfo, _decode_RedirectedFromInfo, _encode_RedirectedFromInfo } from "../PCESP/RedirectedFromInfo.ta.mjs";


/**
 * @summary TerminationAttempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationAttempt ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     calling                 [4] PartyId OPTIONAL,
 *     called                  [5] PartyId OPTIONAL,
 *     reserved0               [6] NULL, -- Reserved
 *     redirectedFromInfo      [7] RedirectedFromInfo OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class TerminationAttempt {
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
     * @summary `calling`.
     * @public
     * @readonly
     */
    readonly calling: OPTIONAL<PartyId>;
    /**
     * @summary `called`.
     * @public
     * @readonly
     */
    readonly called: OPTIONAL<PartyId>;
    /**
     * @summary `reserved0`.
     * @public
     * @readonly
     */
    readonly reserved0: NULL;
    /**
     * @summary `redirectedFromInfo`.
     * @public
     * @readonly
     */
    readonly redirectedFromInfo: OPTIONAL<RedirectedFromInfo>;
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
        calling: OPTIONAL<PartyId>,
        called: OPTIONAL<PartyId>,
        reserved0: NULL,
        redirectedFromInfo: OPTIONAL<RedirectedFromInfo>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.calling = calling;
        this.called = called;
        this.reserved0 = reserved0;
        this.redirectedFromInfo = redirectedFromInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TerminationAttempt
     * @description
     * 
     * This takes an `object` and converts it to a `TerminationAttempt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminationAttempt`.
     * @returns {TerminationAttempt}
     */
    public static _from_object (_o: { [_K in keyof (TerminationAttempt)]: (TerminationAttempt)[_K] }): TerminationAttempt {
        return new TerminationAttempt(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.calling, _o.called, _o.reserved0, _o.redirectedFromInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TerminationAttempt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminationAttempt: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calling", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("called", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reserved0", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectedFromInfo", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of TerminationAttempt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminationAttempt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminationAttempt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminationAttempt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminationAttempt: $.ASN1Decoder<TerminationAttempt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationAttempt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationAttempt (el: _Element): TerminationAttempt {
    if (!_cached_decoder_for_TerminationAttempt) { _cached_decoder_for_TerminationAttempt = function (el: _Element): TerminationAttempt {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let calling: OPTIONAL<PartyId>;
    let called: OPTIONAL<PartyId>;
    let reserved0!: NULL;
    let redirectedFromInfo: OPTIONAL<RedirectedFromInfo>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "calling": (_el: _Element): void => { calling = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "called": (_el: _Element): void => { called = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "reserved0": (_el: _Element): void => { reserved0 = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "redirectedFromInfo": (_el: _Element): void => { redirectedFromInfo = $._decode_implicit<RedirectedFromInfo>(() => _decode_RedirectedFromInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminationAttempt,
        _extension_additions_list_spec_for_TerminationAttempt,
        _root_component_type_list_2_spec_for_TerminationAttempt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TerminationAttempt(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        calling,
        called,
        reserved0,
        redirectedFromInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TerminationAttempt(el);
}

let _cached_encoder_for_TerminationAttempt: $.ASN1Encoder<TerminationAttempt> | null = null;

/**
 * @summary Encodes a(n) TerminationAttempt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationAttempt, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationAttempt (value: TerminationAttempt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationAttempt) { _cached_encoder_for_TerminationAttempt = function (value: TerminationAttempt, elGetter: $.ASN1Encoder<TerminationAttempt>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (value.calling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_PartyId, $.BER)(value.calling, $.BER);
    }
    if (value.called !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PartyId, $.BER)(value.called, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.reserved0, $.BER);
    if (value.redirectedFromInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RedirectedFromInfo, $.BER)(value.redirectedFromInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TerminationAttempt(value, elGetter);
}


/* eslint-enable */
