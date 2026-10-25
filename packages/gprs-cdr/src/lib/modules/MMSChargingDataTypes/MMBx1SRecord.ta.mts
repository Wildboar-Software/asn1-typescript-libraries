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
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { type AccessCorrelation, _decode_AccessCorrelation, _encode_AccessCorrelation } from "../MMSChargingDataTypes/AccessCorrelation.ta.mjs";
import { type StoreStatus, _decode_StoreStatus, _encode_StoreStatus } from "../MMSChargingDataTypes/StoreStatus.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MMBx1SRecord
 * @description
 *
 * MMBox MM1 Store record (Bx1S-CDR).
 *
 * If enabled, an MMBox MM1 Store Bx1S-CDR shall be produced in the MMS R/S
 * if and when the MMS R/S responds with an MM1_mmbox_store.RES to the MMS
 * User Agent.
 *
 * Table 5.2.3.3.1 associates trigger M2 with this record. The MMBox
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBx1SRecord ::= SET {
 *    recordType           [0] IMPLICIT RecordType,
 *    mmsRelayAddress      [1] IPAddress,
 *    managingAddress      [2] IMPLICIT MMSAgentAddress,
 *    accessCorrelation    [3] AccessCorrelation OPTIONAL,
 *    contentType          [4] IMPLICIT OCTET STRING OPTIONAL,
 *    messageSize          [5] IMPLICIT INTEGER OPTIONAL,
 *    messageReference     [6] IMPLICIT OCTET STRING OPTIONAL,
 *    mmState              [7] IMPLICIT OCTET STRING OPTIONAL,
 *    mmFlags              [8] IMPLICIT OCTET STRING OPTIONAL,
 *    storeStatus          [9] IMPLICIT StoreStatus OPTIONAL,
 *    storeStatusText      [10] IMPLICIT OCTET STRING OPTIONAL,
 *    sequenceNumber       [11] IMPLICIT INTEGER OPTIONAL,
 *    timeStamp            [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordExtensions     [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    sGSNPLMNIdentifier   [14] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    rATType              [15] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone           [16] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMBx1SRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MMBox MM1 Store record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * User Agent that has sent the MM1_mmbox_store.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly accessCorrelation: OPTIONAL<AccessCorrelation>;
    /**
     * @summary `contentType`.
     * @description
     *
     * The Content Type of the MM as defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.7.
     *
     * Category OM. The content type of the MM content.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly contentType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `messageSize`.
     * @description
     *
     * This field contains the number of octets of the MM that is calculated as
     * specified in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.23.
     *
     * Category OM. The size of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly messageSize: OPTIONAL<INTEGER>;
    /**
     * @summary `messageReference`.
     * @description
     *
     * A reference as specified in TS 23.140 [206], e.g. URI, for the MM that can
     * be used for retrieving the MM from the recipient MMS Relay/Server.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.21.
     *
     * Category OM. A reference to the newly stored or updated MM, suitable for
     * subsequent usage (e.g.: with MM1_retrieve.REQ and MM1_mmbox_delete.REQ).
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mmState`.
     * @description
     *
     * Category OM. The state of the MM. If not present when the Message
     * Reference is from a notification request, defaults to New. No value is
     * assumed when the Message Reference refers to an already stored MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly mmState: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mmFlags`.
     * @description
     *
     * Category OC. If available, the keyword flags of the MM. There are no
     * defaults.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly mmFlags: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `storeStatus`.
     * @description
     *
     * Category OC. The status code of the request to store the MM as received
     * in the MM1_store.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly storeStatus: OPTIONAL<StoreStatus>;
    /**
     * @summary `storeStatusText`.
     * @description
     *
     * Category OC. This field includes a more detailed technical description
     * of the store status at the point in time when the CDR is generated. This
     * field is only present if the store status is present.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly storeStatusText: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Category OM. Record number.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
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
        contentType?: OPTIONAL<OCTET_STRING>,
        messageSize?: OPTIONAL<INTEGER>,
        messageReference?: OPTIONAL<OCTET_STRING>,
        mmState?: OPTIONAL<OCTET_STRING>,
        mmFlags?: OPTIONAL<OCTET_STRING>,
        storeStatus?: OPTIONAL<StoreStatus>,
        storeStatusText?: OPTIONAL<OCTET_STRING>,
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
        this.contentType = contentType;
        this.messageSize = messageSize;
        this.messageReference = messageReference;
        this.mmState = mmState;
        this.mmFlags = mmFlags;
        this.storeStatus = storeStatus;
        this.storeStatusText = storeStatusText;
        this.sequenceNumber = sequenceNumber;
        this.timeStamp = timeStamp;
        this.recordExtensions = recordExtensions;
        this.sGSNPLMNIdentifier = sGSNPLMNIdentifier;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("MMBx1SRecord.timeStamp violates SIZE constraint");
        }
        if (this.sGSNPLMNIdentifier !== undefined && (this.sGSNPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("MMBx1SRecord.sGSNPLMNIdentifier violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("MMBx1SRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("MMBx1SRecord.mSTimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MMBx1SRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MMBx1SRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBx1SRecord`.
     * @returns {MMBx1SRecord}
     */
    public static _from_object (_o: { [_K in keyof (MMBx1SRecord)]: (MMBx1SRecord)[_K] }): MMBx1SRecord {
        return new MMBx1SRecord(_o.recordType, _o.mmsRelayAddress, _o.managingAddress, _o.accessCorrelation, _o.contentType, _o.messageSize, _o.messageReference, _o.mmState, _o.mmFlags, _o.storeStatus, _o.storeStatusText, _o.sequenceNumber, _o.timeStamp, _o.recordExtensions, _o.sGSNPLMNIdentifier, _o.rATType, _o.mSTimeZone);
    }


}

/**
 * @summary The Leading Root Component Types of MMBx1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBx1SRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsRelayAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("managingAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessCorrelation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contentType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("messageSize", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("messageReference", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mmState", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mmFlags", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("storeStatus", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("storeStatusText", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sGSNPLMNIdentifier", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of MMBx1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBx1SRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBx1SRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBx1SRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBx1SRecord: $.ASN1Decoder<MMBx1SRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBx1SRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBx1SRecord (el: _Element): MMBx1SRecord {
    if (!_cached_decoder_for_MMBx1SRecord) { _cached_decoder_for_MMBx1SRecord = function (el: _Element): MMBx1SRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let mmsRelayAddress!: IPAddress;
    let managingAddress!: MMSAgentAddress;
    let accessCorrelation: OPTIONAL<AccessCorrelation>;
    let contentType: OPTIONAL<OCTET_STRING>;
    let messageSize: OPTIONAL<INTEGER>;
    let messageReference: OPTIONAL<OCTET_STRING>;
    let mmState: OPTIONAL<OCTET_STRING>;
    let mmFlags: OPTIONAL<OCTET_STRING>;
    let storeStatus: OPTIONAL<StoreStatus>;
    let storeStatusText: OPTIONAL<OCTET_STRING>;
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
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmState": (_el: _Element): void => { mmState = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mmFlags": (_el: _Element): void => { mmFlags = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<StoreStatus>(() => _decode_StoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "sGSNPLMNIdentifier": (_el: _Element): void => { sGSNPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBx1SRecord,
        _extension_additions_list_spec_for_MMBx1SRecord,
        _root_component_type_list_2_spec_for_MMBx1SRecord,
        undefined,
    );
    return new MMBx1SRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        mmsRelayAddress,
        managingAddress,
        accessCorrelation,
        contentType,
        messageSize,
        messageReference,
        mmState,
        mmFlags,
        storeStatus,
        storeStatusText,
        sequenceNumber,
        timeStamp,
        recordExtensions,
        sGSNPLMNIdentifier,
        rATType,
        mSTimeZone
    );
}; }
    return _cached_decoder_for_MMBx1SRecord(el);
}

let _cached_encoder_for_MMBx1SRecord: $.ASN1Encoder<MMBx1SRecord> | null = null;

/**
 * @summary Encodes a(n) MMBx1SRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBx1SRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MMBx1SRecord (value: MMBx1SRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBx1SRecord) { _cached_encoder_for_MMBx1SRecord = function (value: MMBx1SRecord, _elGetter: $.ASN1Encoder<MMBx1SRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.mmsRelayAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSAgentAddress, $.BER)(value.managingAddress, $.BER));
    if (value.accessCorrelation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCorrelation, $.BER)(value.accessCorrelation, $.BER));
    }
    if (value.contentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    }
    if (value.messageSize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    }
    if (value.messageReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    }
    if (value.mmState !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.mmState, $.BER));
    }
    if (value.mmFlags !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.mmFlags, $.BER));
    }
    if (value.storeStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_StoreStatus, $.BER)(value.storeStatus, $.BER));
    }
    if (value.storeStatusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.storeStatusText, $.BER));
    }
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.sGSNPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.sGSNPLMNIdentifier, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMBx1SRecord(value, elGetter);
}


/* eslint-enable */
