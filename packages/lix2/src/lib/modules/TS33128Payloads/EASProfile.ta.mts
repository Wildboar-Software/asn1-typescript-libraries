/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
// export { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
import { ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
// export { ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";
// export { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";
import { EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";
// export { EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { RouteToLocations, _decode_RouteToLocations, _encode_RouteToLocations } from "../TS33128Payloads/RouteToLocations.ta.mjs";
// export { RouteToLocations, _decode_RouteToLocations, _encode_RouteToLocations } from "../TS33128Payloads/RouteToLocations.ta.mjs";
import { EASStatus, _decode_EASStatus, _encode_EASStatus, _enum_for_EASStatus } from "../TS33128Payloads/EASStatus.ta.mjs";
// export { EASStatus, _enum_for_EASStatus, EASStatus_enabled /* IMPORTED_LONG_ENUMERATION_ITEM */, enabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EASStatus_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */, disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EASStatus, _encode_EASStatus } from "../TS33128Payloads/EASStatus.ta.mjs";


/**
 * @summary EASProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASProfile ::= SEQUENCE
 * {
 *     eASID                  [1] EASID,
 *     eASEndpoint            [2] EASEndpoint,
 *     aCIDs                  [3] ACIDs OPTIONAL,
 *     aSPID                  [4] UTF8String OPTIONAL,
 *     eASType                [5] UTF8String OPTIONAL,
 *     eASDescription         [6] UTF8String OPTIONAL,
 *     eASSchedule            [7] Daytime OPTIONAL,
 *     eASServiceArea         [8] Location OPTIONAL,
 *     eASServiceKPIs         [9] ServiceKPIs OPTIONAL,
 *     eASServicePermLevel    [10] UTF8String OPTIONAL,
 *     eASServiceFeatures     [11] EASServiceFeatures OPTIONAL,
 *     eASServiceContSupport  [12] ACRScenarios OPTIONAL,
 *     appLocs                [13] RouteToLocations OPTIONAL,
 *     eASStatus              [14] EASStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EASProfile {
    constructor (
        /**
         * @summary `eASID`.
         * @public
         * @readonly
         */
        readonly eASID: EASID,
        /**
         * @summary `eASEndpoint`.
         * @public
         * @readonly
         */
        readonly eASEndpoint: EASEndpoint,
        /**
         * @summary `aCIDs`.
         * @public
         * @readonly
         */
        readonly aCIDs: OPTIONAL<ACIDs>,
        /**
         * @summary `aSPID`.
         * @public
         * @readonly
         */
        readonly aSPID: OPTIONAL<UTF8String>,
        /**
         * @summary `eASType`.
         * @public
         * @readonly
         */
        readonly eASType: OPTIONAL<UTF8String>,
        /**
         * @summary `eASDescription`.
         * @public
         * @readonly
         */
        readonly eASDescription: OPTIONAL<UTF8String>,
        /**
         * @summary `eASSchedule`.
         * @public
         * @readonly
         */
        readonly eASSchedule: OPTIONAL<Daytime>,
        /**
         * @summary `eASServiceArea`.
         * @public
         * @readonly
         */
        readonly eASServiceArea: OPTIONAL<Location>,
        /**
         * @summary `eASServiceKPIs`.
         * @public
         * @readonly
         */
        readonly eASServiceKPIs: OPTIONAL<ServiceKPIs>,
        /**
         * @summary `eASServicePermLevel`.
         * @public
         * @readonly
         */
        readonly eASServicePermLevel: OPTIONAL<UTF8String>,
        /**
         * @summary `eASServiceFeatures`.
         * @public
         * @readonly
         */
        readonly eASServiceFeatures: OPTIONAL<EASServiceFeatures>,
        /**
         * @summary `eASServiceContSupport`.
         * @public
         * @readonly
         */
        readonly eASServiceContSupport: OPTIONAL<ACRScenarios>,
        /**
         * @summary `appLocs`.
         * @public
         * @readonly
         */
        readonly appLocs: OPTIONAL<RouteToLocations>,
        /**
         * @summary `eASStatus`.
         * @public
         * @readonly
         */
        readonly eASStatus: OPTIONAL<EASStatus>
    ) {}

    /**
     * @summary Restructures an object into a EASProfile
     * @description
     * 
     * This takes an `object` and converts it to a `EASProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASProfile`.
     * @returns {EASProfile}
     */
    public static _from_object (_o: { [_K in keyof (EASProfile)]: (EASProfile)[_K] }): EASProfile {
        return new EASProfile(_o.eASID, _o.eASEndpoint, _o.aCIDs, _o.aSPID, _o.eASType, _o.eASDescription, _o.eASSchedule, _o.eASServiceArea, _o.eASServiceKPIs, _o.eASServicePermLevel, _o.eASServiceFeatures, _o.eASServiceContSupport, _o.appLocs, _o.eASStatus);
    }

        /**
         * @summary The enum used as the type of the component `eASStatus`
         * @public
         * @static
         */

    public static _enum_for_eASStatus = _enum_for_EASStatus;
}

/**
 * @summary The Leading Root Component Types of EASProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("eASID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eASEndpoint", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCIDs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aSPID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASType", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eASDescription", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eASSchedule", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("eASServiceArea", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("eASServiceKPIs", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eASServicePermLevel", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("eASServiceFeatures", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("eASServiceContSupport", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("appLocs", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("eASStatus", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of EASProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASProfile: $.ASN1Decoder<EASProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASProfile (el: _Element): EASProfile {
    if (!_cached_decoder_for_EASProfile) { _cached_decoder_for_EASProfile = function (el: _Element): EASProfile {
    let eASID!: EASID;
    let eASEndpoint!: EASEndpoint;
    let aCIDs: OPTIONAL<ACIDs>;
    let aSPID: OPTIONAL<UTF8String>;
    let eASType: OPTIONAL<UTF8String>;
    let eASDescription: OPTIONAL<UTF8String>;
    let eASSchedule: OPTIONAL<Daytime>;
    let eASServiceArea: OPTIONAL<Location>;
    let eASServiceKPIs: OPTIONAL<ServiceKPIs>;
    let eASServicePermLevel: OPTIONAL<UTF8String>;
    let eASServiceFeatures: OPTIONAL<EASServiceFeatures>;
    let eASServiceContSupport: OPTIONAL<ACRScenarios>;
    let appLocs: OPTIONAL<RouteToLocations>;
    let eASStatus: OPTIONAL<EASStatus>;
    const callbacks: $.DecodingMap = {
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "eASEndpoint": (_el: _Element): void => { eASEndpoint = $._decode_implicit<EASEndpoint>(() => _decode_EASEndpoint)(_el); },
        "aCIDs": (_el: _Element): void => { aCIDs = $._decode_implicit<ACIDs>(() => _decode_ACIDs)(_el); },
        "aSPID": (_el: _Element): void => { aSPID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASType": (_el: _Element): void => { eASType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASDescription": (_el: _Element): void => { eASDescription = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASSchedule": (_el: _Element): void => { eASSchedule = $._decode_implicit<Daytime>(() => _decode_Daytime)(_el); },
        "eASServiceArea": (_el: _Element): void => { eASServiceArea = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "eASServiceKPIs": (_el: _Element): void => { eASServiceKPIs = $._decode_implicit<ServiceKPIs>(() => _decode_ServiceKPIs)(_el); },
        "eASServicePermLevel": (_el: _Element): void => { eASServicePermLevel = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASServiceFeatures": (_el: _Element): void => { eASServiceFeatures = $._decode_implicit<EASServiceFeatures>(() => _decode_EASServiceFeatures)(_el); },
        "eASServiceContSupport": (_el: _Element): void => { eASServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); },
        "appLocs": (_el: _Element): void => { appLocs = $._decode_implicit<RouteToLocations>(() => _decode_RouteToLocations)(_el); },
        "eASStatus": (_el: _Element): void => { eASStatus = $._decode_implicit<EASStatus>(() => _decode_EASStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EASProfile,
        _extension_additions_list_spec_for_EASProfile,
        _root_component_type_list_2_spec_for_EASProfile,
        undefined,
    );
    return new EASProfile(
        eASID,
        eASEndpoint,
        aCIDs,
        aSPID,
        eASType,
        eASDescription,
        eASSchedule,
        eASServiceArea,
        eASServiceKPIs,
        eASServicePermLevel,
        eASServiceFeatures,
        eASServiceContSupport,
        appLocs,
        eASStatus
    );
}; }
    return _cached_decoder_for_EASProfile(el);
}

let _cached_encoder_for_EASProfile: $.ASN1Encoder<EASProfile> | null = null;

/**
 * @summary Encodes a(n) EASProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASProfile, encoded as an ASN.1 Element.
 */
export
function _encode_EASProfile (value: EASProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASProfile) { _cached_encoder_for_EASProfile = function (value: EASProfile, elGetter: $.ASN1Encoder<EASProfile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASEndpoint, $.BER)(value.eASEndpoint, $.BER),
            /* IF_ABSENT  */ ((value.aCIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ACIDs, $.BER)(value.aCIDs, $.BER)),
            /* IF_ABSENT  */ ((value.aSPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.aSPID, $.BER)),
            /* IF_ABSENT  */ ((value.eASType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.eASType, $.BER)),
            /* IF_ABSENT  */ ((value.eASDescription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.eASDescription, $.BER)),
            /* IF_ABSENT  */ ((value.eASSchedule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Daytime, $.BER)(value.eASSchedule, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.eASServiceArea, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceKPIs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ServiceKPIs, $.BER)(value.eASServiceKPIs, $.BER)),
            /* IF_ABSENT  */ ((value.eASServicePermLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.eASServicePermLevel, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EASServiceFeatures, $.BER)(value.eASServiceFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.eASServiceContSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ACRScenarios, $.BER)(value.eASServiceContSupport, $.BER)),
            /* IF_ABSENT  */ ((value.appLocs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_RouteToLocations, $.BER)(value.appLocs, $.BER)),
            /* IF_ABSENT  */ ((value.eASStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_EASStatus, $.BER)(value.eASStatus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASProfile(value, elGetter);
}


/* eslint-enable */
