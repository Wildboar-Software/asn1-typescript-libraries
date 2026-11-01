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
import { id_oc_roundcubeMail } from "../LdapSchema2ldifRoundCube/id-oc-roundcubeMail.va.mjs";
// export { id_oc_roundcubeMail } from "../LdapSchema2ldifRoundCube/id-oc-roundcubeMail.va.mjs";


import { rcNickname } from "../LdapSchema2ldifRoundCube/rcNickname.oa.mjs";
import { rcBirthday } from "../LdapSchema2ldifRoundCube/rcBirthday.oa.mjs";
import { rcGender } from "../LdapSchema2ldifRoundCube/rcGender.oa.mjs";
import { rcHomeMail } from "../LdapSchema2ldifRoundCube/rcHomeMail.oa.mjs";
import { rcWorkMail } from "../LdapSchema2ldifRoundCube/rcWorkMail.oa.mjs";
import { rcHomeFax } from "../LdapSchema2ldifRoundCube/rcHomeFax.oa.mjs";
import { rcWorkFax } from "../LdapSchema2ldifRoundCube/rcWorkFax.oa.mjs";
import { rcHomeURL } from "../LdapSchema2ldifRoundCube/rcHomeURL.oa.mjs";
import { rcWorkURL } from "../LdapSchema2ldifRoundCube/rcWorkURL.oa.mjs";
import { rcBlogURL } from "../LdapSchema2ldifRoundCube/rcBlogURL.oa.mjs";
import { rcProfileURL } from "../LdapSchema2ldifRoundCube/rcProfileURL.oa.mjs";
import { rcSkype } from "../LdapSchema2ldifRoundCube/rcSkype.oa.mjs";
import { rcJabber } from "../LdapSchema2ldifRoundCube/rcJabber.oa.mjs";
import { rcAIM } from "../LdapSchema2ldifRoundCube/rcAIM.oa.mjs";
import { rcICQ } from "../LdapSchema2ldifRoundCube/rcICQ.oa.mjs";
import { rcRegion } from "../LdapSchema2ldifRoundCube/rcRegion.oa.mjs";
import { rcCountry } from "../LdapSchema2ldifRoundCube/rcCountry.oa.mjs";
import { rcManager } from "../LdapSchema2ldifRoundCube/rcManager.oa.mjs";
import { rcAssistant } from "../LdapSchema2ldifRoundCube/rcAssistant.oa.mjs";
/**
 * @summary roundcubeMail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roundcubeMail OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { rcNickname
 *                               | rcBirthday
 *                               | rcGender
 *                               | rcHomeMail
 *                               | rcWorkMail
 *                               | rcHomeFax
 *                               | rcWorkFax
 *                               | rcHomeURL
 *                               | rcWorkURL
 *                               | rcBlogURL
 *                               | rcProfileURL
 *                               | rcSkype
 *                               | rcJabber
 *                               | rcAIM
 *                               | rcICQ
 *                               | rcRegion
 *                               | rcCountry
 *                               | rcManager
 *                               | rcAssistant }
 *   LDAP-NAME                 {"RoundcubeMail"}
 *   ID                        id-oc-roundcubeMail }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const roundcubeMail: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rcNickname, rcBirthday, rcGender, rcHomeMail, rcWorkMail, rcHomeFax, rcWorkFax, rcHomeURL, rcWorkURL, rcBlogURL, rcProfileURL, rcSkype, rcJabber, rcAIM, rcICQ, rcRegion, rcCountry, rcManager, rcAssistant, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "RoundcubeMail" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_roundcubeMail /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
