/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";


/**
 * @summary UEContextInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEContextInfo ::= SEQUENCE
 * {
 *     supportVoPS         [1] BOOLEAN OPTIONAL,
 *     supportVoPSNon3GPP  [2] BOOLEAN OPTIONAL,
 *     lastActiveTime      [3] Timestamp OPTIONAL,
 *     accessType          [4] AccessType OPTIONAL,
 *     rATType             [5] RATType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UEContextInfo {
    constructor (
        /**
         * @summary `supportVoPS`.
         * @public
         * @readonly
         */
        readonly supportVoPS: OPTIONAL<BOOLEAN>,
        /**
         * @summary `supportVoPSNon3GPP`.
         * @public
         * @readonly
         */
        readonly supportVoPSNon3GPP: OPTIONAL<BOOLEAN>,
        /**
         * @summary `lastActiveTime`.
         * @public
         * @readonly
         */
        readonly lastActiveTime: OPTIONAL<Timestamp>,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: OPTIONAL<AccessType>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>
    ) {}

    /**
     * @summary Restructures an object into a UEContextInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UEContextInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UEContextInfo`.
     * @returns {UEContextInfo}
     */
    public static _from_object (_o: { [_K in keyof (UEContextInfo)]: (UEContextInfo)[_K] }): UEContextInfo {
        return new UEContextInfo(_o.supportVoPS, _o.supportVoPSNon3GPP, _o.lastActiveTime, _o.accessType, _o.rATType);
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

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of UEContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UEContextInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("supportVoPS", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportVoPSNon3GPP", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lastActiveTime", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of UEContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UEContextInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UEContextInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UEContextInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UEContextInfo: $.ASN1Decoder<UEContextInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEContextInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEContextInfo (el: _Element): UEContextInfo {
    if (!_cached_decoder_for_UEContextInfo) { _cached_decoder_for_UEContextInfo = function (el: _Element): UEContextInfo {
    let supportVoPS: OPTIONAL<BOOLEAN>;
    let supportVoPSNon3GPP: OPTIONAL<BOOLEAN>;
    let lastActiveTime: OPTIONAL<Timestamp>;
    let accessType: OPTIONAL<AccessType>;
    let rATType: OPTIONAL<RATType>;
    const callbacks: $.DecodingMap = {
        "supportVoPS": (_el: _Element): void => { supportVoPS = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "supportVoPSNon3GPP": (_el: _Element): void => { supportVoPSNon3GPP = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "lastActiveTime": (_el: _Element): void => { lastActiveTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UEContextInfo,
        _extension_additions_list_spec_for_UEContextInfo,
        _root_component_type_list_2_spec_for_UEContextInfo,
        undefined,
    );
    return new UEContextInfo(
        supportVoPS,
        supportVoPSNon3GPP,
        lastActiveTime,
        accessType,
        rATType
    );
}; }
    return _cached_decoder_for_UEContextInfo(el);
}

let _cached_encoder_for_UEContextInfo: $.ASN1Encoder<UEContextInfo> | null = null;

/**
 * @summary Encodes a(n) UEContextInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEContextInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UEContextInfo (value: UEContextInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEContextInfo) { _cached_encoder_for_UEContextInfo = function (value: UEContextInfo, elGetter: $.ASN1Encoder<UEContextInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.supportVoPS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.supportVoPS, $.BER)),
            /* IF_ABSENT  */ ((value.supportVoPSNon3GPP === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.supportVoPSNon3GPP, $.BER)),
            /* IF_ABSENT  */ ((value.lastActiveTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.lastActiveTime, $.BER)),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AccessType, $.BER)(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RATType, $.BER)(value.rATType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UEContextInfo(value, elGetter);
}


/* eslint-enable */
