/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PCCRuleID, _decode_PCCRuleID, _encode_PCCRuleID } from "../TS33128Payloads/PCCRuleID.ta.mjs";
// export { PCCRuleID, _decode_PCCRuleID, _encode_PCCRuleID } from "../TS33128Payloads/PCCRuleID.ta.mjs";
import { FlowInformationSet, _decode_FlowInformationSet, _encode_FlowInformationSet } from "../TS33128Payloads/FlowInformationSet.ta.mjs";
// export { FlowInformationSet, _decode_FlowInformationSet, _encode_FlowInformationSet } from "../TS33128Payloads/FlowInformationSet.ta.mjs";
import { RouteToLocationSet, _decode_RouteToLocationSet, _encode_RouteToLocationSet } from "../TS33128Payloads/RouteToLocationSet.ta.mjs";
// export { RouteToLocationSet, _decode_RouteToLocationSet, _encode_RouteToLocationSet } from "../TS33128Payloads/RouteToLocationSet.ta.mjs";
import { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
// export { DNAI, _decode_DNAI, _encode_DNAI } from "../TS33128Payloads/DNAI.ta.mjs";
import { DNAIChangeType, _decode_DNAIChangeType, _encode_DNAIChangeType, _enum_for_DNAIChangeType } from "../TS33128Payloads/DNAIChangeType.ta.mjs";
// export { DNAIChangeType, _enum_for_DNAIChangeType, DNAIChangeType_early /* IMPORTED_LONG_ENUMERATION_ITEM */, early /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNAIChangeType_earlyAndLate /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyAndLate /* IMPORTED_SHORT_ENUMERATION_ITEM */, DNAIChangeType_late /* IMPORTED_LONG_ENUMERATION_ITEM */, late /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DNAIChangeType, _encode_DNAIChangeType } from "../TS33128Payloads/DNAIChangeType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
// export { RouteToLocation, _decode_RouteToLocation, _encode_RouteToLocation } from "../TS33128Payloads/RouteToLocation.ta.mjs";
import { EASIPReplaceInfos, _decode_EASIPReplaceInfos, _encode_EASIPReplaceInfos } from "../TS33128Payloads/EASIPReplaceInfos.ta.mjs";
// export { EASIPReplaceInfos, _decode_EASIPReplaceInfos, _encode_EASIPReplaceInfos } from "../TS33128Payloads/EASIPReplaceInfos.ta.mjs";


/**
 * @summary PCCRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRule ::= SEQUENCE
 * {
 *     pCCRuleID                     [1] PCCRuleID OPTIONAL,
 *     appId                         [2] UTF8String OPTIONAL,
 *     flowInfos                     [3] FlowInformationSet OPTIONAL,
 *     appReloc                      [4] BOOLEAN OPTIONAL,
 *     simConnInd                    [5] BOOLEAN OPTIONAL,
 *     simConnTerm                   [6] INTEGER OPTIONAL,
 *     maxAllowedUpLat               [7] INTEGER OPTIONAL,
 *     trafficRoutes                 [8] RouteToLocationSet,
 *     trafficSteeringPolIdDl        [9] UTF8String OPTIONAL,
 *     trafficSteeringPolIdUl        [10] UTF8String OPTIONAL,
 *     deprecatedSourceDNAI          [11] DNAI OPTIONAL,
 *     deprecatedTargetDNAI          [12] DNAI OPTIONAL,
 *     deprecatedDNAIChangeType      [13] DNAIChangeType OPTIONAL,
 *     deprecatedSourceUEIPAddr      [14] IPAddress OPTIONAL,
 *     deprecatedTargetUEIPAddr      [15] IPAddress OPTIONAL,
 *     sourceTrafficRouting          [16] RouteToLocation OPTIONAL,
 *     targetTrafficRouting          [17] RouteToLocation OPTIONAL,
 *     eASIPReplaceInfos             [18] EASIPReplaceInfos OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PCCRule {
    constructor (
        /**
         * @summary `pCCRuleID`.
         * @public
         * @readonly
         */
        readonly pCCRuleID: OPTIONAL<PCCRuleID>,
        /**
         * @summary `appId`.
         * @public
         * @readonly
         */
        readonly appId: OPTIONAL<UTF8String>,
        /**
         * @summary `flowInfos`.
         * @public
         * @readonly
         */
        readonly flowInfos: OPTIONAL<FlowInformationSet>,
        /**
         * @summary `appReloc`.
         * @public
         * @readonly
         */
        readonly appReloc: OPTIONAL<BOOLEAN>,
        /**
         * @summary `simConnInd`.
         * @public
         * @readonly
         */
        readonly simConnInd: OPTIONAL<BOOLEAN>,
        /**
         * @summary `simConnTerm`.
         * @public
         * @readonly
         */
        readonly simConnTerm: OPTIONAL<INTEGER>,
        /**
         * @summary `maxAllowedUpLat`.
         * @public
         * @readonly
         */
        readonly maxAllowedUpLat: OPTIONAL<INTEGER>,
        /**
         * @summary `trafficRoutes`.
         * @public
         * @readonly
         */
        readonly trafficRoutes: RouteToLocationSet,
        /**
         * @summary `trafficSteeringPolIdDl`.
         * @public
         * @readonly
         */
        readonly trafficSteeringPolIdDl: OPTIONAL<UTF8String>,
        /**
         * @summary `trafficSteeringPolIdUl`.
         * @public
         * @readonly
         */
        readonly trafficSteeringPolIdUl: OPTIONAL<UTF8String>,
        /**
         * @summary `deprecatedSourceDNAI`.
         * @public
         * @readonly
         */
        readonly deprecatedSourceDNAI: OPTIONAL<DNAI>,
        /**
         * @summary `deprecatedTargetDNAI`.
         * @public
         * @readonly
         */
        readonly deprecatedTargetDNAI: OPTIONAL<DNAI>,
        /**
         * @summary `deprecatedDNAIChangeType`.
         * @public
         * @readonly
         */
        readonly deprecatedDNAIChangeType: OPTIONAL<DNAIChangeType>,
        /**
         * @summary `deprecatedSourceUEIPAddr`.
         * @public
         * @readonly
         */
        readonly deprecatedSourceUEIPAddr: OPTIONAL<IPAddress>,
        /**
         * @summary `deprecatedTargetUEIPAddr`.
         * @public
         * @readonly
         */
        readonly deprecatedTargetUEIPAddr: OPTIONAL<IPAddress>,
        /**
         * @summary `sourceTrafficRouting`.
         * @public
         * @readonly
         */
        readonly sourceTrafficRouting: OPTIONAL<RouteToLocation>,
        /**
         * @summary `targetTrafficRouting`.
         * @public
         * @readonly
         */
        readonly targetTrafficRouting: OPTIONAL<RouteToLocation>,
        /**
         * @summary `eASIPReplaceInfos`.
         * @public
         * @readonly
         */
        readonly eASIPReplaceInfos: OPTIONAL<EASIPReplaceInfos>
    ) {}

    /**
     * @summary Restructures an object into a PCCRule
     * @description
     * 
     * This takes an `object` and converts it to a `PCCRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PCCRule`.
     * @returns {PCCRule}
     */
    public static _from_object (_o: { [_K in keyof (PCCRule)]: (PCCRule)[_K] }): PCCRule {
        return new PCCRule(_o.pCCRuleID, _o.appId, _o.flowInfos, _o.appReloc, _o.simConnInd, _o.simConnTerm, _o.maxAllowedUpLat, _o.trafficRoutes, _o.trafficSteeringPolIdDl, _o.trafficSteeringPolIdUl, _o.deprecatedSourceDNAI, _o.deprecatedTargetDNAI, _o.deprecatedDNAIChangeType, _o.deprecatedSourceUEIPAddr, _o.deprecatedTargetUEIPAddr, _o.sourceTrafficRouting, _o.targetTrafficRouting, _o.eASIPReplaceInfos);
    }

        /**
         * @summary The enum used as the type of the component `deprecatedDNAIChangeType`
         * @public
         * @static
         */

    public static _enum_for_deprecatedDNAIChangeType = _enum_for_DNAIChangeType;
}

/**
 * @summary The Leading Root Component Types of PCCRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PCCRule: $.ComponentSpec[] = [
    new $.ComponentSpec("pCCRuleID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("appId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("flowInfos", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("appReloc", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("simConnInd", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("simConnTerm", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("maxAllowedUpLat", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("trafficRoutes", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("trafficSteeringPolIdDl", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("trafficSteeringPolIdUl", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("deprecatedSourceDNAI", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("deprecatedTargetDNAI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("deprecatedDNAIChangeType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("deprecatedSourceUEIPAddr", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("deprecatedTargetUEIPAddr", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sourceTrafficRouting", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("targetTrafficRouting", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("eASIPReplaceInfos", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of PCCRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PCCRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PCCRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PCCRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PCCRule: $.ASN1Decoder<PCCRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCCRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCCRule (el: _Element): PCCRule {
    if (!_cached_decoder_for_PCCRule) { _cached_decoder_for_PCCRule = function (el: _Element): PCCRule {
    let pCCRuleID: OPTIONAL<PCCRuleID>;
    let appId: OPTIONAL<UTF8String>;
    let flowInfos: OPTIONAL<FlowInformationSet>;
    let appReloc: OPTIONAL<BOOLEAN>;
    let simConnInd: OPTIONAL<BOOLEAN>;
    let simConnTerm: OPTIONAL<INTEGER>;
    let maxAllowedUpLat: OPTIONAL<INTEGER>;
    let trafficRoutes!: RouteToLocationSet;
    let trafficSteeringPolIdDl: OPTIONAL<UTF8String>;
    let trafficSteeringPolIdUl: OPTIONAL<UTF8String>;
    let deprecatedSourceDNAI: OPTIONAL<DNAI>;
    let deprecatedTargetDNAI: OPTIONAL<DNAI>;
    let deprecatedDNAIChangeType: OPTIONAL<DNAIChangeType>;
    let deprecatedSourceUEIPAddr: OPTIONAL<IPAddress>;
    let deprecatedTargetUEIPAddr: OPTIONAL<IPAddress>;
    let sourceTrafficRouting: OPTIONAL<RouteToLocation>;
    let targetTrafficRouting: OPTIONAL<RouteToLocation>;
    let eASIPReplaceInfos: OPTIONAL<EASIPReplaceInfos>;
    const callbacks: $.DecodingMap = {
        "pCCRuleID": (_el: _Element): void => { pCCRuleID = $._decode_implicit<PCCRuleID>(() => _decode_PCCRuleID)(_el); },
        "appId": (_el: _Element): void => { appId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "flowInfos": (_el: _Element): void => { flowInfos = $._decode_implicit<FlowInformationSet>(() => _decode_FlowInformationSet)(_el); },
        "appReloc": (_el: _Element): void => { appReloc = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "simConnInd": (_el: _Element): void => { simConnInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "simConnTerm": (_el: _Element): void => { simConnTerm = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxAllowedUpLat": (_el: _Element): void => { maxAllowedUpLat = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "trafficRoutes": (_el: _Element): void => { trafficRoutes = $._decode_implicit<RouteToLocationSet>(() => _decode_RouteToLocationSet)(_el); },
        "trafficSteeringPolIdDl": (_el: _Element): void => { trafficSteeringPolIdDl = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "trafficSteeringPolIdUl": (_el: _Element): void => { trafficSteeringPolIdUl = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "deprecatedSourceDNAI": (_el: _Element): void => { deprecatedSourceDNAI = $._decode_implicit<DNAI>(() => _decode_DNAI)(_el); },
        "deprecatedTargetDNAI": (_el: _Element): void => { deprecatedTargetDNAI = $._decode_implicit<DNAI>(() => _decode_DNAI)(_el); },
        "deprecatedDNAIChangeType": (_el: _Element): void => { deprecatedDNAIChangeType = $._decode_implicit<DNAIChangeType>(() => _decode_DNAIChangeType)(_el); },
        "deprecatedSourceUEIPAddr": (_el: _Element): void => { deprecatedSourceUEIPAddr = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "deprecatedTargetUEIPAddr": (_el: _Element): void => { deprecatedTargetUEIPAddr = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "sourceTrafficRouting": (_el: _Element): void => { sourceTrafficRouting = $._decode_implicit<RouteToLocation>(() => _decode_RouteToLocation)(_el); },
        "targetTrafficRouting": (_el: _Element): void => { targetTrafficRouting = $._decode_implicit<RouteToLocation>(() => _decode_RouteToLocation)(_el); },
        "eASIPReplaceInfos": (_el: _Element): void => { eASIPReplaceInfos = $._decode_implicit<EASIPReplaceInfos>(() => _decode_EASIPReplaceInfos)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PCCRule,
        _extension_additions_list_spec_for_PCCRule,
        _root_component_type_list_2_spec_for_PCCRule,
        undefined,
    );
    return new PCCRule(
        pCCRuleID,
        appId,
        flowInfos,
        appReloc,
        simConnInd,
        simConnTerm,
        maxAllowedUpLat,
        trafficRoutes,
        trafficSteeringPolIdDl,
        trafficSteeringPolIdUl,
        deprecatedSourceDNAI,
        deprecatedTargetDNAI,
        deprecatedDNAIChangeType,
        deprecatedSourceUEIPAddr,
        deprecatedTargetUEIPAddr,
        sourceTrafficRouting,
        targetTrafficRouting,
        eASIPReplaceInfos
    );
}; }
    return _cached_decoder_for_PCCRule(el);
}

let _cached_encoder_for_PCCRule: $.ASN1Encoder<PCCRule> | null = null;

/**
 * @summary Encodes a(n) PCCRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCCRule, encoded as an ASN.1 Element.
 */
export
function _encode_PCCRule (value: PCCRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCCRule) { _cached_encoder_for_PCCRule = function (value: PCCRule, elGetter: $.ASN1Encoder<PCCRule>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pCCRuleID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PCCRuleID, $.BER)(value.pCCRuleID, $.BER)),
            /* IF_ABSENT  */ ((value.appId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.appId, $.BER)),
            /* IF_ABSENT  */ ((value.flowInfos === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FlowInformationSet, $.BER)(value.flowInfos, $.BER)),
            /* IF_ABSENT  */ ((value.appReloc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.appReloc, $.BER)),
            /* IF_ABSENT  */ ((value.simConnInd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.simConnInd, $.BER)),
            /* IF_ABSENT  */ ((value.simConnTerm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.simConnTerm, $.BER)),
            /* IF_ABSENT  */ ((value.maxAllowedUpLat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.maxAllowedUpLat, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RouteToLocationSet, $.BER)(value.trafficRoutes, $.BER),
            /* IF_ABSENT  */ ((value.trafficSteeringPolIdDl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.trafficSteeringPolIdDl, $.BER)),
            /* IF_ABSENT  */ ((value.trafficSteeringPolIdUl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.trafficSteeringPolIdUl, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedSourceDNAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DNAI, $.BER)(value.deprecatedSourceDNAI, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedTargetDNAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_DNAI, $.BER)(value.deprecatedTargetDNAI, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedDNAIChangeType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_DNAIChangeType, $.BER)(value.deprecatedDNAIChangeType, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedSourceUEIPAddr === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_IPAddress, $.BER)(value.deprecatedSourceUEIPAddr, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedTargetUEIPAddr === undefined) ? undefined : $._encode_explicit(_TagClass.context, 15, () => _encode_IPAddress, $.BER)(value.deprecatedTargetUEIPAddr, $.BER)),
            /* IF_ABSENT  */ ((value.sourceTrafficRouting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_RouteToLocation, $.BER)(value.sourceTrafficRouting, $.BER)),
            /* IF_ABSENT  */ ((value.targetTrafficRouting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_RouteToLocation, $.BER)(value.targetTrafficRouting, $.BER)),
            /* IF_ABSENT  */ ((value.eASIPReplaceInfos === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_EASIPReplaceInfos, $.BER)(value.eASIPReplaceInfos, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PCCRule(value, elGetter);
}


/* eslint-enable */
