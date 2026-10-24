/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
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
import { MultipleParticipantPresenceStatus, _decode_MultipleParticipantPresenceStatus, _encode_MultipleParticipantPresenceStatus } from "../TS33128Payloads/MultipleParticipantPresenceStatus.ta.mjs";
// export { MultipleParticipantPresenceStatus, _decode_MultipleParticipantPresenceStatus, _encode_MultipleParticipantPresenceStatus } from "../TS33128Payloads/MultipleParticipantPresenceStatus.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary PTCSessionStart
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCSessionStart record when the IRI-POI present in the PTC server detects
 * that the PTC Session is initiated and communication begins for both an
 * on-demand and pre-established PTC session. The PTCSessionStart record shall
 * also be reported when a chat group is the PTC target. Accordingly, the
 * IRI-POI in the PTC server generates the xIRI when the following events are
 * detected:
 *
 * - when the PTC server sends a SIP 200 OK to the PTC target in response to a
 *   SIP INVITE from the PTC target for an on-demand PTC session where the PTC
 *   target originates the PTC session.
 *
 * - when the PTC server receives a SIP 200 OK from the PTC target in response
 *   to a SIP INVITE for an on-demand PTC session where the PTC target receives
 *   an invitation to join a PTC session.
 *
 * - when the PTC server receives a SIP 200 OK from the participant PTC server
 *   in response to a SIP INVITE previously sent to that participating PTC
 *   server for PTC sessions initiated by the PTC target with a pre-established
 *   PTC session (PTC server sends a TBCP Connect to the PTC target with a
 *   pre-established session).
 *
 * - when the PTC server sends a SIP 200 OK to the participant PTC server in
 *   response to a SIP INVITE previously received from that participating PTC
 *   server for PTC sessions terminated to the PTC target with a pre-established
 *   PTC session (PTC server sends a TBCP Connect to the PTC target with a
 *   pre-established session).
 *
 * - when the PTC server hosting a PTC chat group session, where PTC chat group
 *   is the PTC target, sends a SIP 200 OK in response to a SIP INVITE
 *   previously received from the participant PTC server to initiate a PTC chat
 *   group session.
 *
 * 3GPP TS 33.128, clause 7.5.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionStart ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCServerURI                  [3] UTF8String,
 *     pTCSessionInfo                [4] PTCSessionInfo,
 *     pTCOriginatingID              [5] PTCTargetInformation,
 *     pTCParticipants               [6] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCParticipantPresenceStatus  [7] MultipleParticipantPresenceStatus OPTIONAL,
 *     location                      [8] Location OPTIONAL,
 *     pTCHost                       [9] PTCTargetInformation OPTIONAL,
 *     pTCBearerCapability           [10] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionStart {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN and PTCChatGroupID shall be provided for
     * PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
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
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCDirection: Direction;
    /**
     * @summary `pTCServerURI`.
     * @description
     *
     * Shall include the identity of the PTC server serving the PTC target.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCServerURI: UTF8String;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     *
     * Shall provide PTC session information such as PTC Session URI and PTC
     * Session type (e.g. on-demand, pre-established, ad-hoc, pre-arranged,
     * group session).
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: PTCSessionInfo;
    /**
     * @summary `pTCOriginatingID`.
     * @description
     *
     * Shall identify the originating party.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCOriginatingID: PTCTargetInformation;
    /**
     * @summary `pTCParticipants`.
     * @description
     *
     * Shall identify the individual PTC participants of the communication
     * session, when known.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    /**
     * @summary `pTCParticipantPresenceStatus`.
     * @description
     *
     * Shall provide the Participant Presence Status, which is a list of:
     *
     * - PresenceID: Identity of PTC client(s) or PTC group, when known.
     *
     * - PresenceType: Identifies type of ID [PTC client(s) or PTC group].
     *
     * - PresenceStatus: Presence state of each ID. True indicates PTC client is
     *   available, while false indicates PTC client is unavailable. Report when
     *   the Presence functionality is supported by the PTC server and the PTC
     *   server assumes the role of the watcher on behalf of the PTC target.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCParticipantPresenceStatus: OPTIONAL<MultipleParticipantPresenceStatus>;
    /**
     * @summary `location`.
     * @description
     *
     * Shall include the PTC target’s location when reporting of the PTC
     * target’s location information is authorized and available.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `pTCHost`.
     * @description
     *
     * Shall identify the PTC participant who has the authority to initiate and
     * administrate a PTC Session, if known.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCHost: OPTIONAL<PTCTargetInformation>;
    /**
     * @summary `pTCBearerCapability`.
     * @description
     *
     * Shall provide the media characteristics information elements of the PTC
     * session, encoded in SDP format as per RFC 4566 [43] clause 5 when known.
     *
     * 3GPP TS 33.128, clause 7.5.2.4.
     *
     * @public
     * @readonly
     */
    readonly pTCBearerCapability: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCDirection: Direction,
        pTCServerURI: UTF8String,
        pTCSessionInfo: PTCSessionInfo,
        pTCOriginatingID: PTCTargetInformation,
        pTCParticipants?: OPTIONAL<PTCTargetInformation[]>,
        pTCParticipantPresenceStatus?: OPTIONAL<MultipleParticipantPresenceStatus>,
        location?: OPTIONAL<Location>,
        pTCHost?: OPTIONAL<PTCTargetInformation>,
        pTCBearerCapability?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCDirection = pTCDirection;
        this.pTCServerURI = pTCServerURI;
        this.pTCSessionInfo = pTCSessionInfo;
        this.pTCOriginatingID = pTCOriginatingID;
        this.pTCParticipants = pTCParticipants;
        this.pTCParticipantPresenceStatus = pTCParticipantPresenceStatus;
        this.location = location;
        this.pTCHost = pTCHost;
        this.pTCBearerCapability = pTCBearerCapability;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCSessionStart
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionStart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionStart`.
     * @returns {PTCSessionStart}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionStart)]: (PTCSessionStart)[_K] }): PTCSessionStart {
        return new PTCSessionStart(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCServerURI, _o.pTCSessionInfo, _o.pTCOriginatingID, _o.pTCParticipants, _o.pTCParticipantPresenceStatus, _o.location, _o.pTCHost, _o.pTCBearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCSessionStart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionStart: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCOriginatingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCParticipantPresenceStatus", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCHost", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pTCBearerCapability", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionStart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionStart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionStart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionStart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionStart: $.ASN1Decoder<PTCSessionStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionStart (el: _Element): PTCSessionStart {
    if (!_cached_decoder_for_PTCSessionStart) { _cached_decoder_for_PTCSessionStart = function (el: _Element): PTCSessionStart {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCServerURI!: UTF8String;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCOriginatingID!: PTCTargetInformation;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let pTCParticipantPresenceStatus: OPTIONAL<MultipleParticipantPresenceStatus>;
    let location: OPTIONAL<Location>;
    let pTCHost: OPTIONAL<PTCTargetInformation>;
    let pTCBearerCapability: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCServerURI": (_el: _Element): void => { pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCOriginatingID": (_el: _Element): void => { pTCOriginatingID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCParticipantPresenceStatus": (_el: _Element): void => { pTCParticipantPresenceStatus = $._decode_implicit<MultipleParticipantPresenceStatus>(() => _decode_MultipleParticipantPresenceStatus)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCSessionStart,
        _extension_additions_list_spec_for_PTCSessionStart,
        _root_component_type_list_2_spec_for_PTCSessionStart,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCSessionStart(
        pTCTargetInformation,
        pTCDirection,
        pTCServerURI,
        pTCSessionInfo,
        pTCOriginatingID,
        pTCParticipants,
        pTCParticipantPresenceStatus,
        location,
        pTCHost,
        pTCBearerCapability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCSessionStart(el);
}

let _cached_encoder_for_PTCSessionStart: $.ASN1Encoder<PTCSessionStart> | null = null;

/**
 * @summary Encodes a(n) PTCSessionStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionStart, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionStart (value: PTCSessionStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionStart) { _cached_encoder_for_PTCSessionStart = function (value: PTCSessionStart, elGetter: $.ASN1Encoder<PTCSessionStart>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCTargetInformation, $.BER)(value.pTCOriginatingID, $.BER);
    if (value.pTCParticipants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER);
    }
    if (value.pTCParticipantPresenceStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MultipleParticipantPresenceStatus, $.BER)(value.pTCParticipantPresenceStatus, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.pTCHost !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER);
    }
    if (value.pTCBearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCSessionStart(value, elGetter);
}


/* eslint-enable */
