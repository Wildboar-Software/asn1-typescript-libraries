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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { ChargeInformation, _decode_ChargeInformation, _encode_ChargeInformation } from "../MMSChargingDataTypes/ChargeInformation.ta.mjs";
import { WaitTime, _decode_WaitTime, _encode_WaitTime } from "../MMSChargingDataTypes/WaitTime.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
import { MMBoxStorageInformation, _decode_MMBoxStorageInformation, _encode_MMBoxStorageInformation } from "../MMSChargingDataTypes/MMBoxStorageInformation.ta.mjs";


/**
 * @summary MMFRecord
 * @description
 *
 * Forwarding record (F-CDR).
 *
 * If enabled, a Forwarding F-CDR shall be produced in the Forwarding MMS
 * R/S on receipt of an MM1_forward.REQ if and when the Forwarding MMS R/S
 * responds with an MM1_forward.RES indicating acceptance.
 *
 * Clause 6.1.1.1 treats an MM1_forward.REQ in clause 6.1.3 rather than as
 * an O1S-CDR. No separate trigger label is given in the clause 5.2.3
 * overview tables.
 *
 * Produced in the Forwarding MMS R/S for an MM1 forward. The forwarding
 * User Agent is the intended recipient of an MM and asks for it to be
 * forwarded without downloading it first (clause 3.1).
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMFRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    forwardingMmsRSAddress    [1] IMPLICIT MMSRSAddress,
 *    messageID                 [2] IMPLICIT OCTET STRING,
 *    forwardingAddress         [3] IMPLICIT MMSAgentAddress,
 *    recipientAddresses        [4] IMPLICIT SET  OF
 *       MMSAgentAddress,
 *    chargeInformation         [5] IMPLICIT ChargeInformation OPTIONAL,
 *    timeOfExpiry              [6] WaitTime OPTIONAL,
 *    earliestTimeOfDelivery    [7] WaitTime OPTIONAL,
 *    deliveryReportRequested   [8] IMPLICIT BOOLEAN OPTIONAL,
 *    readReplyRequested        [9] IMPLICIT BOOLEAN OPTIONAL,
 *    messageReference          [10] IMPLICIT OCTET STRING,
 *    mmStatusCode              [11] IMPLICIT MMStatusCodeType OPTIONAL,
 *    statusText                [12] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp           [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber       [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions          [15] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    mMBoxstorageInformation   [16] IMPLICIT MMBoxStorageInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MM Forwarding record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `forwardingMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Forwarding MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly forwardingMmsRSAddress: MMSRSAddress;
    /**
     * @summary `messageID`.
     * @description
     *
     * This field specifies the MM Message ID of the MM as defined in TS 23.140
     * [206]. The concrete syntax of this MM Message ID is given by the body of
     * the field introduced by the string "X-Mms-Message-ID:" in the concrete
     * syntax of the message MM4_Forward. REQ. All CDRs pertaining to the same MM
     * shall employ the same value of this parameter, i.e. the value initially
     * assigned by the originator MMS Relay/Server upon submission of the MM by
     * the Originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.20.
     *
     * Category M. The MM identification provided by the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `forwardingAddress`.
     * @description
     *
     * This field contains a forwarding MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]), MSISDN (E.164[308]) or IP
     * addresses.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.12.
     *
     * Category M. One or more addresses of the forwarding MMS User Agent
     * (i.e., of the MMS User Agent that has sent the MM1_forward.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly forwardingAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddresses`.
     * @description
     *
     * Category M. The address(es) of the Recipient MMS User Agent(s) of the
     * forwarded MM. Multiple addresses are possible.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly recipientAddresses: MMSAgentAddress[];
    /**
     * @summary `chargeInformation`.
     * @description
     *
     * This field consists of two parts, the charged party and the charge type.
     * The Charged Party is an indication on which party is expected to be
     * charged for an MM e.g. the sending, receiving, both parties or neither.
     * This indicator is only applicable to MM7 CDRs (for VASP-originated MMs).
     * It may be provided by the VASP when submitting an MM. The Charge Type
     * indicates the type of subscription (i.e. postpaid or prepaid). This
     * indicator is derived from the subscription parameters and only applicable
     * to MM1 CDRs. The Charged Parties are as follows: Both: This indicates both
     * the sending and the receiving parties are expected to be charged ('shared'
     * charging model); Neither: This indicates neither the sending nor the
     * receiving parties are expected to be charged ('free of charge' charging
     * model). The Charge types are as follows:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.6.
     *
     * Category OM. The charged party indication and charge type.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly chargeInformation: OPTIONAL<ChargeInformation>;
    /**
     * @summary `timeOfExpiry`.
     * @description
     *
     * This field contains the desired date or the number of seconds to expiry of
     * the MM, if specified by the originator MMS User Agent.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.57.
     *
     * Category OC. The desired date of expiry or duration of time prior to
     * expiry for the MM if specified by the forwarding MMS User Agent.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly timeOfExpiry: OPTIONAL<WaitTime>;
    /**
     * @summary `earliestTimeOfDelivery`.
     * @description
     *
     * This field contains either the earliest time to deliver message or the
     * number of seconds to wait before delivering the message.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.10.
     *
     * Category OC. This field contains either the earliest time to deliver the
     * MM or the number of seconds to wait before delivering the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    /**
     * @summary `deliveryReportRequested`.
     * @description
     *
     * This is an indication of type Boolean whether (value TRUE) or not (value
     * FALSE) the originator/forwarding MMS User Agent has requested a delivery
     * report in the MM1_submit. REQ/MM1_forward. REQ.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.8.
     *
     * Category OM. This field indicates whether a delivery report has been
     * requested by the forwarding MMS User Agent or not.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly deliveryReportRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `readReplyRequested`.
     * @description
     *
     * A Boolean value indicating whether the originator MMS User Agent has
     * requested a read-reply report (value TRUE) or not (value FALSE).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.35.
     *
     * Category OM. A request for read-reply report as specified in the
     * MM1_forward.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly readReplyRequested: OPTIONAL<BOOLEAN>;
    /**
     * @summary `messageReference`.
     * @description
     *
     * A reference as specified in TS 23.140 [206], e.g. URI, for the MM that can
     * be used for retrieving the MM from the recipient MMS Relay/Server.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.21.
     *
     * Category M. A reference, e.g., URI, for the MM as specified in the
     * MM1_forward.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `mmStatusCode`.
     * @description
     *
     * This field contains an appropriate status value of the delivered MM (e.g.
     * retrieved, rejected, etc.).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28.
     *
     * Category OM. The status code of the MM at the time when the CDR is
     * generated.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly mmStatusCode: OPTIONAL<MMStatusCodeType>;
    /**
     * @summary `statusText`.
     * @description
     *
     * This field includes a more detailed technical status of the message at the
     * point in time when the CDR is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.55.
     *
     * Category OM. This field includes a more detailed technical status of the
     * message at the point in time when the CDR is generated.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly statusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordTimeStamp`.
     * @description
     *
     * This field indicates the date and time when the CDR was produced.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.41.
     *
     * Category OM. Time of generation of the CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this node. The
     * number is allocated sequentially including all CDR types. The number is
     * unique within one node, which is identified either by field Node ID or by
     * record-dependent MMS Relay/Server. The field can be used e.g. to identify
     * missing records in post processing system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.16.
     *
     * Category OM. Consecutive record number created by this node. The number
     * is allocated sequentially including all CDR types.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
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
     * record. Conditioned upon the existence of an extension.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `mMBoxstorageInformation`.
     * @description
     *
     * Category OC. A set of parameters related to the MMBox management. This
     * parameter is only present if the MMBox feature is supported by the MMS
     * R/S and storage of the MM was requested by the forwarding MMS User Agent
     * (i.e., of the MMS User Agent that has sent the MM1_forward.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly mMBoxstorageInformation: OPTIONAL<MMBoxStorageInformation>;

    constructor (
        recordType: RecordType,
        forwardingMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        forwardingAddress: MMSAgentAddress,
        recipientAddresses: MMSAgentAddress[],
        chargeInformation: OPTIONAL<ChargeInformation>,
        timeOfExpiry: OPTIONAL<WaitTime>,
        earliestTimeOfDelivery: OPTIONAL<WaitTime>,
        deliveryReportRequested: OPTIONAL<BOOLEAN>,
        readReplyRequested: OPTIONAL<BOOLEAN>,
        messageReference: OCTET_STRING,
        mmStatusCode?: OPTIONAL<MMStatusCodeType>,
        statusText?: OPTIONAL<OCTET_STRING>,
        recordTimeStamp?: OPTIONAL<OCTET_STRING>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        mMBoxstorageInformation?: OPTIONAL<MMBoxStorageInformation>
    ) {
        this.recordType = recordType;
        this.forwardingMmsRSAddress = forwardingMmsRSAddress;
        this.messageID = messageID;
        this.forwardingAddress = forwardingAddress;
        this.recipientAddresses = recipientAddresses;
        this.chargeInformation = chargeInformation;
        this.timeOfExpiry = timeOfExpiry;
        this.earliestTimeOfDelivery = earliestTimeOfDelivery;
        this.deliveryReportRequested = deliveryReportRequested;
        this.readReplyRequested = readReplyRequested;
        this.messageReference = messageReference;
        this.mmStatusCode = mmStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.mMBoxstorageInformation = mMBoxstorageInformation;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMFRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMFRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MMFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMFRecord`.
     * @returns {MMFRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMFRecord)]: (MMFRecord)[_K] }): MMFRecord {
        return new MMFRecord(_o.recordType, _o.forwardingMmsRSAddress, _o.messageID, _o.forwardingAddress, _o.recipientAddresses, _o.chargeInformation, _o.timeOfExpiry, _o.earliestTimeOfDelivery, _o.deliveryReportRequested, _o.readReplyRequested, _o.messageReference, _o.mmStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.mMBoxstorageInformation);
    }

        /**
         * @summary The enum used as the type of the component `mmStatusCode`
         * @public
         * @static
         */

    public static _enum_for_mmStatusCode = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("forwardingMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("forwardingAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientAddresses", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargeInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfExpiry", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("earliestTimeOfDelivery", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deliveryReportRequested", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("readReplyRequested", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mmStatusCode", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mMBoxstorageInformation", true, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of MMFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMFRecord: $.ASN1Decoder<MMFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMFRecord (el: _Element): MMFRecord {
    if (!_cached_decoder_for_MMFRecord) { _cached_decoder_for_MMFRecord = function (el: _Element): MMFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let forwardingMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let forwardingAddress!: MMSAgentAddress;
    let recipientAddresses!: MMSAgentAddress[];
    let chargeInformation: OPTIONAL<ChargeInformation>;
    let timeOfExpiry: OPTIONAL<WaitTime>;
    let earliestTimeOfDelivery: OPTIONAL<WaitTime>;
    let deliveryReportRequested: OPTIONAL<BOOLEAN>;
    let readReplyRequested: OPTIONAL<BOOLEAN>;
    let messageReference!: OCTET_STRING;
    let mmStatusCode: OPTIONAL<MMStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let mMBoxstorageInformation: OPTIONAL<MMBoxStorageInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "forwardingMmsRSAddress": (_el: _Element): void => { forwardingMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "forwardingAddress": (_el: _Element): void => { forwardingAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddresses": (_el: _Element): void => { recipientAddresses = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); },
        "chargeInformation": (_el: _Element): void => { chargeInformation = $._decode_implicit<ChargeInformation>(() => _decode_ChargeInformation)(_el); },
        "timeOfExpiry": (_el: _Element): void => { timeOfExpiry = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "earliestTimeOfDelivery": (_el: _Element): void => { earliestTimeOfDelivery = $._decode_explicit<WaitTime>(() => _decode_WaitTime)(_el); },
        "deliveryReportRequested": (_el: _Element): void => { deliveryReportRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "readReplyRequested": (_el: _Element): void => { readReplyRequested = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmStatusCode": (_el: _Element): void => { mmStatusCode = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "mMBoxstorageInformation": (_el: _Element): void => { mMBoxstorageInformation = $._decode_implicit<MMBoxStorageInformation>(() => _decode_MMBoxStorageInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMFRecord,
        _extension_additions_list_spec_for_MMFRecord,
        _root_component_type_list_2_spec_for_MMFRecord,
        undefined,
    );
    return new MMFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        forwardingMmsRSAddress,
        messageID,
        forwardingAddress,
        recipientAddresses,
        chargeInformation,
        timeOfExpiry,
        earliestTimeOfDelivery,
        deliveryReportRequested,
        readReplyRequested,
        messageReference,
        mmStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        mMBoxstorageInformation
    );
}; }
    return _cached_decoder_for_MMFRecord(el);
}

let _cached_encoder_for_MMFRecord: $.ASN1Encoder<MMFRecord> | null = null;

/**
 * @summary Encodes a(n) MMFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMFRecord (value: MMFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMFRecord) { _cached_encoder_for_MMFRecord = function (value: MMFRecord, _elGetter: $.ASN1Encoder<MMFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.forwardingMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSAgentAddress, $.BER)(value.forwardingAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.recipientAddresses, $.BER));
    if (value.chargeInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ChargeInformation, $.BER)(value.chargeInformation, $.BER));
    }
    if (value.timeOfExpiry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_WaitTime, $.BER)(value.timeOfExpiry, $.BER));
    }
    if (value.earliestTimeOfDelivery !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_WaitTime, $.BER)(value.earliestTimeOfDelivery, $.BER));
    }
    if (value.deliveryReportRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.deliveryReportRequested, $.BER));
    }
    if (value.readReplyRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.readReplyRequested, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    if (value.mmStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MMStatusCodeType, $.BER)(value.mmStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.mMBoxstorageInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MMBoxStorageInformation, $.BER)(value.mMBoxstorageInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMFRecord(value, elGetter);
}


/* eslint-enable */
