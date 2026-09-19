/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
import { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
// export { AllowedNSSAI, _decode_AllowedNSSAI, _encode_AllowedNSSAI } from "../TS33128Payloads/AllowedNSSAI.ta.mjs";
import { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
// export { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
import { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
import { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
// export { UEDifferentiationInfo, _decode_UEDifferentiationInfo, _encode_UEDifferentiationInfo } from "../TS33128Payloads/UEDifferentiationInfo.ta.mjs";
import { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
// export { UERadioCapability, _decode_UERadioCapability, _encode_UERadioCapability } from "../TS33128Payloads/UERadioCapability.ta.mjs";
import { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
// export { TargetNSSAIInfo, _decode_TargetNSSAIInfo, _encode_TargetNSSAIInfo } from "../TS33128Payloads/TargetNSSAIInfo.ta.mjs";
import { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";
// export { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, authorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";


/**
 * @summary RANDownlinkNASTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANDownlinkNASTransport ::= SEQUENCE
 * {
 *     aMFUENGAPID                   [1] AMFUENGAPID,
 *     rANUENGAPID                   [2] RANUENGAPID,
 *     oldAMF                        [3] GUAMI OPTIONAL,
 *     allowedNSSAI                  [4] AllowedNSSAI OPTIONAL,
 *     mobilityRestrictionList       [5] MobilityRestrictionList OPTIONAL,
 *     rATFrequencySelectionPriority [6] RATFrequencySelectionPriority OPTIONAL,
 *     uEDifferentiationInfo         [7] UEDifferentiationInfo OPTIONAL,
 *     uERadioCapability             [8] UERadioCapability OPTIONAL,
 *     uERadioCapabilityID           [9] OCTET STRING OPTIONAL,
 *     targetNSSAIInfo               [10] TargetNSSAIInfo OPTIONAL,
 *     mobileIABAuthorizedIndicator  [11] MobileIABAuthorizedIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RANDownlinkNASTransport {
    constructor (
        /**
         * @summary `aMFUENGAPID`.
         * @public
         * @readonly
         */
        readonly aMFUENGAPID: AMFUENGAPID,
        /**
         * @summary `rANUENGAPID`.
         * @public
         * @readonly
         */
        readonly rANUENGAPID: RANUENGAPID,
        /**
         * @summary `oldAMF`.
         * @public
         * @readonly
         */
        readonly oldAMF: OPTIONAL<GUAMI>,
        /**
         * @summary `allowedNSSAI`.
         * @public
         * @readonly
         */
        readonly allowedNSSAI: OPTIONAL<AllowedNSSAI>,
        /**
         * @summary `mobilityRestrictionList`.
         * @public
         * @readonly
         */
        readonly mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>,
        /**
         * @summary `rATFrequencySelectionPriority`.
         * @public
         * @readonly
         */
        readonly rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>,
        /**
         * @summary `uEDifferentiationInfo`.
         * @public
         * @readonly
         */
        readonly uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>,
        /**
         * @summary `uERadioCapability`.
         * @public
         * @readonly
         */
        readonly uERadioCapability: OPTIONAL<UERadioCapability>,
        /**
         * @summary `uERadioCapabilityID`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityID: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `targetNSSAIInfo`.
         * @public
         * @readonly
         */
        readonly targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>,
        /**
         * @summary `mobileIABAuthorizedIndicator`.
         * @public
         * @readonly
         */
        readonly mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>
    ) {}

    /**
     * @summary Restructures an object into a RANDownlinkNASTransport
     * @description
     * 
     * This takes an `object` and converts it to a `RANDownlinkNASTransport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RANDownlinkNASTransport`.
     * @returns {RANDownlinkNASTransport}
     */
    public static _from_object (_o: { [_K in keyof (RANDownlinkNASTransport)]: (RANDownlinkNASTransport)[_K] }): RANDownlinkNASTransport {
        return new RANDownlinkNASTransport(_o.aMFUENGAPID, _o.rANUENGAPID, _o.oldAMF, _o.allowedNSSAI, _o.mobilityRestrictionList, _o.rATFrequencySelectionPriority, _o.uEDifferentiationInfo, _o.uERadioCapability, _o.uERadioCapabilityID, _o.targetNSSAIInfo, _o.mobileIABAuthorizedIndicator);
    }

        /**
         * @summary The enum used as the type of the component `mobileIABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_mobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;
}

/**
 * @summary The Leading Root Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("oldAMF", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("allowedNSSAI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mobilityRestrictionList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rATFrequencySelectionPriority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("uEDifferentiationInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("uERadioCapability", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uERadioCapabilityID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("targetNSSAIInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mobileIABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RANDownlinkNASTransport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RANDownlinkNASTransport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RANDownlinkNASTransport: $.ASN1Decoder<RANDownlinkNASTransport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANDownlinkNASTransport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANDownlinkNASTransport (el: _Element): RANDownlinkNASTransport {
    if (!_cached_decoder_for_RANDownlinkNASTransport) { _cached_decoder_for_RANDownlinkNASTransport = function (el: _Element): RANDownlinkNASTransport {
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let oldAMF: OPTIONAL<GUAMI>;
    let allowedNSSAI: OPTIONAL<AllowedNSSAI>;
    let mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    let rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    let uEDifferentiationInfo: OPTIONAL<UEDifferentiationInfo>;
    let uERadioCapability: OPTIONAL<UERadioCapability>;
    let uERadioCapabilityID: OPTIONAL<OCTET_STRING>;
    let targetNSSAIInfo: OPTIONAL<TargetNSSAIInfo>;
    let mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>;
    const callbacks: $.DecodingMap = {
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "oldAMF": (_el: _Element): void => { oldAMF = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "allowedNSSAI": (_el: _Element): void => { allowedNSSAI = $._decode_implicit<AllowedNSSAI>(() => _decode_AllowedNSSAI)(_el); },
        "mobilityRestrictionList": (_el: _Element): void => { mobilityRestrictionList = $._decode_implicit<MobilityRestrictionList>(() => _decode_MobilityRestrictionList)(_el); },
        "rATFrequencySelectionPriority": (_el: _Element): void => { rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(_el); },
        "uEDifferentiationInfo": (_el: _Element): void => { uEDifferentiationInfo = $._decode_implicit<UEDifferentiationInfo>(() => _decode_UEDifferentiationInfo)(_el); },
        "uERadioCapability": (_el: _Element): void => { uERadioCapability = $._decode_implicit<UERadioCapability>(() => _decode_UERadioCapability)(_el); },
        "uERadioCapabilityID": (_el: _Element): void => { uERadioCapabilityID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "targetNSSAIInfo": (_el: _Element): void => { targetNSSAIInfo = $._decode_implicit<TargetNSSAIInfo>(() => _decode_TargetNSSAIInfo)(_el); },
        "mobileIABAuthorizedIndicator": (_el: _Element): void => { mobileIABAuthorizedIndicator = $._decode_implicit<MobileIABAuthorizedIndicator>(() => _decode_MobileIABAuthorizedIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RANDownlinkNASTransport,
        _extension_additions_list_spec_for_RANDownlinkNASTransport,
        _root_component_type_list_2_spec_for_RANDownlinkNASTransport,
        undefined,
    );
    return new RANDownlinkNASTransport(
        aMFUENGAPID,
        rANUENGAPID,
        oldAMF,
        allowedNSSAI,
        mobilityRestrictionList,
        rATFrequencySelectionPriority,
        uEDifferentiationInfo,
        uERadioCapability,
        uERadioCapabilityID,
        targetNSSAIInfo,
        mobileIABAuthorizedIndicator
    );
}; }
    return _cached_decoder_for_RANDownlinkNASTransport(el);
}

let _cached_encoder_for_RANDownlinkNASTransport: $.ASN1Encoder<RANDownlinkNASTransport> | null = null;

/**
 * @summary Encodes a(n) RANDownlinkNASTransport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANDownlinkNASTransport, encoded as an ASN.1 Element.
 */
export
function _encode_RANDownlinkNASTransport (value: RANDownlinkNASTransport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANDownlinkNASTransport) { _cached_encoder_for_RANDownlinkNASTransport = function (value: RANDownlinkNASTransport, elGetter: $.ASN1Encoder<RANDownlinkNASTransport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER),
            /* IF_ABSENT  */ ((value.oldAMF === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GUAMI, $.BER)(value.oldAMF, $.BER)),
            /* IF_ABSENT  */ ((value.allowedNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AllowedNSSAI, $.BER)(value.allowedNSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.mobilityRestrictionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MobilityRestrictionList, $.BER)(value.mobilityRestrictionList, $.BER)),
            /* IF_ABSENT  */ ((value.rATFrequencySelectionPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER)),
            /* IF_ABSENT  */ ((value.uEDifferentiationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_UEDifferentiationInfo, $.BER)(value.uEDifferentiationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_UERadioCapability, $.BER)(value.uERadioCapability, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapabilityID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityID, $.BER)),
            /* IF_ABSENT  */ ((value.targetNSSAIInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_TargetNSSAIInfo, $.BER)(value.targetNSSAIInfo, $.BER)),
            /* IF_ABSENT  */ ((value.mobileIABAuthorizedIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MobileIABAuthorizedIndicator, $.BER)(value.mobileIABAuthorizedIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RANDownlinkNASTransport(value, elGetter);
}


/* eslint-enable */
