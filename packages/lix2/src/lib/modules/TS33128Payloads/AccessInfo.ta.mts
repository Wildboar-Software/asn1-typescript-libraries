/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { EstablishmentStatus, _decode_EstablishmentStatus, _encode_EstablishmentStatus, _enum_for_EstablishmentStatus } from "../TS33128Payloads/EstablishmentStatus.ta.mjs";
// export { EstablishmentStatus, _enum_for_EstablishmentStatus, EstablishmentStatus_established /* IMPORTED_LONG_ENUMERATION_ITEM */, established /* IMPORTED_SHORT_ENUMERATION_ITEM */, EstablishmentStatus_released /* IMPORTED_LONG_ENUMERATION_ITEM */, released /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EstablishmentStatus, _encode_EstablishmentStatus } from "../TS33128Payloads/EstablishmentStatus.ta.mjs";
import { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
// export { GTPTunnelInfo, _decode_GTPTunnelInfo, _encode_GTPTunnelInfo } from "../TS33128Payloads/GTPTunnelInfo.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";
// export { GEOSatelliteID, _decode_GEOSatelliteID, _encode_GEOSatelliteID } from "../TS33128Payloads/GEOSatelliteID.ta.mjs";


/**
 * @summary AccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessInfo ::= SEQUENCE
 * {
 *     accessType                [1] AccessType,
 *     rATType                   [2] RATType OPTIONAL,
 *     gTPTunnelID               [3] FTEID,
 *     non3GPPAccessEndpoint     [4] UEEndpointAddress OPTIONAL,
 *     establishmentStatus       [5] EstablishmentStatus,
 *     aNTypeToReactivate        [6] AccessType OPTIONAL,
 *     gTPTunnelInfo             [7] GTPTunnelInfo OPTIONAL,
 *     satelliteBackhaulCategory [8] SBIType OPTIONAL,
 *     gEOSatelliteID            [9] GEOSatelliteID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccessInfo {
    constructor (
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: AccessType,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `gTPTunnelID`.
         * @public
         * @readonly
         */
        readonly gTPTunnelID: FTEID,
        /**
         * @summary `non3GPPAccessEndpoint`.
         * @public
         * @readonly
         */
        readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        /**
         * @summary `establishmentStatus`.
         * @public
         * @readonly
         */
        readonly establishmentStatus: EstablishmentStatus,
        /**
         * @summary `aNTypeToReactivate`.
         * @public
         * @readonly
         */
        readonly aNTypeToReactivate: OPTIONAL<AccessType>,
        /**
         * @summary `gTPTunnelInfo`.
         * @public
         * @readonly
         */
        readonly gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>,
        /**
         * @summary `satelliteBackhaulCategory`.
         * @public
         * @readonly
         */
        readonly satelliteBackhaulCategory: OPTIONAL<SBIType>,
        /**
         * @summary `gEOSatelliteID`.
         * @public
         * @readonly
         */
        readonly gEOSatelliteID: OPTIONAL<GEOSatelliteID>
    ) {}

    /**
     * @summary Restructures an object into a AccessInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AccessInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessInfo`.
     * @returns {AccessInfo}
     */
    public static _from_object (_o: { [_K in keyof (AccessInfo)]: (AccessInfo)[_K] }): AccessInfo {
        return new AccessInfo(_o.accessType, _o.rATType, _o.gTPTunnelID, _o.non3GPPAccessEndpoint, _o.establishmentStatus, _o.aNTypeToReactivate, _o.gTPTunnelInfo, _o.satelliteBackhaulCategory, _o.gEOSatelliteID);
    }

        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;        /**
         * @summary The enum used as the type of the component `establishmentStatus`
         * @public
         * @static
         */

    public static _enum_for_establishmentStatus = _enum_for_EstablishmentStatus;        /**
         * @summary The enum used as the type of the component `aNTypeToReactivate`
         * @public
         * @static
         */

    public static _enum_for_aNTypeToReactivate = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gTPTunnelID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("establishmentStatus", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aNTypeToReactivate", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gTPTunnelInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("satelliteBackhaulCategory", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("gEOSatelliteID", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessInfo: $.ASN1Decoder<AccessInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessInfo (el: _Element): AccessInfo {
    if (!_cached_decoder_for_AccessInfo) { _cached_decoder_for_AccessInfo = function (el: _Element): AccessInfo {
    let accessType!: AccessType;
    let rATType: OPTIONAL<RATType>;
    let gTPTunnelID!: FTEID;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let establishmentStatus!: EstablishmentStatus;
    let aNTypeToReactivate: OPTIONAL<AccessType>;
    let gTPTunnelInfo: OPTIONAL<GTPTunnelInfo>;
    let satelliteBackhaulCategory: OPTIONAL<SBIType>;
    let gEOSatelliteID: OPTIONAL<GEOSatelliteID>;
    const callbacks: $.DecodingMap = {
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "gTPTunnelID": (_el: _Element): void => { gTPTunnelID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "establishmentStatus": (_el: _Element): void => { establishmentStatus = $._decode_implicit<EstablishmentStatus>(() => _decode_EstablishmentStatus)(_el); },
        "aNTypeToReactivate": (_el: _Element): void => { aNTypeToReactivate = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "gTPTunnelInfo": (_el: _Element): void => { gTPTunnelInfo = $._decode_implicit<GTPTunnelInfo>(() => _decode_GTPTunnelInfo)(_el); },
        "satelliteBackhaulCategory": (_el: _Element): void => { satelliteBackhaulCategory = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "gEOSatelliteID": (_el: _Element): void => { gEOSatelliteID = $._decode_implicit<GEOSatelliteID>(() => _decode_GEOSatelliteID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessInfo,
        _extension_additions_list_spec_for_AccessInfo,
        _root_component_type_list_2_spec_for_AccessInfo,
        undefined,
    );
    return new AccessInfo(
        accessType,
        rATType,
        gTPTunnelID,
        non3GPPAccessEndpoint,
        establishmentStatus,
        aNTypeToReactivate,
        gTPTunnelInfo,
        satelliteBackhaulCategory,
        gEOSatelliteID
    );
}; }
    return _cached_decoder_for_AccessInfo(el);
}

let _cached_encoder_for_AccessInfo: $.ASN1Encoder<AccessInfo> | null = null;

/**
 * @summary Encodes a(n) AccessInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AccessInfo (value: AccessInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessInfo) { _cached_encoder_for_AccessInfo = function (value: AccessInfo, elGetter: $.ASN1Encoder<AccessInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AccessType, $.BER)(value.accessType, $.BER),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_FTEID, $.BER)(value.gTPTunnelID, $.BER),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EstablishmentStatus, $.BER)(value.establishmentStatus, $.BER),
            /* IF_ABSENT  */ ((value.aNTypeToReactivate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AccessType, $.BER)(value.aNTypeToReactivate, $.BER)),
            /* IF_ABSENT  */ ((value.gTPTunnelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GTPTunnelInfo, $.BER)(value.gTPTunnelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.satelliteBackhaulCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SBIType, $.BER)(value.satelliteBackhaulCategory, $.BER)),
            /* IF_ABSENT  */ ((value.gEOSatelliteID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_GEOSatelliteID, $.BER)(value.gEOSatelliteID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessInfo(value, elGetter);
}


/* eslint-enable */
