/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { VoIPRoamingIndication, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication, _enum_for_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
// export { VoIPRoamingIndication, _enum_for_VoIPRoamingIndication, VoIPRoamingIndication_roamingLBO /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingLBO /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingS8HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingS8HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingN9HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingN9HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";


/**
 * @summary StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * The IRI-POI present in the IMS signalling Function shall generate the xIRI
 * StartOfInterceptionForActiveIMSSession when all of the following conditions
 * are met:
 *
 * - The IRI-POI receives an LI_X1: ActivateTask from the LIPF.
 *
 * - The IRI-POI detects the IMS user identified by one or more of the target
 *   identifier (s) included in the ActivateTask is on an active IMS session.
 *
 * - The-IRI-POI in the IMS signalling Functions meets the criteria mentioned in
 *   TS 33.127 [5] for providing the IRI-POI functions.
 *
 * The generation of the xIRI shall be independent of the IMS media associated
 * with the session. If multiple IMS sessions are active at the start of
 * interception, a StartOfInterceptionForActiveIMSSession record shall be
 * generated for each active session.
 *
 * Table 7.12.7.1-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.12.4.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptionForActiveIMSSession ::= SEQUENCE
 * {
 *     originatingId              [1] SEQUENCE OF IMPU,
 *     terminatingId              [2] IMPU,
 *     sDPState                   [3] SEQUENCE OF OCTET STRING OPTIONAL,
 *     diversionIdentity          [4] IMPU OPTIONAL,
 *     voIPRoamingIndication      [5] VoIPRoamingIndication OPTIONAL,
 *     -- Tag [6] is not used.
 *     location                   [7] Location OPTIONAL,
 *     accessNetworkInformation   [8] SEQUENCE OF SIPAccessNetworkInformation OPTIONAL,
 *     cellularNetworkInformation [9] SEQUENCE OF SIPCellularNetworkInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptionForActiveIMSSession {
    /**
     * @summary `originatingId`.
     * @description
     *
     * Identities of the originator of the session.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly originatingId: IMPU[];
    /**
     * @summary `terminatingId`.
     * @description
     *
     * Identities of the termination of the service.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly terminatingId: IMPU;
    /**
     * @summary `sDPState`.
     * @description
     *
     * Indicates the latest state of session from the IMS signalling Function
     * (including LMISF). Additionally, provides the agreed SDP answer and
     * related modification (encoded in SDP format as per RFC 4566 [43] clause 5
     * when known) for each media stream of the target.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly sDPState: OPTIONAL<OCTET_STRING[]>;
    /**
     * @summary `diversionIdentity`.
     * @description
     *
     * Provided if available and applicable.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly diversionIdentity: OPTIONAL<IMPU>;
    /**
     * @summary `voIPRoamingIndication`.
     * @description
     *
     * Indicates the roaming mode in use by the target for the reported message.
     * Shall be present if the target is in a roaming state. See clause
     * 7.12.4.3.3.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>;
    /**
     * @summary `location`.
     * @description
     *
     * Location with timestamp, if available. Shall include all location
     * information for the target UE available at the NF where the POI is
     * located encoded as a Location.iMSLocation parameter.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `accessNetworkInformation`.
     * @description
     *
     * Provides non-location related access network information. Shall be
     * present if available at the NF where the POI is located. One instance of
     * SIPAccessNetworkInformation shall be used for each
     * P-Access-Network-Information header.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>;
    /**
     * @summary `cellularNetworkInformation`.
     * @description
     *
     * Provides non-location related cellular network information. Shall be
     * present if available at the NF where the POI is located. One instance of
     * SIPCellularNetworkInformation shall be used for each
     * Cellular-Network-Info header.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originatingId: IMPU[],
        terminatingId: IMPU,
        sDPState?: OPTIONAL<OCTET_STRING[]>,
        diversionIdentity?: OPTIONAL<IMPU>,
        voIPRoamingIndication?: OPTIONAL<VoIPRoamingIndication>,
        location?: OPTIONAL<Location>,
        accessNetworkInformation?: OPTIONAL<SIPAccessNetworkInformation[]>,
        cellularNetworkInformation?: OPTIONAL<SIPCellularNetworkInformation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originatingId = originatingId;
        this.terminatingId = terminatingId;
        this.sDPState = sDPState;
        this.diversionIdentity = diversionIdentity;
        this.voIPRoamingIndication = voIPRoamingIndication;
        this.location = location;
        this.accessNetworkInformation = accessNetworkInformation;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a StartOfInterceptionForActiveIMSSession
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptionForActiveIMSSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptionForActiveIMSSession`.
     * @returns {StartOfInterceptionForActiveIMSSession}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptionForActiveIMSSession)]: (StartOfInterceptionForActiveIMSSession)[_K] }): StartOfInterceptionForActiveIMSSession {
        return new StartOfInterceptionForActiveIMSSession(_o.originatingId, _o.terminatingId, _o.sDPState, _o.diversionIdentity, _o.voIPRoamingIndication, _o.location, _o.accessNetworkInformation, _o.cellularNetworkInformation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `voIPRoamingIndication`
         * @public
         * @static
         */

    public static _enum_for_voIPRoamingIndication = _enum_for_VoIPRoamingIndication;
}

/**
 * @summary The Leading Root Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("terminatingId", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sDPState", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("diversionIdentity", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("voIPRoamingIndication", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptionForActiveIMSSession: $.ASN1Decoder<StartOfInterceptionForActiveIMSSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptionForActiveIMSSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptionForActiveIMSSession (el: _Element): StartOfInterceptionForActiveIMSSession {
    if (!_cached_decoder_for_StartOfInterceptionForActiveIMSSession) { _cached_decoder_for_StartOfInterceptionForActiveIMSSession = function (el: _Element): StartOfInterceptionForActiveIMSSession {
    let originatingId!: IMPU[];
    let terminatingId!: IMPU;
    let sDPState: OPTIONAL<OCTET_STRING[]>;
    let diversionIdentity: OPTIONAL<IMPU>;
    let voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>;
    let location: OPTIONAL<Location>;
    let accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>;
    let cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "originatingId": (_el: _Element): void => { originatingId = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el); },
        "terminatingId": (_el: _Element): void => { terminatingId = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "sDPState": (_el: _Element): void => { sDPState = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "diversionIdentity": (_el: _Element): void => { diversionIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "voIPRoamingIndication": (_el: _Element): void => { voIPRoamingIndication = $._decode_implicit<VoIPRoamingIndication>(() => _decode_VoIPRoamingIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation[]>(() => $._decodeSequenceOf<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation[]>(() => $._decodeSequenceOf<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptionForActiveIMSSession,
        _extension_additions_list_spec_for_StartOfInterceptionForActiveIMSSession,
        _root_component_type_list_2_spec_for_StartOfInterceptionForActiveIMSSession,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StartOfInterceptionForActiveIMSSession(
        originatingId,
        terminatingId,
        sDPState,
        diversionIdentity,
        voIPRoamingIndication,
        location,
        accessNetworkInformation,
        cellularNetworkInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StartOfInterceptionForActiveIMSSession(el);
}

let _cached_encoder_for_StartOfInterceptionForActiveIMSSession: $.ASN1Encoder<StartOfInterceptionForActiveIMSSession> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptionForActiveIMSSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptionForActiveIMSSession, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptionForActiveIMSSession (value: StartOfInterceptionForActiveIMSSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptionForActiveIMSSession) { _cached_encoder_for_StartOfInterceptionForActiveIMSSession = function (value: StartOfInterceptionForActiveIMSSession, elGetter: $.ASN1Encoder<StartOfInterceptionForActiveIMSSession>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.originatingId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.terminatingId, $.BER);
    if (value.sDPState !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.sDPState, $.BER);
    }
    if (value.diversionIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_IMPU, $.BER)(value.diversionIdentity, $.BER);
    }
    if (value.voIPRoamingIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_VoIPRoamingIndication, $.BER)(value.voIPRoamingIndication, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.accessNetworkInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SIPAccessNetworkInformation>(() => _encode_SIPAccessNetworkInformation, $.BER), $.BER)(value.accessNetworkInformation, $.BER);
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<SIPCellularNetworkInformation>(() => _encode_SIPCellularNetworkInformation, $.BER), $.BER)(value.cellularNetworkInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptionForActiveIMSSession(value, elGetter);
}


/* eslint-enable */
