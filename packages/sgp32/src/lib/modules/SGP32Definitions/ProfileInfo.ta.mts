/* eslint-disable */
import {
    BOOLEAN,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ASN1ConstructionError } from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Iccid, _decode_Iccid, _encode_Iccid } from "@wildboar/sgp22/RSPDefinitions";
import { type OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "@wildboar/sgp22/RSPDefinitions";
import { type ProfileState, _decode_ProfileState, _encode_ProfileState } from "@wildboar/sgp22/RSPDefinitions";
import { type IconType, _decode_IconType, _encode_IconType } from "@wildboar/sgp22/RSPDefinitions";
import { type ProfileClass, _decode_ProfileClass, _encode_ProfileClass } from "@wildboar/sgp22/RSPDefinitions";
import { NotificationConfigurationInformation, _decode_NotificationConfigurationInformation, _encode_NotificationConfigurationInformation } from "@wildboar/sgp22/RSPDefinitions";
import { OperatorId, _decode_OperatorId, _encode_OperatorId } from "@wildboar/sgp22/RSPDefinitions";
import { DpProprietaryData, _decode_DpProprietaryData, _encode_DpProprietaryData } from "@wildboar/sgp22/RSPDefinitions";
import { type PprIds, _decode_PprIds, _encode_PprIds } from "@wildboar/sgp22/RSPDefinitions";
import { type VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "@wildboar/sgp22/RSPDefinitions";
import { ProfileInfo_iotSpecificProfileInfo, _decode_ProfileInfo_iotSpecificProfileInfo, _encode_ProfileInfo_iotSpecificProfileInfo } from "../SGP32Definitions/ProfileInfo-iotSpecificProfileInfo.ta.mjs";


/**
 * @summary ProfileInfo
 * @description
 * 
 * Metadata of one installed Profile. SGP.32 replaces the SGP.22 ProfileInfo
 * with this definition. listProfileInfo and ES10b.GetProfilesInfo return one
 * instance per reported Profile. At most one Profile on the eUICC has
 * ecallIndication TRUE, and at most one has fallbackAttribute TRUE. The
 * Fallback Attribute can be set only when fallbackAllowed is TRUE. When
 * listProfileInfo carries no tag list, the eUICC returns ICCID, ISD-P AID,
 * profile state, service provider name, profile name, profile class,
 * ecallIndication, fallbackAttribute, and fallbackAllowed. SGP.32 v1.2,
 * sections 4.4, 2.11.1.1, and 5.9.14.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfo ::= [PRIVATE 3] SEQUENCE { -- Tag 'E3'
 *     iccid Iccid OPTIONAL,
 *     isdpAid [APPLICATION 15] OctetTo16 OPTIONAL, -- AID of the ISD-P containing the Profile, tag '4F'
 *     profileState [112] ProfileState OPTIONAL, -- Tag '9F70'
 *     profileNickname [16] UTF8String (SIZE(0..64)) OPTIONAL, -- Tag '90'
 *     serviceProviderName [17] UTF8String (SIZE(0..32)) OPTIONAL, -- Tag '91'
 *     profileName [18] UTF8String (SIZE(0..64)) OPTIONAL, -- Tag '92'
 *     iconType [19] IconType OPTIONAL, -- Tag '93'
 *     icon [20] OCTET STRING (SIZE(0..1024)) OPTIONAL, -- Tag '94', see condition in ES10b:GetProfilesInfo
 *     profileClass [21] ProfileClass OPTIONAL, -- Tag '95'
 *     notificationConfigurationInfo [22] SEQUENCE OF NotificationConfigurationInformation OPTIONAL, -- Tag 'B6'
 *     profileOwner [23] OperatorId OPTIONAL, -- Tag 'B7'
 *     dpProprietaryData [24] DpProprietaryData OPTIONAL, -- Tag 'B8'
 *     profilePolicyRules [25] PprIds OPTIONAL, -- Tag '99'
 *     serviceSpecificDataStoredInEuicc [34] VendorSpecificExtension OPTIONAL, -- Tag 'BF22'
 *     ecallIndication [123] BOOLEAN OPTIONAL, -- Tag '9F7B'
 *     fallbackAttribute [38] BOOLEAN DEFAULT FALSE, -- Tag '9F26', indicates a Fallback Profile if set to TRUE
 *     fallbackAllowed [103] BOOLEAN OPTIONAL, -- Tag '9F67', indicates if Fallback is authorized by the Profile Owner
 *     iotSpecificProfileInfo [100] SEQUENCE {
 *         -- Data objects and their tags
 *     } OPTIONAL -- Tag 'BF64' IoT specific Data object
 * }
 * ```
 * 
 * @class
 */
export
class ProfileInfo {
    constructor (
        /**
         * @summary `iccid`.
         * @description
         * Identifies the Profile. Included in the default listProfileInfo response
         * (tag '5A') when that command has no tag list. SGP.32 v1.2, sections 4.4 and
         * 2.11.1.1.
         * @public
         * @readonly
         */
        readonly iccid?: OPTIONAL<Iccid>,
        /**
         * @summary `isdpAid`.
         * @description
         * AID of the ISD-P that contains the Profile. Included in the default
         * listProfileInfo response (tag '4F') when that command has no tag list.
         * SGP.32 v1.2, sections 4.4 and 2.11.1.1.
         * @public
         * @readonly
         */
        readonly isdpAid?: OPTIONAL<OctetTo16>,
        /**
         * @summary `profileState`.
         * @description
         * Enabled or Disabled state of the Profile. Included in the default
         * listProfileInfo response (tag '9F70') when that command has no tag list.
         * SGP.32 v1.2, sections 4.4, 5.13.4, and 2.11.1.1.
         * @public
         * @readonly
         */
        readonly profileState?: OPTIONAL<ProfileState>,
        /**
         * @summary `profileNickname`.
         * @description
         * SGP.32 v1.2 section 4.4 includes this field in ProfileInfo and does not
         * further define it.
         * @public
         * @readonly
         */
        readonly profileNickname?: OPTIONAL<UTF8String>,
        /**
         * @summary `serviceProviderName`.
         * @description
         * Included in the default listProfileInfo response (tag '91') when that
         * command has no tag list. SGP.32 v1.2, sections 4.4 and 2.11.1.1. SGP.32 v1.2
         * does not further define the value beyond that default.
         * @public
         * @readonly
         */
        readonly serviceProviderName?: OPTIONAL<UTF8String>,
        /**
         * @summary `profileName`.
         * @description
         * Included in the default listProfileInfo response (tag '92') when that
         * command has no tag list. SGP.32 v1.2, sections 4.4 and 2.11.1.1. SGP.32 v1.2
         * does not further define the value beyond that default.
         * @public
         * @readonly
         */
        readonly profileName?: OPTIONAL<UTF8String>,
        /**
         * @summary `iconType`.
         * @description
         * SGP.32 v1.2 section 4.4 includes icon type and does not further define it.
         * It is outside the default listProfileInfo tag list in section 2.11.1.1.
         * @public
         * @readonly
         */
        readonly iconType?: OPTIONAL<IconType>,
        /**
         * @summary `icon`.
         * @description
         * Section 4.4 points at a condition in ES10b.GetProfilesInfo. Section 5.9.14
         * bases that function on SGP.22 section 5.7.15 and does not state the
         * condition. SGP.22 v3.1 section 5.7.15 returns the icon when tag '94' is
         * requested and the object is stored, and does not state a further condition.
         * It is outside the default listProfileInfo tag list in SGP.32 v1.2 section
         * 2.11.1.1.
         * @public
         * @readonly
         */
        readonly icon?: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `profileClass`.
         * @description
         * Included in the default listProfileInfo response (tag '95') when that
         * command has no tag list. SGP.32 v1.2, sections 4.4 and 2.11.1.1. SGP.32 v1.2
         * does not further define the class values.
         * @public
         * @readonly
         */
        readonly profileClass?: OPTIONAL<ProfileClass>,
        /**
         * @summary `notificationConfigurationInfo`.
         * @description
         * The eUICC generates one OtherSignedNotification for each entry configured
         * here when a marked Profile is successfully enabled, disabled, or deleted,
         * including after rollback, fallback, and return from fallback. SGP.32 v1.2,
         * sections 3.3.1, 5.9.16, 5.9.20, and 5.9.21.
         * @public
         * @readonly
         */
        readonly notificationConfigurationInfo?: OPTIONAL<NotificationConfigurationInformation[]>,
        /**
         * @summary `profileOwner`.
         * @description
         * Profile Owner stored with the Profile. SGP.32 v1.2 section 4.4 includes the
         * field. Presence rules are those of ES8+.StoreMetadata, which SGP.32 section
         * 5.5 processes as defined in SGP.22 section 5.5.
         * @public
         * @readonly
         */
        readonly profileOwner?: OPTIONAL<OperatorId>,
        /**
         * @summary `dpProprietaryData`.
         * @description
         * SGP.32 v1.2 section 4.4 includes SM-DP+ proprietary data and does not
         * further define it.
         * @public
         * @readonly
         */
        readonly dpProprietaryData?: OPTIONAL<DpProprietaryData>,
        /**
         * @summary `profilePolicyRules`.
         * @description
         * Profile Policy Rules stored with the Profile. SGP.32 v1.2 section 4.4
         * includes the field. The rules for when they are stored are those of
         * ES8+.StoreMetadata, which SGP.32 section 5.5 processes as defined in SGP.22
         * section 5.5.
         * @public
         * @readonly
         */
        readonly profilePolicyRules?: OPTIONAL<PprIds>,
        /**
         * @summary `serviceSpecificDataStoredInEuicc`.
         * @description
         * Vendor-specific data the eUICC stored from ES8+.StoreMetadata. SGP.32 v1.2
         * section 4.4 includes the field. SGP.32 section 5.5 processes that command as
         * defined in SGP.22 section 5.5.
         * @public
         * @readonly
         */
        readonly serviceSpecificDataStoredInEuicc?: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `ecallIndication`.
         * @description
         * TRUE marks an Emergency Profile whose enabling and disabling may use
         * ES10b.EnableEmergencyProfile and ES10b.DisableEmergencyProfile. An absent
         * value is treated as FALSE. At most one Profile on the eUICC has this value
         * TRUE. Included in the default listProfileInfo response (tag '9F7B') when
         * that command has no tag list. SGP.32 v1.2, sections 4.4 and 2.11.1.1.
         * @public
         * @readonly
         */
        readonly ecallIndication?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `fallbackAttribute`.
         * @description
         * TRUE marks the Fallback Profile, which ES10b.ExecuteFallbackMechanism may
         * enable. An absent value is treated as FALSE, and that Profile cannot be
         * enabled by the Fallback Mechanism. At most one Profile has this value TRUE.
         * It can be set only when fallbackAllowed is TRUE. Included in the default
         * listProfileInfo response (tag '9F26') when that command has no tag list.
         * SGP.32 v1.2, sections 4.4 and 2.11.1.1.
         * @public
         * @readonly
         */
        readonly fallbackAttribute?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `fallbackAllowed`.
         * @description
         * TRUE authorises the eIM to set the Fallback Attribute. The Profile Owner
         * chooses this at Profile generation. Included in the default listProfileInfo
         * response (tag '9F67') when that command has no tag list. SGP.32 v1.2,
         * sections 4.4 and 2.11.1.1.
         * @public
         * @readonly
         */
        readonly fallbackAllowed?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `iotSpecificProfileInfo`.
         * @description
         * SGP.32 v1.2 does not further define this field. Annex C ProfileInfo ends at
         * fallbackAllowed.
         * @public
         * @readonly
         */
        readonly iotSpecificProfileInfo?: OPTIONAL<ProfileInfo_iotSpecificProfileInfo>
    ) {
        if (this.profileNickname !== undefined && this.profileNickname.length > 64) {
            throw new ASN1SizeError("ProfileInfo.profileNickname violates SIZE constraint");
        }
        if (this.serviceProviderName !== undefined && this.serviceProviderName.length > 32) {
            throw new ASN1SizeError("ProfileInfo.serviceProviderName violates SIZE constraint");
        }
        if (this.profileName !== undefined && this.profileName.length > 64) {
            throw new ASN1SizeError("ProfileInfo.profileName violates SIZE constraint");
        }
        if (this.icon !== undefined && this.icon.length > 1024) {
            throw new ASN1SizeError("ProfileInfo.icon violates SIZE constraint");
        }
        if (this.icon !== undefined && this.iconType === undefined) {
            throw new ASN1ConstructionError("ProfileInfo.icon requires iconType");
        }
    }

    /**
     * @summary Restructures an object into a ProfileInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileInfo`.
     * @returns {ProfileInfo}
     */
    public static _from_object (_o: { [_K in keyof (ProfileInfo)]: (ProfileInfo)[_K] }): ProfileInfo {
        return new ProfileInfo(_o.iccid, _o.isdpAid, _o.profileState, _o.profileNickname, _o.serviceProviderName, _o.profileName, _o.iconType, _o.icon, _o.profileClass, _o.notificationConfigurationInfo, _o.profileOwner, _o.dpProprietaryData, _o.profilePolicyRules, _o.serviceSpecificDataStoredInEuicc, _o.ecallIndication, _o.fallbackAttribute, _o.fallbackAllowed, _o.iotSpecificProfileInfo);
    }

    /**
     * @summary Getter that returns the default value for `fallbackAttribute`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_fallbackAttribute () { return false; }
}

/**
 * @summary The Leading Root Component Types of ProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", true, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("isdpAid", true, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("profileState", true, $.hasTag(_TagClass.context, 112)),
    new $.ComponentSpec("profileNickname", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceProviderName", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("profileName", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iconType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("icon", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("profileClass", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("notificationConfigurationInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("profileOwner", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("dpProprietaryData", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("profilePolicyRules", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceSpecificDataStoredInEuicc", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("ecallIndication", true, $.hasTag(_TagClass.context, 123)),
    new $.ComponentSpec("fallbackAttribute", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("fallbackAllowed", true, $.hasTag(_TagClass.context, 103)),
    new $.ComponentSpec("iotSpecificProfileInfo", true, $.hasTag(_TagClass.context, 100))
];

/**
 * @summary The Trailing Root Component Types of ProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileInfo: $.ASN1Decoder<ProfileInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfo (el: _Element): ProfileInfo {
    if (!_cached_decoder_for_ProfileInfo) { _cached_decoder_for_ProfileInfo = $._decode_implicit<ProfileInfo>(() => function (el: _Element): ProfileInfo {
    let iccid: OPTIONAL<Iccid>;
    let isdpAid: OPTIONAL<OctetTo16>;
    let profileState: OPTIONAL<ProfileState>;
    let profileNickname: OPTIONAL<UTF8String>;
    let serviceProviderName: OPTIONAL<UTF8String>;
    let profileName: OPTIONAL<UTF8String>;
    let iconType: OPTIONAL<IconType>;
    let icon: OPTIONAL<OCTET_STRING>;
    let profileClass: OPTIONAL<ProfileClass>;
    let notificationConfigurationInfo: OPTIONAL<NotificationConfigurationInformation[]>;
    let profileOwner: OPTIONAL<OperatorId>;
    let dpProprietaryData: OPTIONAL<DpProprietaryData>;
    let profilePolicyRules: OPTIONAL<PprIds>;
    let serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>;
    let ecallIndication: OPTIONAL<BOOLEAN>;
    let fallbackAttribute: OPTIONAL<BOOLEAN> = ProfileInfo._default_value_for_fallbackAttribute;
    let fallbackAllowed: OPTIONAL<BOOLEAN>;
    let iotSpecificProfileInfo: OPTIONAL<ProfileInfo_iotSpecificProfileInfo>;
    const callbacks: $.DecodingMap = {
        "iccid": (_el: _Element): void => { iccid = _decode_Iccid(_el); },
        "isdpAid": (_el: _Element): void => { isdpAid = $._decode_implicit<OctetTo16>(() => _decode_OctetTo16)(_el); },
        "profileState": (_el: _Element): void => { profileState = $._decode_implicit<ProfileState>(() => _decode_ProfileState)(_el); },
        "profileNickname": (_el: _Element): void => { profileNickname = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "serviceProviderName": (_el: _Element): void => { serviceProviderName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "profileName": (_el: _Element): void => { profileName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "iconType": (_el: _Element): void => { iconType = $._decode_implicit<IconType>(() => _decode_IconType)(_el); },
        "icon": (_el: _Element): void => { icon = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "profileClass": (_el: _Element): void => { profileClass = $._decode_implicit<ProfileClass>(() => _decode_ProfileClass)(_el); },
        "notificationConfigurationInfo": (_el: _Element): void => { notificationConfigurationInfo = $._decode_implicit<NotificationConfigurationInformation[]>(() => $._decodeSequenceOf<NotificationConfigurationInformation>(() => _decode_NotificationConfigurationInformation))(_el); },
        "profileOwner": (_el: _Element): void => { profileOwner = $._decode_implicit<OperatorId>(() => _decode_OperatorId)(_el); },
        "dpProprietaryData": (_el: _Element): void => { dpProprietaryData = $._decode_implicit<DpProprietaryData>(() => _decode_DpProprietaryData)(_el); },
        "profilePolicyRules": (_el: _Element): void => { profilePolicyRules = $._decode_implicit<PprIds>(() => _decode_PprIds)(_el); },
        "serviceSpecificDataStoredInEuicc": (_el: _Element): void => { serviceSpecificDataStoredInEuicc = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); },
        "ecallIndication": (_el: _Element): void => { ecallIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fallbackAttribute": (_el: _Element): void => { fallbackAttribute = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fallbackAllowed": (_el: _Element): void => { fallbackAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iotSpecificProfileInfo": (_el: _Element): void => { iotSpecificProfileInfo = $._decode_implicit<ProfileInfo_iotSpecificProfileInfo>(() => _decode_ProfileInfo_iotSpecificProfileInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileInfo,
        _extension_additions_list_spec_for_ProfileInfo,
        _root_component_type_list_2_spec_for_ProfileInfo,
        undefined,
    );
    return new ProfileInfo(
        iccid,
        isdpAid,
        profileState,
        profileNickname,
        serviceProviderName,
        profileName,
        iconType,
        icon,
        profileClass,
        notificationConfigurationInfo,
        profileOwner,
        dpProprietaryData,
        profilePolicyRules,
        serviceSpecificDataStoredInEuicc,
        ecallIndication,
        fallbackAttribute,
        fallbackAllowed,
        iotSpecificProfileInfo
    );
}); }
    return _cached_decoder_for_ProfileInfo(el);
}

let _cached_encoder_for_ProfileInfo: $.ASN1Encoder<ProfileInfo> | null = null;

/**
 * @summary Encodes a(n) ProfileInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfo (value: ProfileInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfo) { _cached_encoder_for_ProfileInfo = $._encode_implicit(_TagClass.private, 3, () => function (value: ProfileInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iccid === undefined) ? undefined : _encode_Iccid(value.iccid, $.BER)),
            /* IF_ABSENT  */ ((value.isdpAid === undefined) ? undefined : $._encode_implicit(_TagClass.application, 15, () => _encode_OctetTo16, $.BER)(value.isdpAid, $.BER)),
            /* IF_ABSENT  */ ((value.profileState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 112, () => _encode_ProfileState, $.BER)(value.profileState, $.BER)),
            /* IF_ABSENT  */ ((value.profileNickname === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.profileNickname, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.serviceProviderName, $.BER)),
            /* IF_ABSENT  */ ((value.profileName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.profileName, $.BER)),
            /* IF_ABSENT  */ ((value.iconType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_IconType, $.BER)(value.iconType, $.BER)),
            /* IF_ABSENT  */ ((value.icon === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.icon, $.BER)),
            /* IF_ABSENT  */ ((value.profileClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_ProfileClass, $.BER)(value.profileClass, $.BER)),
            /* IF_ABSENT  */ ((value.notificationConfigurationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<NotificationConfigurationInformation>(() => _encode_NotificationConfigurationInformation, $.BER), $.BER)(value.notificationConfigurationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.profileOwner === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_OperatorId, $.BER)(value.profileOwner, $.BER)),
            /* IF_ABSENT  */ ((value.dpProprietaryData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_DpProprietaryData, $.BER)(value.dpProprietaryData, $.BER)),
            /* IF_ABSENT  */ ((value.profilePolicyRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_PprIds, $.BER)(value.profilePolicyRules, $.BER)),
            /* IF_ABSENT  */ ((value.serviceSpecificDataStoredInEuicc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_VendorSpecificExtension, $.BER)(value.serviceSpecificDataStoredInEuicc, $.BER)),
            /* IF_ABSENT  */ ((value.ecallIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 123, () => $._encodeBoolean, $.BER)(value.ecallIndication, $.BER)),
            /* IF_DEFAULT */ (value.fallbackAttribute === undefined || $.deepEq(value.fallbackAttribute, ProfileInfo._default_value_for_fallbackAttribute) ? undefined : $._encode_implicit(_TagClass.context, 38, () => $._encodeBoolean, $.BER)(value.fallbackAttribute, $.BER)),
            /* IF_ABSENT  */ ((value.fallbackAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 103, () => $._encodeBoolean, $.BER)(value.fallbackAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.iotSpecificProfileInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 100, () => _encode_ProfileInfo_iotSpecificProfileInfo, $.BER)(value.iotSpecificProfileInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileInfo(value, elGetter);
}


/* eslint-enable */
