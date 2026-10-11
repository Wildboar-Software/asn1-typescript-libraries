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
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
import { IconType, _decode_IconType, _encode_IconType } from "../RSPDefinitions/IconType.ta.mjs";
import { ProfileClass, _decode_ProfileClass, _encode_ProfileClass, operational /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../RSPDefinitions/ProfileClass.ta.mjs";
import { NotificationConfigurationInformation, _decode_NotificationConfigurationInformation, _encode_NotificationConfigurationInformation } from "../RSPDefinitions/NotificationConfigurationInformation.ta.mjs";
import { OperatorId, _decode_OperatorId, _encode_OperatorId } from "../RSPDefinitions/OperatorId.ta.mjs";
import { PprIds, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
import { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
import { StoreMetadataRequest_iotSpecificMetadata, _decode_StoreMetadataRequest_iotSpecificMetadata, _encode_StoreMetadataRequest_iotSpecificMetadata } from "../RSPDefinitions/StoreMetadataRequest-iotSpecificMetadata.ta.mjs";


/**
 * @summary StoreMetadataRequest
 * @description
 * 
 * ES8+.StoreMetadata, and also the Profile Metadata returned to the LPA by
 * ES9+.AuthenticateClient for display and for the profile-policy check. The
 * eUICC stores the present objects except
 * `serviceSpecificDataNotStoredInEuicc`. ICCID, profile class, owner, and PPRs
 * are checked before anything is stored; failure stops installation. The `'88'`
 * TLVs that carry this command are MACed and not encrypted. SGP.22 v3.1 §5.5.3
 * and §2.5.4.3. v3.1 adds RPM, enterprise, LPA-proxy, device-change, and other
 * metadata this module does not include.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreMetadataRequest ::= [37] SEQUENCE { -- Tag 'BF25'
 *     iccid Iccid,
 *     serviceProviderName [17] UTF8String (SIZE(0..32)), -- Tag '91'
 *     profileName [18] UTF8String (SIZE(0..64)), -- Tag '92' (corresponds to 'Short Description' defined in SGP.21 [2])
 *     iconType [19] IconType OPTIONAL, -- Tag '93' (JPG or PNG)
 *     icon [20] OCTET STRING (SIZE(0..1024)) OPTIONAL, -- Tag '94' (Data of the icon. Size 64 x 64 pixel. This field SHALL only be present if iconType is present)
 *     profileClass [21] ProfileClass DEFAULT operational, -- Tag '95'
 *     notificationConfigurationInfo [22] SEQUENCE OF NotificationConfigurationInformation OPTIONAL,
 *     profileOwner [23] OperatorId OPTIONAL, -- Tag 'B7'
 *     profilePolicyRules [25] PprIds OPTIONAL, -- Tag '99'
 *     serviceSpecificDataStoredInEuicc [34] VendorSpecificExtension OPTIONAL, -- Tag 'BF22'
 *     serviceSpecificDataNotStoredInEuicc [35] VendorSpecificExtension OPTIONAL, -- Tag 'BF23'
 *     ecallIndication [123] BOOLEAN OPTIONAL, -- Tag '9F7B' reserved for SGP.32 [97]
 *     fallbackAllowed [103] BOOLEAN OPTIONAL, -- Tag '9F67' reserved for SGP.32 [97]
 *     iotSpecificMetadata [100] SEQUENCE {
 *         -- Data objects and their tags, to be specified in SGP.32 [97]
 *     } OPTIONAL -- Tag 'BF64' reserved for SGP.32 [97] 
 * }
 * ```
 * 
 * @class
 */
export
class StoreMetadataRequest {
    constructor (
        /**
         * @summary `iccid`.
         * @description
         * 
         * Must differ from every installed Profile, and must equal EFICCID.
         * SGP.22 v3.1 §5.5.3 and §5.5.5.
         * 
         * @public
         * @readonly
         */
        readonly iccid: Iccid,
        /**
         * @summary `serviceProviderName`.
         * @description
         * 
         * Shown by the LPA. At most 32 UTF-8 characters, not empty. SGP.22 v3.1
         * §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly serviceProviderName: UTF8String,
        /**
         * @summary `profileName`.
         * @description
         * 
         * Short description from SGP.21. At most 64 UTF-8 characters, not
         * empty. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly profileName: UTF8String,
        /**
         * @summary `iconType`.
         * @description
         * 
         * Required when `icon` is present. JPG or PNG. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly iconType: OPTIONAL<IconType>,
        /**
         * @summary `icon`.
         * @description
         * 
         * 64 by 64 pixel image, at most 1024 octets. Present only if `iconType`
         * is present. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly icon: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `profileClass`.
         * @description
         * 
         * Defaults to operational. An unsupported class is
         * `unsupportedProfileClass`. SGP.22 v3.1 §2.4.5 and §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly profileClass: OPTIONAL<ProfileClass>,
        /**
         * @summary `notificationConfigurationInfo`.
         * @description
         * 
         * Where to send install, enable, disable, and delete notifications. The
         * same event bit may be repeated with a different FQDN. SGP.22 v3.1
         * §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly notificationConfigurationInfo: OPTIONAL<NotificationConfigurationInformation[]>,
        /**
         * @summary `profileOwner`.
         * @description
         * 
         * Required when PPRs are present, forbidden when the Profile has no
         * EFIMSI, and then MCC-MNC must not contain `'E'`. Checked against
         * EFIMSI and the GID files during LoadProfileElements. SGP.22 v3.1
         * §5.5.3 and §5.5.5.
         * 
         * @public
         * @readonly
         */
        readonly profileOwner: OPTIONAL<OperatorId>,
        /**
         * @summary `profilePolicyRules`.
         * @description
         * 
         * The PPRs set in the Profile. Omit it when none are set; omitted means
         * every PPR bit is zero. Must not be present if the Profile has no
         * EFIMSI. The eUICC allows them only when the RAT authorises this
         * owner. Otherwise `pprNotAllowed`. SGP.22 v3.1 §4.4.2 and §2.9.3.1.
         * 
         * @public
         * @readonly
         */
        readonly profilePolicyRules: OPTIONAL<PprIds>,
        /**
         * @summary `serviceSpecificDataStoredInEuicc`.
         * @description
         * 
         * Vendor data written to the eUICC. Only if
         * `serviceSpecificDataSupport` is set. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `serviceSpecificDataNotStoredInEuicc`.
         * @description
         * 
         * Vendor data the LPA may read and the eUICC must not store. Only if
         * `serviceSpecificDataSupport` is set. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly serviceSpecificDataNotStoredInEuicc: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `ecallIndication`.
         * @description
         * 
         * Reserved for SGP.32, tag `'9F7B'`. SGP.22 v3.1 §5.5.3 does not define
         * this component.
         * 
         * @public
         * @readonly
         */
        readonly ecallIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `fallbackAllowed`.
         * @description
         * 
         * Reserved for SGP.32, tag `'9F67'`. SGP.22 v3.1 §5.5.3 does not define
         * this component.
         * 
         * @public
         * @readonly
         */
        readonly fallbackAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `iotSpecificMetadata`.
         * @description
         * 
         * Reserved for SGP.32, tag `'BF64'`. Empty in this module. SGP.22 v3.1
         * §5.5.3 does not define this component.
         * 
         * @public
         * @readonly
         */
        readonly iotSpecificMetadata: OPTIONAL<StoreMetadataRequest_iotSpecificMetadata>
    ) {
        if (this.serviceProviderName.length > 32) {
            throw new ASN1SizeError("StoreMetadataRequest.serviceProviderName violates SIZE constraint");
        }
        if (this.profileName.length > 64) {
            throw new ASN1SizeError("StoreMetadataRequest.profileName violates SIZE constraint");
        }
        if (this.icon !== undefined && (this.icon.length > 1024)) {
            throw new ASN1SizeError("StoreMetadataRequest.icon violates SIZE constraint");
        }
        if (this.icon !== undefined && this.iconType === undefined) {
            throw new ASN1ConstructionError("StoreMetadataRequest.icon requires iconType");
        }
    }

    /**
     * @summary Restructures an object into a StoreMetadataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `StoreMetadataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StoreMetadataRequest`.
     * @returns {StoreMetadataRequest}
     */
    public static _from_object (_o: { [_K in keyof (StoreMetadataRequest)]: (StoreMetadataRequest)[_K] }): StoreMetadataRequest {
        return new StoreMetadataRequest(_o.iccid, _o.serviceProviderName, _o.profileName, _o.iconType, _o.icon, _o.profileClass, _o.notificationConfigurationInfo, _o.profileOwner, _o.profilePolicyRules, _o.serviceSpecificDataStoredInEuicc, _o.serviceSpecificDataNotStoredInEuicc, _o.ecallIndication, _o.fallbackAllowed, _o.iotSpecificMetadata);
    }

    /**
     * @summary Getter that returns the default value for `profileClass`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_profileClass (): ProfileClass { return operational; }
}

/**
 * @summary The Leading Root Component Types of StoreMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StoreMetadataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("serviceProviderName", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("profileName", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("iconType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("icon", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("profileClass", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("notificationConfigurationInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("profileOwner", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("profilePolicyRules", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("serviceSpecificDataStoredInEuicc", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("serviceSpecificDataNotStoredInEuicc", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("ecallIndication", true, $.hasTag(_TagClass.context, 123)),
    new $.ComponentSpec("fallbackAllowed", true, $.hasTag(_TagClass.context, 103)),
    new $.ComponentSpec("iotSpecificMetadata", true, $.hasTag(_TagClass.context, 100))
];

/**
 * @summary The Trailing Root Component Types of StoreMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StoreMetadataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StoreMetadataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StoreMetadataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StoreMetadataRequest: $.ASN1Decoder<StoreMetadataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StoreMetadataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StoreMetadataRequest (el: _Element): StoreMetadataRequest {
    if (!_cached_decoder_for_StoreMetadataRequest) { _cached_decoder_for_StoreMetadataRequest = $._decode_implicit<StoreMetadataRequest>(() => function (el: _Element): StoreMetadataRequest {
    let iccid!: Iccid;
    let serviceProviderName!: UTF8String;
    let profileName!: UTF8String;
    let iconType: OPTIONAL<IconType>;
    let icon: OPTIONAL<OCTET_STRING>;
    let profileClass: OPTIONAL<ProfileClass> = StoreMetadataRequest._default_value_for_profileClass;
    let notificationConfigurationInfo: OPTIONAL<NotificationConfigurationInformation[]>;
    let profileOwner: OPTIONAL<OperatorId>;
    let profilePolicyRules: OPTIONAL<PprIds>;
    let serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>;
    let serviceSpecificDataNotStoredInEuicc: OPTIONAL<VendorSpecificExtension>;
    let ecallIndication: OPTIONAL<BOOLEAN>;
    let fallbackAllowed: OPTIONAL<BOOLEAN>;
    let iotSpecificMetadata: OPTIONAL<StoreMetadataRequest_iotSpecificMetadata>;
    const callbacks: $.DecodingMap = {
        "iccid": (_el: _Element): void => { iccid = _decode_Iccid(_el); },
        "serviceProviderName": (_el: _Element): void => { serviceProviderName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "profileName": (_el: _Element): void => { profileName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "iconType": (_el: _Element): void => { iconType = $._decode_implicit<IconType>(() => _decode_IconType)(_el); },
        "icon": (_el: _Element): void => { icon = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "profileClass": (_el: _Element): void => { profileClass = $._decode_implicit<ProfileClass>(() => _decode_ProfileClass)(_el); },
        "notificationConfigurationInfo": (_el: _Element): void => { notificationConfigurationInfo = $._decode_implicit<NotificationConfigurationInformation[]>(() => $._decodeSequenceOf<NotificationConfigurationInformation>(() => _decode_NotificationConfigurationInformation))(_el); },
        "profileOwner": (_el: _Element): void => { profileOwner = $._decode_implicit<OperatorId>(() => _decode_OperatorId)(_el); },
        "profilePolicyRules": (_el: _Element): void => { profilePolicyRules = $._decode_implicit<PprIds>(() => _decode_PprIds)(_el); },
        "serviceSpecificDataStoredInEuicc": (_el: _Element): void => { serviceSpecificDataStoredInEuicc = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); },
        "serviceSpecificDataNotStoredInEuicc": (_el: _Element): void => { serviceSpecificDataNotStoredInEuicc = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); },
        "ecallIndication": (_el: _Element): void => { ecallIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fallbackAllowed": (_el: _Element): void => { fallbackAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iotSpecificMetadata": (_el: _Element): void => { iotSpecificMetadata = $._decode_implicit<StoreMetadataRequest_iotSpecificMetadata>(() => _decode_StoreMetadataRequest_iotSpecificMetadata)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StoreMetadataRequest,
        _extension_additions_list_spec_for_StoreMetadataRequest,
        _root_component_type_list_2_spec_for_StoreMetadataRequest,
        undefined,
    );
    return new StoreMetadataRequest(
        iccid,
        serviceProviderName,
        profileName,
        iconType,
        icon,
        profileClass,
        notificationConfigurationInfo,
        profileOwner,
        profilePolicyRules,
        serviceSpecificDataStoredInEuicc,
        serviceSpecificDataNotStoredInEuicc,
        ecallIndication,
        fallbackAllowed,
        iotSpecificMetadata
    );
}); }
    return _cached_decoder_for_StoreMetadataRequest(el);
}

let _cached_encoder_for_StoreMetadataRequest: $.ASN1Encoder<StoreMetadataRequest> | null = null;

/**
 * @summary Encodes a(n) StoreMetadataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StoreMetadataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_StoreMetadataRequest (value: StoreMetadataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StoreMetadataRequest) { _cached_encoder_for_StoreMetadataRequest = $._encode_implicit(_TagClass.context, 37, () => function (value: StoreMetadataRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Iccid(value.iccid, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.serviceProviderName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.profileName, $.BER),
            /* IF_ABSENT  */ ((value.iconType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_IconType, $.BER)(value.iconType, $.BER)),
            /* IF_ABSENT  */ ((value.icon === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.icon, $.BER)),
            /* IF_DEFAULT */ (value.profileClass === undefined || $.deepEq(value.profileClass, StoreMetadataRequest._default_value_for_profileClass) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_ProfileClass, $.BER)(value.profileClass, $.BER)),
            /* IF_ABSENT  */ ((value.notificationConfigurationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<NotificationConfigurationInformation>(() => _encode_NotificationConfigurationInformation, $.BER), $.BER)(value.notificationConfigurationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.profileOwner === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_OperatorId, $.BER)(value.profileOwner, $.BER)),
            /* IF_ABSENT  */ ((value.profilePolicyRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_PprIds, $.BER)(value.profilePolicyRules, $.BER)),
            /* IF_ABSENT  */ ((value.serviceSpecificDataStoredInEuicc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_VendorSpecificExtension, $.BER)(value.serviceSpecificDataStoredInEuicc, $.BER)),
            /* IF_ABSENT  */ ((value.serviceSpecificDataNotStoredInEuicc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 35, () => _encode_VendorSpecificExtension, $.BER)(value.serviceSpecificDataNotStoredInEuicc, $.BER)),
            /* IF_ABSENT  */ ((value.ecallIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 123, () => $._encodeBoolean, $.BER)(value.ecallIndication, $.BER)),
            /* IF_ABSENT  */ ((value.fallbackAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 103, () => $._encodeBoolean, $.BER)(value.fallbackAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.iotSpecificMetadata === undefined) ? undefined : $._encode_implicit(_TagClass.context, 100, () => _encode_StoreMetadataRequest_iotSpecificMetadata, $.BER)(value.iotSpecificMetadata, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_StoreMetadataRequest(value, elGetter);
}


/* eslint-enable */
