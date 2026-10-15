/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMSParty, _decode_SMSParty, _encode_SMSParty } from "../TS33128Payloads/SMSParty.ta.mjs";
// export { SMSParty, _decode_SMSParty, _encode_SMSParty } from "../TS33128Payloads/SMSParty.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { SMSTransferStatus, _decode_SMSTransferStatus, _encode_SMSTransferStatus, _enum_for_SMSTransferStatus } from "../TS33128Payloads/SMSTransferStatus.ta.mjs";
// export { SMSTransferStatus, _enum_for_SMSTransferStatus, SMSTransferStatus_transferSucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, transferSucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_transferFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, transferFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSTransferStatus, _encode_SMSTransferStatus } from "../TS33128Payloads/SMSTransferStatus.ta.mjs";
import { SMSOtherMessageIndication, _decode_SMSOtherMessageIndication, _encode_SMSOtherMessageIndication } from "../TS33128Payloads/SMSOtherMessageIndication.ta.mjs";
// export { SMSOtherMessageIndication, _decode_SMSOtherMessageIndication, _encode_SMSOtherMessageIndication } from "../TS33128Payloads/SMSOtherMessageIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SMSNFAddress, _decode_SMSNFAddress, _encode_SMSNFAddress } from "../TS33128Payloads/SMSNFAddress.ta.mjs";
// export { SMSNFAddress, _decode_SMSNFAddress, _encode_SMSNFAddress } from "../TS33128Payloads/SMSNFAddress.ta.mjs";
import { SMSNFType, _decode_SMSNFType, _encode_SMSNFType, _enum_for_SMSNFType } from "../TS33128Payloads/SMSNFType.ta.mjs";
// export { SMSNFType, _enum_for_SMSNFType, SMSNFType_sMSGMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSGMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_iWMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, iWMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_sMSRouter /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSRouter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSNFType, _encode_SMSNFType } from "../TS33128Payloads/SMSNFType.ta.mjs";
import { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { SMSMessageType, _decode_SMSMessageType, _encode_SMSMessageType, _enum_for_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
// export { SMSMessageType, _enum_for_SMSMessageType, SMSMessageType_deliver /* IMPORTED_LONG_ENUMERATION_ITEM */, deliver /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_statusReport /* IMPORTED_LONG_ENUMERATION_ITEM */, statusReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_command /* IMPORTED_LONG_ENUMERATION_ITEM */, command /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submit /* IMPORTED_LONG_ENUMERATION_ITEM */, submit /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSMessageType, _encode_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
import { SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";
// export { SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";


/**
 * @summary SMSMessage
 * @description
 * 
 * The IRI-POI in the SMSF shall generate an xIRI containing an SMSMessage
 * record for the following cases:
 *
 * SMS-MO case:
 *
 * - When a target UE originates an SMS message or when any UE originates an SMS
 *   message destined to a target non-local ID.
 *
 * SMS-MT case:
 *
 * - When an SMS message delivery to a target UE is attempted or when an SMS
 *   message delivery originated from a target non-local ID is attempted to any
 *   UE.
 *
 * - When an SMS message is successfully delivered to a target UE or when an SMS
 *   message originated from a target non-local ID is successfully delivered to
 *   any UE.
 *
 * The SMS-MT case can also apply to the scenario when a receipt of SMS delivery
 * from the far end is delivered successfully to the target UE or when a receipt
 * of SMS delivery from a target non-Local ID is successfully delivered to the
 * originating UE.
 *
 * The IRI-POI present in the SMSF shall generate the xIRI containing the
 * SMSMessage record when it detects following events:
 *
 * - The SMSF receives an SMCP message CP-DATA_RP-DATA [SMS-SUBMIT, SMS-COMMAND]
 *   (via AMF in Nsmsf_SMService_UplinkSMS message) from a target UE.
 *
 * - The SMSF receives an SMCP message CP-DATA_RP-DATA [SMS-SUBMIT] (via AMF in
 *   Nsmsf_SMService_UplinkSMS message) from any UE with TP-DA field within the
 *   SMS-SUBMIT containing a target non-Local ID and SMSF returns the SMCP:
 *   CP-ACK to that originating UE.
 *
 * - The SMSF receives an SMCP message CP-DATA_RP-DATA [SMS-COMMAND] (via AMF in
 *   Nsmsf_SMService_UplinkSMS message) from any UE with TP-DA field within the
 *   SMS-COMMAND containing a target non-Local ID and SMSF returns the SMCP:
 *   CP-ACK to that originating UE.
 *
 * - The SMSF receives a TCAP message MAP MT-FORWARD-SHORT-MESSAGE Request
 *   [SMS-DELIVER, SMS-STATUS-REPORT] destined to a target UE.
 *
 * - The SMSF receives a TCAP message MAP MT-FORWARD-SHORT-MESSAGE Request
 *   [SMS-DELIVER] destined to any UE with the TP-OA field within the
 *   SMS-DELIVER containing a target non-Local ID.
 *
 * - The SMSF receives a TCAP message MAP MT-FORWARD-SHORT-MESSAGE Request
 *   [SMS-STATUS-REPORT] destined to any UE with the TP-RA field within the
 *   SMS-STATUS-REPORT containing a target non-Local ID.
 *
 * The IRI-POI present in the SMSF shall generate the xIRI containing the
 * SMSReport record when it detects following events:
 *
 * - The SMSF sends a SMCP message CP-DATA_RP-ACK [SMS-SUBMIT-REPORT] (via AMF
 *   in Namf_ Communication_N1N2MessageTransfer message) in response to a
 *   previously intercepted CP-DATA_RP-DATA.
 *
 * - The SMSF sends a SMCP message CP-DATA_RP-ERROR [SMS-SUBMIT-REPORT] (via AMF
 *   in Namf_ Communication_N1N2MessageTransfer message) in response to a
 *   previously intercepted CP-DATA_RP-DATA.
 *
 * - The SMSF sends a TCAP message MAP MT-FORWARD-SHORT-MESSAGE Response
 *   [SMS-DELIVER-REPORT] in response to a previously intercepted MAP
 *   MT-FORWARD-SHORT-MESSAGE Request.
 *
 * - NOTE 1: In the above-mentioned descriptions, the requirements of target
 *   Non-Local ID do not apply when both originating and terminating users of an
 *   SMS message are served by the same CSP. The method used to identify a
 *   target non-Local ID is different from the method used to identify a local
 *   target ID.
 *
 * If the IRI-POI is provisioned with the TruncateTPUserData parameter included
 * and the IRI-POI is generating xIRI for the SMS-SUBMIT type (TS 23.040 [18]
 * clause 9.2.2.2) or SMS-DELIVER type (TS 23.040 [18] clause 9.2.2.1) TPDUs,
 * the IRI-POI shall use the sMSTPDUData.redactedSMSTPDU choice (as described in
 * table 6.2.5.3-3), otherwise, the IRI-POI shall use the sMSTPDUData.sMSTPDU
 * choice.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSMessage ::= SEQUENCE
 * {
 *     originatingSMSParty         [1] SMSParty,
 *     terminatingSMSParty         [2] SMSParty,
 *     direction                   [3] Direction,
 *     linkTransferStatus          [4] SMSTransferStatus,
 *     otherMessage                [5] SMSOtherMessageIndication OPTIONAL,
 *     location                    [6] Location OPTIONAL,
 *     peerNFAddress               [7] SMSNFAddress OPTIONAL,
 *     peerNFType                  [8] SMSNFType OPTIONAL,
 *     sMSTPDUData                 [9] SMSTPDUData OPTIONAL,
 *     messageType                 [10] SMSMessageType OPTIONAL,
 *     rPMessageReference          [11] SMSRPMessageReference OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMSMessage {
    /**
     * @summary `originatingSMSParty`.
     * @description
     *
     * Identity of the originating SMS party. See NOTE 2.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly originatingSMSParty: SMSParty;
    /**
     * @summary `terminatingSMSParty`.
     * @description
     *
     * Identity of the terminating SMS party. See NOTE 3.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly terminatingSMSParty: SMSParty;
    /**
     * @summary `direction`.
     * @description
     *
     * Direction of the SMS with respect to the target. See NOTE 4.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly direction: Direction;
    /**
     * @summary `linkTransferStatus`.
     * @description
     *
     * Indicates whether the SMSF sent the TPDU to the next network element. See
     * NOTE 5.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly linkTransferStatus: SMSTransferStatus;
    /**
     * @summary `otherMessage`.
     * @description
     *
     * In the event of a server-initiated transfer, indicates whether the server
     * will send another SMS. May be omitted if the transfer is
     * target-initiated. See NOTE 6.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly otherMessage: OPTIONAL<SMSOtherMessageIndication>;
    /**
     * @summary `location`.
     * @description
     *
     * Location information associated with the target sending or receiving the
     * SMS, if available and authorised. See NOTE 7. Shall be encoded using the
     * Location.locationInfo.userLocation parameter. If available, other
     * parameters reportable via Location shall be included.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `peerNFAddress`.
     * @description
     *
     * Address of the other network function (SMS-GMSC/IWMSC/SMS-Router)
     * involved in the communication of the SMS, if available.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly peerNFAddress: OPTIONAL<SMSNFAddress>;
    /**
     * @summary `peerNFType`.
     * @description
     *
     * Type of the other network function (SMS-GMSC/IWMSC/SMS-Router) involved
     * in the communication of the SMS, if available.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly peerNFType: OPTIONAL<SMSNFType>;
    /**
     * @summary `sMSTPDUData`.
     * @description
     *
     * See table 6.2.5.3-3. Shall be provided. This parameter is conditional
     * only for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly sMSTPDUData: OPTIONAL<SMSTPDUData>;
    /**
     * @summary `messageType`.
     * @description
     *
     * See table 6.2.5.3-4. Shall be provided. This parameter is conditional
     * only for backwards compatibility.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly messageType: OPTIONAL<SMSMessageType>;
    /**
     * @summary `rPMessageReference`.
     * @description
     *
     * The SM-RL Message Reference of the message per TS 24.011 [46] clause 7.3.
     * Shall be provided. This parameter is conditional only for backwards
     * compatibility.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly rPMessageReference: OPTIONAL<SMSRPMessageReference>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originatingSMSParty: SMSParty,
        terminatingSMSParty: SMSParty,
        direction: Direction,
        linkTransferStatus: SMSTransferStatus,
        otherMessage: OPTIONAL<SMSOtherMessageIndication>,
        location: OPTIONAL<Location>,
        peerNFAddress: OPTIONAL<SMSNFAddress>,
        peerNFType: OPTIONAL<SMSNFType>,
        sMSTPDUData: OPTIONAL<SMSTPDUData>,
        messageType: OPTIONAL<SMSMessageType>,
        rPMessageReference: OPTIONAL<SMSRPMessageReference>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originatingSMSParty = originatingSMSParty;
        this.terminatingSMSParty = terminatingSMSParty;
        this.direction = direction;
        this.linkTransferStatus = linkTransferStatus;
        this.otherMessage = otherMessage;
        this.location = location;
        this.peerNFAddress = peerNFAddress;
        this.peerNFType = peerNFType;
        this.sMSTPDUData = sMSTPDUData;
        this.messageType = messageType;
        this.rPMessageReference = rPMessageReference;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMSMessage
     * @description
     * 
     * This takes an `object` and converts it to a `SMSMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMSMessage`.
     * @returns {SMSMessage}
     */
    public static _from_object (_o: { [_K in keyof (SMSMessage)]: (SMSMessage)[_K] }): SMSMessage {
        return new SMSMessage(_o.originatingSMSParty, _o.terminatingSMSParty, _o.direction, _o.linkTransferStatus, _o.otherMessage, _o.location, _o.peerNFAddress, _o.peerNFType, _o.sMSTPDUData, _o.messageType, _o.rPMessageReference, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `linkTransferStatus`
         * @public
         * @static
         */

    public static _enum_for_linkTransferStatus = _enum_for_SMSTransferStatus;        /**
         * @summary The enum used as the type of the component `peerNFType`
         * @public
         * @static
         */

    public static _enum_for_peerNFType = _enum_for_SMSNFType;        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_SMSMessageType;
}

/**
 * @summary The Leading Root Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMSMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingSMSParty", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("terminatingSMSParty", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("linkTransferStatus", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("otherMessage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("peerNFAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("peerNFType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sMSTPDUData", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("rPMessageReference", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMSMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMSMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMSMessage: $.ASN1Decoder<SMSMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSMessage (el: _Element): SMSMessage {
    if (!_cached_decoder_for_SMSMessage) { _cached_decoder_for_SMSMessage = function (el: _Element): SMSMessage {
    let originatingSMSParty!: SMSParty;
    let terminatingSMSParty!: SMSParty;
    let direction!: Direction;
    let linkTransferStatus!: SMSTransferStatus;
    let otherMessage: OPTIONAL<SMSOtherMessageIndication>;
    let location: OPTIONAL<Location>;
    let peerNFAddress: OPTIONAL<SMSNFAddress>;
    let peerNFType: OPTIONAL<SMSNFType>;
    let sMSTPDUData: OPTIONAL<SMSTPDUData>;
    let messageType: OPTIONAL<SMSMessageType>;
    let rPMessageReference: OPTIONAL<SMSRPMessageReference>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "originatingSMSParty": (_el: _Element): void => { originatingSMSParty = $._decode_implicit<SMSParty>(() => _decode_SMSParty)(_el); },
        "terminatingSMSParty": (_el: _Element): void => { terminatingSMSParty = $._decode_implicit<SMSParty>(() => _decode_SMSParty)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "linkTransferStatus": (_el: _Element): void => { linkTransferStatus = $._decode_implicit<SMSTransferStatus>(() => _decode_SMSTransferStatus)(_el); },
        "otherMessage": (_el: _Element): void => { otherMessage = $._decode_implicit<SMSOtherMessageIndication>(() => _decode_SMSOtherMessageIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "peerNFAddress": (_el: _Element): void => { peerNFAddress = $._decode_explicit<SMSNFAddress>(() => _decode_SMSNFAddress)(_el); },
        "peerNFType": (_el: _Element): void => { peerNFType = $._decode_implicit<SMSNFType>(() => _decode_SMSNFType)(_el); },
        "sMSTPDUData": (_el: _Element): void => { sMSTPDUData = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "messageType": (_el: _Element): void => { messageType = $._decode_implicit<SMSMessageType>(() => _decode_SMSMessageType)(_el); },
        "rPMessageReference": (_el: _Element): void => { rPMessageReference = $._decode_implicit<SMSRPMessageReference>(() => _decode_SMSRPMessageReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMSMessage,
        _extension_additions_list_spec_for_SMSMessage,
        _root_component_type_list_2_spec_for_SMSMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMSMessage(
        originatingSMSParty,
        terminatingSMSParty,
        direction,
        linkTransferStatus,
        otherMessage,
        location,
        peerNFAddress,
        peerNFType,
        sMSTPDUData,
        messageType,
        rPMessageReference,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMSMessage(el);
}

let _cached_encoder_for_SMSMessage: $.ASN1Encoder<SMSMessage> | null = null;

/**
 * @summary Encodes a(n) SMSMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSMessage, encoded as an ASN.1 Element.
 */
export
function _encode_SMSMessage (value: SMSMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSMessage) { _cached_encoder_for_SMSMessage = function (value: SMSMessage, elGetter: $.ASN1Encoder<SMSMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMSParty, $.BER)(value.originatingSMSParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMSParty, $.BER)(value.terminatingSMSParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMSTransferStatus, $.BER)(value.linkTransferStatus, $.BER);
    if (value.otherMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMSOtherMessageIndication, $.BER)(value.otherMessage, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.peerNFAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_SMSNFAddress, $.BER)(value.peerNFAddress, $.BER);
    }
    if (value.peerNFType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SMSNFType, $.BER)(value.peerNFType, $.BER);
    }
    if (value.sMSTPDUData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_SMSTPDUData, $.BER)(value.sMSTPDUData, $.BER);
    }
    if (value.messageType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_SMSMessageType, $.BER)(value.messageType, $.BER);
    }
    if (value.rPMessageReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_SMSRPMessageReference, $.BER)(value.rPMessageReference, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMSMessage(value, elGetter);
}


/* eslint-enable */
