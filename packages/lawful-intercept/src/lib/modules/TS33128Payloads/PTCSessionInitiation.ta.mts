/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
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
 * @summary PTCSessionInitiation
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCSessionInitiation record when the IRI-POI present in the PTC server
 * detects that the PTC target initiates an on-demand session or the target
 * receives an invitation to join an on-demand session regardless of the success
 * or the final disposition of the invitation. The PTCSessionInitiation record
 * shall also be reported when a chat group is the PTC target. Accordingly, the
 * IRI-POI in the PTC server generates the xIRI when the following events are
 * detected:
 *
 * - when the PTC server receives a SIP INVITE from a PTC target.
 *
 * - when the PTC Server sends a SIP INVITE to the PTC target.
 *
 * - when the PTC Server hosting a PTC chat group session, where the PTC chat
 *   group is the target, receives a SIP INVITE from a participating PTC server
 *   to initiate a PTC chat group session.
 *
 * 3GPP TS 33.128, clause 7.5.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionInitiation ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCServerURI                  [3] UTF8String,
 *     pTCSessionInfo                [4] PTCSessionInfo,
 *     pTCOriginatingID              [5] PTCTargetInformation,
 *     pTCParticipants               [6] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCParticipantPresenceStatus  [7] MultipleParticipantPresenceStatus OPTIONAL,
 *     location                      [8] Location OPTIONAL,
 *     pTCBearerCapability           [9] UTF8String OPTIONAL,
 *     pTCHost                       [10] PTCTargetInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionInitiation {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN and PTCChatGroupID shall be provided for
     * PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * session, if known.
     *
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     *   server assumes the role of the watcher on behalf of the PTC target or
     *   in the case of a target PTC chat group, when the PTC server assumes the
     *   role of the watcher on behalf of any member of the chat group.
     *
     * 3GPP TS 33.128, clause 7.5.2.2.
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
     * 3GPP TS 33.128, clause 7.5.2.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `pTCBearerCapability`.
     * @description
     *
     * Shall provide when known the media characteristics information elements
     * of the PTC session, encoded in SDP format as per RFC 4566 [43] clause 5.
     *
     * 3GPP TS 33.128, clause 7.5.2.2.
     *
     * @public
     * @readonly
     */
    readonly pTCBearerCapability: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCHost`.
     * @description
     *
     * Shall identify the PTC participant who has the authority to initiate and
     * administrate a PTC session, if known.
     *
     * 3GPP TS 33.128, clause 7.5.2.2.
     *
     * @public
     * @readonly
     */
    readonly pTCHost: OPTIONAL<PTCTargetInformation>;
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
        pTCBearerCapability?: OPTIONAL<UTF8String>,
        pTCHost?: OPTIONAL<PTCTargetInformation>,
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
        this.pTCBearerCapability = pTCBearerCapability;
        this.pTCHost = pTCHost;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCSessionInitiation
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionInitiation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionInitiation`.
     * @returns {PTCSessionInitiation}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionInitiation)]: (PTCSessionInitiation)[_K] }): PTCSessionInitiation {
        return new PTCSessionInitiation(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCServerURI, _o.pTCSessionInfo, _o.pTCOriginatingID, _o.pTCParticipants, _o.pTCParticipantPresenceStatus, _o.location, _o.pTCBearerCapability, _o.pTCHost, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCOriginatingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCParticipantPresenceStatus", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCBearerCapability", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pTCHost", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionInitiation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionInitiation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionInitiation: $.ASN1Decoder<PTCSessionInitiation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionInitiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionInitiation (el: _Element): PTCSessionInitiation {
    if (!_cached_decoder_for_PTCSessionInitiation) { _cached_decoder_for_PTCSessionInitiation = function (el: _Element): PTCSessionInitiation {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCServerURI!: UTF8String;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCOriginatingID!: PTCTargetInformation;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let pTCParticipantPresenceStatus: OPTIONAL<MultipleParticipantPresenceStatus>;
    let location: OPTIONAL<Location>;
    let pTCBearerCapability: OPTIONAL<UTF8String>;
    let pTCHost: OPTIONAL<PTCTargetInformation>;
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
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCSessionInitiation,
        _extension_additions_list_spec_for_PTCSessionInitiation,
        _root_component_type_list_2_spec_for_PTCSessionInitiation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCSessionInitiation(
        pTCTargetInformation,
        pTCDirection,
        pTCServerURI,
        pTCSessionInfo,
        pTCOriginatingID,
        pTCParticipants,
        pTCParticipantPresenceStatus,
        location,
        pTCBearerCapability,
        pTCHost,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCSessionInitiation(el);
}

let _cached_encoder_for_PTCSessionInitiation: $.ASN1Encoder<PTCSessionInitiation> | null = null;

/**
 * @summary Encodes a(n) PTCSessionInitiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionInitiation, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionInitiation (value: PTCSessionInitiation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionInitiation) { _cached_encoder_for_PTCSessionInitiation = function (value: PTCSessionInitiation, elGetter: $.ASN1Encoder<PTCSessionInitiation>): _Element {
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
    if (value.pTCBearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER);
    }
    if (value.pTCHost !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCSessionInitiation(value, elGetter);
}


/* eslint-enable */
