/* eslint-disable */
import {
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
import { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";
// export { SDP, _decode_SDP, _encode_SDP } from "../PCESP/SDP.ta.mjs";


/**
 * @summary MediaReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaReport ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     subject                 [4] SDP OPTIONAL,
 *     associate               [5] SDP OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MediaReport {
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
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: OPTIONAL<SDP>;
    /**
     * @summary `associate`.
     * @public
     * @readonly
     */
    readonly associate: OPTIONAL<SDP>;
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
        subject: OPTIONAL<SDP>,
        associate: OPTIONAL<SDP>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.subject = subject;
        this.associate = associate;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MediaReport
     * @description
     * 
     * This takes an `object` and converts it to a `MediaReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaReport`.
     * @returns {MediaReport}
     */
    public static _from_object (_o: { [_K in keyof (MediaReport)]: (MediaReport)[_K] }): MediaReport {
        return new MediaReport(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.subject, _o.associate, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MediaReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaReport: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subject", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("associate", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MediaReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaReport: $.ASN1Decoder<MediaReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaReport (el: _Element): MediaReport {
    if (!_cached_decoder_for_MediaReport) { _cached_decoder_for_MediaReport = function (el: _Element): MediaReport {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let subject: OPTIONAL<SDP>;
    let associate: OPTIONAL<SDP>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "subject": (_el: _Element): void => { subject = $._decode_implicit<SDP>(() => _decode_SDP)(_el); },
        "associate": (_el: _Element): void => { associate = $._decode_implicit<SDP>(() => _decode_SDP)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaReport,
        _extension_additions_list_spec_for_MediaReport,
        _root_component_type_list_2_spec_for_MediaReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MediaReport(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        subject,
        associate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MediaReport(el);
}

let _cached_encoder_for_MediaReport: $.ASN1Encoder<MediaReport> | null = null;

/**
 * @summary Encodes a(n) MediaReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaReport, encoded as an ASN.1 Element.
 */
export
function _encode_MediaReport (value: MediaReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaReport) { _cached_encoder_for_MediaReport = function (value: MediaReport, elGetter: $.ASN1Encoder<MediaReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (value.subject !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SDP, $.BER)(value.subject, $.BER);
    }
    if (value.associate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SDP, $.BER)(value.associate, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MediaReport(value, elGetter);
}


/* eslint-enable */
