/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { type AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { AttributesList, _decode_AttributesList, _encode_AttributesList } from "../MMSChargingDataTypes/AttributesList.ta.mjs";
import { type RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { Totals, _decode_Totals, _encode_Totals } from "../MMSChargingDataTypes/Totals.ta.mjs";
import { Quotas, _decode_Quotas, _encode_Quotas } from "../MMSChargingDataTypes/Quotas.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMBx1VRecord
 * @description
 *
 * MMBox MM1 View record (Bx1V-CDR).
 *
 * If enabled, an MMBox MM1 View Bx1V-CDR shall be produced in the MMS R/S
 * if and when the MMS R/S has sent an MM1_mmbox_view.RES to the MMS User
 * Agent.
 *
 * Table 5.2.3.3.1 associates trigger M3 with this record. The MMBox
 * chargeable events are triggered by the MMS R/S response, not by receipt
 * of the request (clause 5.1.3).
 *
 * Produced for MMBox management. The MMBox is the persistent network-based
 * store of MMs, an extension of MM1 that lets a User Agent store,
 * retrieve, and delete incoming and submitted MMs (clause 5.1.3).
 *
 * MMS offline charging is event based. One chargeable event produces one
 * CDR. From the 3GPP specifications that CDR is visible in the files the
 * MMS R/S sends across Bm (clause 5.2.1).
 *
 * Field categories follow the charging data configuration in TS 32.240
 * clause 5.4, which clause 6.1.0 applies to this table. M is always
 * present. C is present when the conditions stated for that field are met.
 * OM and OC are included only when the operator has provisioned them; OC
 * also requires those conditions.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBx1VRecord ::= SET {
 *    recordType           [0] IMPLICIT RecordType,
 *    mmsRelayAddress      [1] IPAddress,
 *    managingAddress      [2] IMPLICIT MMSAgentAddress,
 *    accessCorrelation    [3] AccessCorrelation OPTIONAL,
 *    attributesList       [4] IMPLICIT AttributesList OPTIONAL,
 *    messageSelection     [5] IMPLICIT INTEGER OPTIONAL,
 *    start                [6] IMPLICIT INTEGER OPTIONAL,
 *    limit                [7] IMPLICIT INTEGER OPTIONAL,
 *    totalsRequested      [8] IMPLICIT BOOLEAN OPTIONAL,
 *    quotasRequested      [9] IMPLICIT BOOLEAN OPTIONAL,
 *    mmListing            [10] IMPLICIT AttributesList OPTIONAL,
 *    requestStatusCode    [11] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText           [12] IMPLICIT OCTET STRING OPTIONAL,
 *    totals               [13] IMPLICIT Totals OPTIONAL,
 *    quotas               [14] IMPLICIT Quotas OPTIONAL,
 *    sequenceNumber       [15] IMPLICIT INTEGER OPTIONAL,
 *    timeStamp            [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordExtensions     [17] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier   [18] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType              [19] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone           [20] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMBx1VRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MMBox MM1 View record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `mmsRelayAddress`.
     * @description
     *
     * Category M. An address of the MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly mmsRelayAddress: IPAddress;
    /**
     * @summary `managingAddress`.
     * @description
     *
     * This field contains the managing MMS User Agent address i.e. the MMS User
     * Agent that sends and receives transactions related to the MMBox
     * management. The MMS supports the use of E-Mail addresses (RFC 822) [400],
     * MSISDN (E.164[308]) or IP address.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.17.
     *
     * Category M. The address of the managing MMS User Agent (i.e., of the MMS
     * User Agent that has sent the MM1_mmbox_view.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly managingAddress: MMSAgentAddress;
    /**
     * @summary `accessCorrelation`.
     * @description
     *
     * If the parameter is provided and is not an empty string, it is a unique
     * identifier delivered by the used access network domain of the originator
     * or recipient MMS User Agent. It may be used for correlation of the MMS
     * CDRs with the corresponding MSC server CDRs in CS domain or GSN CDRs in PS
     * domain. It is an empty string if the parameter is not delivered by the
     * access network.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.2.
     *
     * Category OM. A unique identifier delivered by the used access network
     * domain of the originator MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `attributesList`.
     * @description
     *
     * This field contains a list of information element names that are used in
     * the MM1_mmbox_view. REQ, which request corresponding information elements
     * from the MMs to be conveyed in the MM1_mmbox_view. RES. The list of known
     * information element names are those currently defined for the
     * MM1_retrieve. RES and MM1_notification. REQ. In the absence of the
     * Attributes list information element, the MMS Relay/Server shall, by
     * default and if available, select these information elements from each
     * viewed MM: Message ID, Date and time, Sender address, Subject, Message
     * size, MM State, and MM Flags.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.4.
     *
     * Category OM. A list of information elements that are to be returned as a
     * group for each MM to be listed in the MM1_mmbox_view.RES. If absent, the
     * default list (i.e. Message ID, Date and time, Sender address, Subject,
     * Message size, MM State, and MM Flags) shall apply.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly attributesList: OPTIONAL<AttributesList>;
    /**
     * @summary `messageSelection`.
     * @description
     *
     * Messages which are to be viewed may be selected by a list of Message
     * References or by a selection based on MM State and/or MM Flags keywords.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.22.
     *
     * Category OM. A list of MM State or MM Flags keywords (e.g. new or draft)
     * or a list of Message Reference by which MMs within the MMBox can be
     * selected. If both are absent, a listing of all MMs currently stored
     * within the MMBox shall be selected.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly messageSelection: OPTIONAL<INTEGER>;
    /**
     * @summary `start`.
     * @description
     *
     * This field contains a number that may be used in the MM1_mmbox_view. REQ
     * to index the first MM to be viewed, relative to the selected set of MMs,
     * allowing partial views to be requested.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.54.
     *
     * Category OM. A number, indicating the index of the first MM of those
     * selected to have information elements returned in the response. If this
     * is absent, the first item selected is returned.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly start: OPTIONAL<INTEGER>;
    /**
     * @summary `limit`.
     * @description
     *
     * This field contains a number that may be provided in the MM1_mmbox_view.
     * REQ to specify a limit for the number of MMs the information elements to
     * which shall be returned in the MM1_mmbox_view. RES.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.14.
     *
     * Category OM. A number indicating the maximum number of selected MMs to
     * their information elements returned in the response. If this is absent,
     * information elements from all remaining MMs are returned.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly limit: OPTIONAL<INTEGER>;
    /**
     * @summary `totalsRequested`.
     * @description
     *
     * This is an indication that the Managing User Agent has requested the
     * current total number of messages and/or size contained by the MMBox.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.59.
     *
     * Category OM. This field indicates whether the current total number of
     * messages and/or size contained by the MMBox has been requested by the
     * managing MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly totalsRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `quotasRequested`.
     * @description
     *
     * This is an indication that the Managing User Agent has requested the
     * current message and/or size quotas.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.34.
     *
     * Category OM. This field indicates whether the current message and/or
     * size quotas (i.e. the maximum number of messages allowed and/or the
     * maximum size allowed) has been requested by the managing MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly quotasRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mmListing`.
     * @description
     *
     * This field contains a list of information elements from the MMs returned
     * within the MM1_mmbox_view. RES. The listing shall consist of the following
     * information elements, separately grouped for each MM returned in the list:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.27.
     *
     * Category OM. The requested listing of the selected MMs, which shall be
     * one or more groups of information elements, one for each MM listed. Each
     * MM group shall include: a Message Reference, and may include additional
     * information elements as well. If absent, no MMs were found or selected.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly mmListing: OPTIONAL<AttributesList>;
    /**
     * @summary `requestStatusCode`.
     * @description
     *
     * The status of the MM as reflected in the corresponding MM4 message (e.g.
     * error service denied, error network problem, error unsupported message,
     * etc.). For further details see TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.48.
     *
     * Category OM. The status code of the request to view the MM as received
     * in the MM1_view.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    /**
     * @summary `statusText`.
     * @description
     *
     * This field includes a more detailed technical status of the message at the
     * point in time when the CDR is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.55.
     *
     * Category OC. This field includes the status text as received in the
     * MM1_view.RES corresponding to the Request Status Code. Present only if
     * provided in the MM1_view.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `totals`.
     * @description
     *
     * The total number of messages and/or octets for the MMBox, identified with
     * Messages or Octets.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.58.
     *
     * Category OC. The total number of messages and/or octets for the MMBox,
     * identified with Messages or Octets, respectively, depending upon the
     * presence of Totals in the request.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly totals: OPTIONAL<Totals>;
    /**
     * @summary `quotas`.
     * @description
     *
     * The quotas of the MMBox in messages and/or octets identified with Messages
     * or Octets.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.33.
     *
     * Category OC. The quotas of the MMBox in messages and/or octets
     * identified with Messages or Octets, respectively, depending upon the
     * presence of Quotas in the request.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly quotas: OPTIONAL<Quotas>;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Category OM. Record number.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Category OM. Time of generation of the CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * The field enables network operators and/or manufacturers to add their own
     * extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.40.
     *
     * Category OC. A set of network/manufacturer specific extensions to the
     * record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `sGSNPLMNIdentifier`.
     * @description
     *
     * Category OC. If present this parameter holds the SGSN PLMN Identifier
     * (MCC and MNC) used during this record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Category OC. The radio access technology used during this record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @description
     *
     * This field contains the 'Time Zone' IE provided for the MMS User Agent as
     * specified in TS 29.060 [215].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28A.
     *
     * Category OC. This field contains the MS Time Zone the MMS User Agent is
     * currently located, if available.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        mmsRelayAddress: IPAddress,
        managingAddress: MMSAgentAddress,
        accessCorrelation?: OPTIONAL<AccessCorrelation>,
        attributesList?: OPTIONAL<AttributesList>,
        messageSelection?: OPTIONAL<INTEGER>,
        start?: OPTIONAL<INTEGER>,
        limit?: OPTIONAL<INTEGER>,
        totalsRequested?: OPTIONAL<BOOLEAN>,
        quotasRequested?: OPTIONAL<BOOLEAN>,
        mmListing?: OPTIONAL<AttributesList>,
        requestStatusCode?: OPTIONAL<RequestStatusCodeType>,
        statusText?: OPTIONAL<OCTET_STRING>,
        totals?: OPTIONAL<Totals>,
        quotas?: OPTIONAL<Quotas>,
        sequenceNumber?: OPTIONAL<INTEGER>,
        timeStamp?: OPTIONAL<OCTET_STRING>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        sGSNPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.mmsRelayAddress = mmsRelayAddress;
        this.managingAddress = managingAddress;
        this.accessCorrelation = accessCorrelation;
        this.attributesList = attributesList;
        this.messageSelection = messageSelection;
        this.start = start;
        this.limit = limit;
        this.totalsRequested = totalsRequested;
        this.quotasRequested = quotasRequested;
        this.mmListing = mmListing;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.totals = totals;
        this.quotas = quotas;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("MMBx1VRecord.timeStamp violates SIZE constraint");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMBx1VRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMBx1VRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMBx1VRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMBx1VRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMBx1VRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBx1VRecord`.
     * @returns {MMBx1VRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMBx1VRecord)]: (MMBx1VRecord)[_K] }): MMBx1VRecord {
        return new MMBx1VRecord(_o.recordType, _o.mmsRelayAddress, _o.managingAddress, _o.accessCorrelation, _o.attributesList, _o.messageSelection, _o.start, _o.limit, _o.totalsRequested, _o.quotasRequested, _o.mmListing, _o.requestStatusCode, _o.statusText, _o.totals, _o.quotas, _o.sequenceNumber, _o.timeStamp, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }


}

/**
 * @summary The Leading Root Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsRelayAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("managingAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attributesList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageSelection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("start", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("totalsRequested", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("quotasRequested", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mmListing", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("totals", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("quotas", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 20))
];

/**
 * @summary The Trailing Root Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBx1VRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBx1VRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBx1VRecord: $.ASN1Decoder<MMBx1VRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBx1VRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBx1VRecord (el: _Element): MMBx1VRecord {
    if (!_cached_decoder_for_MMBx1VRecord) { _cached_decoder_for_MMBx1VRecord = function (el: _Element): MMBx1VRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mmsRelayAddress!: IPAddress;
    let managingAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let attributesList: OPTIONAL<AttributesList>;
    let messageSelection: OPTIONAL<INTEGER>;
    let start: OPTIONAL<INTEGER>;
    let limit: OPTIONAL<INTEGER>;
    let totalsRequested: OPTIONAL<BOOLEAN>;
    let quotasRequested: OPTIONAL<BOOLEAN>;
    let mmListing: OPTIONAL<AttributesList>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let totals: OPTIONAL<Totals>;
    let quotas: OPTIONAL<Quotas>;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let timeStamp: OPTIONAL<OCTET_STRING>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "mmsRelayAddress": (_el: _Element): void => { mmsRelayAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "managingAddress": (_el: _Element): void => { managingAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "attributesList": (_el: _Element): void => { attributesList = $._decode_implicit<AttributesList>(() => _decode_AttributesList)(_el); },
        "messageSelection": (_el: _Element): void => { messageSelection = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "start": (_el: _Element): void => { start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "limit": (_el: _Element): void => { limit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "totalsRequested": (_el: _Element): void => { totalsRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "quotasRequested": (_el: _Element): void => { quotasRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mmListing": (_el: _Element): void => { mmListing = $._decode_implicit<AttributesList>(() => _decode_AttributesList)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "totals": (_el: _Element): void => { totals = $._decode_implicit<Totals>(() => _decode_Totals)(_el); },
        "quotas": (_el: _Element): void => { quotas = $._decode_implicit<Quotas>(() => _decode_Quotas)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBx1VRecord,
        _extension_additions_list_spec_for_MMBx1VRecord,
        _root_component_type_list_2_spec_for_MMBx1VRecord,
        undefined,
    );
    return new MMBx1VRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mmsRelayAddress,
        managingAddress,
        accessCorrelation,
        attributesList,
        messageSelection,
        start,
        limit,
        totalsRequested,
        quotasRequested,
        mmListing,
        requestStatusCode,
        statusText,
        totals,
        quotas,
        sequenceNumber,
        timeStamp,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMBx1VRecord(el);
}

let _cached_encoder_for_MMBx1VRecord: $.ASN1Encoder<MMBx1VRecord> | null = null;

/**
 * @summary Encodes a(n) MMBx1VRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBx1VRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMBx1VRecord (value: MMBx1VRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBx1VRecord) { _cached_encoder_for_MMBx1VRecord = function (value: MMBx1VRecord, _elGetter: $.ASN1Encoder<MMBx1VRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mmsRelayAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSAgentAddress, $.BER)(value.managingAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.attributesList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AttributesList, $.BER)(value.attributesList, $.BER));
    }
    if (value.messageSelection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.messageSelection, $.BER));
    }
    if (value.start !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.start, $.BER));
    }
    if (value.limit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.limit, $.BER));
    }
    if (value.totalsRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.totalsRequested, $.BER));
    }
    if (value.quotasRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.quotasRequested, $.BER));
    }
    if (value.mmListing !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_AttributesList, $.BER)(value.mmListing, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.totals !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_Totals, $.BER)(value.totals, $.BER));
    }
    if (value.quotas !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_Quotas, $.BER)(value.quotas, $.BER));
    }
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMBx1VRecord(value, elGetter);
}


/* eslint-enable */
