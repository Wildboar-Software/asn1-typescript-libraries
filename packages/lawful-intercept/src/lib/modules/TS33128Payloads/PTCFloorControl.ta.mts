/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
import { PTCFloorActivity, _decode_PTCFloorActivity, _encode_PTCFloorActivity } from "../TS33128Payloads/PTCFloorActivity.ta.mjs";
// export { PTCFloorActivity, _enum_for_PTCFloorActivity, PTCFloorActivity_tBCPRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPDeny /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPDeny /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPIdle /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPIdle /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPTaken /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPTaken /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRevoke /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRevoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPQueued /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPQueued /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCFloorActivity_tBCPRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, tBCPRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCFloorActivity, _encode_PTCFloorActivity } from "../TS33128Payloads/PTCFloorActivity.ta.mjs";
import { PTCTBPriorityLevel, _decode_PTCTBPriorityLevel, _encode_PTCTBPriorityLevel, _enum_for_PTCTBPriorityLevel } from "../TS33128Payloads/PTCTBPriorityLevel.ta.mjs";
// export { PTCTBPriorityLevel, _enum_for_PTCTBPriorityLevel, PTCTBPriorityLevel_preEmptive /* IMPORTED_LONG_ENUMERATION_ITEM */, preEmptive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_highPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, highPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_normalPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, normalPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBPriorityLevel_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_PTCTBPriorityLevel, _encode_PTCTBPriorityLevel } from "../TS33128Payloads/PTCTBPriorityLevel.ta.mjs";
import { PTCTBReasonCode, _decode_PTCTBReasonCode, _encode_PTCTBReasonCode, _enum_for_PTCTBReasonCode } from "../TS33128Payloads/PTCTBReasonCode.ta.mjs";
// export { PTCTBReasonCode, _enum_for_PTCTBReasonCode, PTCTBReasonCode_noQueuingAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueuingAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_oneParticipantSession /* IMPORTED_LONG_ENUMERATION_ITEM */, oneParticipantSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_listenOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, PTCTBReasonCode_exceededMaxDuration /* IMPORTED_LONG_ENUMERATION_ITEM */, exceededMaxDuration /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCTBReasonCode_tBPrevented /* IMPORTED_LONG_ENUMERATION_ITEM */, tBPrevented /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCTBReasonCode, _encode_PTCTBReasonCode } from "../TS33128Payloads/PTCTBReasonCode.ta.mjs";


/**
 * @summary PTCFloorControl
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCFloorControl record when the IRI-POI present in the PTC server detects
 * when the PTC target requests floor control (i.e. send media), when floor
 * control is granted to PTC target, when floor control request from the PTC
 * target is rejected/released, when the floor becomes open (e.g. idle), when
 * the floor control request from the PTC target is queued, when the floor
 * control request from the PTC target is dequeued, or when the floor control
 * request is revoked. In addition, when the PTC chat group is the PTC target,
 * the IRI-POI present in the PTC server hosting the PTC chat group shall
 * generate an xIRI containing a PTCFloorControl record when the IRI-POI present
 * in the PTC server detects any of the previously mentioned scenarios for all
 * PTC participants participating in the PTC chat group session. Accordingly,
 * the IRI-POI in the PTC server generates the xIRI when the following events
 * are detected:
 *
 * - when the PTC server receives a TBCP Talk Burst Request from the PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, receives a TBCP Talk Burst Request from a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Granted to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Granted to a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Taken to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Taken to a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Deny to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Deny to a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Release to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Release to a PTC participant.
 *
 * - when the PTC server receives a TBCP Talk Burst Idle from a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, receives a TBCP Talk Burst Idle from a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Request Queue Status Response
 *   to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Request Queue Status Response to a
 *   PTC participant.
 *
 * - when the PTC server receives a TBCP Talk Burst Cancel from a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, receives a TBCP Talk Burst Cancel from a PTC participant.
 *
 * - when the PTC server sends a TBCP Talk Burst Revoke to a PTC target.
 *
 * - when the PTC server hosting the PTC chat group, where the PTC chat group is
 *   the PTC target, sends a TBCP Talk Burst Revoke to a PTC participant.
 *
 * 3GPP TS 33.128, clause 7.5.2.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorControl ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessioninfo                [3] PTCSessionInfo,
 *     pTCFloorActivity              [4] SEQUENCE OF PTCFloorActivity,
 *     pTCFloorSpeakerID             [5] PTCTargetInformation OPTIONAL,
 *     pTCMaxTBTime                  [6] INTEGER OPTIONAL,
 *     pTCQueuedFloorControl         [7] BOOLEAN OPTIONAL,
 *     pTCQueuedPosition             [8] INTEGER OPTIONAL,
 *     pTCTalkBurstPriority          [9] PTCTBPriorityLevel OPTIONAL,
 *     pTCTalkBurstReason            [10] PTCTBReasonCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCFloorControl {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN and PTCChatGroupID shall be provided for
     * PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCDirection`.
     * @description
     *
     * Indicates the direction of the session relative to the target: "toTarget"
     * or "fromTarget".
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCDirection: Direction;
    /**
     * @summary `pTCSessioninfo`.
     * @description
     *
     * Shall provide PTC session information such as PTC Session URI and PTC
     * Session type (e.g. on-demand, pre-established, ad-hoc, pre-arranged,
     * group session).
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCSessioninfo: PTCSessionInfo;
    /**
     * @summary `pTCFloorActivity`.
     * @description
     *
     * Sequence of: a) "TBCP_Request": Received by the PTC server to request
     * permission for the PTC target or PTC participant to send a talk burst. b)
     * "TBCP_Granted": Used by the PTC server to notify the PTC target or PTC
     * participant that it has been granted permission to send a talk burst. c)
     * "TBCP_Deny": Used by the PTC server to notify a PTC target or PTC
     * participant that it has been denied permission to send a talk burst. d)
     * "TBCP_Idle": Used by the PTC server to notify the PTC target or PTC
     * participant that no one has the permission to send a Talk Burst at the
     * moment and that it may accept the TBCP talk burst request message. e)
     * "TBCP_Taken": Used by the PTC server to notify the PTC target or PTC
     * participant that another PTC participant has been given permission to
     * send a talk burst. f) "TBCP_Revoke": Used by the PTC server to revoke the
     * media resource from the PTC target or PTC participant and can be used for
     * pre-emption functionality but is also used by the system to prevent
     * overly long use of the media resource. g) "TBCP_Queued": Indicates the
     * request to talk is queued, if queued floor control is supported. Include
     * identification of the PTC target or PTC participant that has the queued
     * talk burst, if known. h) "TBCP_Release": Indicates the request to talk
     * has completed.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCFloorActivity: PTCFloorActivity[];
    /**
     * @summary `pTCFloorSpeakerID`.
     * @description
     *
     * Include identification of the PTC participant that has initiated the talk
     * burst, if known.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCFloorSpeakerID: OPTIONAL<PTCTargetInformation>;
    /**
     * @summary `pTCMaxTBTime`.
     * @description
     *
     * Include the maximum duration value for the talk burst before the
     * permission is revoked. This parameter is defined in seconds. Provide when
     * known.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCMaxTBTime: OPTIONAL<INTEGER>;
    /**
     * @summary `pTCQueuedFloorControl`.
     * @description
     *
     * Indicates if queuing is supported by the PTC server and the PTC target's
     * device.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCQueuedFloorControl: OPTIONAL<BOOLEAN>;
    /**
     * @summary `pTCQueuedPosition`.
     * @description
     *
     * Include if queue position in the TBCP is detected by the IRI-POI.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCQueuedPosition: OPTIONAL<INTEGER>;
    /**
     * @summary `pTCTalkBurstPriority`.
     * @description
     *
     * If more than one level of priority is supported, indicates the talk burst
     * priority level of the PTC target.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCTalkBurstPriority: OPTIONAL<PTCTBPriorityLevel>;
    /**
     * @summary `pTCTalkBurstReason`.
     * @description
     *
     * The reason for the denial or revoke of a Talk Burst. Provide when known.
     *
     * 3GPP TS 33.128, clause 7.5.2.14.
     *
     * @public
     * @readonly
     */
    readonly pTCTalkBurstReason: OPTIONAL<PTCTBReasonCode>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCDirection: Direction,
        pTCSessioninfo: PTCSessionInfo,
        pTCFloorActivity: PTCFloorActivity[],
        pTCFloorSpeakerID?: OPTIONAL<PTCTargetInformation>,
        pTCMaxTBTime?: OPTIONAL<INTEGER>,
        pTCQueuedFloorControl?: OPTIONAL<BOOLEAN>,
        pTCQueuedPosition?: OPTIONAL<INTEGER>,
        pTCTalkBurstPriority?: OPTIONAL<PTCTBPriorityLevel>,
        pTCTalkBurstReason?: OPTIONAL<PTCTBReasonCode>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCDirection = pTCDirection;
        this.pTCSessioninfo = pTCSessioninfo;
        this.pTCFloorActivity = pTCFloorActivity;
        this.pTCFloorSpeakerID = pTCFloorSpeakerID;
        this.pTCMaxTBTime = pTCMaxTBTime;
        this.pTCQueuedFloorControl = pTCQueuedFloorControl;
        this.pTCQueuedPosition = pTCQueuedPosition;
        this.pTCTalkBurstPriority = pTCTalkBurstPriority;
        this.pTCTalkBurstReason = pTCTalkBurstReason;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCFloorControl
     * @description
     * 
     * This takes an `object` and converts it to a `PTCFloorControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCFloorControl`.
     * @returns {PTCFloorControl}
     */
    public static _from_object (_o: { [_K in keyof (PTCFloorControl)]: (PTCFloorControl)[_K] }): PTCFloorControl {
        return new PTCFloorControl(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessioninfo, _o.pTCFloorActivity, _o.pTCFloorSpeakerID, _o.pTCMaxTBTime, _o.pTCQueuedFloorControl, _o.pTCQueuedPosition, _o.pTCTalkBurstPriority, _o.pTCTalkBurstReason, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection: typeof _enum_for_Direction = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCTalkBurstPriority`
         * @public
         * @static
         */

    public static _enum_for_pTCTalkBurstPriority: typeof _enum_for_PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;        /**
         * @summary The enum used as the type of the component `pTCTalkBurstReason`
         * @public
         * @static
         */

    public static _enum_for_pTCTalkBurstReason: typeof _enum_for_PTCTBReasonCode = _enum_for_PTCTBReasonCode;
}

/**
 * @summary The Leading Root Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessioninfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCFloorActivity", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCFloorSpeakerID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCMaxTBTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCQueuedFloorControl", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pTCQueuedPosition", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCTalkBurstPriority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pTCTalkBurstReason", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCFloorControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCFloorControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCFloorControl: $.ASN1Decoder<PTCFloorControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCFloorControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCFloorControl (el: _Element): PTCFloorControl {
    if (!_cached_decoder_for_PTCFloorControl) { _cached_decoder_for_PTCFloorControl = function (el: _Element): PTCFloorControl {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessioninfo!: PTCSessionInfo;
    let pTCFloorActivity!: PTCFloorActivity[];
    let pTCFloorSpeakerID: OPTIONAL<PTCTargetInformation>;
    let pTCMaxTBTime: OPTIONAL<INTEGER>;
    let pTCQueuedFloorControl: OPTIONAL<BOOLEAN>;
    let pTCQueuedPosition: OPTIONAL<INTEGER>;
    let pTCTalkBurstPriority: OPTIONAL<PTCTBPriorityLevel>;
    let pTCTalkBurstReason: OPTIONAL<PTCTBReasonCode>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessioninfo": (_el: _Element): void => { pTCSessioninfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCFloorActivity": (_el: _Element): void => { pTCFloorActivity = $._decode_implicit<PTCFloorActivity[]>(() => $._decodeSequenceOf<PTCFloorActivity>(() => _decode_PTCFloorActivity))(_el); },
        "pTCFloorSpeakerID": (_el: _Element): void => { pTCFloorSpeakerID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCMaxTBTime": (_el: _Element): void => { pTCMaxTBTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pTCQueuedFloorControl": (_el: _Element): void => { pTCQueuedFloorControl = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCQueuedPosition": (_el: _Element): void => { pTCQueuedPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pTCTalkBurstPriority": (_el: _Element): void => { pTCTalkBurstPriority = $._decode_implicit<PTCTBPriorityLevel>(() => _decode_PTCTBPriorityLevel)(_el); },
        "pTCTalkBurstReason": (_el: _Element): void => { pTCTalkBurstReason = $._decode_implicit<PTCTBReasonCode>(() => _decode_PTCTBReasonCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCFloorControl,
        _extension_additions_list_spec_for_PTCFloorControl,
        _root_component_type_list_2_spec_for_PTCFloorControl,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCFloorControl(
        pTCTargetInformation,
        pTCDirection,
        pTCSessioninfo,
        pTCFloorActivity,
        pTCFloorSpeakerID,
        pTCMaxTBTime,
        pTCQueuedFloorControl,
        pTCQueuedPosition,
        pTCTalkBurstPriority,
        pTCTalkBurstReason,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCFloorControl(el);
}

let _cached_encoder_for_PTCFloorControl: $.ASN1Encoder<PTCFloorControl> | null = null;

/**
 * @summary Encodes a(n) PTCFloorControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCFloorControl, encoded as an ASN.1 Element.
 */
export
function _encode_PTCFloorControl (value: PTCFloorControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCFloorControl) { _cached_encoder_for_PTCFloorControl = function (value: PTCFloorControl, elGetter: $.ASN1Encoder<PTCFloorControl>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessioninfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<PTCFloorActivity>(() => _encode_PTCFloorActivity, $.BER), $.BER)(value.pTCFloorActivity, $.BER);
    if (value.pTCFloorSpeakerID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCTargetInformation, $.BER)(value.pTCFloorSpeakerID, $.BER);
    }
    if (value.pTCMaxTBTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.pTCMaxTBTime, $.BER);
    }
    if (value.pTCQueuedFloorControl !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.pTCQueuedFloorControl, $.BER);
    }
    if (value.pTCQueuedPosition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.pTCQueuedPosition, $.BER);
    }
    if (value.pTCTalkBurstPriority !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PTCTBPriorityLevel, $.BER)(value.pTCTalkBurstPriority, $.BER);
    }
    if (value.pTCTalkBurstReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_PTCTBReasonCode, $.BER)(value.pTCTalkBurstReason, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCFloorControl(value, elGetter);
}


/* eslint-enable */
