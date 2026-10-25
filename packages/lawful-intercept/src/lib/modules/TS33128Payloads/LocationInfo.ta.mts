/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";
// export { UserLocation, _decode_UserLocation, _encode_UserLocation } from "../TS33128Payloads/UserLocation.ta.mjs";
import { type GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
// export { GeographicArea, _decode_GeographicArea, _encode_GeographicArea } from "../TS33128Payloads/GeographicArea.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { type TimeZone, _decode_TimeZone, _encode_TimeZone } from "../TS33128Payloads/TimeZone.ta.mjs";
// export { TimeZone, _decode_TimeZone, _encode_TimeZone } from "../TS33128Payloads/TimeZone.ta.mjs";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";
// export { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary LocationInfo
 * @description
 * 
 * The LocationInfo type is derived from the data present in the ProvideLocInfo
 * type (see TS 29.518 [22] clause 6.4.6.2.6). If the NF has locations from
 * multiple RAT types, all appropriate location fields within the userLocation
 * parameter shall be used.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfo ::= SEQUENCE
 * {
 *     userLocation                [1] UserLocation OPTIONAL,
 *     currentLoc                  [2] BOOLEAN OPTIONAL,
 *     geoInfo                     [3] GeographicArea OPTIONAL,
 *     rATType                     [4] RATType OPTIONAL,
 *     timeZone                    [5] TimeZone OPTIONAL,
 *     additionalCellIDs           [6] SEQUENCE OF CellInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocationInfo {
    /**
     * @summary `userLocation`.
     * @description
     *
     * Location information type derived from the data defined in the
     * UserLocation type defined in TS 29.571 [17] clause 5.4.4.7. See clause
     * 7.3.3.2.4 for details on this data type. This field shall be used to
     * convey one or more of the following:
     *
     * - E-UTRA user location.
     *
     * - NR user location.
     *
     * - Non-3GPP access user location.
     *
     * - UTRA Location.
     *
     * - GERA Location.
     *
     * - PLMN Location.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly userLocation: OPTIONAL<UserLocation>;
    /**
     * @summary `currentLoc`.
     * @description
     *
     * This parameter shall be present if it can be determined for the reported
     * location. When present, this parameter shall be set as following:
     *
     * - TRUE: the current location of the UE is reported.
     *
     * - FALSE: the last known location of the UE is reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly currentLoc: OPTIONAL<BOOLEAN>;
    /**
     * @summary `geoInfo`.
     * @description
     *
     * This parameter shall be present if the geoInfo parameter of the
     * ProvideLocInfo structure (see TS 29.518 [22] clause 6.4.6.2.6) is used.
     * See clause 7.3.3.2.10 for details on this structure.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly geoInfo: OPTIONAL<GeographicArea>;
    /**
     * @summary `rATType`.
     * @description
     *
     * This parameter shall be present if the RATType of the UE is known at the
     * NF. See clause 7.3.3.2.20 for details on this structure.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<RATType>;
    /**
     * @summary `timeZone`.
     * @description
     *
     * This parameter shall be present if the local timeZone of the UE is known
     * at the NF.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly timeZone: OPTIONAL<TimeZone>;
    /**
     * @summary `additionalCellIDs`.
     * @description
     *
     * This parameter shall be present if the NF has additional cell information
     * for the UE. Shall be used whenever Dual Connectivity is activated or
     * whenever secondary cell information is available at the NF where the POI
     * is located.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly additionalCellIDs: OPTIONAL<CellInformation[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userLocation?: OPTIONAL<UserLocation>,
        currentLoc?: OPTIONAL<BOOLEAN>,
        geoInfo?: OPTIONAL<GeographicArea>,
        rATType?: OPTIONAL<RATType>,
        timeZone?: OPTIONAL<TimeZone>,
        additionalCellIDs?: OPTIONAL<CellInformation[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userLocation = userLocation;
        this.currentLoc = currentLoc;
        this.geoInfo = geoInfo;
        this.rATType = rATType;
        this.timeZone = timeZone;
        this.additionalCellIDs = additionalCellIDs;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a LocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInfo`.
     * @returns {LocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (LocationInfo)]: (LocationInfo)[_K] }): LocationInfo {
        return new LocationInfo(_o.userLocation, _o.currentLoc, _o.geoInfo, _o.rATType, _o.timeZone, _o.additionalCellIDs, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("userLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("currentLoc", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geoInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeZone", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("additionalCellIDs", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationInfo: $.ASN1Decoder<LocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfo (el: _Element): LocationInfo {
    if (!_cached_decoder_for_LocationInfo) { _cached_decoder_for_LocationInfo = function (el: _Element): LocationInfo {
    let userLocation: OPTIONAL<UserLocation>;
    let currentLoc: OPTIONAL<BOOLEAN>;
    let geoInfo: OPTIONAL<GeographicArea>;
    let rATType: OPTIONAL<RATType>;
    let timeZone: OPTIONAL<TimeZone>;
    let additionalCellIDs: OPTIONAL<CellInformation[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userLocation": (_el: _Element): void => { userLocation = $._decode_implicit<UserLocation>(() => _decode_UserLocation)(_el); },
        "currentLoc": (_el: _Element): void => { currentLoc = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "geoInfo": (_el: _Element): void => { geoInfo = $._decode_explicit<GeographicArea>(() => _decode_GeographicArea)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "timeZone": (_el: _Element): void => { timeZone = $._decode_implicit<TimeZone>(() => _decode_TimeZone)(_el); },
        "additionalCellIDs": (_el: _Element): void => { additionalCellIDs = $._decode_implicit<CellInformation[]>(() => $._decodeSequenceOf<CellInformation>(() => _decode_CellInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInfo,
        _extension_additions_list_spec_for_LocationInfo,
        _root_component_type_list_2_spec_for_LocationInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInfo(
        userLocation,
        currentLoc,
        geoInfo,
        rATType,
        timeZone,
        additionalCellIDs,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInfo(el);
}

let _cached_encoder_for_LocationInfo: $.ASN1Encoder<LocationInfo> | null = null;

/**
 * @summary Encodes a(n) LocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfo (value: LocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfo) { _cached_encoder_for_LocationInfo = function (value: LocationInfo, elGetter: $.ASN1Encoder<LocationInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.userLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserLocation, $.BER)(value.userLocation, $.BER);
    }
    if (value.currentLoc !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.currentLoc, $.BER);
    }
    if (value.geoInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_GeographicArea, $.BER)(value.geoInfo, $.BER);
    }
    if (value.rATType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RATType, $.BER)(value.rATType, $.BER);
    }
    if (value.timeZone !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_TimeZone, $.BER)(value.timeZone, $.BER);
    }
    if (value.additionalCellIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<CellInformation>(() => _encode_CellInformation, $.BER), $.BER)(value.additionalCellIDs, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocationInfo(value, elGetter);
}


/* eslint-enable */
