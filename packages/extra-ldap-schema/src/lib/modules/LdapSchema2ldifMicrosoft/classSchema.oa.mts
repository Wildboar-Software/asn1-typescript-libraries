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
    type NULL,
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
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
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
import { id_oc_classSchema } from "../LdapSchema2ldifMicrosoft/id-oc-classSchema.va.mjs";
// export { id_oc_classSchema } from "../LdapSchema2ldifMicrosoft/id-oc-classSchema.va.mjs";


import { possSuperiors } from "../MSUser/possSuperiors.oa.mjs";
import { mustContain } from "../MSUser/mustContain.oa.mjs";
import { mayContain } from "../MSUser/mayContain.oa.mjs";
import { rDNAttID } from "../MSUser/rDNAttID.oa.mjs";
import { auxiliaryClass } from "../MSUser/auxiliaryClass.oa.mjs";
import { lDAPDisplayName } from "../MSUser/lDAPDisplayName.oa.mjs";
import { schemaFlagsEx } from "../MSUser/schemaFlagsEx.oa.mjs";
import { systemOnly } from "../MSUser/systemOnly.oa.mjs";
import { systemPossSuperiors } from "../MSUser/systemPossSuperiors.oa.mjs";
import { systemMayContain } from "../MSUser/systemMayContain.oa.mjs";
import { systemMustContain } from "../MSUser/systemMustContain.oa.mjs";
import { systemAuxiliaryClass } from "../MSUser/systemAuxiliaryClass.oa.mjs";
import { defaultSecurityDescriptor } from "../MSUser/defaultSecurityDescriptor.oa.mjs";
import { defaultHidingValue } from "../MSUser/defaultHidingValue.oa.mjs";
import { classDisplayName } from "../MSUser/classDisplayName.oa.mjs";
import { isDefunct } from "../MSUser/isDefunct.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { subClassOf } from "../MSUser/subClassOf.oa.mjs";
import { governsID } from "../MSUser/governsID.oa.mjs";
import { objectClassCategory } from "../MSUser/objectClassCategory.oa.mjs";
import { schemaIDGUID } from "../MSUser/schemaIDGUID.oa.mjs";
import { defaultObjectCategory } from "../MSUser/defaultObjectCategory.oa.mjs";
/**
 * @summary classSchema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classSchema OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | subClassOf
 *                               | governsID
 *                               | objectClassCategory
 *                               | schemaIDGUID
 *                               | defaultObjectCategory }
 *   MAY CONTAIN               { possSuperiors
 *                               | mustContain
 *                               | mayContain
 *                               | rDNAttID
 *                               | auxiliaryClass
 *                               | lDAPDisplayName
 *                               | schemaFlagsEx
 *                               | systemOnly
 *                               | systemPossSuperiors
 *                               | systemMayContain
 *                               | systemMustContain
 *                               | systemAuxiliaryClass
 *                               | defaultSecurityDescriptor
 *                               | defaultHidingValue
 *                               | classDisplayName
 *                               | isDefunct }
 *   LDAP-NAME                 {"classSchema"}
 *   ID                        id-oc-classSchema }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classSchema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, subClassOf, governsID, objectClassCategory, schemaIDGUID, defaultObjectCategory, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ possSuperiors, mustContain, mayContain, rDNAttID, auxiliaryClass, lDAPDisplayName, schemaFlagsEx, systemOnly, systemPossSuperiors, systemMayContain, systemMustContain, systemAuxiliaryClass, defaultSecurityDescriptor, defaultHidingValue, classDisplayName, isDefunct, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "classSchema" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_classSchema /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
