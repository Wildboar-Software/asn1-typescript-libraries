/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
// export { CaseId, _decode_CaseId, _encode_CaseId } from "../PCESP/CaseId.ta.mjs";
import { type AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
// export { AccessingElementId, _decode_AccessingElementId, _encode_AccessingElementId } from "../PCESP/AccessingElementId.ta.mjs";
import { type EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../PCESP/EventTime.ta.mjs";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
import { ConferencePartyChange_communicating_Item, _decode_ConferencePartyChange_communicating_Item, _encode_ConferencePartyChange_communicating_Item } from "../PCESP/ConferencePartyChange-communicating-Item.ta.mjs";
// export { ConferencePartyChange_communicating_Item, _decode_ConferencePartyChange_communicating_Item, _encode_ConferencePartyChange_communicating_Item } from "../PCESP/ConferencePartyChange-communicating-Item.ta.mjs";
import { ConferencePartyChange_removed_Item, _decode_ConferencePartyChange_removed_Item, _encode_ConferencePartyChange_removed_Item } from "../PCESP/ConferencePartyChange-removed-Item.ta.mjs";
// export { ConferencePartyChange_removed_Item, _decode_ConferencePartyChange_removed_Item, _encode_ConferencePartyChange_removed_Item } from "../PCESP/ConferencePartyChange-removed-Item.ta.mjs";
import { ConferencePartyChange_joined_Item, _decode_ConferencePartyChange_joined_Item, _encode_ConferencePartyChange_joined_Item } from "../PCESP/ConferencePartyChange-joined-Item.ta.mjs";
// export { ConferencePartyChange_joined_Item, _decode_ConferencePartyChange_joined_Item, _encode_ConferencePartyChange_joined_Item } from "../PCESP/ConferencePartyChange-joined-Item.ta.mjs";


/**
 * @summary ConferencePartyChange
 * @description
 *
 * Reports a change in who is on a communication.
 *
 * `communicating` identifies parties participating. `removed` identifies
 * parties removed, for example by a hold service. `joined` identifies parties
 * newly added to an existing communication.
 *
 * Each entry may carry party identities and, when the content of the resulting
 * call is delivered, the CCC identifier of that content. All three lists are
 * optional. This edition does not say whether more than one list is present in
 * the same message.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferencePartyChange ::= SEQUENCE {
 *     caseId                  [0] CaseId,
 *     accessingElementId      [1] AccessingElementId,
 *     eventTime               [2] EventTime,
 *     callId                  [3] CallId,
 *     communicating           [4] SEQUENCE OF SEQUENCE {
 *         -- include to identify parties participating in the
 *         -- communication.
 *         partyId     [0] SEQUENCE OF PartyId OPTIONAL,
 *         -- identifies communicating party identities.
 *         cCCId       [1] EXPLICIT CCCId OPTIONAL,
 *         -- included when the content of the resulting call is
 *         -- delivered to identify the associated CCC(s).
 *         ...
 *     } OPTIONAL,
 *     removed                 [5] SEQUENCE OF SEQUENCE {
 *         -- include to identify parties removed (e.g., hold
 *         -- service) from the communication.
 *         partyId     [0] SEQUENCE OF PartyId OPTIONAL,
 *         -- identifies removed party identity(ies).
 *         cCCId       [1] EXPLICIT CCCId OPTIONAL,
 *         -- included when the content of the resulting call is
 *         -- delivered to identify the associated CCC(s).
 *         ...
 *     } OPTIONAL,
 *     joined                  [6] SEQUENCE OF SEQUENCE{
 *         -- include to identify parties newly added to the
 *         -- communication.
 *         partyId     [0] SEQUENCE OF PartyId OPTIONAL,
 *         -- identifies newly added party identity(ies) to an existing
 *         -- communication.
 *         cCCId       [1] EXPLICIT CCCId OPTIONAL,
 *         -- included when the content of the resulting call is
 *         -- delivered to identify the associated CCC(s).
 *         ...
 *     } OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ConferencePartyChange {
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
     * @summary `communicating`.
     * @description
     *
     * Parties participating in the communication. Optional. Each entry's
     * `partyId` identifies those parties. Its `cCCId` is included when the
     * content of the resulting call is delivered.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly communicating: OPTIONAL<ConferencePartyChange_communicating_Item[]>;
    /**
     * @summary `removed`.
     * @description
     *
     * Parties removed from the communication, for example by a hold service.
     * Optional. Each entry's `partyId` identifies the removed parties. Its
     * `cCCId` is included when the content of the resulting call is delivered.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly removed: OPTIONAL<ConferencePartyChange_removed_Item[]>;
    /**
     * @summary `joined`.
     * @description
     *
     * Parties newly added to an existing communication. Optional. Each entry's
     * `partyId` identifies the added parties. Its `cCCId` is included when the
     * content of the resulting call is delivered.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly joined: OPTIONAL<ConferencePartyChange_joined_Item[]>;
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
        communicating?: OPTIONAL<ConferencePartyChange_communicating_Item[]>,
        removed?: OPTIONAL<ConferencePartyChange_removed_Item[]>,
        joined?: OPTIONAL<ConferencePartyChange_joined_Item[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.caseId = caseId;
        this.accessingElementId = accessingElementId;
        this.eventTime = eventTime;
        this.callId = callId;
        this.communicating = communicating;
        this.removed = removed;
        this.joined = joined;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConferencePartyChange
     * @description
     * 
     * This takes an `object` and converts it to a `ConferencePartyChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferencePartyChange`.
     * @returns {ConferencePartyChange}
     */
    public static _from_object (_o: { [_K in keyof (ConferencePartyChange)]: (ConferencePartyChange)[_K] }): ConferencePartyChange {
        return new ConferencePartyChange(_o.caseId, _o.accessingElementId, _o.eventTime, _o.callId, _o.communicating, _o.removed, _o.joined, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConferencePartyChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferencePartyChange: $.ComponentSpec[] = [
    new $.ComponentSpec("caseId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessingElementId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("communicating", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("removed", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("joined", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ConferencePartyChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferencePartyChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferencePartyChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferencePartyChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferencePartyChange: $.ASN1Decoder<ConferencePartyChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferencePartyChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferencePartyChange (el: _Element): ConferencePartyChange {
    if (!_cached_decoder_for_ConferencePartyChange) { _cached_decoder_for_ConferencePartyChange = function (el: _Element): ConferencePartyChange {
    let caseId!: CaseId;
    let accessingElementId!: AccessingElementId;
    let eventTime!: EventTime;
    let callId!: CallId;
    let communicating: OPTIONAL<ConferencePartyChange_communicating_Item[]>;
    let removed: OPTIONAL<ConferencePartyChange_removed_Item[]>;
    let joined: OPTIONAL<ConferencePartyChange_joined_Item[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "caseId": (_el: _Element): void => { caseId = $._decode_implicit<CaseId>(() => _decode_CaseId)(_el); },
        "accessingElementId": (_el: _Element): void => { accessingElementId = $._decode_implicit<AccessingElementId>(() => _decode_AccessingElementId)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<EventTime>(() => _decode_EventTime)(_el); },
        "callId": (_el: _Element): void => { callId = $._decode_implicit<CallId>(() => _decode_CallId)(_el); },
        "communicating": (_el: _Element): void => { communicating = $._decode_implicit<ConferencePartyChange_communicating_Item[]>(() => $._decodeSequenceOf<ConferencePartyChange_communicating_Item>(() => _decode_ConferencePartyChange_communicating_Item))(_el); },
        "removed": (_el: _Element): void => { removed = $._decode_implicit<ConferencePartyChange_removed_Item[]>(() => $._decodeSequenceOf<ConferencePartyChange_removed_Item>(() => _decode_ConferencePartyChange_removed_Item))(_el); },
        "joined": (_el: _Element): void => { joined = $._decode_implicit<ConferencePartyChange_joined_Item[]>(() => $._decodeSequenceOf<ConferencePartyChange_joined_Item>(() => _decode_ConferencePartyChange_joined_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferencePartyChange,
        _extension_additions_list_spec_for_ConferencePartyChange,
        _root_component_type_list_2_spec_for_ConferencePartyChange,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConferencePartyChange(
        caseId,
        accessingElementId,
        eventTime,
        callId,
        communicating,
        removed,
        joined,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConferencePartyChange(el);
}

let _cached_encoder_for_ConferencePartyChange: $.ASN1Encoder<ConferencePartyChange> | null = null;

/**
 * @summary Encodes a(n) ConferencePartyChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferencePartyChange, encoded as an ASN.1 Element.
 */
export
function _encode_ConferencePartyChange (value: ConferencePartyChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferencePartyChange) { _cached_encoder_for_ConferencePartyChange = function (value: ConferencePartyChange, elGetter: $.ASN1Encoder<ConferencePartyChange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CaseId, $.BER)(value.caseId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessingElementId, $.BER)(value.accessingElementId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EventTime, $.BER)(value.eventTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallId, $.BER)(value.callId, $.BER);
    if (value.communicating !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ConferencePartyChange_communicating_Item>(() => _encode_ConferencePartyChange_communicating_Item, $.BER), $.BER)(value.communicating, $.BER);
    }
    if (value.removed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ConferencePartyChange_removed_Item>(() => _encode_ConferencePartyChange_removed_Item, $.BER), $.BER)(value.removed, $.BER);
    }
    if (value.joined !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ConferencePartyChange_joined_Item>(() => _encode_ConferencePartyChange_joined_Item, $.BER), $.BER)(value.joined, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConferencePartyChange(value, elGetter);
}


/* eslint-enable */
