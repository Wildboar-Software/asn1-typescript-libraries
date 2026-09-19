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
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
import { IconType, IconType_jpg /* IMPORTED_LONG_NAMED_INTEGER */, jpg /* IMPORTED_SHORT_NAMED_INTEGER */, IconType_png /* IMPORTED_LONG_NAMED_INTEGER */, png /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IconType, _encode_IconType } from "../RSPDefinitions/IconType.ta.mjs";
// export { IconType, IconType_jpg /* IMPORTED_LONG_NAMED_INTEGER */, jpg /* IMPORTED_SHORT_NAMED_INTEGER */, IconType_png /* IMPORTED_LONG_NAMED_INTEGER */, png /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IconType, _encode_IconType } from "../RSPDefinitions/IconType.ta.mjs";
import { ProfileClass, ProfileClass_test /* IMPORTED_LONG_NAMED_INTEGER */, test /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_provisioning /* IMPORTED_LONG_NAMED_INTEGER */, provisioning /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_operational /* IMPORTED_LONG_NAMED_INTEGER */, operational /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileClass, _encode_ProfileClass } from "../RSPDefinitions/ProfileClass.ta.mjs";
// export { ProfileClass, ProfileClass_test /* IMPORTED_LONG_NAMED_INTEGER */, test /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_provisioning /* IMPORTED_LONG_NAMED_INTEGER */, provisioning /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_operational /* IMPORTED_LONG_NAMED_INTEGER */, operational /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileClass, _encode_ProfileClass } from "../RSPDefinitions/ProfileClass.ta.mjs";
import { NotificationConfigurationInformation, _decode_NotificationConfigurationInformation, _encode_NotificationConfigurationInformation } from "../RSPDefinitions/NotificationConfigurationInformation.ta.mjs";
// export { NotificationConfigurationInformation, _decode_NotificationConfigurationInformation, _encode_NotificationConfigurationInformation } from "../RSPDefinitions/NotificationConfigurationInformation.ta.mjs";
import { OperatorId, _decode_OperatorId, _encode_OperatorId } from "../RSPDefinitions/OperatorId.ta.mjs";
// export { OperatorId, _decode_OperatorId, _encode_OperatorId } from "../RSPDefinitions/OperatorId.ta.mjs";
import { PprIds, PprIds_pprUpdateControl /* IMPORTED_LONG_NAMED_BIT */, pprUpdateControl /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr1 /* IMPORTED_LONG_NAMED_BIT */, ppr1 /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr2 /* IMPORTED_LONG_NAMED_BIT */, ppr2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
// export { PprIds, PprIds_pprUpdateControl /* IMPORTED_LONG_NAMED_BIT */, pprUpdateControl /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr1 /* IMPORTED_LONG_NAMED_BIT */, ppr1 /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr2 /* IMPORTED_LONG_NAMED_BIT */, ppr2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
import { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
// export { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
import { StoreMetadataRequest_iotSpecificMetadata, _decode_StoreMetadataRequest_iotSpecificMetadata, _encode_StoreMetadataRequest_iotSpecificMetadata } from "../SGP32Definitions/StoreMetadataRequest-iotSpecificMetadata.ta.mjs";
// export { StoreMetadataRequest_iotSpecificMetadata, _decode_StoreMetadataRequest_iotSpecificMetadata, _encode_StoreMetadataRequest_iotSpecificMetadata } from "../SGP32Definitions/StoreMetadataRequest-iotSpecificMetadata.ta.mjs";


/**
 * @summary StoreMetadataRequest
 * @description
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
 *     ecallIndication [123] BOOLEAN OPTIONAL, -- Tag '9F7B'
 *     fallbackAllowed [103] BOOLEAN OPTIONAL, -- Tag '9F67'
 *     iotSpecificMetadata [100] SEQUENCE {
 *         -- Data objects and their tags
 *     } OPTIONAL -- Tag 'BF64' IoT specific Data object
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
         * @public
         * @readonly
         */
        readonly iccid: Iccid,
        /**
         * @summary `serviceProviderName`.
         * @public
         * @readonly
         */
        readonly serviceProviderName: UTF8String,
        /**
         * @summary `profileName`.
         * @public
         * @readonly
         */
        readonly profileName: UTF8String,
        /**
         * @summary `iconType`.
         * @public
         * @readonly
         */
        readonly iconType: OPTIONAL<IconType>,
        /**
         * @summary `icon`.
         * @public
         * @readonly
         */
        readonly icon: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `profileClass`.
         * @public
         * @readonly
         */
        readonly profileClass: OPTIONAL<ProfileClass>,
        /**
         * @summary `notificationConfigurationInfo`.
         * @public
         * @readonly
         */
        readonly notificationConfigurationInfo: OPTIONAL<NotificationConfigurationInformation[]>,
        /**
         * @summary `profileOwner`.
         * @public
         * @readonly
         */
        readonly profileOwner: OPTIONAL<OperatorId>,
        /**
         * @summary `profilePolicyRules`.
         * @public
         * @readonly
         */
        readonly profilePolicyRules: OPTIONAL<PprIds>,
        /**
         * @summary `serviceSpecificDataStoredInEuicc`.
         * @public
         * @readonly
         */
        readonly serviceSpecificDataStoredInEuicc: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `serviceSpecificDataNotStoredInEuicc`.
         * @public
         * @readonly
         */
        readonly serviceSpecificDataNotStoredInEuicc: OPTIONAL<VendorSpecificExtension>,
        /**
         * @summary `ecallIndication`.
         * @public
         * @readonly
         */
        readonly ecallIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `fallbackAllowed`.
         * @public
         * @readonly
         */
        readonly fallbackAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `iotSpecificMetadata`.
         * @public
         * @readonly
         */
        readonly iotSpecificMetadata: OPTIONAL<StoreMetadataRequest_iotSpecificMetadata>
    ) {}

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
    public static get _default_value_for_profileClass () { return operational; }
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
    if (!_cached_encoder_for_StoreMetadataRequest) { _cached_encoder_for_StoreMetadataRequest = $._encode_implicit(_TagClass.context, 37, () => function (value: StoreMetadataRequest, elGetter: $.ASN1Encoder<StoreMetadataRequest>): _Element {
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
