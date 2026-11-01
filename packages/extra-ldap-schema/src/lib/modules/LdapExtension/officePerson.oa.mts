/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_officePerson } from "../LdapExtension/id-oc-officePerson.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { rdn } from "../LdapExtension/rdn.oa.mjs";
import { otherFacsimiletelephoneNumber } from "../LdapExtension/otherFacsimiletelephoneNumber.oa.mjs";
import { iPPhone } from "../LdapExtension/iPPhone.oa.mjs";
import { uRL } from "../LdapExtension/uRL.oa.mjs";
import { comment } from "../LdapExtension/comment.oa.mjs";
import { reports } from "../LdapExtension/reports.oa.mjs";
import { conferenceInformation } from "../LdapExtension/conferenceInformation.oa.mjs";
// export { id_oc_officePerson } from "../LdapExtension/id-oc-officePerson.va.mjs";


/**
 * @summary officePerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * officePerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { countryName
 *                               | rdn
 *                               | otherFacsimiletelephoneNumber
 *                               | iPPhone
 *                               | uRL
 *                               | comment
 *                               | reports
 *                               | conferenceInformation }
 *   LDAP-NAME                 {"officePerson"}
 *   LDAP-DESC                 "Office employee or computer user"
 *   ID                        id-oc-officePerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const officePerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, rdn, otherFacsimiletelephoneNumber, iPPhone, uRL, comment, reports, conferenceInformation, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "officePerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Office employee or computer user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_officePerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
