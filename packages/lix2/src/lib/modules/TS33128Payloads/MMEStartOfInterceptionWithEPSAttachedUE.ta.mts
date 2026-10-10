/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSAttachType, _decode_EPSAttachType, _encode_EPSAttachType, _enum_for_EPSAttachType } from "../TS33128Payloads/EPSAttachType.ta.mjs";
import { EPSAttachResult, _decode_EPSAttachResult, _encode_EPSAttachResult, _enum_for_EPSAttachResult } from "../TS33128Payloads/EPSAttachResult.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { EPSSMSServiceStatus, _decode_EPSSMSServiceStatus, _encode_EPSSMSServiceStatus, _enum_for_EPSSMSServiceStatus } from "../TS33128Payloads/EPSSMSServiceStatus.ta.mjs";
import { EMM5GMMStatus, _decode_EMM5GMMStatus, _encode_EMM5GMMStatus } from "../TS33128Payloads/EMM5GMMStatus.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { RRCEstablishmentCause, _decode_RRCEstablishmentCause, _encode_RRCEstablishmentCause } from "../TS33128Payloads/RRCEstablishmentCause.ta.mjs";
import { S1Information, _decode_S1Information, _encode_S1Information } from "../TS33128Payloads/S1Information.ta.mjs";
import { EPSNASTransportInitialInformation, _decode_EPSNASTransportInitialInformation, _encode_EPSNASTransportInitialInformation } from "../TS33128Payloads/EPSNASTransportInitialInformation.ta.mjs";
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
import { EPSUENetworkCapability, _decode_EPSUENetworkCapability, _encode_EPSUENetworkCapability } from "../TS33128Payloads/EPSUENetworkCapability.ta.mjs";
import { EPSRANUEContext, _decode_EPSRANUEContext, _encode_EPSRANUEContext } from "../TS33128Payloads/EPSRANUEContext.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
import { EPSNetworkPolicy, _decode_EPSNetworkPolicy, _encode_EPSNetworkPolicy } from "../TS33128Payloads/EPSNetworkPolicy.ta.mjs";


/**
 * @summary MMEStartOfInterceptionWithEPSAttachedUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEStartOfInterceptionWithEPSAttachedUE ::= SEQUENCE
 * {
 *     attachType                     [1] EPSAttachType,
 *     attachResult                   [2] EPSAttachResult,
 *     iMSI                           [3] IMSI,
 *     iMEI                           [4] IMEI OPTIONAL,
 *     mSISDN                         [5] MSISDN OPTIONAL,
 *     gUTI                           [6] GUTI OPTIONAL,
 *     location                       [7] Location OPTIONAL,
 *     ePSTAIList                     [9] TAIList OPTIONAL,
 *     sMSServiceStatus               [10] EPSSMSServiceStatus OPTIONAL,
 *     eMM5GRegStatus                 [12] EMM5GMMStatus OPTIONAL,
 *     pagingRestrictionIndicator     [13] PagingRestrictionIndicator OPTIONAL,
 *     rATType                        [14] RATType OPTIONAL,
 *     rRCEstablishmentCause          [15] RRCEstablishmentCause OPTIONAL,
 *     deprecatedS1Information        [16] S1Information OPTIONAL,
 *     nASTransportInitialInformation [17] EPSNASTransportInitialInformation OPTIONAL,
 *     equivalentPLMNList             [18] PLMNList OPTIONAL,
 *     ePSUENetworkCapability         [19] EPSUENetworkCapability OPTIONAL,
 *     initailRANUEContextSetup       [20] EPSRANUEContext OPTIONAL,
 *     mUSIMUERequestType             [21] MUSIMUERequestType OPTIONAL,
 *     ePSNetworkPolicy               [22] EPSNetworkPolicy OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEStartOfInterceptionWithEPSAttachedUE {
    constructor (
        /**
         * @summary `attachType`.
         * @public
         * @readonly
         */
        readonly attachType: EPSAttachType,
        /**
         * @summary `attachResult`.
         * @public
         * @readonly
         */
        readonly attachResult: EPSAttachResult,
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<GUTI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `ePSTAIList`.
         * @public
         * @readonly
         */
        readonly ePSTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `sMSServiceStatus`.
         * @public
         * @readonly
         */
        readonly sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>,
        /**
         * @summary `eMM5GRegStatus`.
         * @public
         * @readonly
         */
        readonly eMM5GRegStatus: OPTIONAL<EMM5GMMStatus>,
        /**
         * @summary `pagingRestrictionIndicator`.
         * @public
         * @readonly
         */
        readonly pagingRestrictionIndicator: OPTIONAL<PagingRestrictionIndicator>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `rRCEstablishmentCause`.
         * @public
         * @readonly
         */
        readonly rRCEstablishmentCause: OPTIONAL<RRCEstablishmentCause>,
        /**
         * @summary `deprecatedS1Information`.
         * @public
         * @readonly
         */
        readonly deprecatedS1Information: OPTIONAL<S1Information>,
        /**
         * @summary `nASTransportInitialInformation`.
         * @public
         * @readonly
         */
        readonly nASTransportInitialInformation: OPTIONAL<EPSNASTransportInitialInformation>,
        /**
         * @summary `equivalentPLMNList`.
         * @public
         * @readonly
         */
        readonly equivalentPLMNList: OPTIONAL<PLMNList>,
        /**
         * @summary `ePSUENetworkCapability`.
         * @public
         * @readonly
         */
        readonly ePSUENetworkCapability: OPTIONAL<EPSUENetworkCapability>,
        /**
         * @summary `initailRANUEContextSetup`.
         * @public
         * @readonly
         */
        readonly initailRANUEContextSetup: OPTIONAL<EPSRANUEContext>,
        /**
         * @summary `mUSIMUERequestType`.
         * @public
         * @readonly
         */
        readonly mUSIMUERequestType: OPTIONAL<MUSIMUERequestType>,
        /**
         * @summary `ePSNetworkPolicy`.
         * @public
         * @readonly
         */
        readonly ePSNetworkPolicy: OPTIONAL<EPSNetworkPolicy>
    ) {}

    /**
     * @summary Restructures an object into a MMEStartOfInterceptionWithEPSAttachedUE
     * @description
     * 
     * This takes an `object` and converts it to a `MMEStartOfInterceptionWithEPSAttachedUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEStartOfInterceptionWithEPSAttachedUE`.
     * @returns {MMEStartOfInterceptionWithEPSAttachedUE}
     */
    public static _from_object (_o: { [_K in keyof (MMEStartOfInterceptionWithEPSAttachedUE)]: (MMEStartOfInterceptionWithEPSAttachedUE)[_K] }): MMEStartOfInterceptionWithEPSAttachedUE {
        return new MMEStartOfInterceptionWithEPSAttachedUE(_o.attachType, _o.attachResult, _o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location, _o.ePSTAIList, _o.sMSServiceStatus, _o.eMM5GRegStatus, _o.pagingRestrictionIndicator, _o.rATType, _o.rRCEstablishmentCause, _o.deprecatedS1Information, _o.nASTransportInitialInformation, _o.equivalentPLMNList, _o.ePSUENetworkCapability, _o.initailRANUEContextSetup, _o.mUSIMUERequestType, _o.ePSNetworkPolicy);
    }

        /**
         * @summary The enum used as the type of the component `attachType`
         * @public
         * @static
         */

    public static _enum_for_attachType = _enum_for_EPSAttachType;        /**
         * @summary The enum used as the type of the component `attachResult`
         * @public
         * @static
         */

    public static _enum_for_attachResult = _enum_for_EPSAttachResult;        /**
         * @summary The enum used as the type of the component `sMSServiceStatus`
         * @public
         * @static
         */

    public static _enum_for_sMSServiceStatus = _enum_for_EPSSMSServiceStatus;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of MMEStartOfInterceptionWithEPSAttachedUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEStartOfInterceptionWithEPSAttachedUE: $.ComponentSpec[] = [
    new $.ComponentSpec("attachType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attachResult", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ePSTAIList", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sMSServiceStatus", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("eMM5GRegStatus", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pagingRestrictionIndicator", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rRCEstablishmentCause", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("deprecatedS1Information", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("nASTransportInitialInformation", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("equivalentPLMNList", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("ePSUENetworkCapability", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("initailRANUEContextSetup", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("mUSIMUERequestType", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("ePSNetworkPolicy", true, $.hasTag(_TagClass.context, 22))
];

/**
 * @summary The Trailing Root Component Types of MMEStartOfInterceptionWithEPSAttachedUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEStartOfInterceptionWithEPSAttachedUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEStartOfInterceptionWithEPSAttachedUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEStartOfInterceptionWithEPSAttachedUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEStartOfInterceptionWithEPSAttachedUE: $.ASN1Decoder<MMEStartOfInterceptionWithEPSAttachedUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEStartOfInterceptionWithEPSAttachedUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEStartOfInterceptionWithEPSAttachedUE (el: _Element): MMEStartOfInterceptionWithEPSAttachedUE {
    if (!_cached_decoder_for_MMEStartOfInterceptionWithEPSAttachedUE) { _cached_decoder_for_MMEStartOfInterceptionWithEPSAttachedUE = function (el: _Element): MMEStartOfInterceptionWithEPSAttachedUE {
    let attachType!: EPSAttachType;
    let attachResult!: EPSAttachResult;
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let location: OPTIONAL<Location>;
    let ePSTAIList: OPTIONAL<TAIList>;
    let sMSServiceStatus: OPTIONAL<EPSSMSServiceStatus>;
    let eMM5GRegStatus: OPTIONAL<EMM5GMMStatus>;
    let pagingRestrictionIndicator: OPTIONAL<PagingRestrictionIndicator>;
    let rATType: OPTIONAL<RATType>;
    let rRCEstablishmentCause: OPTIONAL<RRCEstablishmentCause>;
    let deprecatedS1Information: OPTIONAL<S1Information>;
    let nASTransportInitialInformation: OPTIONAL<EPSNASTransportInitialInformation>;
    let equivalentPLMNList: OPTIONAL<PLMNList>;
    let ePSUENetworkCapability: OPTIONAL<EPSUENetworkCapability>;
    let initailRANUEContextSetup: OPTIONAL<EPSRANUEContext>;
    let mUSIMUERequestType: OPTIONAL<MUSIMUERequestType>;
    let ePSNetworkPolicy: OPTIONAL<EPSNetworkPolicy>;
    const callbacks: $.DecodingMap = {
        "attachType": (_el: _Element): void => { attachType = $._decode_implicit<EPSAttachType>(() => _decode_EPSAttachType)(_el); },
        "attachResult": (_el: _Element): void => { attachResult = $._decode_implicit<EPSAttachResult>(() => _decode_EPSAttachResult)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "ePSTAIList": (_el: _Element): void => { ePSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "sMSServiceStatus": (_el: _Element): void => { sMSServiceStatus = $._decode_implicit<EPSSMSServiceStatus>(() => _decode_EPSSMSServiceStatus)(_el); },
        "eMM5GRegStatus": (_el: _Element): void => { eMM5GRegStatus = $._decode_implicit<EMM5GMMStatus>(() => _decode_EMM5GMMStatus)(_el); },
        "pagingRestrictionIndicator": (_el: _Element): void => { pagingRestrictionIndicator = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "rRCEstablishmentCause": (_el: _Element): void => { rRCEstablishmentCause = $._decode_explicit<RRCEstablishmentCause>(() => _decode_RRCEstablishmentCause)(_el); },
        "deprecatedS1Information": (_el: _Element): void => { deprecatedS1Information = $._decode_implicit<S1Information>(() => _decode_S1Information)(_el); },
        "nASTransportInitialInformation": (_el: _Element): void => { nASTransportInitialInformation = $._decode_implicit<EPSNASTransportInitialInformation>(() => _decode_EPSNASTransportInitialInformation)(_el); },
        "equivalentPLMNList": (_el: _Element): void => { equivalentPLMNList = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(_el); },
        "ePSUENetworkCapability": (_el: _Element): void => { ePSUENetworkCapability = $._decode_implicit<EPSUENetworkCapability>(() => _decode_EPSUENetworkCapability)(_el); },
        "initailRANUEContextSetup": (_el: _Element): void => { initailRANUEContextSetup = $._decode_implicit<EPSRANUEContext>(() => _decode_EPSRANUEContext)(_el); },
        "mUSIMUERequestType": (_el: _Element): void => { mUSIMUERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); },
        "ePSNetworkPolicy": (_el: _Element): void => { ePSNetworkPolicy = $._decode_implicit<EPSNetworkPolicy>(() => _decode_EPSNetworkPolicy)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEStartOfInterceptionWithEPSAttachedUE,
        _extension_additions_list_spec_for_MMEStartOfInterceptionWithEPSAttachedUE,
        _root_component_type_list_2_spec_for_MMEStartOfInterceptionWithEPSAttachedUE,
        undefined,
    );
    return new MMEStartOfInterceptionWithEPSAttachedUE(
        attachType,
        attachResult,
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location,
        ePSTAIList,
        sMSServiceStatus,
        eMM5GRegStatus,
        pagingRestrictionIndicator,
        rATType,
        rRCEstablishmentCause,
        deprecatedS1Information,
        nASTransportInitialInformation,
        equivalentPLMNList,
        ePSUENetworkCapability,
        initailRANUEContextSetup,
        mUSIMUERequestType,
        ePSNetworkPolicy
    );
}; }
    return _cached_decoder_for_MMEStartOfInterceptionWithEPSAttachedUE(el);
}

let _cached_encoder_for_MMEStartOfInterceptionWithEPSAttachedUE: $.ASN1Encoder<MMEStartOfInterceptionWithEPSAttachedUE> | null = null;

/**
 * @summary Encodes a(n) MMEStartOfInterceptionWithEPSAttachedUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEStartOfInterceptionWithEPSAttachedUE, encoded as an ASN.1 Element.
 */
export
function _encode_MMEStartOfInterceptionWithEPSAttachedUE (value: MMEStartOfInterceptionWithEPSAttachedUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEStartOfInterceptionWithEPSAttachedUE) { _cached_encoder_for_MMEStartOfInterceptionWithEPSAttachedUE = function (value: MMEStartOfInterceptionWithEPSAttachedUE, elGetter: $.ASN1Encoder<MMEStartOfInterceptionWithEPSAttachedUE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSAttachType, $.BER)(value.attachType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSAttachResult, $.BER)(value.attachResult, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.ePSTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_TAIList, $.BER)(value.ePSTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.sMSServiceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_EPSSMSServiceStatus, $.BER)(value.sMSServiceStatus, $.BER)),
            /* IF_ABSENT  */ ((value.eMM5GRegStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_EMM5GMMStatus, $.BER)(value.eMM5GRegStatus, $.BER)),
            /* IF_ABSENT  */ ((value.pagingRestrictionIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestrictionIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.rRCEstablishmentCause === undefined) ? undefined : $._encode_explicit(_TagClass.context, 15, () => _encode_RRCEstablishmentCause, $.BER)(value.rRCEstablishmentCause, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedS1Information === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_S1Information, $.BER)(value.deprecatedS1Information, $.BER)),
            /* IF_ABSENT  */ ((value.nASTransportInitialInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_EPSNASTransportInitialInformation, $.BER)(value.nASTransportInitialInformation, $.BER)),
            /* IF_ABSENT  */ ((value.equivalentPLMNList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_PLMNList, $.BER)(value.equivalentPLMNList, $.BER)),
            /* IF_ABSENT  */ ((value.ePSUENetworkCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_EPSUENetworkCapability, $.BER)(value.ePSUENetworkCapability, $.BER)),
            /* IF_ABSENT  */ ((value.initailRANUEContextSetup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_EPSRANUEContext, $.BER)(value.initailRANUEContextSetup, $.BER)),
            /* IF_ABSENT  */ ((value.mUSIMUERequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_MUSIMUERequestType, $.BER)(value.mUSIMUERequestType, $.BER)),
            /* IF_ABSENT  */ ((value.ePSNetworkPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_EPSNetworkPolicy, $.BER)(value.ePSNetworkPolicy, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEStartOfInterceptionWithEPSAttachedUE(value, elGetter);
}


/* eslint-enable */
