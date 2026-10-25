/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BIT_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ActivityClassType, _encode_ActivityClassType, _enum_for_ActivityClassType, ActivityClassType } from "../EN301040/ActivityClassType.ta.mjs";
// export { ActivityClassType, _enum_for_ActivityClassType, ActivityClassType_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tETRASpeech /* IMPORTED_LONG_ENUMERATION_ITEM */, tETRASpeech /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_singleSlotData24 /* IMPORTED_LONG_ENUMERATION_ITEM */, singleSlotData24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_singleSlotData48 /* IMPORTED_LONG_ENUMERATION_ITEM */, singleSlotData48 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_singleSlotData72 /* IMPORTED_LONG_ENUMERATION_ITEM */, singleSlotData72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData224 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData224 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData248 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData248 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData272 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData272 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData324 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData324 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData348 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData348 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData372 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData372 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData424 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData424 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData448 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData448 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_multiSlotData472 /* IMPORTED_LONG_ENUMERATION_ITEM */, multiSlotData472 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSType1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSType1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSType2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSType2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSType3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSType3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSType4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSType4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_status /* IMPORTED_LONG_ENUMERATION_ITEM */, status /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSACKType1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSACKType1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSACKType2 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSACKType2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSACKType3 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSACKType3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSACKType4 /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSACKType4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_statusack /* IMPORTED_LONG_ENUMERATION_ITEM */, statusack /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSAcknowledgementsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSAcknowledgementsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sDSAcknowledgementfail /* IMPORTED_LONG_ENUMERATION_ITEM */, sDSAcknowledgementfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sCLNSPacketData /* IMPORTED_LONG_ENUMERATION_ITEM */, sCLNSPacketData /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_cONSPacketData /* IMPORTED_LONG_ENUMERATION_ITEM */, cONSPacketData /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_internetProtocol /* IMPORTED_LONG_ENUMERATION_ITEM */, internetProtocol /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_swMIauthenticationsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, swMIauthenticationsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_swMIauthenticationfail /* IMPORTED_LONG_ENUMERATION_ITEM */, swMIauthenticationfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_iTSIauthenticationsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, iTSIauthenticationsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_iTSIauthenticationfail /* IMPORTED_LONG_ENUMERATION_ITEM */, iTSIauthenticationfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARSCKsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARSCKsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARSCKfail /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARSCKfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARGCKsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARGCKsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARGCKfail /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARGCKfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARCCKsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARCCKsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_oTARCCKfail /* IMPORTED_LONG_ENUMERATION_ITEM */, oTARCCKfail /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETSUSCRIPTIONDISABLEDT /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETSUSCRIPTIONDISABLEDT /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETEQUIPMENTDISABLEDT /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETEQUIPMENTDISABLEDT /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETSUSCRIPTIONDISABLEDP /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETSUSCRIPTIONDISABLEDP /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETEQUIPEMENTDISABLEDP /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETEQUIPEMENTDISABLEDP /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETSUBSCRIPTIONENABLED /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETSUBSCRIPTIONENABLED /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_tARGETEQUIPMENTENABLED /* IMPORTED_LONG_ENUMERATION_ITEM */, tARGETEQUIPMENTENABLED /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sessionregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_sessionderegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionderegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_mIGRATION /* IMPORTED_LONG_ENUMERATION_ITEM */, mIGRATION /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_rOAMING /* IMPORTED_LONG_ENUMERATION_ITEM */, rOAMING /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityClassType_supplementaryService /* IMPORTED_LONG_ENUMERATION_ITEM */, supplementaryService /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivityClassType, _encode_ActivityClassType } from "../EN301040/ActivityClassType.ta.mjs";
import { _decode_ActivityType_callRelation, _encode_ActivityType_callRelation, _enum_for_ActivityType_callRelation, ActivityType_callRelation } from "../EN301040/ActivityType-callRelation.ta.mjs";
// export { ActivityType_callRelation, _enum_for_ActivityType_callRelation, ActivityType_callRelation_begin /* IMPORTED_LONG_ENUMERATION_ITEM */, begin /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_callRelation_end /* IMPORTED_LONG_ENUMERATION_ITEM */, end /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_callRelation_continue /* IMPORTED_LONG_ENUMERATION_ITEM */, continue_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_callRelation_report /* IMPORTED_LONG_ENUMERATION_ITEM */, report /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivityType_callRelation, _encode_ActivityType_callRelation } from "../EN301040/ActivityType-callRelation.ta.mjs";
import { _decode_ActivityType_direction, _encode_ActivityType_direction, _enum_for_ActivityType_direction, ActivityType_direction } from "../EN301040/ActivityType-direction.ta.mjs";
// export { ActivityType_direction, _enum_for_ActivityType_direction, ActivityType_direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivityType_direction, _encode_ActivityType_direction } from "../EN301040/ActivityType-direction.ta.mjs";
import { _decode_ActivityType_scope, _encode_ActivityType_scope, _enum_for_ActivityType_scope, ActivityType_scope } from "../EN301040/ActivityType-scope.ta.mjs";
// export { ActivityType_scope, _enum_for_ActivityType_scope, ActivityType_scope_point2Point /* IMPORTED_LONG_ENUMERATION_ITEM */, point2Point /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_scope_point2MultiPoint /* IMPORTED_LONG_ENUMERATION_ITEM */, point2MultiPoint /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivityType_scope_broadcast /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcast /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivityType_scope, _encode_ActivityType_scope } from "../EN301040/ActivityType-scope.ta.mjs";
import { _decode_SSType, _encode_SSType, _enum_for_SSType, SSType } from "../EN301040/SSType.ta.mjs";
// export { SSType, _enum_for_SSType, SSType_ambienceListening /* IMPORTED_LONG_ENUMERATION_ITEM */, ambienceListening /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_adviceofCharge /* IMPORTED_LONG_ENUMERATION_ITEM */, adviceofCharge /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_accessPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, accessPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_areaSelection /* IMPORTED_LONG_ENUMERATION_ITEM */, areaSelection /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_barringofIncomingCalls /* IMPORTED_LONG_ENUMERATION_ITEM */, barringofIncomingCalls /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_barringofOutgoingCalls /* IMPORTED_LONG_ENUMERATION_ITEM */, barringofOutgoingCalls /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callAuthorizedbyDispatcher /* IMPORTED_LONG_ENUMERATION_ITEM */, callAuthorizedbyDispatcher /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callCompletiontoBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletiontoBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callCompletiononNoReply /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletiononNoReply /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callForwardingonBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingonBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callForwardingonNoReply /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingonNoReply /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callForwardingonNotReachable /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingonNotReachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callForwardingUnconditional /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardingUnconditional /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callingLineIdentificationPresentation /* IMPORTED_LONG_ENUMERATION_ITEM */, callingLineIdentificationPresentation /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callingConnectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, callingConnectedLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_connectedLineIdentificationPresentation /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedLineIdentificationPresentation /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callReport /* IMPORTED_LONG_ENUMERATION_ITEM */, callReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callRetention /* IMPORTED_LONG_ENUMERATION_ITEM */, callRetention /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_dynamicGroupNumberAssignment /* IMPORTED_LONG_ENUMERATION_ITEM */, dynamicGroupNumberAssignment /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_discreetListening /* IMPORTED_LONG_ENUMERATION_ITEM */, discreetListening /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_includeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, includeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_lateEntry /* IMPORTED_LONG_ENUMERATION_ITEM */, lateEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_listSearchCall /* IMPORTED_LONG_ENUMERATION_ITEM */, listSearchCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_priorityCall /* IMPORTED_LONG_ENUMERATION_ITEM */, priorityCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_preemptivePriorityCall /* IMPORTED_LONG_ENUMERATION_ITEM */, preemptivePriorityCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_shortNumberAddressing /* IMPORTED_LONG_ENUMERATION_ITEM */, shortNumberAddressing /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_transferofControl /* IMPORTED_LONG_ENUMERATION_ITEM */, transferofControl /* IMPORTED_SHORT_ENUMERATION_ITEM */, SSType_talkingPartyIdentification /* IMPORTED_LONG_ENUMERATION_ITEM */, talkingPartyIdentification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SSType, _encode_SSType } from "../EN301040/SSType.ta.mjs";


/**
 * @summary ActivityType
 * @description
 * 
 * One monitored activity. It is `targetAction` on `TARGETACTIVITYMONITORind`,
 * and each entry of `monitorServiceList` on activation and modification.
 * Clause 6.3 calls `cctivity` ActivityType!Activity and calls `cPlaneData`
 * ActivityType!Data.
 *
 * Circuit-mode U-plane services set `cctivity` to speech or a circuit-data
 * class and include `direction` and `scope` (clause 6.3.1). The U-plane bits
 * themselves go in `TTRAFFICind` and `CTTRAFFICind`.
 *
 * C-plane data services set `direction` and `scope` to match the service and
 * put the user data in `cPlaneData` (clause 6.3.2). An SDS message may be
 * reported both when it enters the SwMI store and when it is retrieved.
 *
 * A supplementary service sets `cctivity` to `supplementaryService`, sets
 * `direction` as appropriate, omits `scope`, omits `cPlaneData`, and sets
 * `sStype` (clause 6.4.7).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivityType ::= SEQUENCE {
 *     cctivity        ActivityClassType,
 *     callRelation    ENUMERATED {
 *         begin,
 *         end,
 *         continue,
 *         report
 *     },
 *     direction        ENUMERATED {
 *         toTarget,
 *         fromTarget
 *      } OPTIONAL, 
 *     scope            ENUMERATED {
 *         point2Point,
 *         point2MultiPoint,
 *         broadcast
 *     } OPTIONAL,
 *     cPlaneData        BIT STRING OPTIONAL,
 *     sStype            SSType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ActivityType {
    /**
     * @summary `cctivity`.
     * @description
     *
     * Service or signal class. Clause 6.3 and clause 6.4 assign the values.
     * Those clauses call this component ActivityType!Activity. The ASN.1
     * identifier in annex E is `cctivity`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cctivity: ActivityClassType;
    /**
     * @summary `callRelation`.
     * @description
     *
     * `begin`, `end`, `continue`, or `report`. Mandatory. Clause 6.3 lists the
     * four names and gives no further definition of them. Clause 6.5 places the
     * beginning, end, and duration of a connection in the activity-monitor
     * timestamp.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly callRelation: ActivityType_callRelation;
    /**
     * @summary `direction`.
     * @description
     *
     * `toTarget` or `fromTarget`. Circuit-mode services include it
     * (clause 6.3.1). Data services set it to match the service (clause 6.3.2).
     * Supplementary services set it as appropriate (clause 6.4.7). Annex C uses
     * `fromTarget` for a target-originated U-SETUP and for registration.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly direction: OPTIONAL<ActivityType_direction>;
    /**
     * @summary `scope`.
     * @description
     *
     * `point2Point`, `point2MultiPoint`, or `broadcast`. Circuit-mode services
     * state whether the call was initiated as point-to-point or
     * point-to-multipoint (clause 6.3.1). Data services set it to match the
     * service (clause 6.3.2). Supplementary services omit it (clause 6.4.7).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.1, clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly scope: OPTIONAL<ActivityType_scope>;
    /**
     * @summary `cPlaneData`.
     * @description
     *
     * User data for a C-plane service. Clause 6.3.2 calls this component
     * ActivityType!Data. Unacknowledged and acknowledged SDS carry the
     * user-defined data. SCLNS carries the user-defined packet data; the SwMI
     * generally cannot name the applications. CONS carries the user-defined
     * data, which the mediation function may decode to see virtual-circuit
     * establishment (ISO/IEC 8348 and ISO/IEC 8878, as profiled by TETRA). IP
     * carries the full IP packet, header and data. Supplementary services omit
     * this component (clause 6.4.7). Circuit-mode U-plane content is carried in
     * `TTRAFFICind` and `CTTRAFFICind` instead.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cPlaneData: OPTIONAL<BIT_STRING>;
    /**
     * @summary `sStype`.
     * @description
     *
     * Which TETRA supplementary service, set when `cctivity` is
     * `supplementaryService`. Clause 6.4.7 requires this selector, requires
     * `direction`, and omits `scope` and `cPlaneData`. Invoking interception
     * does not change the supplementary service (clause 5.1.3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.4.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly sStype: OPTIONAL<SSType>;

    constructor (
        cctivity: ActivityClassType,
        callRelation: ActivityType_callRelation,
        direction?: OPTIONAL<ActivityType_direction>,
        scope?: OPTIONAL<ActivityType_scope>,
        cPlaneData?: OPTIONAL<BIT_STRING>,
        sStype?: OPTIONAL<SSType>
    ) {
        this.cctivity = cctivity;
        this.callRelation = callRelation;
        this.direction = direction;
        this.scope = scope;
        this.cPlaneData = cPlaneData;
        this.sStype = sStype;
    }

    /**
     * @summary Restructures an object into a ActivityType
     * @description
     * 
     * This takes an `object` and converts it to a `ActivityType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivityType`.
     * @returns {ActivityType}
     */
    public static _from_object (_o: { [_K in keyof (ActivityType)]: (ActivityType)[_K] }): ActivityType {
        return new ActivityType(_o.cctivity, _o.callRelation, _o.direction, _o.scope, _o.cPlaneData, _o.sStype);
    }

        /**
         * @summary The enum used as the type of the component `cctivity`
         * @public
         * @static
         */

    public static _enum_for_cctivity: typeof _enum_for_ActivityClassType = _enum_for_ActivityClassType;        /**
         * @summary The enum used as the type of the component `callRelation`
         * @public
         * @static
         */

    public static _enum_for_callRelation: typeof _enum_for_ActivityType_callRelation = _enum_for_ActivityType_callRelation;        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction: typeof _enum_for_ActivityType_direction = _enum_for_ActivityType_direction;        /**
         * @summary The enum used as the type of the component `scope`
         * @public
         * @static
         */

    public static _enum_for_scope: typeof _enum_for_ActivityType_scope = _enum_for_ActivityType_scope;        /**
         * @summary The enum used as the type of the component `sStype`
         * @public
         * @static
         */

    public static _enum_for_sStype: typeof _enum_for_SSType = _enum_for_SSType;
}

/**
 * @summary The Leading Root Component Types of ActivityType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivityType: $.ComponentSpec[] = [
    new $.ComponentSpec("cctivity", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callRelation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("direction", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("scope", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cPlaneData", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sStype", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ActivityType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivityType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivityType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivityType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActivityType: $.ASN1Decoder<ActivityType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivityType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivityType (el: _Element): ActivityType {
    if (!_cached_decoder_for_ActivityType) { _cached_decoder_for_ActivityType = function (el: _Element): ActivityType {
    let cctivity!: ActivityClassType;
    let callRelation!: ActivityType_callRelation;
    let direction: OPTIONAL<ActivityType_direction>;
    let scope: OPTIONAL<ActivityType_scope>;
    let cPlaneData: OPTIONAL<BIT_STRING>;
    let sStype: OPTIONAL<SSType>;
    const callbacks: $.DecodingMap = {
        "cctivity": (_el: _Element): void => { cctivity = _decode_ActivityClassType(_el); },
        "callRelation": (_el: _Element): void => { callRelation = _decode_ActivityType_callRelation(_el); },
        "direction": (_el: _Element): void => { direction = _decode_ActivityType_direction(_el); },
        "scope": (_el: _Element): void => { scope = _decode_ActivityType_scope(_el); },
        "cPlaneData": (_el: _Element): void => { cPlaneData = $._decodeBitString(_el); },
        "sStype": (_el: _Element): void => { sStype = _decode_SSType(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivityType,
        _extension_additions_list_spec_for_ActivityType,
        _root_component_type_list_2_spec_for_ActivityType,
        undefined,
    );
    return new ActivityType(
        cctivity,
        callRelation,
        direction,
        scope,
        cPlaneData,
        sStype
    );
}; }
    return _cached_decoder_for_ActivityType(el);
}

let _cached_encoder_for_ActivityType: $.ASN1Encoder<ActivityType> | null = null;

/**
 * @summary Encodes a(n) ActivityType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityType, encoded as an ASN.1 Element.
 */
export
function _encode_ActivityType (value: ActivityType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivityType) { _cached_encoder_for_ActivityType = function (value: ActivityType, elGetter: $.ASN1Encoder<ActivityType>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActivityClassType, $.BER)(value.cctivity, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ActivityType_callRelation, $.BER)(value.callRelation, $.BER);
    if (value.direction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ActivityType_direction, $.BER)(value.direction, $.BER);
    }
    if (value.scope !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ActivityType_scope, $.BER)(value.scope, $.BER);
    }
    if (value.cPlaneData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.cPlaneData, $.BER);
    }
    if (value.sStype !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SSType, $.BER)(value.sStype, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ActivityType(value, elGetter);
}


/* eslint-enable */
