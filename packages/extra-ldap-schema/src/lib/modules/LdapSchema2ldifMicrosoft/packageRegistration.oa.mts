/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_packageRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-packageRegistration.va.mjs";
import { msiScriptPath } from "../MSUser/msiScriptPath.oa.mjs";
import { cOMClassID } from "../MSUser/cOMClassID.oa.mjs";
import { cOMInterfaceID } from "../MSUser/cOMInterfaceID.oa.mjs";
import { cOMProgID } from "../MSUser/cOMProgID.oa.mjs";
import { localeID } from "../MSUser/localeID.oa.mjs";
import { machineArchitecture } from "../MSUser/machineArchitecture.oa.mjs";
import { iconPath } from "../MSUser/iconPath.oa.mjs";
import { cOMTypelibId } from "../MSUser/cOMTypelibId.oa.mjs";
import { vendor } from "../MSUser/vendor.oa.mjs";
import { packageType } from "../MSUser/packageType.oa.mjs";
import { setupCommand } from "../MSUser/setupCommand.oa.mjs";
import { packageName } from "../MSUser/packageName.oa.mjs";
import { packageFlags } from "../MSUser/packageFlags.oa.mjs";
import { versionNumberHi } from "../MSUser/versionNumberHi.oa.mjs";
import { versionNumberLo } from "../MSUser/versionNumberLo.oa.mjs";
import { lastUpdateSequence } from "../MSUser/lastUpdateSequence.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { msiFileList } from "../MSUser/msiFileList.oa.mjs";
import { categories } from "../MSUser/categories.oa.mjs";
import { upgradeProductCode } from "../MSUser/upgradeProductCode.oa.mjs";
import { msiScript } from "../MSUser/msiScript.oa.mjs";
import { canUpgradeScript } from "../MSUser/canUpgradeScript.oa.mjs";
import { fileExtPriority } from "../MSUser/fileExtPriority.oa.mjs";
import { productCode } from "../MSUser/productCode.oa.mjs";
import { msiScriptName } from "../MSUser/msiScriptName.oa.mjs";
import { msiScriptSize } from "../MSUser/msiScriptSize.oa.mjs";
import { installUiLevel } from "../MSUser/installUiLevel.oa.mjs";
// export { id_oc_packageRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-packageRegistration.va.mjs";


/**
 * @summary packageRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * packageRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { msiScriptPath
 *                               | cOMClassID
 *                               | cOMInterfaceID
 *                               | cOMProgID
 *                               | localeID
 *                               | machineArchitecture
 *                               | iconPath
 *                               | cOMTypelibId
 *                               | vendor
 *                               | packageType
 *                               | setupCommand
 *                               | packageName
 *                               | packageFlags
 *                               | versionNumberHi
 *                               | versionNumberLo
 *                               | lastUpdateSequence
 *                               | managedBy
 *                               | msiFileList
 *                               | categories
 *                               | upgradeProductCode
 *                               | msiScript
 *                               | canUpgradeScript
 *                               | fileExtPriority
 *                               | productCode
 *                               | msiScriptName
 *                               | msiScriptSize
 *                               | installUiLevel }
 *   LDAP-NAME                 {"packageRegistration"}
 *   ID                        id-oc-packageRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const packageRegistration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ msiScriptPath, cOMClassID, cOMInterfaceID, cOMProgID, localeID, machineArchitecture, iconPath, cOMTypelibId, vendor, packageType, setupCommand, packageName, packageFlags, versionNumberHi, versionNumberLo, lastUpdateSequence, managedBy, msiFileList, categories, upgradeProductCode, msiScript, canUpgradeScript, fileExtPriority, productCode, msiScriptName, msiScriptSize, installUiLevel, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "packageRegistration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_packageRegistration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
