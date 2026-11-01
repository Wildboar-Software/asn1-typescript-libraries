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
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuAttribute } from "../LdapOx/id-oc-gluuAttribute.va.mjs";
// export { id_oc_gluuAttribute } from "../LdapOx/id-oc-gluuAttribute.va.mjs";


import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { gluuAttributeEditType } from "../LdapOx/gluuAttributeEditType.oa.mjs";
import { gluuAttributeName } from "../LdapOx/gluuAttributeName.oa.mjs";
import { gluuAttributeOrigin } from "../LdapOx/gluuAttributeOrigin.oa.mjs";
import { gluuAttributeSystemEditType } from "../LdapOx/gluuAttributeSystemEditType.oa.mjs";
import { gluuAttributeType } from "../LdapOx/gluuAttributeType.oa.mjs";
import { oxAuthClaimName } from "../LdapOx/oxAuthClaimName.oa.mjs";
import { gluuAttributeUsageType } from "../LdapOx/gluuAttributeUsageType.oa.mjs";
import { gluuAttributeViewType } from "../LdapOx/gluuAttributeViewType.oa.mjs";
import { gluuCategory } from "../LdapOx/gluuCategory.oa.mjs";
import { gluuSAML1URI } from "../LdapOx/gluuSAML1URI.oa.mjs";
import { gluuSAML2URI } from "../LdapOx/gluuSAML2URI.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { oxMultivaluedAttribute } from "../LdapOx/oxMultivaluedAttribute.oa.mjs";
import { oxNameIdType } from "../LdapOx/oxNameIdType.oa.mjs";
import { oxSCIMCustomAttribute } from "../LdapOx/oxSCIMCustomAttribute.oa.mjs";
import { oxSourceAttribute } from "../LdapOx/oxSourceAttribute.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { urn } from "../LdapOx/urn.oa.mjs";
import { gluuRegExp } from "../LdapOx/gluuRegExp.oa.mjs";
import { gluuTooltip } from "../LdapOx/gluuTooltip.oa.mjs";
import { oxValidation } from "../LdapOx/oxValidation.oa.mjs";
/**
 * @summary gluuAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuAttribute OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | gluuAttributeEditType
 *                               | gluuAttributeName
 *                               | gluuAttributeOrigin
 *                               | gluuAttributeSystemEditType
 *                               | gluuAttributeType
 *                               | oxAuthClaimName
 *                               | gluuAttributeUsageType
 *                               | gluuAttributeViewType
 *                               | gluuCategory
 *                               | gluuSAML1URI
 *                               | gluuSAML2URI
 *                               | gluuStatus
 *                               | iname
 *                               | inum
 *                               | oxMultivaluedAttribute
 *                               | oxNameIdType
 *                               | oxSCIMCustomAttribute
 *                               | oxSourceAttribute
 *                               | seeAlso
 *                               | urn
 *                               | gluuRegExp
 *                               | gluuTooltip
 *                               | oxValidation }
 *   LDAP-NAME                 {"gluuAttribute"}
 *   ID                        id-oc-gluuAttribute }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuAttribute: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, displayName, gluuAttributeEditType, gluuAttributeName, gluuAttributeOrigin, gluuAttributeSystemEditType, gluuAttributeType, oxAuthClaimName, gluuAttributeUsageType, gluuAttributeViewType, gluuCategory, gluuSAML1URI, gluuSAML2URI, gluuStatus, iname, inum, oxMultivaluedAttribute, oxNameIdType, oxSCIMCustomAttribute, oxSourceAttribute, seeAlso, urn, gluuRegExp, gluuTooltip, oxValidation, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuAttribute" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuAttribute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
