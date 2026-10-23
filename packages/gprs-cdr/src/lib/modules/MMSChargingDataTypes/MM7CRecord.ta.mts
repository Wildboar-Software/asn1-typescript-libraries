/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { RequestStatusCodeType, _decode_RequestStatusCodeType, _encode_RequestStatusCodeType } from "../MMSChargingDataTypes/RequestStatusCodeType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MM7CRecord
 * @description
 *
 * MM7 Cancel record (MM7C-CDR).
 *
 * If enabled, an MM7 Cancel MM7C-CDR shall be produced in the MMS R/S if
 * and when the MMS R/S has sent an MM7_cancel.RES to the MMS VASP.
 *
 * Produced for a VASP transaction on MM7. Unless otherwise stated,
 * parameters are copied from the corresponding MM7 message (clause
 * 6.1.5.0). The VASP may supply service codes that are passed through to
 * billing, and may indicate which party is expected to be charged (clause
 * 5.1.4).
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
 * TS 32.270 does not describe `serviceCode` on this record.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7CRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    originatorMmsRSAddress   [1] IMPLICIT MMSRSAddress,
 *    vaspID                   [2] IMPLICIT OCTET STRING,
 *    vasID                    [3] IMPLICIT OCTET STRING,
 *    messageID                [4] IMPLICIT OCTET STRING,
 *    originatorAddress        [5] IMPLICIT MMSAgentAddress,
 *    serviceCode              [6] IMPLICIT OCTET STRING OPTIONAL,
 *    requestStatusCode        [7] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText               [8] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp          [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber      [10] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions         [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7CRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MM7 Cancel record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `originatorMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Recipient MMS R/S.
     * The table names this parameter "Recipient MMS Relay/Server Address".
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly originatorMmsRSAddress: MMSRSAddress;
    /**
     * @summary `vaspID`.
     * @description
     *
     * This field specifies the identification of the originating application as
     * defined in TS 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.62.
     *
     * Category M. Identifier of the VASP for this MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly vaspID: OCTET_STRING;
    /**
     * @summary `vasID`.
     * @description
     *
     * This field specifies the identification of the VASP as defined in TS
     * 23.140 [206].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.61.
     *
     * Category M. Identifier of the originating application.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly vasID: OCTET_STRING;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `originatorAddress`.
     * @description
     *
     * This field contains an originator MMS User Agent address. The MMS supports
     * the use of E-Mail addresses (RFC 822 [400]) or MSISDN (E.164 [308]).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.30.
     *
     * Category M. The address of the MM Originator.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly originatorAddress: MMSAgentAddress;
    /**
     * @summary `serviceCode`.
     * @description
     *
     * This field contains charging information provided by the VASP to the MMS
     * R/S for use by the billing system to properly bill the user for the
     * service being supplied. The usage of the "service code" is, in the
     * release, open to any usage envisioned by the operators, service providers
     * or MMS Relay/Server vendors. In this release only the format, but not the
     * content of the "service code" field is defined.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.53.
     *
     * @public
     * @readonly
     */
    readonly serviceCode: OPTIONAL<OCTET_STRING>;
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
     * Category OM. The status code of the associated MM7_cancel.REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
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
     * MM7_cancel.RES corresponding to the Request Status Code. Present only if
     * provided in the MM7_cancel.RES.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
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
     * Category OM. Record number.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
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
     * record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.4.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        originatorMmsRSAddress: MMSRSAddress,
        vaspID: OCTET_STRING,
        vasID: OCTET_STRING,
        messageID: OCTET_STRING,
        originatorAddress: MMSAgentAddress,
        serviceCode: OPTIONAL<OCTET_STRING>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.originatorMmsRSAddress = originatorMmsRSAddress;
        this.vaspID = vaspID;
        this.vasID = vasID;
        this.messageID = messageID;
        this.originatorAddress = originatorAddress;
        this.serviceCode = serviceCode;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MM7CRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MM7CRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MM7CRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7CRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7CRecord`.
     * @returns {MM7CRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7CRecord)]: (MM7CRecord)[_K] }): MM7CRecord {
        return new MM7CRecord(_o.recordType, _o.originatorMmsRSAddress, _o.vaspID, _o.vasID, _o.messageID, _o.originatorAddress, _o.serviceCode, _o.requestStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of MM7CRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7CRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("vaspID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vasID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceCode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of MM7CRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7CRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7CRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7CRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7CRecord: $.ASN1Decoder<MM7CRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7CRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7CRecord (el: _Element): MM7CRecord {
    if (!_cached_decoder_for_MM7CRecord) { _cached_decoder_for_MM7CRecord = function (el: _Element): MM7CRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let originatorMmsRSAddress!: MMSRSAddress;
    let vaspID!: OCTET_STRING;
    let vasID!: OCTET_STRING;
    let messageID!: OCTET_STRING;
    let originatorAddress!: MMSAgentAddress;
    let serviceCode: OPTIONAL<OCTET_STRING>;
    let requestStatusCode: OPTIONAL<RequestStatusCodeType>;
    let statusText: OPTIONAL<OCTET_STRING>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "originatorMmsRSAddress": (_el: _Element): void => { originatorMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "vaspID": (_el: _Element): void => { vaspID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vasID": (_el: _Element): void => { vasID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "serviceCode": (_el: _Element): void => { serviceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7CRecord,
        _extension_additions_list_spec_for_MM7CRecord,
        _root_component_type_list_2_spec_for_MM7CRecord,
        undefined,
    );
    return new MM7CRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        originatorMmsRSAddress,
        vaspID,
        vasID,
        messageID,
        originatorAddress,
        serviceCode,
        requestStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MM7CRecord(el);
}

let _cached_encoder_for_MM7CRecord: $.ASN1Encoder<MM7CRecord> | null = null;

/**
 * @summary Encodes a(n) MM7CRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7CRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7CRecord (value: MM7CRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7CRecord) { _cached_encoder_for_MM7CRecord = function (value: MM7CRecord, _elGetter: $.ASN1Encoder<MM7CRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.originatorMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.vaspID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.vasID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    if (value.serviceCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.serviceCode, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
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
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7CRecord(value, elGetter);
}


/* eslint-enable */
