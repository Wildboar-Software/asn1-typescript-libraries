/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { SessionDirection, _decode_SessionDirection, _encode_SessionDirection, _enum_for_SessionDirection } from "../TS33128Payloads/SessionDirection.ta.mjs";
// export { SessionDirection, _enum_for_SessionDirection, SessionDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SessionDirection, _encode_SessionDirection } from "../TS33128Payloads/SessionDirection.ta.mjs";
import { VoIPRoamingIndication, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication, _enum_for_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
// export { VoIPRoamingIndication, _enum_for_VoIPRoamingIndication, VoIPRoamingIndication_roamingLBO /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingLBO /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingS8HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingS8HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingN9HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingN9HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
import { NumberTranslation, _decode_NumberTranslation, _encode_NumberTranslation } from "../TS33128Payloads/NumberTranslation.ta.mjs";
// export { NumberTranslation, _decode_NumberTranslation, _encode_NumberTranslation } from "../TS33128Payloads/NumberTranslation.ta.mjs";


/**
 * @summary IMSMessage
 * @description
 * 
 * For an intercepted IMS based communication (see clause 7.12.2.8), the IRI-POI
 * present in the IMS Signalling Function shall generate the xIRI IMSMessage
 * from the SIP message used to handle that IMS based communication. All SIP
 * messages use the same xIRI record as shown in table 7.12.4.2.1-1.
 *
 * NOTE: When an incoming call to a target is redirected to another user, the
 * sessionDirection field shall be set to toTarget. When an incoming call from a
 * target non-local ID to an IMS user is redirected to, the sessionDirection
 * field shall be set to fromTarget.
 *
 * Table 7.12.7.1-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.12.4.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSMessage ::= SEQUENCE
 * {
 *     payload                      [1] IMSPayload,
 *     sessionDirection             [2] SessionDirection,
 *     voIPRoamingIndication        [3] VoIPRoamingIndication OPTIONAL,
 *     -- Tag [4] is not used.
 *     -- Tag [5] is not used.
 *     location                     [6] Location OPTIONAL,
 *     accessNetworkInformation     [7] SEQUENCE OF SIPAccessNetworkInformation OPTIONAL,
 *     cellularNetworkInformation   [8] SEQUENCE OF SIPCellularNetworkInformation OPTIONAL,
 *     numberTranslationInformation [9] SEQUENCE OF NumberTranslation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSMessage {
    /**
     * @summary `payload`.
     * @description
     *
     * Contains the payload of the SIP Message. See clause 7.12.4.3.1.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.1.
     *
     * @public
     * @readonly
     */
    readonly payload: IMSPayload;
    /**
     * @summary `sessionDirection`.
     * @description
     *
     * Indicates the direction of the SIP session. See clause 7.12.4.3.2.(see
     * NOTE). NOTE: When an incoming call to a target is redirected to another
     * user, the sessionDirection field shall be set to toTarget. When an
     * incoming call from a target non-local ID to an IMS user is redirected to,
     * the sessionDirection field shall be set to fromTarget.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.1.
     *
     * @public
     * @readonly
     */
    readonly sessionDirection: SessionDirection;
    /**
     * @summary `voIPRoamingIndication`.
     * @description
     *
     * Indicates the roaming mode in use by the target for the reported message.
     * Shall be present if the target is in a roaming state. See clause
     * 7.12.4.3.3.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.1.
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
     * 3GPP TS 33.128, clause 7.12.4.2.1.
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
     * 3GPP TS 33.128, clause 7.12.4.2.1.
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
     * 3GPP TS 33.128, clause 7.12.4.2.1.
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    /**
     * @summary `numberTranslationInformation`.
     * @description
     *
     * Provides the party address translation information. One instance of
     * NumberTranslation shall be used for each address translation. See clause
     * 7.12.2.4.7.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.1.
     *
     * @public
     * @readonly
     */
    readonly numberTranslationInformation: OPTIONAL<NumberTranslation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        payload: IMSPayload,
        sessionDirection: SessionDirection,
        voIPRoamingIndication?: OPTIONAL<VoIPRoamingIndication>,
        location?: OPTIONAL<Location>,
        accessNetworkInformation?: OPTIONAL<SIPAccessNetworkInformation[]>,
        cellularNetworkInformation?: OPTIONAL<SIPCellularNetworkInformation[]>,
        numberTranslationInformation?: OPTIONAL<NumberTranslation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.payload = payload;
        this.sessionDirection = sessionDirection;
        this.voIPRoamingIndication = voIPRoamingIndication;
        this.location = location;
        this.accessNetworkInformation = accessNetworkInformation;
        this.cellularNetworkInformation = cellularNetworkInformation;
        this.numberTranslationInformation = numberTranslationInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IMSMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSMessage`.
     * @returns {IMSMessage}
     */
    public static _from_object (_o: { [_K in keyof (IMSMessage)]: (IMSMessage)[_K] }): IMSMessage {
        return new IMSMessage(_o.payload, _o.sessionDirection, _o.voIPRoamingIndication, _o.location, _o.accessNetworkInformation, _o.cellularNetworkInformation, _o.numberTranslationInformation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_SessionDirection;        /**
         * @summary The enum used as the type of the component `voIPRoamingIndication`
         * @public
         * @static
         */

    public static _enum_for_voIPRoamingIndication = _enum_for_VoIPRoamingIndication;
}

/**
 * @summary The Leading Root Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("voIPRoamingIndication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("numberTranslationInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSMessage: $.ASN1Decoder<IMSMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSMessage (el: _Element): IMSMessage {
    if (!_cached_decoder_for_IMSMessage) { _cached_decoder_for_IMSMessage = function (el: _Element): IMSMessage {
    let payload!: IMSPayload;
    let sessionDirection!: SessionDirection;
    let voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>;
    let location: OPTIONAL<Location>;
    let accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>;
    let cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    let numberTranslationInformation: OPTIONAL<NumberTranslation[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<SessionDirection>(() => _decode_SessionDirection)(_el); },
        "voIPRoamingIndication": (_el: _Element): void => { voIPRoamingIndication = $._decode_implicit<VoIPRoamingIndication>(() => _decode_VoIPRoamingIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation[]>(() => $._decodeSequenceOf<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation[]>(() => $._decodeSequenceOf<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation))(_el); },
        "numberTranslationInformation": (_el: _Element): void => { numberTranslationInformation = $._decode_implicit<NumberTranslation[]>(() => $._decodeSequenceOf<NumberTranslation>(() => _decode_NumberTranslation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSMessage,
        _extension_additions_list_spec_for_IMSMessage,
        _root_component_type_list_2_spec_for_IMSMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSMessage(
        payload,
        sessionDirection,
        voIPRoamingIndication,
        location,
        accessNetworkInformation,
        cellularNetworkInformation,
        numberTranslationInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSMessage(el);
}

let _cached_encoder_for_IMSMessage: $.ASN1Encoder<IMSMessage> | null = null;

/**
 * @summary Encodes a(n) IMSMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IMSMessage (value: IMSMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSMessage) { _cached_encoder_for_IMSMessage = function (value: IMSMessage, elGetter: $.ASN1Encoder<IMSMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMSPayload, $.BER)(value.payload, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SessionDirection, $.BER)(value.sessionDirection, $.BER);
    if (value.voIPRoamingIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_VoIPRoamingIndication, $.BER)(value.voIPRoamingIndication, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.accessNetworkInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<SIPAccessNetworkInformation>(() => _encode_SIPAccessNetworkInformation, $.BER), $.BER)(value.accessNetworkInformation, $.BER);
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SIPCellularNetworkInformation>(() => _encode_SIPCellularNetworkInformation, $.BER), $.BER)(value.cellularNetworkInformation, $.BER);
    }
    if (value.numberTranslationInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<NumberTranslation>(() => _encode_NumberTranslation, $.BER), $.BER)(value.numberTranslationInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSMessage(value, elGetter);
}


/* eslint-enable */
