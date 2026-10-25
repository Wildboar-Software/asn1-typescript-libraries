/* eslint-disable */
import {
    type GraphicString,
    type INTEGER,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../POCChargingDataTypes/RecordType.ta.mjs";
import { type NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../POCChargingDataTypes/NodeAddress.ta.mjs";
import { type InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../POCChargingDataTypes/InvolvedParty.ta.mjs";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../POCChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
import { CauseForRecordClosing, _decode_CauseForRecordClosing, _encode_CauseForRecordClosing, _enum_for_CauseForRecordClosing } from "../POCChargingDataTypes/CauseForRecordClosing.ta.mjs";
import { Incomplete_CDR_Indication, _decode_Incomplete_CDR_Indication, _encode_Incomplete_CDR_Indication } from "../POCChargingDataTypes/Incomplete-CDR-Indication.ta.mjs";
import { List_Of_SDP_Media_Components, _decode_List_Of_SDP_Media_Components, _encode_List_Of_SDP_Media_Components } from "../POCChargingDataTypes/List-Of-SDP-Media-Components.ta.mjs";
import { List_Of_Message_Bodies, _decode_List_Of_Message_Bodies, _encode_List_Of_Message_Bodies } from "../POCChargingDataTypes/List-Of-Message-Bodies.ta.mjs";
import { POCInformation, _decode_POCInformation, _encode_POCInformation } from "../POCChargingDataTypes/POCInformation.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../POCChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary PPFRecord
 * @description
 *
 * Participating PoC function CDR (PPF-CDR). The participating
 * function enforces policy on incoming sessions and relays talk
 * burst control between the PoC Client and the controlling
 * function. It may also relay the RTP media. It sends the
 * charging reports for that participant.
 *
 * The first PPF-CDR sequence is opened for each participant at
 * session establishment. Instant personal alert, PoC group
 * advertisement, and pre-established (early) session set-up are
 * reported by the participating server. An unsuccessful alert or
 * advertisement is not charged.
 *
 * A session CDR opens on Charging Data Request [start]. [interim]
 * (a media change, a change of user location, a usage threshold,
 * or expiry of Accounting-Interim-Interval) updates it or closes
 * a partial CDR. [stop] closes it. Each session-unrelated
 * procedure produces one CDR from one [event].
 *
 * PoC Information on this record is the session type and the
 * participant's accumulated sent and received talk bursts.
 *
 * Field categories are those of TS 32.240 clause 5.4, applied
 * by clause 6.1.3.1.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.1, 5.1.2, 5.2.1,
 * 5.2.2.1, 5.2.3, 6.1.3.2, and 6.1.3.3.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PPFRecord ::= SET {
 *    recordType                      [0] IMPLICIT RecordType,
 *    retransmission                  [1] IMPLICIT NULL OPTIONAL,
 *    sIP-Method                      [2] IMPLICIT GraphicString OPTIONAL,
 *    nodeAddress                     [3] NodeAddress OPTIONAL,
 *    session-Id                      [4] IMPLICIT GraphicString OPTIONAL,
 *    calling-Party-Address           [5] InvolvedParty OPTIONAL,
 *    called-Party-Address            [6] InvolvedParty OPTIONAL,
 *    servedParty                     [7] IMPLICIT GraphicString OPTIONAL,
 *    serviceRequestTimeStamp         [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryStartTimeStamp   [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    serviceDeliveryEndTimeStamp     [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordOpeningTime               [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime               [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    interOperatorIdentifiers        [13] IMPLICIT InterOperatorIdentifiers OPTIONAL,
 *    localRecordSequenceNumber       [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordSequenceNumber            [15] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecordClosing           [16] IMPLICIT CauseForRecordClosing OPTIONAL,
 *    incomplete-CDR-Indication       [17] IMPLICIT Incomplete-CDR-Indication OPTIONAL,
 *    iMS-Charging-Identifier         [18] IMPLICIT OCTET STRING OPTIONAL,
 *    list-Of-SDP-Media-Components    [19] IMPLICIT SEQUENCE  OF
 *       List-Of-SDP-Media-Components OPTIONAL,
 *    gGSNaddress                     [20] NodeAddress OPTIONAL,
 *    serviceReasonReturnCode         [21] IMPLICIT UTF8String OPTIONAL,
 *    list-Of-Message-Bodies          [22] IMPLICIT SEQUENCE  OF
 *       List-Of-Message-Bodies OPTIONAL,
 *    userLocationInfo                [23] IMPLICIT OCTET STRING OPTIONAL,
 *    poCInformation                  [24] IMPLICIT POCInformation OPTIONAL,
 *    recordExtensions                [25] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    serviceContextID                [26] IMPLICIT UTF8String OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PPFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. Identifies the PoC service record. Set this to
     * `RecordType_pPFRecord` (80).
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * Category OC. Present when information from retransmitted
     * Diameter Charging Data Requests was used in this CDR.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `sIP_Method`.
     * @description
     *
     * Category OC. SIP method for which this CDR was generated.
     * Present only for a session-unrelated procedure. Corresponds
     * to Event-Type.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly sIP_Method: OPTIONAL<GraphicString>;
    /**
     * @summary `nodeAddress`.
     * @description
     *
     * Category OM. Address of the node that supplied this CDR: the
     * IP address or the FQDN of the IMS node that generated the
     * accounting data. Corresponds to Origin-Host.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly nodeAddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `session_Id`.
     * @description
     *
     * Category OM. Session identification. For a SIP session this
     * is the SIP Call-ID defined in RFC 3261. Corresponds to
     * User-Session-ID. This is the SIP dialogue, not the
     * end-to-end PoC session identity in `POCInformation`.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly session_Id: OPTIONAL<GraphicString>;
    /**
     * @summary `calling_Party_Address`.
     * @description
     *
     * Category OM. Public User ID of the party that requested the
     * service or initiated the session. Either a SIP URI
     * (RFC 3261) or a TEL URI (RFC 3966). Corresponds to
     * Calling-Party-Address.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly calling_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `called_Party_Address`.
     * @description
     *
     * Category OM. Public User ID to which this end-to-end SIP
     * transaction is posted. Corresponds to Called-Party-Address.
     *
     * The same name inside `POCParticipant` is the address of one
     * invited or attached participant (Public User ID, SIP URL,
     * E.164, and so on), which is a different field.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.3.1 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly called_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `servedParty`.
     * @description
     *
     * Category OM in PoC Information, and offline charging only.
     * Identity of the party this charging information relates to.
     * The CDR ASN.1 places it on the record rather than inside
     * `POCInformation`. PoC session initiation type is used only
     * for this party.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly servedParty: OPTIONAL<GraphicString>;
    /**
     * @summary `serviceRequestTimeStamp`.
     * @description
     *
     * Category OM. Time at which the service was requested.
     * Corresponds to SIP-Request-Timestamp in Charging Data
     * Request [start].
     *
     * The interim SIP request time is a different field, on
     * `List_Of_SDP_Media_Components`.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryStartTimeStamp`.
     * @description
     *
     * Category OM. Time of successful session set-up, a delivery
     * unrelated service, an unsuccessful session set-up, or an
     * unsuccessful session unrelated request. Corresponds to
     * SIP-Response-Timestamp in Charging Data Request [start].
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceDeliveryEndTimeStamp`.
     * @description
     *
     * Category OC. Time at which service delivery ended. Present
     * only for a SIP-session-related CDR. Corresponds to
     * SIP-Request-Timestamp in Charging Data Request [stop].
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * Category OC. Time at which the CDF opened this record.
     * Present only for a SIP-session-related CDR.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @description
     *
     * Category OM. Time at which the CDF closed this record.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `interOperatorIdentifiers`.
     * @description
     *
     * Category OC. Home-network identification, originating and
     * terminating, when it was exchanged in SIP signalling, as
     * recorded in Inter-Operator-Identifier. The grouped value
     * carries Originating-IOI and Terminating-IOI.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @description
     *
     * Category OM. Unique record number created by this node. The
     * CDF allocates it sequentially for every partial or whole
     * CDR, across CDR types. It is unique within the CDF.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * Category OC. Running sequence number that links the partial
     * records the CDF generated for one session.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForRecordClosing`.
     * @description
     *
     * Category OM. Reason the CDF released this CDR. See
     * `CauseForRecordClosing`. Partial records follow Charging
     * Data Request [interim]; the final session CDR follows [stop].
     *
     * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.2.1 and 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    /**
     * @summary `incomplete_CDR_Indication`.
     * @description
     *
     * Category OC. Extra diagnostics when the CDF detects missing
     * Charging Data Requests.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @description
     *
     * Category OM. IMS charging identifier (ICID) generated by the
     * IMS node for the SIP session. Corresponds to
     * IMS-Charging-Identifier (ICID).
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `list_Of_SDP_Media_Components`.
     * @description
     *
     * Category OC. One entry per media component. Present only on
     * a SIP-session-related CDR, and it may be repeated. Each
     * entry holds the interim SIP request and response times, the
     * SDP media lines, who initiated the media action, and the
     * session-level SDP. See `List_Of_SDP_Media_Components`.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly list_Of_SDP_Media_Components: OPTIONAL<List_Of_SDP_Media_Components[]>;
    /**
     * @summary `gGSNaddress`.
     * @description
     *
     * Category OC. Control-plane IP address of the GGSN that
     * handles one or more media components of the IMS session.
     * Corresponds to the P-Charging-Vector header. In Service
     * Information this is PS Information, used as defined in
     * TS 32.251.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.3.1 and 6.3.1.1.
     *
     * @public
     * @readonly
     */
    readonly gGSNaddress: OPTIONAL<NodeAddress>;
    /**
     * @summary `serviceReasonReturnCode`.
     * @description
     *
     * Category is not stated under this name. TS 32.298 defines
     * this as the returned cause code of the service request,
     * both success and failure, corresponding to the Cause-Code
     * AVP.
     *
     * The PPF-CDR table instead lists a Service Delivery Failure
     * Reason: the SIP error code taken from the SIP method, and
     * omitted when delivery succeeds. TS 32.272 does not say
     * whether that table row is this field.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.57.
     *
     * @public
     * @readonly
     */
    readonly serviceReasonReturnCode: OPTIONAL<UTF8String>;
    /**
     * @summary `list_Of_Message_Bodies`.
     * @description
     *
     * Category OC. Data conveyed end-to-end in a SIP message body.
     * Repeated when several bodies were exchanged. Each body has
     * a content type (for example `application/zip`, `image/gif`,
     * `audio/mpeg`), a content disposition (`session`, `render`,
     * `inline`, `icon`, `alert`, `attachment`, and so on), a
     * content length in bytes, and an originator taken from
     * P-Asserted-Identity. `render` means the body part should be
     * displayed or otherwise rendered to the user.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly list_Of_Message_Bodies: OPTIONAL<List_Of_Message_Bodies[]>;
    /**
     * @summary `userLocationInfo`.
     * @description
     *
     * Category OC. Location of the user, to the level that was
     * made available to the PoC Server. Omit this when no
     * location information is available.
     *
     * Coded as the 3GPP-User-Location-Info RADIUS VSA defined in
     * TS 29.061. In Service Information it is PS Information,
     * used as defined in TS 32.251.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.3.1 and 6.3.1.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.13.
     *
     * @public
     * @readonly
     */
    readonly userLocationInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `poCInformation`.
     * @description
     *
     * Category OC. PoC-specific parameters for this participant:
     * the session type and the accumulated sent and received talk
     * bursts. See `POCInformation`.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.3.1 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly poCInformation: OPTIONAL<POCInformation>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category OC. Operator or manufacturer extensions to the
     * record. Present when such an extension exists.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Category OM. Context information the CDR belongs to. This
     * is the Service-Context-Id from Diameter accounting, when
     * that accounting was used and the field was included. It
     * identifies the service, subsystem or domain, and the
     * release. The contents are described in TS 32.299.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;

    constructor (
        recordType: RecordType,
        retransmission?: OPTIONAL<NULL>,
        sIP_Method?: OPTIONAL<GraphicString>,
        nodeAddress?: OPTIONAL<NodeAddress>,
        session_Id?: OPTIONAL<GraphicString>,
        calling_Party_Address?: OPTIONAL<InvolvedParty>,
        called_Party_Address?: OPTIONAL<InvolvedParty>,
        servedParty?: OPTIONAL<GraphicString>,
        serviceRequestTimeStamp?: OPTIONAL<OCTET_STRING>,
        serviceDeliveryStartTimeStamp?: OPTIONAL<OCTET_STRING>,
        serviceDeliveryEndTimeStamp?: OPTIONAL<OCTET_STRING>,
        recordOpeningTime?: OPTIONAL<OCTET_STRING>,
        recordClosureTime?: OPTIONAL<OCTET_STRING>,
        interOperatorIdentifiers?: OPTIONAL<InterOperatorIdentifiers>,
        localRecordSequenceNumber?: OPTIONAL<INTEGER>,
        recordSequenceNumber?: OPTIONAL<INTEGER>,
        causeForRecordClosing?: OPTIONAL<CauseForRecordClosing>,
        incomplete_CDR_Indication?: OPTIONAL<Incomplete_CDR_Indication>,
        iMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        list_Of_SDP_Media_Components?: OPTIONAL<List_Of_SDP_Media_Components[]>,
        gGSNaddress?: OPTIONAL<NodeAddress>,
        serviceReasonReturnCode?: OPTIONAL<UTF8String>,
        list_Of_Message_Bodies?: OPTIONAL<List_Of_Message_Bodies[]>,
        userLocationInfo?: OPTIONAL<OCTET_STRING>,
        poCInformation?: OPTIONAL<POCInformation>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        serviceContextID?: OPTIONAL<UTF8String>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.sIP_Method = sIP_Method;
        this.nodeAddress = nodeAddress;
        this.session_Id = session_Id;
        this.calling_Party_Address = calling_Party_Address;
        this.called_Party_Address = called_Party_Address;
        this.servedParty = servedParty;
        this.serviceRequestTimeStamp = serviceRequestTimeStamp;
        this.serviceDeliveryStartTimeStamp = serviceDeliveryStartTimeStamp;
        this.serviceDeliveryEndTimeStamp = serviceDeliveryEndTimeStamp;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.interOperatorIdentifiers = interOperatorIdentifiers;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordSequenceNumber = recordSequenceNumber;
        this.causeForRecordClosing = causeForRecordClosing;
        this.incomplete_CDR_Indication = incomplete_CDR_Indication;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.list_Of_SDP_Media_Components = list_Of_SDP_Media_Components;
        this.gGSNaddress = gGSNaddress;
        this.serviceReasonReturnCode = serviceReasonReturnCode;
        this.list_Of_Message_Bodies = list_Of_Message_Bodies;
        this.userLocationInfo = userLocationInfo;
        this.poCInformation = poCInformation;
        this.recordExtensions = recordExtensions;
        this.serviceContextID = serviceContextID;
    
        if (this.serviceRequestTimeStamp !== undefined && (this.serviceRequestTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PPFRecord.serviceRequestTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryStartTimeStamp !== undefined && (this.serviceDeliveryStartTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PPFRecord.serviceDeliveryStartTimeStamp violates SIZE constraint");
        }
        if (this.serviceDeliveryEndTimeStamp !== undefined && (this.serviceDeliveryEndTimeStamp.length !== 9)) {
            throw new ASN1SizeError("PPFRecord.serviceDeliveryEndTimeStamp violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PPFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("PPFRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("PPFRecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a PPFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PPFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PPFRecord`.
     * @returns {PPFRecord}
     */
    public static _from_object (_o: { [_K in keyof (PPFRecord)]: (PPFRecord)[_K] }): PPFRecord {
        return new PPFRecord(_o.recordType, _o.retransmission, _o.sIP_Method, _o.nodeAddress, _o.session_Id, _o.calling_Party_Address, _o.called_Party_Address, _o.servedParty, _o.serviceRequestTimeStamp, _o.serviceDeliveryStartTimeStamp, _o.serviceDeliveryEndTimeStamp, _o.recordOpeningTime, _o.recordClosureTime, _o.interOperatorIdentifiers, _o.localRecordSequenceNumber, _o.recordSequenceNumber, _o.causeForRecordClosing, _o.incomplete_CDR_Indication, _o.iMS_Charging_Identifier, _o.list_Of_SDP_Media_Components, _o.gGSNaddress, _o.serviceReasonReturnCode, _o.list_Of_Message_Bodies, _o.userLocationInfo, _o.poCInformation, _o.recordExtensions, _o.serviceContextID);
    }

        /**
         * @summary The enum used as the type of the component `causeForRecordClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecordClosing: typeof _enum_for_CauseForRecordClosing = _enum_for_CauseForRecordClosing;
}

/**
 * @summary The Leading Root Component Types of PPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PPFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIP-Method", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("session-Id", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calling-Party-Address", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("called-Party-Address", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("servedParty", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceRequestTimeStamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("serviceDeliveryStartTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceDeliveryEndTimeStamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("interOperatorIdentifiers", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("causeForRecordClosing", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("incomplete-CDR-Indication", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("list-Of-SDP-Media-Components", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("gGSNaddress", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("serviceReasonReturnCode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("list-Of-Message-Bodies", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("poCInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of PPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PPFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PPFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PPFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PPFRecord: $.ASN1Decoder<PPFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PPFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PPFRecord (el: _Element): PPFRecord {
    if (!_cached_decoder_for_PPFRecord) { _cached_decoder_for_PPFRecord = function (el: _Element): PPFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let sIP_Method: OPTIONAL<GraphicString>;
    let nodeAddress: OPTIONAL<NodeAddress>;
    let session_Id: OPTIONAL<GraphicString>;
    let calling_Party_Address: OPTIONAL<InvolvedParty>;
    let called_Party_Address: OPTIONAL<InvolvedParty>;
    let servedParty: OPTIONAL<GraphicString>;
    let serviceRequestTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryStartTimeStamp: OPTIONAL<OCTET_STRING>;
    let serviceDeliveryEndTimeStamp: OPTIONAL<OCTET_STRING>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let interOperatorIdentifiers: OPTIONAL<InterOperatorIdentifiers>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecordClosing: OPTIONAL<CauseForRecordClosing>;
    let incomplete_CDR_Indication: OPTIONAL<Incomplete_CDR_Indication>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let list_Of_SDP_Media_Components: OPTIONAL<List_Of_SDP_Media_Components[]>;
    let gGSNaddress: OPTIONAL<NodeAddress>;
    let serviceReasonReturnCode: OPTIONAL<UTF8String>;
    let list_Of_Message_Bodies: OPTIONAL<List_Of_Message_Bodies[]>;
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let poCInformation: OPTIONAL<POCInformation>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let serviceContextID: OPTIONAL<UTF8String>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sIP-Method": (_el: _Element): void => { sIP_Method = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "nodeAddress": (_el: _Element): void => { nodeAddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "session-Id": (_el: _Element): void => { session_Id = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "calling-Party-Address": (_el: _Element): void => { calling_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "called-Party-Address": (_el: _Element): void => { called_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "servedParty": (_el: _Element): void => { servedParty = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "serviceRequestTimeStamp": (_el: _Element): void => { serviceRequestTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryStartTimeStamp": (_el: _Element): void => { serviceDeliveryStartTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceDeliveryEndTimeStamp": (_el: _Element): void => { serviceDeliveryEndTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interOperatorIdentifiers": (_el: _Element): void => { interOperatorIdentifiers = $._decode_implicit<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecordClosing": (_el: _Element): void => { causeForRecordClosing = $._decode_implicit<CauseForRecordClosing>(() => _decode_CauseForRecordClosing)(_el); },
        "incomplete-CDR-Indication": (_el: _Element): void => { incomplete_CDR_Indication = $._decode_implicit<Incomplete_CDR_Indication>(() => _decode_Incomplete_CDR_Indication)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "list-Of-SDP-Media-Components": (_el: _Element): void => { list_Of_SDP_Media_Components = $._decode_implicit<List_Of_SDP_Media_Components[]>(() => $._decodeSequenceOf<List_Of_SDP_Media_Components>(() => _decode_List_Of_SDP_Media_Components))(_el); },
        "gGSNaddress": (_el: _Element): void => { gGSNaddress = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "serviceReasonReturnCode": (_el: _Element): void => { serviceReasonReturnCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "list-Of-Message-Bodies": (_el: _Element): void => { list_Of_Message_Bodies = $._decode_implicit<List_Of_Message_Bodies[]>(() => $._decodeSequenceOf<List_Of_Message_Bodies>(() => _decode_List_Of_Message_Bodies))(_el); },
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "poCInformation": (_el: _Element): void => { poCInformation = $._decode_implicit<POCInformation>(() => _decode_POCInformation)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PPFRecord,
        _extension_additions_list_spec_for_PPFRecord,
        _root_component_type_list_2_spec_for_PPFRecord,
        undefined,
    );
    return new PPFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        sIP_Method,
        nodeAddress,
        session_Id,
        calling_Party_Address,
        called_Party_Address,
        servedParty,
        serviceRequestTimeStamp,
        serviceDeliveryStartTimeStamp,
        serviceDeliveryEndTimeStamp,
        recordOpeningTime,
        recordClosureTime,
        interOperatorIdentifiers,
        localRecordSequenceNumber,
        recordSequenceNumber,
        causeForRecordClosing,
        incomplete_CDR_Indication,
        iMS_Charging_Identifier,
        list_Of_SDP_Media_Components,
        gGSNaddress,
        serviceReasonReturnCode,
        list_Of_Message_Bodies,
        userLocationInfo,
        poCInformation,
        recordExtensions,
        serviceContextID
    );
}; }
    return _cached_decoder_for_PPFRecord(el);
}

let _cached_encoder_for_PPFRecord: $.ASN1Encoder<PPFRecord> | null = null;

/**
 * @summary Encodes a(n) PPFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PPFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PPFRecord (value: PPFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PPFRecord) { _cached_encoder_for_PPFRecord = function (value: PPFRecord, _elGetter: $.ASN1Encoder<PPFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.sIP_Method !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER)(value.sIP_Method, $.BER));
    }
    if (value.nodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_NodeAddress, $.BER)(value.nodeAddress, $.BER));
    }
    if (value.session_Id !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeGraphicString, $.BER)(value.session_Id, $.BER));
    }
    if (value.calling_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_InvolvedParty, $.BER)(value.calling_Party_Address, $.BER));
    }
    if (value.called_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_InvolvedParty, $.BER)(value.called_Party_Address, $.BER));
    }
    if (value.servedParty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeGraphicString, $.BER)(value.servedParty, $.BER));
    }
    if (value.serviceRequestTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.serviceRequestTimeStamp, $.BER));
    }
    if (value.serviceDeliveryStartTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.serviceDeliveryStartTimeStamp, $.BER));
    }
    if (value.serviceDeliveryEndTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.serviceDeliveryEndTimeStamp, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.interOperatorIdentifiers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_InterOperatorIdentifiers, $.BER)(value.interOperatorIdentifiers, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.causeForRecordClosing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_CauseForRecordClosing, $.BER)(value.causeForRecordClosing, $.BER));
    }
    if (value.incomplete_CDR_Indication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Incomplete_CDR_Indication, $.BER)(value.incomplete_CDR_Indication, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.list_Of_SDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<List_Of_SDP_Media_Components>(() => _encode_List_Of_SDP_Media_Components, $.BER), $.BER)(value.list_Of_SDP_Media_Components, $.BER));
    }
    if (value.gGSNaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 20, () => _encode_NodeAddress, $.BER)(value.gGSNaddress, $.BER));
    }
    if (value.serviceReasonReturnCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.serviceReasonReturnCode, $.BER));
    }
    if (value.list_Of_Message_Bodies !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<List_Of_Message_Bodies>(() => _encode_List_Of_Message_Bodies, $.BER), $.BER)(value.list_Of_Message_Bodies, $.BER));
    }
    if (value.userLocationInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER));
    }
    if (value.poCInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_POCInformation, $.BER)(value.poCInformation, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PPFRecord(value, elGetter);
}


/* eslint-enable */
