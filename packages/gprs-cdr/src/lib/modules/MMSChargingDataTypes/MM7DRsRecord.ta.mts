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
 * @summary MM7DRsRecord
 * @description
 *
 * MM7 Deliver Response record (MM7DRs-CDR).
 *
 * If enabled, a MM7 Deliver Response MM7DRs-CDR shall be produced in the
 * MMS R/S if and when the MMS R/S receives an MM7_deliver.RES from the
 * Recipient MMS VASP.
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
 * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7DRsRecord ::= SET {
 *    recordType              [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress   [1] IMPLICIT MMSRSAddress,
 *    messageID               [2] IMPLICIT OCTET STRING,
 *    recipientAddress        [3] IMPLICIT MMSAgentAddress,
 *    serviceCode             [4] IMPLICIT OCTET STRING OPTIONAL,
 *    requestStatusCode       [5] IMPLICIT RequestStatusCodeType OPTIONAL,
 *    statusText              [6] IMPLICIT OCTET STRING OPTIONAL,
 *    recordTimeStamp         [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber     [8] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions        [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7DRsRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record, see TS 32.250 [10].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.42.
     *
     * Category M. MM7 Deliver Response record.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @description
     *
     * Category M. IP address or domain name of the Recipient MMS R/S.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
     *
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: MMSRSAddress;
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
     *
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
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
     * Category M. The address of the MM recipient of the MM.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
     *
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
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
     * Category OC. Charging related information that is used directly for
     * billing purposes.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
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
     * Category OM. The status code of the associated MM7_deliver_REQ.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
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
     * Category OM. This field includes a more detailed technical status of the
     * message at the point in time when the CDR is generated.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
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
     * 3GPP TS 32.270 V19.0.0 clause 6.1.5.3.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: MMSRSAddress,
        messageID: OCTET_STRING,
        recipientAddress: MMSAgentAddress,
        serviceCode: OPTIONAL<OCTET_STRING>,
        requestStatusCode: OPTIONAL<RequestStatusCodeType>,
        statusText: OPTIONAL<OCTET_STRING>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.messageID = messageID;
        this.recipientAddress = recipientAddress;
        this.serviceCode = serviceCode;
        this.requestStatusCode = requestStatusCode;
        this.statusText = statusText;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if (this.recordTimeStamp !== undefined && (this.recordTimeStamp.length !== 9)) {
            throw new ASN1SizeError("MM7DRsRecord.recordTimeStamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("MM7DRsRecord.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MM7DRsRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7DRsRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7DRsRecord`.
     * @returns {MM7DRsRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7DRsRecord)]: (MM7DRsRecord)[_K] }): MM7DRsRecord {
        return new MM7DRsRecord(_o.recordType, _o.recipientMmsRSAddress, _o.messageID, _o.recipientAddress, _o.serviceCode, _o.requestStatusCode, _o.statusText, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of MM7DRsRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7DRsRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("requestStatusCode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("statusText", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MM7DRsRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7DRsRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7DRsRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7DRsRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7DRsRecord: $.ASN1Decoder<MM7DRsRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7DRsRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7DRsRecord (el: _Element): MM7DRsRecord {
    if (!_cached_decoder_for_MM7DRsRecord) { _cached_decoder_for_MM7DRsRecord = function (el: _Element): MM7DRsRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress!: MMSRSAddress;
    let messageID!: OCTET_STRING;
    let recipientAddress!: MMSAgentAddress;
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
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "serviceCode": (_el: _Element): void => { serviceCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "requestStatusCode": (_el: _Element): void => { requestStatusCode = $._decode_implicit<RequestStatusCodeType>(() => _decode_RequestStatusCodeType)(_el); },
        "statusText": (_el: _Element): void => { statusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7DRsRecord,
        _extension_additions_list_spec_for_MM7DRsRecord,
        _root_component_type_list_2_spec_for_MM7DRsRecord,
        undefined,
    );
    return new MM7DRsRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        messageID,
        recipientAddress,
        serviceCode,
        requestStatusCode,
        statusText,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MM7DRsRecord(el);
}

let _cached_encoder_for_MM7DRsRecord: $.ASN1Encoder<MM7DRsRecord> | null = null;

/**
 * @summary Encodes a(n) MM7DRsRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7DRsRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7DRsRecord (value: MM7DRsRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7DRsRecord) { _cached_encoder_for_MM7DRsRecord = function (value: MM7DRsRecord, _elGetter: $.ASN1Encoder<MM7DRsRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.messageID, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.serviceCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.serviceCode, $.BER));
    }
    if (value.requestStatusCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RequestStatusCodeType, $.BER)(value.requestStatusCode, $.BER));
    }
    if (value.statusText !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.statusText, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7DRsRecord(value, elGetter);
}


/* eslint-enable */
