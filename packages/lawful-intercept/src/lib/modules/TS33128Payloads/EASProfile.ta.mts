/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
// export { EASEndpoint, _decode_EASEndpoint, _encode_EASEndpoint } from "../TS33128Payloads/EASEndpoint.ta.mjs";
import { type ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
// export { ACIDs, _decode_ACIDs, _encode_ACIDs } from "../TS33128Payloads/ACIDs.ta.mjs";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";
// export { ServiceKPIs, _decode_ServiceKPIs, _encode_ServiceKPIs } from "../TS33128Payloads/ServiceKPIs.ta.mjs";
import { type EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";
// export { EASServiceFeatures, _decode_EASServiceFeatures, _encode_EASServiceFeatures } from "../TS33128Payloads/EASServiceFeatures.ta.mjs";
import { type ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
import { type RouteToLocations, _decode_RouteToLocations, _encode_RouteToLocations } from "../TS33128Payloads/RouteToLocations.ta.mjs";
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
    /**
     * @summary `eASID`.
     * @description
     *
     * EAS Identity.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASID: EASID;
    /**
     * @summary `eASEndpoint`.
     * @description
     *
     * Endpoint information (e.g. URI, FQDN, IP address) used to communicate
     * with the EAS.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASEndpoint: EASEndpoint;
    /**
     * @summary `aCIDs`.
     * @description
     *
     * Identities of the AC(s) that can be served by the EAS, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly aCIDs: OPTIONAL<ACIDs>;
    /**
     * @summary `aSPID`.
     * @description
     *
     * Identity of the ASP which provides the EAS, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly aSPID: OPTIONAL<UTF8String>;
    /**
     * @summary `eASType`.
     * @description
     *
     * EAS type or category, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASType: OPTIONAL<UTF8String>;
    /**
     * @summary `eASDescription`.
     * @description
     *
     * Human-readable description of the EAS.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASDescription: OPTIONAL<UTF8String>;
    /**
     * @summary `eASSchedule`.
     * @description
     *
     * Availability schedule of the EAS (e.g. time windows), if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASSchedule: OPTIONAL<Daytime>;
    /**
     * @summary `eASServiceArea`.
     * @description
     *
     * List of geographical and topological service areas that the EAS serves,
     * if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASServiceArea: OPTIONAL<Location>;
    /**
     * @summary `eASServiceKPIs`.
     * @description
     *
     * Service characteristics provided by the EAS.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASServiceKPIs: OPTIONAL<ServiceKPIs>;
    /**
     * @summary `eASServicePermLevel`.
     * @description
     *
     * Level of service permissions (e.g. trial, gold-class) supported by the
     * EAS, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASServicePermLevel: OPTIONAL<UTF8String>;
    /**
     * @summary `eASServiceFeatures`.
     * @description
     *
     * Service features e.g. single vs. multi-player gaming service supported by
     * the EAS, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASServiceFeatures: OPTIONAL<EASServiceFeatures>;
    /**
     * @summary `eASServiceContSupport`.
     * @description
     *
     * ACR scenarios supported by the EAS for service continuity if any.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASServiceContSupport: OPTIONAL<ACRScenarios>;
    /**
     * @summary `appLocs`.
     * @description
     *
     * List of DNAI(s) and the corresponding N6 traffic routing
     * information/routing profile ID, associated with the EAS, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly appLocs: OPTIONAL<RouteToLocations>;
    /**
     * @summary `eASStatus`.
     * @description
     *
     * EAS status (e.g. Enabled, Disabled etc.), if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.3.
     *
     * @public
     * @readonly
     */
    readonly eASStatus: OPTIONAL<EASStatus>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eASID: EASID,
        eASEndpoint: EASEndpoint,
        aCIDs?: OPTIONAL<ACIDs>,
        aSPID?: OPTIONAL<UTF8String>,
        eASType?: OPTIONAL<UTF8String>,
        eASDescription?: OPTIONAL<UTF8String>,
        eASSchedule?: OPTIONAL<Daytime>,
        eASServiceArea?: OPTIONAL<Location>,
        eASServiceKPIs?: OPTIONAL<ServiceKPIs>,
        eASServicePermLevel?: OPTIONAL<UTF8String>,
        eASServiceFeatures?: OPTIONAL<EASServiceFeatures>,
        eASServiceContSupport?: OPTIONAL<ACRScenarios>,
        appLocs?: OPTIONAL<RouteToLocations>,
        eASStatus?: OPTIONAL<EASStatus>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eASID = eASID;
        this.eASEndpoint = eASEndpoint;
        this.aCIDs = aCIDs;
        this.aSPID = aSPID;
        this.eASType = eASType;
        this.eASDescription = eASDescription;
        this.eASSchedule = eASSchedule;
        this.eASServiceArea = eASServiceArea;
        this.eASServiceKPIs = eASServiceKPIs;
        this.eASServicePermLevel = eASServicePermLevel;
        this.eASServiceFeatures = eASServiceFeatures;
        this.eASServiceContSupport = eASServiceContSupport;
        this.appLocs = appLocs;
        this.eASStatus = eASStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new EASProfile(_o.eASID, _o.eASEndpoint, _o.aCIDs, _o.aSPID, _o.eASType, _o.eASDescription, _o.eASSchedule, _o.eASServiceArea, _o.eASServiceKPIs, _o.eASServicePermLevel, _o.eASServiceFeatures, _o.eASServiceContSupport, _o.appLocs, _o.eASStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eASStatus`
         * @public
         * @static
         */

    public static _enum_for_eASStatus: typeof _enum_for_EASStatus = _enum_for_EASStatus;
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
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
        eASStatus,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EASID, $.BER)(value.eASID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASEndpoint, $.BER)(value.eASEndpoint, $.BER);
    if (value.aCIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ACIDs, $.BER)(value.aCIDs, $.BER);
    }
    if (value.aSPID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.aSPID, $.BER);
    }
    if (value.eASType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.eASType, $.BER);
    }
    if (value.eASDescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.eASDescription, $.BER);
    }
    if (value.eASSchedule !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Daytime, $.BER)(value.eASSchedule, $.BER);
    }
    if (value.eASServiceArea !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Location, $.BER)(value.eASServiceArea, $.BER);
    }
    if (value.eASServiceKPIs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_ServiceKPIs, $.BER)(value.eASServiceKPIs, $.BER);
    }
    if (value.eASServicePermLevel !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.eASServicePermLevel, $.BER);
    }
    if (value.eASServiceFeatures !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_EASServiceFeatures, $.BER)(value.eASServiceFeatures, $.BER);
    }
    if (value.eASServiceContSupport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ACRScenarios, $.BER)(value.eASServiceContSupport, $.BER);
    }
    if (value.appLocs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_RouteToLocations, $.BER)(value.appLocs, $.BER);
    }
    if (value.eASStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_EASStatus, $.BER)(value.eASStatus, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EASProfile(value, elGetter);
}


/* eslint-enable */
