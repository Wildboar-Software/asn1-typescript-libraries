/* eslint-disable */
import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../CAP-datatypes/AdditionalCallingPartyNumber.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../CAP-datatypes/BearerCapability.ta.mjs";
import { CGEncountered, _decode_CGEncountered, _encode_CGEncountered } from "../CAP-datatypes/CGEncountered.ta.mjs";
import { type CalledPartyBCDNumber, _decode_CalledPartyBCDNumber, _encode_CalledPartyBCDNumber } from "../CAP-datatypes/CalledPartyBCDNumber.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../CAP-datatypes/CalledPartyNumber.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../CAP-datatypes/CallingPartyNumber.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../CAP-datatypes/Carrier.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "../CAP-datatypes/Cause.ta.mjs";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../CAP-datatypes/EventTypeBCSM.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../CAP-datatypes/IPSSPCapabilities.ta.mjs";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../CAP-datatypes/LocationNumber.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../CAP-datatypes/OriginalCalledPartyID.ta.mjs";
import { type RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../CAP-datatypes/RedirectingPartyID.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../CAP-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { type TimeAndTimezone, _decode_TimeAndTimezone, _encode_TimeAndTimezone } from "../CAP-datatypes/TimeAndTimezone.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
import { CUG_Index, _decode_CUG_Index, _encode_CUG_Index } from "../MAP-MS-DataTypes/CUG-Index.ta.mjs";
// export { CUG_Index, _decode_CUG_Index, _encode_CUG_Index } from "../MAP-MS-DataTypes/CUG-Index.ta.mjs";
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { SubscriberState, _decode_SubscriberState, _encode_SubscriberState } from "../MAP-MS-DataTypes/SubscriberState.ta.mjs";
// export { SubscriberState, _decode_SubscriberState, _encode_SubscriberState } from "../MAP-MS-DataTypes/SubscriberState.ta.mjs";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
// export { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
// export { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { InitialDPArgExtension, _decode_InitialDPArgExtension, _encode_InitialDPArgExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/InitialDPArgExtension.ta.mjs";
// export { InitialDPArgExtension, _decode_InitialDPArgExtension, _encode_InitialDPArgExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/InitialDPArgExtension.ta.mjs";


/**
 * @summary InitialDPArg
 * @description
 * 
 * Argument of InitialDP: service key and call/subscriber data available at the
 * TDP-R, sent so gsmSCF can instruct how to complete the call. (3GPP TS 29.078
 * V19.0.0 clause 11.20.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     serviceKey                [0] ServiceKey    ,
 *     calledPartyNumber            [2] CalledPartyNumber {bound}        OPTIONAL,
 *     callingPartyNumber            [3] CallingPartyNumber {bound}        OPTIONAL,
 *     callingPartysCategory        [5] CallingPartysCategory            OPTIONAL,
 *     cGEncountered            [7] CGEncountered                OPTIONAL,
 *     iPSSPCapabilities            [8] IPSSPCapabilities {bound}        OPTIONAL,
 *     locationNumber            [10] LocationNumber {bound}            OPTIONAL,
 *     originalCalledPartyID        [12] OriginalCalledPartyID {bound}        OPTIONAL,
 *     extensions                [15] Extensions {bound}            OPTIONAL,
 *     highLayerCompatibility        [23] HighLayerCompatibility            OPTIONAL,
 *     additionalCallingPartyNumber    [25] AdditionalCallingPartyNumber {bound}    OPTIONAL,
 *     bearerCapability            [27] BearerCapability {bound}        OPTIONAL,
 *     eventTypeBCSM            [28] EventTypeBCSM                OPTIONAL,
 *     redirectingPartyID            [29] RedirectingPartyID {bound}        OPTIONAL,
 *     redirectionInformation        [30] RedirectionInformation            OPTIONAL,
 *     cause                [17] Cause {bound}                OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [32] ServiceInteractionIndicatorsTwo    OPTIONAL,
 *     carrier                [37] Carrier {bound}            OPTIONAL,
 *     cug-Index                [45] CUG-Index                OPTIONAL,
 *     cug-Interlock            [46] CUG-Interlock                OPTIONAL,
 *     cug-OutgoingAccess            [47] NULL                    OPTIONAL,
 *     iMSI                [50] IMSI                    OPTIONAL,
 *     subscriberState            [51] SubscriberState            OPTIONAL,
 *     locationInformation            [52] LocationInformation            OPTIONAL,
 *     ext-basicServiceCode        [53] Ext-BasicServiceCode            OPTIONAL,
 *     callReferenceNumber            [54] CallReferenceNumber            OPTIONAL,
 *     mscAddress                [55] ISDN-AddressString            OPTIONAL,
 *     calledPartyBCDNumber        [56] CalledPartyBCDNumber {bound}        OPTIONAL,
 *     timeAndTimezone            [57] TimeAndTimezone {bound}        OPTIONAL,
 *     callForwardingSS-Pending        [58] NULL                    OPTIONAL,
 *     initialDPArgExtension        [59] InitialDPArgExtension {bound}        OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class InitialDPArg {
    constructor (
        /**
         * @summary `serviceKey`.
         * @description
         *
         * Identifies the requested IN service / SLP inside the gsmSCF; not used
         * for SCP addressing. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `calledPartyNumber`.
         * @description
         *
         * Number identifying the called party in the forward direction (ETSI EN
         * 300 356-1). Sent only for MT, MF, mobile originating on unsuccessful
         * TDP, and trunk originating. For trunk originating, the ST (end of
         * pulsing) is included if received or the MSC has determined the called
         * number is complete. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary `callingPartyNumber`.
         * @description
         *
         * Calling party number identifying the calling party or origin of the
         * call (ETSI EN 300 356-1). (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `callingPartysCategory`.
         * @description
         *
         * Type of calling party (e.g. operator, pay phone, ordinary
         * subscriber); ETSI EN 300 356-1 Calling Party Category. (3GPP TS
         * 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        /**
         * @summary `cGEncountered`.
         * @description
         *
         * Type of call gapping this call was subjected to, if any. (3GPP TS
         * 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly cGEncountered: OPTIONAL<CGEncountered>,
        /**
         * @summary `iPSSPCapabilities`.
         * @description
         *
         * Which gsmSRF resources supported in the VMSC or GMSC are attached and
         * available. Absent means a colocated gsmSRF is not supported. Present
         * means colocated gsmSRF can play announcements via
         * elementaryMessageIDs and variableMessages, play tones, and collect
         * DTMF; other capabilities are in the parameter itself. (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>,
        /**
         * @summary `locationNumber`.
         * @description
         *
         * Geographical area address for mobility services (ITU-T Q.762), used
         * when `callingPartyNumber` has no geographical location (e.g.
         * origin-dependent routing for a mobile calling party). (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>,
        /**
         * @summary `originalCalledPartyID`.
         * @description
         *
         * If the call met call forwarding on the route to gsmSSF, carries the
         * dialled digits (EN 300 356-1 Original Called Number). (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `highLayerCompatibility`.
         * @description
         *
         * High-layer compatibility used to determine the ISDN teleservice of a
         * connected ISDN terminal; may also be transported by ISUP (e.g. ATP,
         * ITU-T Q.763). (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>,
        /**
         * @summary `additionalCallingPartyNumber`.
         * @description
         *
         * Calling party number provided by the calling user's access signalling
         * (e.g. a PBX). (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>,
        /**
         * @summary `bearerCapability`.
         * @description
         *
         * Bearer capability or transmission-medium requirements. Included only
         * if ISUP User Service Information is available. Choice `bearerCap`
         * holds USI; if both USI and USI Prime are available, `bearerCap` holds
         * User Service Information Prime. (3GPP TS 29.078 V19.0.0 clause
         * 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `eventTypeBCSM`.
         * @description
         *
         * Armed BCSM DP event that resulted in this InitialDP. (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: OPTIONAL<EventTypeBCSM>,
        /**
         * @summary `redirectingPartyID`.
         * @description
         *
         * Last directory number the call was redirected from. (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        /**
         * @summary `redirectionInformation`.
         * @description
         *
         * Forwarding-related information such as the redirecting counter (ITU-T
         * Q.763 Redirection Information). (3GPP TS 29.078 V19.0.0 clause
         * 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>,
        /**
         * @summary `cause`.
         * @description
         *
         * Release cause that triggered the event. For Route_Select_Failure:
         * FailureCause if available. For T_Busy: ISUP release cause (e.g.
         * Subscriber absent 20, User busy 17), MAP error mapped to ISUP, or
         * forwarding-reason mapping from 3GPP TS 23.078. (3GPP TS 29.078
         * V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<Cause>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @description
         *
         * Resolves interactions between CAMEL-based and network-based services.
         * (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `carrier`.
         * @description
         *
         * Carrier selection field (how the carrier is provided, e.g.
         * pre-subscribed) followed by carrier ID associated with the calling
         * subscriber (MO or trunk originating), the called subscriber (MT), or
         * the forwarding subscriber (MF). Included at gsmSSF operator
         * discretion. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `cug_Index`.
         * @description
         *
         * Selects a CUG for an outgoing call at the user, or indicates an
         * incoming CUG call to the user. (3GPP TS 29.078 V19.0.0 clause
         * 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly cug_Index: OPTIONAL<CUG_Index>,
        /**
         * @summary `cug_Interlock`.
         * @description
         *
         * Uniquely identifies a CUG within a network. (3GPP TS 29.078 V19.0.0
         * clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly cug_Interlock: OPTIONAL<CUG_Interlock>,
        /**
         * @summary `cug_OutgoingAccess`.
         * @description
         *
         * Presence means the calling user has subscribed to outgoing access
         * inter-CUG accessibility. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly cug_OutgoingAccess: OPTIONAL<NULL>,
        /**
         * @summary `iMSI`.
         * @description
         *
         * IMSI of the mobile subscriber for which the service is invoked. (3GPP
         * TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `subscriberState`.
         * @description
         *
         * State of the mobile subscriber: busy, idle, or not reachable. (3GPP
         * TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly subscriberState: OPTIONAL<SubscriberState>,
        /**
         * @summary `locationInformation`.
         * @description
         *
         * Location of the MS and the age of that information.
         * UserCSGInformation is conveyed here (encoding: 3GPP TS 29.002). (3GPP
         * TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly locationInformation: OPTIONAL<LocationInformation>,
        /**
         * @summary `ext_basicServiceCode`.
         * @description
         *
         * Basic Service Code. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `callReferenceNumber`.
         * @description
         *
         * Call reference number assigned to the call by the CCF. (3GPP TS
         * 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly callReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `mscAddress`.
         * @description
         *
         * mscId assigned to the MSC. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly mscAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `calledPartyBCDNumber`.
         * @description
         *
         * Number identifying the called party in the forward direction; may
         * include service-selection information including * and #. (3GPP TS
         * 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly calledPartyBCDNumber: OPTIONAL<CalledPartyBCDNumber>,
        /**
         * @summary `timeAndTimezone`.
         * @description
         *
         * Time gsmSSF was triggered, and the time zone of the invoking gsmSSF.
         * Spec name `time&Timezone`. (3GPP TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly timeAndTimezone: OPTIONAL<TimeAndTimezone>,
        /**
         * @summary `callForwardingSS_Pending`.
         * @description
         *
         * Presence means a forwarded-to-number was received and the call will
         * be forwarded due to Call Forwarding SS in the GMSC or VMSC unless
         * gsmSCF instructs otherwise. (3GPP TS 29.078 V19.0.0 clause
         * 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly callForwardingSS_Pending: OPTIONAL<NULL>,
        /**
         * @summary `initialDPArgExtension`.
         * @description
         *
         * Further InitialDP parameters (GMSC address, forwarding destination,
         * MS Classmark 2, IMEI, CAMEL phases, SCUDIF compatibilities,
         * EDS/CollectInformation/ReleaseCall extension flags, UU-Data). (3GPP
         * TS 29.078 V19.0.0 clause 11.20.1.1).
         *
         * @public
         * @readonly
         */
        readonly initialDPArgExtension: OPTIONAL<InitialDPArgExtension>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitialDPArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPArg`.
     * @returns {InitialDPArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPArg)]: (InitialDPArg)[_K] }): InitialDPArg {
        return new InitialDPArg(_o.serviceKey, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartysCategory, _o.cGEncountered, _o.iPSSPCapabilities, _o.locationNumber, _o.originalCalledPartyID, _o.extensions, _o.highLayerCompatibility, _o.additionalCallingPartyNumber, _o.bearerCapability, _o.eventTypeBCSM, _o.redirectingPartyID, _o.redirectionInformation, _o.cause, _o.serviceInteractionIndicatorsTwo, _o.carrier, _o.cug_Index, _o.cug_Interlock, _o.cug_OutgoingAccess, _o.iMSI, _o.subscriberState, _o.locationInformation, _o.ext_basicServiceCode, _o.callReferenceNumber, _o.mscAddress, _o.calledPartyBCDNumber, _o.timeAndTimezone, _o.callForwardingSS_Pending, _o.initialDPArgExtension, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cGEncountered", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("additionalCallingPartyNumber", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("eventTypeBCSM", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("cug-Index", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("cug-Interlock", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("subscriberState", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("ext-basicServiceCode", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("mscAddress", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("calledPartyBCDNumber", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("timeAndTimezone", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("callForwardingSS-Pending", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("initialDPArgExtension", true, $.hasTag(_TagClass.context, 59))
];

/**
 * @summary The Trailing Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialDPArg: $.ASN1Decoder<InitialDPArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPArg (el: _Element): InitialDPArg {
    if (!_cached_decoder_for_InitialDPArg) { _cached_decoder_for_InitialDPArg = function (el: _Element): InitialDPArg {
    let serviceKey!: ServiceKey;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let cGEncountered: OPTIONAL<CGEncountered>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions: OPTIONAL<Extensions>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let eventTypeBCSM: OPTIONAL<EventTypeBCSM>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let cause: OPTIONAL<Cause>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let carrier: OPTIONAL<Carrier>;
    let cug_Index: OPTIONAL<CUG_Index>;
    let cug_Interlock: OPTIONAL<CUG_Interlock>;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let iMSI: OPTIONAL<IMSI>;
    let subscriberState: OPTIONAL<SubscriberState>;
    let locationInformation: OPTIONAL<LocationInformation>;
    let ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>;
    let callReferenceNumber: OPTIONAL<CallReferenceNumber>;
    let mscAddress: OPTIONAL<ISDN_AddressString>;
    let calledPartyBCDNumber: OPTIONAL<CalledPartyBCDNumber>;
    let timeAndTimezone: OPTIONAL<TimeAndTimezone>;
    let callForwardingSS_Pending: OPTIONAL<NULL>;
    let initialDPArgExtension: OPTIONAL<InitialDPArgExtension>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "cGEncountered": (_el: _Element): void => { cGEncountered = $._decode_implicit<CGEncountered>(() => _decode_CGEncountered)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "additionalCallingPartyNumber": (_el: _Element): void => { additionalCallingPartyNumber = $._decode_implicit<AdditionalCallingPartyNumber>(() => _decode_AdditionalCallingPartyNumber)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_implicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "cug-Index": (_el: _Element): void => { cug_Index = $._decode_implicit<CUG_Index>(() => _decode_CUG_Index)(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = $._decode_implicit<CUG_Interlock>(() => _decode_CUG_Interlock)(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "subscriberState": (_el: _Element): void => { subscriberState = $._decode_explicit<SubscriberState>(() => _decode_SubscriberState)(_el); },
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "ext-basicServiceCode": (_el: _Element): void => { ext_basicServiceCode = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "mscAddress": (_el: _Element): void => { mscAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "calledPartyBCDNumber": (_el: _Element): void => { calledPartyBCDNumber = $._decode_implicit<CalledPartyBCDNumber>(() => _decode_CalledPartyBCDNumber)(_el); },
        "timeAndTimezone": (_el: _Element): void => { timeAndTimezone = $._decode_implicit<TimeAndTimezone>(() => _decode_TimeAndTimezone)(_el); },
        "callForwardingSS-Pending": (_el: _Element): void => { callForwardingSS_Pending = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "initialDPArgExtension": (_el: _Element): void => { initialDPArgExtension = $._decode_implicit<InitialDPArgExtension>(() => _decode_InitialDPArgExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPArg,
        _extension_additions_list_spec_for_InitialDPArg,
        _root_component_type_list_2_spec_for_InitialDPArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialDPArg(
        serviceKey,
        calledPartyNumber,
        callingPartyNumber,
        callingPartysCategory,
        cGEncountered,
        iPSSPCapabilities,
        locationNumber,
        originalCalledPartyID,
        extensions,
        highLayerCompatibility,
        additionalCallingPartyNumber,
        bearerCapability,
        eventTypeBCSM,
        redirectingPartyID,
        redirectionInformation,
        cause,
        serviceInteractionIndicatorsTwo,
        carrier,
        cug_Index,
        cug_Interlock,
        cug_OutgoingAccess,
        iMSI,
        subscriberState,
        locationInformation,
        ext_basicServiceCode,
        callReferenceNumber,
        mscAddress,
        calledPartyBCDNumber,
        timeAndTimezone,
        callForwardingSS_Pending,
        initialDPArgExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialDPArg(el);
}

let _cached_encoder_for_InitialDPArg: $.ASN1Encoder<InitialDPArg> | null = null;

/**
 * @summary Encodes a(n) InitialDPArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPArg (value: InitialDPArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPArg) { _cached_encoder_for_InitialDPArg = function (value: InitialDPArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.calledPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartysCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER)),
            /* IF_ABSENT  */ ((value.cGEncountered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CGEncountered, $.BER)(value.cGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.iPSSPCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.highLayerCompatibility === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCallingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_AdditionalCallingPartyNumber, $.BER)(value.additionalCallingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.eventTypeBCSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Cause, $.BER)(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 37, () => _encode_Carrier, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.cug_Index === undefined) ? undefined : $._encode_implicit(_TagClass.context, 45, () => _encode_CUG_Index, $.BER)(value.cug_Index, $.BER)),
            /* IF_ABSENT  */ ((value.cug_Interlock === undefined) ? undefined : $._encode_implicit(_TagClass.context, 46, () => _encode_CUG_Interlock, $.BER)(value.cug_Interlock, $.BER)),
            /* IF_ABSENT  */ ((value.cug_OutgoingAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 47, () => $._encodeNull, $.BER)(value.cug_OutgoingAccess, $.BER)),
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberState === undefined) ? undefined : $._encode_explicit(_TagClass.context, 51, () => _encode_SubscriberState, $.BER)(value.subscriberState, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.ext_basicServiceCode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 53, () => _encode_Ext_BasicServiceCode, $.BER)(value.ext_basicServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 54, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.mscAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 55, () => _encode_ISDN_AddressString, $.BER)(value.mscAddress, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyBCDNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 56, () => _encode_CalledPartyBCDNumber, $.BER)(value.calledPartyBCDNumber, $.BER)),
            /* IF_ABSENT  */ ((value.timeAndTimezone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 57, () => _encode_TimeAndTimezone, $.BER)(value.timeAndTimezone, $.BER)),
            /* IF_ABSENT  */ ((value.callForwardingSS_Pending === undefined) ? undefined : $._encode_implicit(_TagClass.context, 58, () => $._encodeNull, $.BER)(value.callForwardingSS_Pending, $.BER)),
            /* IF_ABSENT  */ ((value.initialDPArgExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 59, () => _encode_InitialDPArgExtension, $.BER)(value.initialDPArgExtension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitialDPArg(value, elGetter);
}


/* eslint-enable */
