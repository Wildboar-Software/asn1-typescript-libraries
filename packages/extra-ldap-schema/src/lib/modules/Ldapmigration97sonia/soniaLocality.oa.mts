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
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_soniaLocality } from "../Ldapmigration97sonia/id-oc-soniaLocality.va.mjs";

import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { soniaLocalityNumber } from "../Ldapmigration97sonia/soniaLocalityNumber.oa.mjs";
import { soniaLocalityToken } from "../Ldapmigration97sonia/soniaLocalityToken.oa.mjs";
import { soniaLocalityZip } from "../Ldapmigration97sonia/soniaLocalityZip.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { soniaLocalityCompany } from "../Ldapmigration97sonia/soniaLocalityCompany.oa.mjs";
import { soniaLocalityDepartment } from "../Ldapmigration97sonia/soniaLocalityDepartment.oa.mjs";
import { soniaLocalityContactPerson } from "../Ldapmigration97sonia/soniaLocalityContactPerson.oa.mjs";
import { soniaLocalityMobile } from "../Ldapmigration97sonia/soniaLocalityMobile.oa.mjs";
import { soniaLocalityMail } from "../Ldapmigration97sonia/soniaLocalityMail.oa.mjs";
import { soniaLocalityURI } from "../Ldapmigration97sonia/soniaLocalityURI.oa.mjs";
import { soniaLocalityCO } from "../Ldapmigration97sonia/soniaLocalityCO.oa.mjs";
import { soniaLocalityPermissions } from "../Ldapmigration97sonia/soniaLocalityPermissions.oa.mjs";
import { soniaLocalityPager } from "../Ldapmigration97sonia/soniaLocalityPager.oa.mjs";
import { soniaLocalityNickname } from "../Ldapmigration97sonia/soniaLocalityNickname.oa.mjs";
import { soniaLocalityTimestamp } from "../Ldapmigration97sonia/soniaLocalityTimestamp.oa.mjs";
/**
 * @summary soniaLocality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaLocality OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { countryName
 *                               | facsimileTelephoneNumber
 *                               | secretary
 *                               | soniaLocalityNumber
 *                               | soniaLocalityToken
 *                               | soniaLocalityZip
 *                               | telephoneNumber
 *                               | soniaLocalityCompany
 *                               | soniaLocalityDepartment
 *                               | soniaLocalityContactPerson
 *                               | soniaLocalityMobile
 *                               | soniaLocalityMail
 *                               | soniaLocalityURI
 *                               | soniaLocalityCO
 *                               | soniaLocalityPermissions
 *                               | soniaLocalityPager
 *                               | soniaLocalityNickname
 *                               | soniaLocalityTimestamp }
 *   LDAP-NAME                 {"soniaLocality"}
 *   ID                        id-oc-soniaLocality }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaLocality: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ locality, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, facsimileTelephoneNumber, secretary, soniaLocalityNumber, soniaLocalityToken, soniaLocalityZip, telephoneNumber, soniaLocalityCompany, soniaLocalityDepartment, soniaLocalityContactPerson, soniaLocalityMobile, soniaLocalityMail, soniaLocalityURI, soniaLocalityCO, soniaLocalityPermissions, soniaLocalityPager, soniaLocalityNickname, soniaLocalityTimestamp, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaLocality" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaLocality /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
