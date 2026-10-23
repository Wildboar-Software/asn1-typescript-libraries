/* eslint-disable */
import {
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../ExposureFunctionAPIChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ExposureFunctionAPIChargingDataTypes/IPAddress.ta.mjs";
import { SCSASAddress, _decode_SCSASAddress, _encode_SCSASAddress } from "../ExposureFunctionAPIChargingDataTypes/SCSASAddress.ta.mjs";
import { APIDirection, _decode_APIDirection, _encode_APIDirection, _enum_for_APIDirection } from "../ExposureFunctionAPIChargingDataTypes/APIDirection.ta.mjs";
import { APINetworkServiceNode, _decode_APINetworkServiceNode, _encode_APINetworkServiceNode, _enum_for_APINetworkServiceNode } from "../ExposureFunctionAPIChargingDataTypes/APINetworkServiceNode.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../ExposureFunctionAPIChargingDataTypes/SubscriptionID.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ExposureFunctionAPIChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary EASCERecord
 * @description
 *
 * Exposure function API CDR (EA-SCE-CDR) from the SCEF. It
 * collects offline charging information for one northbound API
 * invocation or notification on T8.
 *
 * A single record is generated for each such event (clause
 * 5.2.3.2.1). Table 6.1.3.2.1 states that an exposure function
 * API record shall be produced for each API invocation to the
 * SCEF. Clause 5.2.1 also makes expiry of an operator-configured
 * time limit, expiry of an operator-configured invocation limit,
 * and management intervention chargeable events.
 *
 * The report to the CDF is Charging Data Request[Event]. Table
 * 6.3.2.1 allows only the Event operation type. T8 creation,
 * update and termination are separate events (table 5.2.2.1.1).
 *
 * Annex A allows charging characteristics, pre-provisioned on
 * the SCEF, to activate or deactivate this CDR and to set a time
 * limit, a data volume limit and a maximum number of API
 * invocations. Per API, the operator also configures the
 * charging method and whether message content is reported.
 *
 * `startTime` and `stopTime` are in this SET. Table 6.1.3.2.1
 * and TS 32.298 clause 5.1.2.5 do not describe them.
 *
 * 3GPP TS 32.254 V20.0.0 clauses 5.2.1, 5.2.2.1, 5.2.3.2,
 * 6.1.3.2 and 6.3.2, and annex A.
 *
 * @see https://www.3gpp.org/DynaReport/32254.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASCERecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    retransmission              [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID            [2] IMPLICIT UTF8String OPTIONAL,
 *    nodeId                      [3] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    sCEFID                      [4] IMPLICIT OCTET STRING OPTIONAL,
 *    sCEFAddress                 [5] IPAddress OPTIONAL,
 *    aPIIdentifier               [6] IMPLICIT OCTET STRING OPTIONAL,
 *    tLTRI                       [7] IMPLICIT INTEGER OPTIONAL,
 *    sCSASAddress                [9] IMPLICIT SCSASAddress OPTIONAL,
 *    eventTimestamp              [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    aPIInvocationTimestamp      [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    aPIDirection                [12] IMPLICIT APIDirection OPTIONAL,
 *    aPINetworkServiceNode       [13] IMPLICIT APINetworkServiceNode OPTIONAL,
 *    aPIContent                  [14] IMPLICIT UTF8String OPTIONAL,
 *    aPISize                     [15] IMPLICIT INTEGER OPTIONAL,
 *    aPIresultCode               [16] IMPLICIT INTEGER OPTIONAL,
 *    externalIdentifier          [17] IMPLICIT SubscriptionID OPTIONAL,
 *    localRecordSequenceNumber   [18] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions            [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    startTime                   [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                    [21] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EASCERecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. SCEF exposure function API record. Set this to
     * `eASCERecord` (120).
     *
     * On Rf, Record Type is bound to Node Functionality
     * (Node-Functionality), which identifies the type of record
     * (tables 6.3.1.1.1 and 6.4.1).
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1 and clause 6.4.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.14.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * Category Oc. Present when information from retransmitted
     * Accounting Requests has been used in this CDR. The value is
     * NULL. TS 32.298 describes those requests as Diameter ACRs.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.15.
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Category OM. Indicates that the CDR applies to the exposure
     * function API service. Bound to Service-Context-Id
     * (table 6.4.1).
     *
     * When Diameter accounting supplied the value, it is the
     * Service Context Id: the service, subsystem or domain, and
     * the release. The AVP contents are specified in TS 32.299.
     *
     * On the Charging Data Request, Operation Token (category OM)
     * identifies the Exposure Function API domain service. Table
     * 6.4.1 does not map Operation Token onto this field. It
     * binds Service Context Id to Service-Context-Id.
     *
     * 3GPP TS 32.254 V20.0.0 clauses 6.1.1.2 and 6.1.3.2 and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeId`.
     * @description
     *
     * Category OMM, as printed in table 6.1.3.2.1. Name of the
     * recording entity. One to 20 IA5 characters. This
     * specification does not define the category OMM.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.12.
     *
     * @public
     * @readonly
     */
    readonly nodeId: OPTIONAL<IA5String>;
    /**
     * @summary `sCEFID`.
     * @description
     *
     * Category M. Identity of the SCEF used for this API
     * invocation. The parameter definition calls it the Diameter
     * identity of that SCEF. In the Exposure Function API
     * Information the same element is category Oc. Bound to the
     * SCEF-ID AVP (table 6.4.1).
     *
     * TS 32.254 does not specify how that identity is packed into
     * this octet string.
     *
     * 3GPP TS 32.254 V20.0.0 tables 6.1.3.2.1, 6.3.1.2.1 and 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.17.
     *
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sCEFAddress`.
     * @description
     *
     * Category Oc. IP address of the SCEF. A charging event
     * reported to the CDF includes this address (clause 5.2.2.1).
     * Bound to the SCEF-Address AVP (table 6.4.1).
     *
     * 3GPP TS 32.254 V20.0.0 clause 5.2.2.1 and table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.16.
     *
     * @public
     * @readonly
     */
    readonly sCEFAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `aPIIdentifier`.
     * @description
     *
     * Category M. Identity of the API for this invocation. In the
     * Exposure Function API Information the same element is
     * category OM. Bound to the API-Identifier AVP (table 6.4.1).
     *
     * Charging behaviour, including whether message content is
     * reported, is configured per API (annex A). TS 32.254 does
     * not specify the octet contents of the identifier.
     *
     * 3GPP TS 32.254 V20.0.0 tables 6.1.3.2.1, 6.3.1.2.1 and 6.4.1,
     * and annex A.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.4.
     *
     * @public
     * @readonly
     */
    readonly aPIIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tLTRI`.
     * @description
     *
     * Category Oc. T8 Long Term Transaction Reference ID. It
     * identifies the T8 transaction between the SCEF and the
     * SCS/AS, and both store it for the duration of the
     * transaction (clause 5.2.1).
     *
     * The information element is the reference for a long-term T8
     * transaction, for example NIDD configuration, a group
     * message request, or Monitoring Event configuration. Bound
     * to the TLTRI AVP (table 6.4.1).
     *
     * 3GPP TS 32.254 V20.0.0 clauses 5.2.1 and 6.3.1.2 and
     * table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.19.
     *
     * @public
     * @readonly
     */
    readonly tLTRI: OPTIONAL<INTEGER>;
    /**
     * @summary `sCSASAddress`.
     * @description
     *
     * Category M. Address of the SCS/AS. The CDR table describes
     * it as the IP address of the SCS/AS. The information element
     * (category OM) is the IP address of the SCS/AS that invokes
     * the API over T8. Bound to the SCS/AS-Address AVP
     * (table 6.4.1).
     *
     * `SCSASAddress` also carries `sCSRealm`. TS 32.254 and
     * TS 32.298 clause 5.1.2.5.18 describe the IP address only.
     *
     * The SCS Identifier identifies the subscriber (clause 5.2.1
     * and table 6.3.1.1.1). This field is the SCS/AS address.
     *
     * 3GPP TS 32.254 V20.0.0 clauses 5.2.1 and 6.3.1.2 and
     * tables 6.1.3.2.1 and 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.18.
     *
     * @public
     * @readonly
     */
    readonly sCSASAddress: OPTIONAL<SCSASAddress>;
    /**
     * @summary `eventTimestamp`.
     * @description
     *
     * Category M. Time stamp of the event reported for generation
     * of charging information from the SCEF for the northbound
     * exposure function API. Clause 5.1.0 requires a timestamp of
     * the invocation or notification. Bound to Event-Timestamp
     * (table 6.4.1).
     *
     * The value is nine octets. TS 32.254 does not define the
     * octet layout.
     *
     * 3GPP TS 32.254 V20.0.0 clauses 5.1.0 and 6.1.3.2 and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.9.
     *
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPIInvocationTimestamp`.
     * @description
     *
     * Time stamp when the API invocation request is submitted to
     * the SCEF from the SCS/AS. The category cell in table
     * 6.1.3.2.1 is empty. The information element is category Oc.
     * Bound to API-Invocation-Timestamp (table 6.4.1).
     *
     * The value is nine octets. TS 32.254 does not define the
     * octet layout.
     *
     * 3GPP TS 32.254 V20.0.0 tables 6.1.3.2.1, 6.3.1.2.1 and 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.5.
     *
     * @public
     * @readonly
     */
    readonly aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aPIDirection`.
     * @description
     *
     * Category Oc. Invocation or notification. See `APIDirection`.
     * Bound to API-Direction (table 6.4.1).
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1 and clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly aPIDirection: OPTIONAL<APIDirection>;
    /**
     * @summary `aPINetworkServiceNode`.
     * @description
     *
     * Category Oc. Network element that triggers the API
     * notification, as defined in TS 23.682. The table gives SGSN
     * and RCAF as examples. See `APINetworkServiceNode`. Bound to
     * API-Network-Service-Node (table 6.4.1).
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1 and clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.6.
     *
     * @public
     * @readonly
     */
    readonly aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>;
    /**
     * @summary `aPIContent`.
     * @description
     *
     * Category Oc. API content used in the T8 transaction for the
     * invocation request, if available. The table gives location
     * and Monitoring Type as examples. Clause 5.1.0 requires
     * northbound API related information, for example location,
     * to be collected.
     *
     * Whether message content is reported is part of the per-API
     * charging configuration (annex A). Bound to API-Content
     * (table 6.4.1). TS 32.254 does not define the string format.
     *
     * 3GPP TS 32.254 V20.0.0 clauses 5.1.0 and 6.1.3.2,
     * table 6.4.1 and annex A.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.2.
     *
     * @public
     * @readonly
     */
    readonly aPIContent: OPTIONAL<UTF8String>;
    /**
     * @summary `aPISize`.
     * @description
     *
     * Category Oc. Size of the API payload. Bound to API-Size
     * (table 6.4.1). TS 32.254 does not state the unit.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.8.
     *
     * @public
     * @readonly
     */
    readonly aPISize: OPTIONAL<INTEGER>;
    /**
     * @summary `aPIresultCode`.
     * @description
     *
     * Category Oc. Result of the API invocation. Bound to
     * API-Result-Code (table 6.4.1). TS 32.254 does not define
     * the code values.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.7.
     *
     * @public
     * @readonly
     */
    readonly aPIresultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * Category Oc. External identifier of the served party
     * associated to the IMSI, the MSISDN, or an External Group
     * ID, if available. This is the served party. The API invoker
     * is identified by the SCS Identifier (clause 5.2.1). Bound
     * to External-Identifier (table 6.4.1).
     *
     * The value is a `SubscriptionID`. TS 32.254 does not say
     * which `subscriptionIDType` corresponds to the MSISDN, the
     * IMSI, or the External Group ID.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1, clause 6.3.1.2 and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.10.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @description
     *
     * Category OM. Consecutive record number created by this
     * node. The number is allocated sequentially across all CDR
     * types. The range is 0 to 4294967295.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.11.
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category Oc. Network operator or manufacturer specific
     * extensions. Present when an extension exists.
     *
     * 3GPP TS 32.254 V20.0.0 table 6.1.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.5.13.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `startTime`.
     * @description
     *
     * Nine-octet timestamp included in this SET. Table 6.1.3.2.1
     * and TS 32.298 clause 5.1.2.5 do not describe it.
     *
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `stopTime`.
     * @description
     *
     * Nine-octet timestamp included in this SET. Table 6.1.3.2.1
     * and TS 32.298 clause 5.1.2.5 do not describe it.
     *
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        nodeId: OPTIONAL<IA5String>,
        sCEFID: OPTIONAL<OCTET_STRING>,
        sCEFAddress: OPTIONAL<IPAddress>,
        aPIIdentifier: OPTIONAL<OCTET_STRING>,
        tLTRI: OPTIONAL<INTEGER>,
        sCSASAddress: OPTIONAL<SCSASAddress>,
        eventTimestamp: OPTIONAL<OCTET_STRING>,
        aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>,
        aPIDirection: OPTIONAL<APIDirection>,
        aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>,
        aPIContent: OPTIONAL<UTF8String>,
        aPISize: OPTIONAL<INTEGER>,
        aPIresultCode: OPTIONAL<INTEGER>,
        externalIdentifier: OPTIONAL<SubscriptionID>,
        localRecordSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.nodeId = nodeId;
        this.sCEFID = sCEFID;
        this.sCEFAddress = sCEFAddress;
        this.aPIIdentifier = aPIIdentifier;
        this.tLTRI = tLTRI;
        this.sCSASAddress = sCSASAddress;
        this.eventTimestamp = eventTimestamp;
        this.aPIInvocationTimestamp = aPIInvocationTimestamp;
        this.aPIDirection = aPIDirection;
        this.aPINetworkServiceNode = aPINetworkServiceNode;
        this.aPIContent = aPIContent;
        this.aPISize = aPISize;
        this.aPIresultCode = aPIresultCode;
        this.externalIdentifier = externalIdentifier;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.startTime = startTime;
        this.stopTime = stopTime;
    
        if (this.nodeId !== undefined && (this.nodeId.length < 1 || this.nodeId.length > 20)) {
            throw new ASN1SizeError("EASCERecord.nodeId violates SIZE constraint");
        }
        if (this.eventTimestamp !== undefined && (this.eventTimestamp.length !== 9)) {
            throw new ASN1SizeError("EASCERecord.eventTimestamp violates SIZE constraint");
        }
        if (this.aPIInvocationTimestamp !== undefined && (this.aPIInvocationTimestamp.length !== 9)) {
            throw new ASN1SizeError("EASCERecord.aPIInvocationTimestamp violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("EASCERecord.localRecordSequenceNumber violates INTEGER range");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("EASCERecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("EASCERecord.stopTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EASCERecord
     * @description
     * 
     * This takes an `object` and converts it to a `EASCERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASCERecord`.
     * @returns {EASCERecord}
     */
    public static _from_object (_o: { [_K in keyof (EASCERecord)]: (EASCERecord)[_K] }): EASCERecord {
        return new EASCERecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.nodeId, _o.sCEFID, _o.sCEFAddress, _o.aPIIdentifier, _o.tLTRI, _o.sCSASAddress, _o.eventTimestamp, _o.aPIInvocationTimestamp, _o.aPIDirection, _o.aPINetworkServiceNode, _o.aPIContent, _o.aPISize, _o.aPIresultCode, _o.externalIdentifier, _o.localRecordSequenceNumber, _o.recordExtensions, _o.startTime, _o.stopTime);
    }

        /**
         * @summary The enum used as the type of the component `aPIDirection`
         * @public
         * @static
         */

    public static _enum_for_aPIDirection = _enum_for_APIDirection;        /**
         * @summary The enum used as the type of the component `aPINetworkServiceNode`
         * @public
         * @static
         */

    public static _enum_for_aPINetworkServiceNode = _enum_for_APINetworkServiceNode;
}

/**
 * @summary The Leading Root Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASCERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nodeId", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sCEFAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aPIIdentifier", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("tLTRI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sCSASAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aPIInvocationTimestamp", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("aPIDirection", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("aPINetworkServiceNode", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("aPIContent", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("aPISize", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("aPIresultCode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASCERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASCERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASCERecord: $.ASN1Decoder<EASCERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASCERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASCERecord (el: _Element): EASCERecord {
    if (!_cached_decoder_for_EASCERecord) { _cached_decoder_for_EASCERecord = function (el: _Element): EASCERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let nodeId: OPTIONAL<IA5String>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    let sCEFAddress: OPTIONAL<IPAddress>;
    let aPIIdentifier: OPTIONAL<OCTET_STRING>;
    let tLTRI: OPTIONAL<INTEGER>;
    let sCSASAddress: OPTIONAL<SCSASAddress>;
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let aPIInvocationTimestamp: OPTIONAL<OCTET_STRING>;
    let aPIDirection: OPTIONAL<APIDirection>;
    let aPINetworkServiceNode: OPTIONAL<APINetworkServiceNode>;
    let aPIContent: OPTIONAL<UTF8String>;
    let aPISize: OPTIONAL<INTEGER>;
    let aPIresultCode: OPTIONAL<INTEGER>;
    let externalIdentifier: OPTIONAL<SubscriptionID>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nodeId": (_el: _Element): void => { nodeId = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sCEFAddress": (_el: _Element): void => { sCEFAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "aPIIdentifier": (_el: _Element): void => { aPIIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLTRI": (_el: _Element): void => { tLTRI = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sCSASAddress": (_el: _Element): void => { sCSASAddress = $._decode_implicit<SCSASAddress>(() => _decode_SCSASAddress)(_el); },
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPIInvocationTimestamp": (_el: _Element): void => { aPIInvocationTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aPIDirection": (_el: _Element): void => { aPIDirection = $._decode_implicit<APIDirection>(() => _decode_APIDirection)(_el); },
        "aPINetworkServiceNode": (_el: _Element): void => { aPINetworkServiceNode = $._decode_implicit<APINetworkServiceNode>(() => _decode_APINetworkServiceNode)(_el); },
        "aPIContent": (_el: _Element): void => { aPIContent = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "aPISize": (_el: _Element): void => { aPISize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aPIresultCode": (_el: _Element): void => { aPIresultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_EASCERecord,
        _extension_additions_list_spec_for_EASCERecord,
        _root_component_type_list_2_spec_for_EASCERecord,
        undefined,
    );
    return new EASCERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        nodeId,
        sCEFID,
        sCEFAddress,
        aPIIdentifier,
        tLTRI,
        sCSASAddress,
        eventTimestamp,
        aPIInvocationTimestamp,
        aPIDirection,
        aPINetworkServiceNode,
        aPIContent,
        aPISize,
        aPIresultCode,
        externalIdentifier,
        localRecordSequenceNumber,
        recordExtensions,
        startTime,
        stopTime
    );
}; }
    return _cached_decoder_for_EASCERecord(el);
}

let _cached_encoder_for_EASCERecord: $.ASN1Encoder<EASCERecord> | null = null;

/**
 * @summary Encodes a(n) EASCERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASCERecord, encoded as an ASN.1 Element.
 */
export
function _encode_EASCERecord (value: EASCERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASCERecord) { _cached_encoder_for_EASCERecord = function (value: EASCERecord, _elGetter: $.ASN1Encoder<EASCERecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.nodeId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.nodeId, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    if (value.sCEFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_IPAddress, $.BER)(value.sCEFAddress, $.BER));
    }
    if (value.aPIIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.aPIIdentifier, $.BER));
    }
    if (value.tLTRI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.tLTRI, $.BER));
    }
    if (value.sCSASAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCSASAddress, $.BER)(value.sCSASAddress, $.BER));
    }
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.aPIInvocationTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.aPIInvocationTimestamp, $.BER));
    }
    if (value.aPIDirection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_APIDirection, $.BER)(value.aPIDirection, $.BER));
    }
    if (value.aPINetworkServiceNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_APINetworkServiceNode, $.BER)(value.aPINetworkServiceNode, $.BER));
    }
    if (value.aPIContent !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.aPIContent, $.BER));
    }
    if (value.aPISize !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.aPISize, $.BER));
    }
    if (value.aPIresultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.aPIresultCode, $.BER));
    }
    if (value.externalIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_SubscriptionID, $.BER)(value.externalIdentifier, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_EASCERecord(value, elGetter);
}


/* eslint-enable */
