/* eslint-disable */
import {
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
import { AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMStatusCodeType, _decode_MMStatusCodeType, _encode_MMStatusCodeType, _enum_for_MMStatusCodeType } from "../MMSChargingDataTypes/MMStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMO1RRecord
 * @description
 *
 * Originator MM1 Read Reply Originator record (O1R-CDR).
 *
 * If enabled, an Originator MM1 Read Reply Originator O1R-CDR shall be
 * produced in the Originator MMS R/S if and when the Originator MMS R/S
 * sends an MM1_read_reply_Originator.REQ to the originator MMS User Agent.
 *
 * Table 5.2.3.1.1 associates trigger C8 with this record in the combined
 * case. Table 5.2.3.2.1 associates trigger O7 with it at a separate
 * Originator MMS R/S. Table 5.1.1.2 names C8 "Originator MM4 Read Reply
 * Originator"; clause 6.1.1.7 defines the record as the MM1 read-reply
 * sent to the originator User Agent.
 *
 * Produced in the Originator MMS R/S. An MM4 record is produced only when
 * that R/S is not also the Recipient MMS R/S. An MM1 record is produced
 * either way. Unless otherwise stated, parameters are copied from the
 * corresponding MM1 or MM4 message (clause 6.1.1.0).
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMO1RRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress    [1] IMPLICIT MMSRSAddress OPTIONAL,
 *    originatorMmsRSAddress   [2] IMPLICIT MMSRSAddress OPTIONAL,
 *    accessCorrelation        [3] AccessCorrelation OPTIONAL,
 *    messageID                [4] IMPLICIT OCTET STRING,
 *    mms3GPPVersion           [5] IMPLICIT OCTET STRING OPTIONAL,
 *    originatorAddress        [6] IMPLICIT MMSAgentAddress OPTIONAL,
 *    recipientAddress         [7] IMPLICIT MMSAgentAddress OPTIONAL,
 *    readStatus               [8] IMPLICIT MMStatusCodeType OPTIONAL,
 *    recordTimeStamp          [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber      [10] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions         [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier       [12] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType                  [13] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone               [14] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMO1RRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. Originator MM1 Read reply Originator record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @description
     *
     * Category OM. IP address or domain name of the Recipient MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    /**
     * @summary `originatorMmsRSAddress`.
     * @description
     *
     * Category OM. IP address or domain name of the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: OPTIONAL<MMSRSAddress>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `mms3GPPVersion`.
     * @description
     *
     * Category OM. The MMS version of the Originator MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorAddress`.
     * @description
     *
     * This field contains an originator MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]) or MSISDN (E.164 [308]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.30.
     *
     * Category OM. The address of the originator MMS User Agent of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly originatorAddress: OPTIONAL<MMSAgentAddress>;
    /**
     * @summary `recipientAddress`.
     * @description
     *
     * This field contains a recipient MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]), MSISDN (E.164 [308]) or
     * Service provider specific addresses (short code).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.37.
     *
     * Category OM. The address of the MM recipient of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly recipientAddress: OPTIONAL<MMSAgentAddress>;
    /**
     * @summary `readStatus`.
     * @description
     *
     * See TS 23.140 [206]: Status of the MM, e.g. Read, Deleted without being
     * read.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.36.
     *
     * Category OM. The status of the MM as sent in the MM1_read_reply
     * Originator.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly readStatus: OPTIONAL<MMStatusCodeType>;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.7.
     *
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: OPTIONAL<MMSRSAddress>,
        originatorMmsRSAddress: OPTIONAL<MMSRSAddress>,
        accessCorrelation: OPTIONAL<AccessCorrelation>,
        messageID: OCTET_STRING,
        mms3GPPVersion?: OPTIONAL<OCTET_STRING>,
        originatorAddress?: OPTIONAL<MMSAgentAddress>,
        recipientAddress?: OPTIONAL<MMSAgentAddress>,
        readStatus?: OPTIONAL<MMStatusCodeType>,
        recordTimeStamp?: OPTIONAL<OCTET_STRING>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        sGSNPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        rATType?: OPTIONAL<INTEGER>,
        mSTimeZone?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.accessCorrelation = accessCorrelation;
        this.messageID = messageID;
        this.mms3GPPVersion = mms3GPPVersion;
        this.originatorAddress = originatorAddress;
        this.recipientAddress = recipientAddress;
        this.readStatus = readStatus;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MMO1RRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MMO1RRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMO1RRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMO1RRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMO1RRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMO1RRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMO1RRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMO1RRecord`.
     * @returns {MMO1RRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMO1RRecord)]: (MMO1RRecord)[_K] }): MMO1RRecord {
        return new MMO1RRecord(_o.recordType, _o.recipientMmsRSAddress, _o.originatorMmsRSAddress, _o.accessCorrelation, _o.messageID, _o.mms3GPPVersion, _o.originatorAddress, _o.recipientAddress, _o.readStatus, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }

        /**
         * @summary The enum used as the type of the component `readStatus`
         * @public
         * @static
         */

    public static _enum_for_readStatus = _enum_for_MMStatusCodeType;
}

/**
 * @summary The Leading Root Component Types of MMO1RRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMO1RRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originatorMmsRSAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mms3GPPVersion", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originatorAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recipientAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("readStatus", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of MMO1RRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMO1RRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMO1RRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMO1RRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMO1RRecord: $.ASN1Decoder<MMO1RRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMO1RRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMO1RRecord (el: _Element): MMO1RRecord {
    if (!_cached_decoder_for_MMO1RRecord) { _cached_decoder_for_MMO1RRecord = function (el: _Element): MMO1RRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let originatorMmsRSAddress: OPTIONAL<MMSRSAddress>;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let messageID!: OCTET_STRING;
    let mms3GPPVersion: OPTIONAL<OCTET_STRING>;
    let originatorAddress: OPTIONAL<MMSAgentAddress>;
    let recipientAddress: OPTIONAL<MMSAgentAddress>;
    let readStatus: OPTIONAL<MMStatusCodeType>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let sGSNPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "accessCorrelation": (_el: _Element): void => { accessCorrelation = $._decode_explicit<AccessCorrelation>(() => _decode_AccessCorrelation)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mms3GPPVersion": (_el: _Element): void => { mms3GPPVersion = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "readStatus": (_el: _Element): void => { readStatus = $._decode_implicit<MMStatusCodeType>(() => _decode_MMStatusCodeType)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMO1RRecord,
        _extension_additions_list_spec_for_MMO1RRecord,
        _root_component_type_list_2_spec_for_MMO1RRecord,
        undefined,
    );
    return new MMO1RRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        originatorMmsRSAddress,
        accessCorrelation,
        messageID,
        mms3GPPVersion,
        originatorAddress,
        recipientAddress,
        readStatus,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMO1RRecord(el);
}

let _cached_encoder_for_MMO1RRecord: $.ASN1Encoder<MMO1RRecord> | null = null;

/**
 * @summary Encodes a(n) MMO1RRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMO1RRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMO1RRecord (value: MMO1RRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMO1RRecord) { _cached_encoder_for_MMO1RRecord = function (value: MMO1RRecord, _elGetter: $.ASN1Encoder<MMO1RRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.recipientMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    }
    if (value.originatorMmsRSAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    }
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    if (value.mms3GPPVersion !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.mms3GPPVersion, $.BER));
    }
    if (value.originatorAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    }
    if (value.recipientAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    }
    if (value.readStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMStatusCodeType, $.BER)(value.readStatus, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMO1RRecord(value, elGetter);
}


/* eslint-enable */
