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
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_apple_computer } from "../LdapSchema2ldifApple/id-oc-apple-computer.va.mjs";
// export { id_oc_apple_computer } from "../LdapSchema2ldifApple/id-oc-apple-computer.va.mjs";


import { apple_realname } from "../LdapSchema2ldifApple/apple-realname.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { apple_category } from "../LdapSchema2ldifApple/apple-category.oa.mjs";
import { apple_computer_list_groups } from "../LdapSchema2ldifApple/apple-computer-list-groups.oa.mjs";
import { apple_keyword } from "../LdapSchema2ldifApple/apple-keyword.oa.mjs";
import { apple_mcxflags } from "../LdapSchema2ldifApple/apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "../LdapSchema2ldifApple/apple-mcxsettings.oa.mjs";
import { apple_networkview } from "../LdapSchema2ldifApple/apple-networkview.oa.mjs";
import { apple_xmlplist } from "../LdapSchema2ldifApple/apple-xmlplist.oa.mjs";
import { apple_service_url } from "../LdapSchema2ldifApple/apple-service-url.oa.mjs";
import { authAuthority } from "../LdapSchema2ldifApple/authAuthority.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { apple_generateduid } from "../LdapSchema2ldifApple/apple-generateduid.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
import { acctFlags } from "../SambaSchema/acctFlags.oa.mjs";
import { pwdLastSet } from "../SambaSchema/pwdLastSet.oa.mjs";
import { logonTime } from "../SambaSchema/logonTime.oa.mjs";
import { logoffTime } from "../SambaSchema/logoffTime.oa.mjs";
import { kickoffTime } from "../SambaSchema/kickoffTime.oa.mjs";
import { rid } from "../SambaSchema/rid.oa.mjs";
import { primaryGroupID } from "../SambaSchema/primaryGroupID.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { sambaPrimaryGroupSID } from "../SambaV3Schema/sambaPrimaryGroupSID.oa.mjs";
/**
 * @summary apple_computer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-computer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-realname
 *                               | description
 *                               | macAddress
 *                               | apple-category
 *                               | apple-computer-list-groups
 *                               | apple-keyword
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-networkview
 *                               | apple-xmlplist
 *                               | apple-service-url
 *                               | authAuthority
 *                               | uidNumber
 *                               | gidNumber
 *                               | apple-generateduid
 *                               | ttl
 *                               | acctFlags
 *                               | pwdLastSet
 *                               | logonTime
 *                               | logoffTime
 *                               | kickoffTime
 *                               | rid
 *                               | primaryGroupID
 *                               | sambaSID
 *                               | sambaPrimaryGroupSID }
 *   LDAP-NAME                 {"apple-computer"}
 *   LDAP-DESC                 "computer"
 *   ID                        id-oc-apple-computer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_computer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ apple_realname, description, macAddress, apple_category, apple_computer_list_groups, apple_keyword, apple_mcxflags, apple_mcxsettings, apple_networkview, apple_xmlplist, apple_service_url, authAuthority, uidNumber, gidNumber, apple_generateduid, ttl, acctFlags, pwdLastSet, logonTime, logoffTime, kickoffTime, rid, primaryGroupID, sambaSID, sambaPrimaryGroupSID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-computer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "computer" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_computer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
