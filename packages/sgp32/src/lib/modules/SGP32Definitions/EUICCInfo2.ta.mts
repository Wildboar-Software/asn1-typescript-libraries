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
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
import { RspCapability, RspCapability_additionalProfile /* IMPORTED_LONG_NAMED_BIT */, additionalProfile /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_crlSupport /* IMPORTED_LONG_NAMED_BIT */, crlSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_rpmSupport /* IMPORTED_LONG_NAMED_BIT */, rpmSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_testProfileSupport /* IMPORTED_LONG_NAMED_BIT */, testProfileSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_deviceInfoExtensibilitySupport /* IMPORTED_LONG_NAMED_BIT */, deviceInfoExtensibilitySupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_serviceSpecificDataSupport /* IMPORTED_LONG_NAMED_BIT */, serviceSpecificDataSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_osUpdateSupport /* IMPORTED_LONG_NAMED_BIT */, osUpdateSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_iotSpecificMetadataSupport /* IMPORTED_LONG_NAMED_BIT */, iotSpecificMetadataSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_mslCheckSupport /* IMPORTED_LONG_NAMED_BIT */, mslCheckSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_rspServerTestProfileAllowlistCheckSupport /* IMPORTED_LONG_NAMED_BIT */, rspServerTestProfileAllowlistCheckSupport /* IMPORTED_SHORT_NAMED_BIT */, _decode_RspCapability, _encode_RspCapability } from "../RSPDefinitions/RspCapability.ta.mjs";
// export { RspCapability, RspCapability_additionalProfile /* IMPORTED_LONG_NAMED_BIT */, additionalProfile /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_crlSupport /* IMPORTED_LONG_NAMED_BIT */, crlSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_rpmSupport /* IMPORTED_LONG_NAMED_BIT */, rpmSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_testProfileSupport /* IMPORTED_LONG_NAMED_BIT */, testProfileSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_deviceInfoExtensibilitySupport /* IMPORTED_LONG_NAMED_BIT */, deviceInfoExtensibilitySupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_serviceSpecificDataSupport /* IMPORTED_LONG_NAMED_BIT */, serviceSpecificDataSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_osUpdateSupport /* IMPORTED_LONG_NAMED_BIT */, osUpdateSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_iotSpecificMetadataSupport /* IMPORTED_LONG_NAMED_BIT */, iotSpecificMetadataSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_mslCheckSupport /* IMPORTED_LONG_NAMED_BIT */, mslCheckSupport /* IMPORTED_SHORT_NAMED_BIT */, RspCapability_rspServerTestProfileAllowlistCheckSupport /* IMPORTED_LONG_NAMED_BIT */, rspServerTestProfileAllowlistCheckSupport /* IMPORTED_SHORT_NAMED_BIT */, _decode_RspCapability, _encode_RspCapability } from "../RSPDefinitions/RspCapability.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
import { EUICCInfo2_euiccCategory, EUICCInfo2_euiccCategory_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_basicEuicc /* IMPORTED_LONG_NAMED_INTEGER */, basicEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_mediumEuicc /* IMPORTED_LONG_NAMED_INTEGER */, mediumEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_contactlessEuicc /* IMPORTED_LONG_NAMED_INTEGER */, contactlessEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EUICCInfo2_euiccCategory, _encode_EUICCInfo2_euiccCategory } from "../SGP32Definitions/EUICCInfo2-euiccCategory.ta.mjs";
// export { EUICCInfo2_euiccCategory, EUICCInfo2_euiccCategory_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_basicEuicc /* IMPORTED_LONG_NAMED_INTEGER */, basicEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_mediumEuicc /* IMPORTED_LONG_NAMED_INTEGER */, mediumEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, EUICCInfo2_euiccCategory_contactlessEuicc /* IMPORTED_LONG_NAMED_INTEGER */, contactlessEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EUICCInfo2_euiccCategory, _encode_EUICCInfo2_euiccCategory } from "../SGP32Definitions/EUICCInfo2-euiccCategory.ta.mjs";
import { PprIds, PprIds_pprUpdateControl /* IMPORTED_LONG_NAMED_BIT */, pprUpdateControl /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr1 /* IMPORTED_LONG_NAMED_BIT */, ppr1 /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr2 /* IMPORTED_LONG_NAMED_BIT */, ppr2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
// export { PprIds, PprIds_pprUpdateControl /* IMPORTED_LONG_NAMED_BIT */, pprUpdateControl /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr1 /* IMPORTED_LONG_NAMED_BIT */, ppr1 /* IMPORTED_SHORT_NAMED_BIT */, PprIds_ppr2 /* IMPORTED_LONG_NAMED_BIT */, ppr2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_PprIds, _encode_PprIds } from "../RSPDefinitions/PprIds.ta.mjs";
import { CertificationDataObject, _decode_CertificationDataObject, _encode_CertificationDataObject } from "../RSPDefinitions/CertificationDataObject.ta.mjs";
// export { CertificationDataObject, _decode_CertificationDataObject, _encode_CertificationDataObject } from "../RSPDefinitions/CertificationDataObject.ta.mjs";
import { EUICCInfo2_treProperties, EUICCInfo2_treProperties_isDiscrete /* IMPORTED_LONG_NAMED_BIT */, isDiscrete /* IMPORTED_SHORT_NAMED_BIT */, EUICCInfo2_treProperties_isIntegrated /* IMPORTED_LONG_NAMED_BIT */, isIntegrated /* IMPORTED_SHORT_NAMED_BIT */, EUICCInfo2_treProperties_usesRemoteMemory /* IMPORTED_LONG_NAMED_BIT */, usesRemoteMemory /* IMPORTED_SHORT_NAMED_BIT */, _decode_EUICCInfo2_treProperties, _encode_EUICCInfo2_treProperties } from "../SGP32Definitions/EUICCInfo2-treProperties.ta.mjs";
// export { EUICCInfo2_treProperties, EUICCInfo2_treProperties_isDiscrete /* IMPORTED_LONG_NAMED_BIT */, isDiscrete /* IMPORTED_SHORT_NAMED_BIT */, EUICCInfo2_treProperties_isIntegrated /* IMPORTED_LONG_NAMED_BIT */, isIntegrated /* IMPORTED_SHORT_NAMED_BIT */, EUICCInfo2_treProperties_usesRemoteMemory /* IMPORTED_LONG_NAMED_BIT */, usesRemoteMemory /* IMPORTED_SHORT_NAMED_BIT */, _decode_EUICCInfo2_treProperties, _encode_EUICCInfo2_treProperties } from "../SGP32Definitions/EUICCInfo2-treProperties.ta.mjs";
import { IpaMode, IpaMode_ipad /* IMPORTED_LONG_NAMED_INTEGER */, ipad /* IMPORTED_SHORT_NAMED_INTEGER */, IpaMode_ipae /* IMPORTED_LONG_NAMED_INTEGER */, ipae /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IpaMode, _encode_IpaMode } from "../SGP32Definitions/IpaMode.ta.mjs";
// export { IpaMode, IpaMode_ipad /* IMPORTED_LONG_NAMED_INTEGER */, ipad /* IMPORTED_SHORT_NAMED_INTEGER */, IpaMode_ipae /* IMPORTED_LONG_NAMED_INTEGER */, ipae /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IpaMode, _encode_IpaMode } from "../SGP32Definitions/IpaMode.ta.mjs";
import { IoTSpecificInfo, _decode_IoTSpecificInfo, _encode_IoTSpecificInfo } from "../SGP32Definitions/IoTSpecificInfo.ta.mjs";
// export { IoTSpecificInfo, _decode_IoTSpecificInfo, _encode_IoTSpecificInfo } from "../SGP32Definitions/IoTSpecificInfo.ta.mjs";


/**
 * @summary EUICCInfo2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2 ::= [34] SEQUENCE { -- Tag 'BF22' 
 *     profileVersion [1] VersionType, -- Base eUICC Profile package version supported 
 *     svn [2] VersionType, -- GSMA SGP.22 version supported (SVN)referenced by SGP.32
 *     euiccFirmwareVer [3] VersionType, -- eUICC Firmware version 
 *     extCardResource [4] OCTET STRING, -- Extended Card Resource Information according to ETSI TS 102 226 
 *     uiccCapability [5] UICCCapability, 
 *     ts102241Version [6] VersionType OPTIONAL, 
 *     globalplatformVersion [7] VersionType OPTIONAL, 
 *     rspCapability [8] RspCapability, 
 *     euiccCiPKIdListForVerification [9] SEQUENCE OF SubjectKeyIdentifier, -- List of CI Public Key Identifiers supported on the eUICC for signature verification 
 *     euiccCiPKIdListForSigning [10] SEQUENCE OF SubjectKeyIdentifier, -- List of CI Public Key Identifier supported on the eUICC for signature creation 
 *     euiccCategory [11] INTEGER { 
 *         other(0), 
 *         basicEuicc(1), 
 *         mediumEuicc(2), 
 *         contactlessEuicc(3) 
 *     } OPTIONAL, 
 *     forbiddenProfilePolicyRules [25] PprIds OPTIONAL, -- Tag '99' 
 *     ppVersion VersionType, -- Protection Profile version 
 *     sasAcreditationNumber UTF8String (SIZE(0..64)), 
 *     certificationDataObject [12] CertificationDataObject OPTIONAL, 
 *     treProperties [13] BIT STRING { 
 *         isDiscrete(0), 
 *         isIntegrated(1), 
 *         usesRemoteMemory(2) -- refers to the usage of remote memory protected by the Remote Memory Protection Function described in SGP.21 [4] 
 *     } OPTIONAL, 
 *     treProductReference [14] UTF8String OPTIONAL, -- Platform_Label as defined in GlobalPlatform DLOA specification [57] 
 *     additionalEuiccProfilePackageVersions [15] SEQUENCE OF VersionType OPTIONAL,
 *     ipaMode [16] IpaMode OPTIONAL, -- active IPA, mandatory within SGP.32
 *     euiccCiPKIdListForSigningV3 [17] SEQUENCE OF SubjectKeyIdentifier OPTIONAL, -- not used by this version of SGP.32.
 *     additionalEuiccInfo [18] OCTET STRING (SIZE(0..32)) OPTIONAL,    -- not used by this version of SGP.32
 *     highestSvn [19] VersionType OPTIONAL, -- not used by this version of SGP.32 
 *     iotSpecificInfo [20] IoTSpecificInfo OPTIONAL, -- mandatory within SGP.32 
 *     euiccMinimumSecurityLevel [21] OCTET STRING (SIZE (1)) OPTIONAL -- value for eUICC Minimum Security Level Check
 * }
 * ```
 * 
 * @class
 */
export
class EUICCInfo2 {
    constructor (
        /**
         * @summary `profileVersion`.
         * @public
         * @readonly
         */
        readonly profileVersion: VersionType,
        /**
         * @summary `svn`.
         * @public
         * @readonly
         */
        readonly svn: VersionType,
        /**
         * @summary `euiccFirmwareVer`.
         * @public
         * @readonly
         */
        readonly euiccFirmwareVer: VersionType,
        /**
         * @summary `extCardResource`.
         * @public
         * @readonly
         */
        readonly extCardResource: OCTET_STRING,
        /**
         * @summary `uiccCapability`.
         * @public
         * @readonly
         */
        readonly uiccCapability: UICCCapability,
        /**
         * @summary `ts102241Version`.
         * @public
         * @readonly
         */
        readonly ts102241Version: OPTIONAL<VersionType>,
        /**
         * @summary `globalplatformVersion`.
         * @public
         * @readonly
         */
        readonly globalplatformVersion: OPTIONAL<VersionType>,
        /**
         * @summary `rspCapability`.
         * @public
         * @readonly
         */
        readonly rspCapability: RspCapability,
        /**
         * @summary `euiccCiPKIdListForVerification`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForVerification: SubjectKeyIdentifier[],
        /**
         * @summary `euiccCiPKIdListForSigning`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForSigning: SubjectKeyIdentifier[],
        /**
         * @summary `euiccCategory`.
         * @public
         * @readonly
         */
        readonly euiccCategory: OPTIONAL<EUICCInfo2_euiccCategory>,
        /**
         * @summary `forbiddenProfilePolicyRules`.
         * @public
         * @readonly
         */
        readonly forbiddenProfilePolicyRules: OPTIONAL<PprIds>,
        /**
         * @summary `ppVersion`.
         * @public
         * @readonly
         */
        readonly ppVersion: VersionType,
        /**
         * @summary `sasAcreditationNumber`.
         * @public
         * @readonly
         */
        readonly sasAcreditationNumber: UTF8String,
        /**
         * @summary `certificationDataObject`.
         * @public
         * @readonly
         */
        readonly certificationDataObject: OPTIONAL<CertificationDataObject>,
        /**
         * @summary `treProperties`.
         * @public
         * @readonly
         */
        readonly treProperties: OPTIONAL<EUICCInfo2_treProperties>,
        /**
         * @summary `treProductReference`.
         * @public
         * @readonly
         */
        readonly treProductReference: OPTIONAL<UTF8String>,
        /**
         * @summary `additionalEuiccProfilePackageVersions`.
         * @public
         * @readonly
         */
        readonly additionalEuiccProfilePackageVersions: OPTIONAL<VersionType[]>,
        /**
         * @summary `ipaMode`.
         * @public
         * @readonly
         */
        readonly ipaMode: OPTIONAL<IpaMode>,
        /**
         * @summary `euiccCiPKIdListForSigningV3`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdListForSigningV3: OPTIONAL<SubjectKeyIdentifier[]>,
        /**
         * @summary `additionalEuiccInfo`.
         * @public
         * @readonly
         */
        readonly additionalEuiccInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `highestSvn`.
         * @public
         * @readonly
         */
        readonly highestSvn: OPTIONAL<VersionType>,
        /**
         * @summary `iotSpecificInfo`.
         * @public
         * @readonly
         */
        readonly iotSpecificInfo: OPTIONAL<IoTSpecificInfo>,
        /**
         * @summary `euiccMinimumSecurityLevel`.
         * @public
         * @readonly
         */
        readonly euiccMinimumSecurityLevel: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a EUICCInfo2
     * @description
     * 
     * This takes an `object` and converts it to a `EUICCInfo2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUICCInfo2`.
     * @returns {EUICCInfo2}
     */
    public static _from_object (_o: { [_K in keyof (EUICCInfo2)]: (EUICCInfo2)[_K] }): EUICCInfo2 {
        return new EUICCInfo2(_o.profileVersion, _o.svn, _o.euiccFirmwareVer, _o.extCardResource, _o.uiccCapability, _o.ts102241Version, _o.globalplatformVersion, _o.rspCapability, _o.euiccCiPKIdListForVerification, _o.euiccCiPKIdListForSigning, _o.euiccCategory, _o.forbiddenProfilePolicyRules, _o.ppVersion, _o.sasAcreditationNumber, _o.certificationDataObject, _o.treProperties, _o.treProductReference, _o.additionalEuiccProfilePackageVersions, _o.ipaMode, _o.euiccCiPKIdListForSigningV3, _o.additionalEuiccInfo, _o.highestSvn, _o.iotSpecificInfo, _o.euiccMinimumSecurityLevel);
    }


}

/**
 * @summary The Leading Root Component Types of EUICCInfo2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUICCInfo2: $.ComponentSpec[] = [
    new $.ComponentSpec("profileVersion", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("svn", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccFirmwareVer", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extCardResource", false, $.hasTag(_TagClass.context, 4)),
    /* FIXME: uiccCapability COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("ts102241Version", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("globalplatformVersion", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rspCapability", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("euiccCiPKIdListForVerification", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("euiccCiPKIdListForSigning", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("euiccCategory", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("forbiddenProfilePolicyRules", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("ppVersion", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("sasAcreditationNumber", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("certificationDataObject", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("treProperties", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("treProductReference", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("additionalEuiccProfilePackageVersions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("ipaMode", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("euiccCiPKIdListForSigningV3", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("additionalEuiccInfo", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("highestSvn", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("iotSpecificInfo", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("euiccMinimumSecurityLevel", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of EUICCInfo2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUICCInfo2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUICCInfo2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUICCInfo2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUICCInfo2: $.ASN1Decoder<EUICCInfo2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCInfo2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCInfo2 (el: _Element): EUICCInfo2 {
    if (!_cached_decoder_for_EUICCInfo2) { _cached_decoder_for_EUICCInfo2 = $._decode_implicit<EUICCInfo2>(() => function (el: _Element): EUICCInfo2 {
    let profileVersion!: VersionType;
    let svn!: VersionType;
    let euiccFirmwareVer!: VersionType;
    let extCardResource!: OCTET_STRING;
    let uiccCapability!: UICCCapability;
    let ts102241Version: OPTIONAL<VersionType>;
    let globalplatformVersion: OPTIONAL<VersionType>;
    let rspCapability!: RspCapability;
    let euiccCiPKIdListForVerification!: SubjectKeyIdentifier[];
    let euiccCiPKIdListForSigning!: SubjectKeyIdentifier[];
    let euiccCategory: OPTIONAL<EUICCInfo2_euiccCategory>;
    let forbiddenProfilePolicyRules: OPTIONAL<PprIds>;
    let ppVersion!: VersionType;
    let sasAcreditationNumber!: UTF8String;
    let certificationDataObject: OPTIONAL<CertificationDataObject>;
    let treProperties: OPTIONAL<EUICCInfo2_treProperties>;
    let treProductReference: OPTIONAL<UTF8String>;
    let additionalEuiccProfilePackageVersions: OPTIONAL<VersionType[]>;
    let ipaMode: OPTIONAL<IpaMode>;
    let euiccCiPKIdListForSigningV3: OPTIONAL<SubjectKeyIdentifier[]>;
    let additionalEuiccInfo: OPTIONAL<OCTET_STRING>;
    let highestSvn: OPTIONAL<VersionType>;
    let iotSpecificInfo: OPTIONAL<IoTSpecificInfo>;
    let euiccMinimumSecurityLevel: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "profileVersion": (_el: _Element): void => { profileVersion = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "svn": (_el: _Element): void => { svn = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "euiccFirmwareVer": (_el: _Element): void => { euiccFirmwareVer = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "extCardResource": (_el: _Element): void => { extCardResource = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uiccCapability": (_el: _Element): void => { uiccCapability = $._decode_implicit<UICCCapability>(() => _decode_UICCCapability)(_el); },
        "ts102241Version": (_el: _Element): void => { ts102241Version = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "globalplatformVersion": (_el: _Element): void => { globalplatformVersion = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "rspCapability": (_el: _Element): void => { rspCapability = $._decode_implicit<RspCapability>(() => _decode_RspCapability)(_el); },
        "euiccCiPKIdListForVerification": (_el: _Element): void => { euiccCiPKIdListForVerification = $._decode_implicit<SubjectKeyIdentifier[]>(() => $._decodeSequenceOf<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier))(_el); },
        "euiccCiPKIdListForSigning": (_el: _Element): void => { euiccCiPKIdListForSigning = $._decode_implicit<SubjectKeyIdentifier[]>(() => $._decodeSequenceOf<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier))(_el); },
        "euiccCategory": (_el: _Element): void => { euiccCategory = $._decode_implicit<EUICCInfo2_euiccCategory>(() => _decode_EUICCInfo2_euiccCategory)(_el); },
        "forbiddenProfilePolicyRules": (_el: _Element): void => { forbiddenProfilePolicyRules = $._decode_implicit<PprIds>(() => _decode_PprIds)(_el); },
        "ppVersion": (_el: _Element): void => { ppVersion = _decode_VersionType(_el); },
        "sasAcreditationNumber": (_el: _Element): void => { sasAcreditationNumber = $._decodeUTF8String(_el); },
        "certificationDataObject": (_el: _Element): void => { certificationDataObject = $._decode_implicit<CertificationDataObject>(() => _decode_CertificationDataObject)(_el); },
        "treProperties": (_el: _Element): void => { treProperties = $._decode_implicit<EUICCInfo2_treProperties>(() => _decode_EUICCInfo2_treProperties)(_el); },
        "treProductReference": (_el: _Element): void => { treProductReference = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "additionalEuiccProfilePackageVersions": (_el: _Element): void => { additionalEuiccProfilePackageVersions = $._decode_implicit<VersionType[]>(() => $._decodeSequenceOf<VersionType>(() => _decode_VersionType))(_el); },
        "ipaMode": (_el: _Element): void => { ipaMode = $._decode_implicit<IpaMode>(() => _decode_IpaMode)(_el); },
        "euiccCiPKIdListForSigningV3": (_el: _Element): void => { euiccCiPKIdListForSigningV3 = $._decode_implicit<SubjectKeyIdentifier[]>(() => $._decodeSequenceOf<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier))(_el); },
        "additionalEuiccInfo": (_el: _Element): void => { additionalEuiccInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "highestSvn": (_el: _Element): void => { highestSvn = $._decode_implicit<VersionType>(() => _decode_VersionType)(_el); },
        "iotSpecificInfo": (_el: _Element): void => { iotSpecificInfo = $._decode_implicit<IoTSpecificInfo>(() => _decode_IoTSpecificInfo)(_el); },
        "euiccMinimumSecurityLevel": (_el: _Element): void => { euiccMinimumSecurityLevel = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EUICCInfo2,
        _extension_additions_list_spec_for_EUICCInfo2,
        _root_component_type_list_2_spec_for_EUICCInfo2,
        undefined,
    );
    return new EUICCInfo2(
        profileVersion,
        svn,
        euiccFirmwareVer,
        extCardResource,
        uiccCapability,
        ts102241Version,
        globalplatformVersion,
        rspCapability,
        euiccCiPKIdListForVerification,
        euiccCiPKIdListForSigning,
        euiccCategory,
        forbiddenProfilePolicyRules,
        ppVersion,
        sasAcreditationNumber,
        certificationDataObject,
        treProperties,
        treProductReference,
        additionalEuiccProfilePackageVersions,
        ipaMode,
        euiccCiPKIdListForSigningV3,
        additionalEuiccInfo,
        highestSvn,
        iotSpecificInfo,
        euiccMinimumSecurityLevel
    );
}); }
    return _cached_decoder_for_EUICCInfo2(el);
}

let _cached_encoder_for_EUICCInfo2: $.ASN1Encoder<EUICCInfo2> | null = null;

/**
 * @summary Encodes a(n) EUICCInfo2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCInfo2, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCInfo2 (value: EUICCInfo2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCInfo2) { _cached_encoder_for_EUICCInfo2 = $._encode_implicit(_TagClass.context, 34, () => function (value: EUICCInfo2, elGetter: $.ASN1Encoder<EUICCInfo2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_VersionType, $.BER)(value.profileVersion, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_VersionType, $.BER)(value.svn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_VersionType, $.BER)(value.euiccFirmwareVer, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.extCardResource, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_UICCCapability, $.BER)(value.uiccCapability, $.BER),
            /* IF_ABSENT  */ ((value.ts102241Version === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VersionType, $.BER)(value.ts102241Version, $.BER)),
            /* IF_ABSENT  */ ((value.globalplatformVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_VersionType, $.BER)(value.globalplatformVersion, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RspCapability, $.BER)(value.rspCapability, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<SubjectKeyIdentifier>(() => _encode_SubjectKeyIdentifier, $.BER), $.BER)(value.euiccCiPKIdListForVerification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<SubjectKeyIdentifier>(() => _encode_SubjectKeyIdentifier, $.BER), $.BER)(value.euiccCiPKIdListForSigning, $.BER),
            /* IF_ABSENT  */ ((value.euiccCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_EUICCInfo2_euiccCategory, $.BER)(value.euiccCategory, $.BER)),
            /* IF_ABSENT  */ ((value.forbiddenProfilePolicyRules === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_PprIds, $.BER)(value.forbiddenProfilePolicyRules, $.BER)),
            /* REQUIRED   */ _encode_VersionType(value.ppVersion, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.sasAcreditationNumber, $.BER),
            /* IF_ABSENT  */ ((value.certificationDataObject === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_CertificationDataObject, $.BER)(value.certificationDataObject, $.BER)),
            /* IF_ABSENT  */ ((value.treProperties === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_EUICCInfo2_treProperties, $.BER)(value.treProperties, $.BER)),
            /* IF_ABSENT  */ ((value.treProductReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeUTF8String, $.BER)(value.treProductReference, $.BER)),
            /* IF_ABSENT  */ ((value.additionalEuiccProfilePackageVersions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<VersionType>(() => _encode_VersionType, $.BER), $.BER)(value.additionalEuiccProfilePackageVersions, $.BER)),
            /* IF_ABSENT  */ ((value.ipaMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_IpaMode, $.BER)(value.ipaMode, $.BER)),
            /* IF_ABSENT  */ ((value.euiccCiPKIdListForSigningV3 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<SubjectKeyIdentifier>(() => _encode_SubjectKeyIdentifier, $.BER), $.BER)(value.euiccCiPKIdListForSigningV3, $.BER)),
            /* IF_ABSENT  */ ((value.additionalEuiccInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.additionalEuiccInfo, $.BER)),
            /* IF_ABSENT  */ ((value.highestSvn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_VersionType, $.BER)(value.highestSvn, $.BER)),
            /* IF_ABSENT  */ ((value.iotSpecificInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_IoTSpecificInfo, $.BER)(value.iotSpecificInfo, $.BER)),
            /* IF_ABSENT  */ ((value.euiccMinimumSecurityLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.euiccMinimumSecurityLevel, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EUICCInfo2(value, elGetter);
}


/* eslint-enable */
