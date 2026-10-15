/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
// export { ACID, _decode_ACID, _encode_ACID } from "../TS33128Payloads/ACID.ta.mjs";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { EASsInfo, _decode_EASsInfo, _encode_EASsInfo } from "../TS33128Payloads/EASsInfo.ta.mjs";
// export { EASsInfo, _decode_EASsInfo, _encode_EASsInfo } from "../TS33128Payloads/EASsInfo.ta.mjs";
import { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";
// export { ACRScenarios, _decode_ACRScenarios, _encode_ACRScenarios } from "../TS33128Payloads/ACRScenarios.ta.mjs";


/**
 * @summary ACProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACProfile ::= SEQUENCE
 * {
 *     aCID                  [1] ACID,
 *     aCType                [2] UTF8String OPTIONAL,
 *     aCSchedule            [3] Daytime OPTIONAL,
 *     expACGeoServArea      [4] Location OPTIONAL,
 *     eASsInfo              [5] EASsInfo OPTIONAL,
 *     aCServiceContSupport  [6] ACRScenarios OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ACProfile {
    /**
     * @summary `aCID`.
     * @description
     *
     * Application client identity.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly aCID: ACID;
    /**
     * @summary `aCType`.
     * @description
     *
     * Category or type of application client, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly aCType: OPTIONAL<UTF8String>;
    /**
     * @summary `aCSchedule`.
     * @description
     *
     * Expected operation schedule of the AC (e.g. time windows) if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly aCSchedule: OPTIONAL<Daytime>;
    /**
     * @summary `expACGeoServArea`.
     * @description
     *
     * Expected location(s) of the hosting UE during the AC’s operation
     * schedule, if available.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly expACGeoServArea: OPTIONAL<Location>;
    /**
     * @summary `eASsInfo`.
     * @description
     *
     * List of EAS that serve the AC along with the service KPIs required by the
     * AC if available. See table 7.14.2.2-3.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly eASsInfo: OPTIONAL<EASsInfo>;
    /**
     * @summary `aCServiceContSupport`.
     * @description
     *
     * ACR scenarios supported by the AC for service continuity, if any.
     *
     * 3GPP TS 33.128, clause 7.14.2.2.
     *
     * @public
     * @readonly
     */
    readonly aCServiceContSupport: OPTIONAL<ACRScenarios>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aCID: ACID,
        aCType: OPTIONAL<UTF8String>,
        aCSchedule: OPTIONAL<Daytime>,
        expACGeoServArea: OPTIONAL<Location>,
        eASsInfo: OPTIONAL<EASsInfo>,
        aCServiceContSupport: OPTIONAL<ACRScenarios>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aCID = aCID;
        this.aCType = aCType;
        this.aCSchedule = aCSchedule;
        this.expACGeoServArea = expACGeoServArea;
        this.eASsInfo = eASsInfo;
        this.aCServiceContSupport = aCServiceContSupport;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ACProfile
     * @description
     * 
     * This takes an `object` and converts it to a `ACProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACProfile`.
     * @returns {ACProfile}
     */
    public static _from_object (_o: { [_K in keyof (ACProfile)]: (ACProfile)[_K] }): ACProfile {
        return new ACProfile(_o.aCID, _o.aCType, _o.aCSchedule, _o.expACGeoServArea, _o.eASsInfo, _o.aCServiceContSupport, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ACProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("aCID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aCSchedule", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("expACGeoServArea", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eASsInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aCServiceContSupport", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ACProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ACProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ACProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ACProfile: $.ASN1Decoder<ACProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACProfile (el: _Element): ACProfile {
    if (!_cached_decoder_for_ACProfile) { _cached_decoder_for_ACProfile = function (el: _Element): ACProfile {
    let aCID!: ACID;
    let aCType: OPTIONAL<UTF8String>;
    let aCSchedule: OPTIONAL<Daytime>;
    let expACGeoServArea: OPTIONAL<Location>;
    let eASsInfo: OPTIONAL<EASsInfo>;
    let aCServiceContSupport: OPTIONAL<ACRScenarios>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aCID": (_el: _Element): void => { aCID = $._decode_implicit<ACID>(() => _decode_ACID)(_el); },
        "aCType": (_el: _Element): void => { aCType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "aCSchedule": (_el: _Element): void => { aCSchedule = $._decode_implicit<Daytime>(() => _decode_Daytime)(_el); },
        "expACGeoServArea": (_el: _Element): void => { expACGeoServArea = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "eASsInfo": (_el: _Element): void => { eASsInfo = $._decode_implicit<EASsInfo>(() => _decode_EASsInfo)(_el); },
        "aCServiceContSupport": (_el: _Element): void => { aCServiceContSupport = $._decode_implicit<ACRScenarios>(() => _decode_ACRScenarios)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACProfile,
        _extension_additions_list_spec_for_ACProfile,
        _root_component_type_list_2_spec_for_ACProfile,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ACProfile(
        aCID,
        aCType,
        aCSchedule,
        expACGeoServArea,
        eASsInfo,
        aCServiceContSupport,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ACProfile(el);
}

let _cached_encoder_for_ACProfile: $.ASN1Encoder<ACProfile> | null = null;

/**
 * @summary Encodes a(n) ACProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACProfile, encoded as an ASN.1 Element.
 */
export
function _encode_ACProfile (value: ACProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACProfile) { _cached_encoder_for_ACProfile = function (value: ACProfile, elGetter: $.ASN1Encoder<ACProfile>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ACID, $.BER)(value.aCID, $.BER);
    if (value.aCType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.aCType, $.BER);
    }
    if (value.aCSchedule !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Daytime, $.BER)(value.aCSchedule, $.BER);
    }
    if (value.expACGeoServArea !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.expACGeoServArea, $.BER);
    }
    if (value.eASsInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_EASsInfo, $.BER)(value.eASsInfo, $.BER);
    }
    if (value.aCServiceContSupport !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ACRScenarios, $.BER)(value.aCServiceContSupport, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ACProfile(value, elGetter);
}


/* eslint-enable */
