/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_officePerson } from "../LdapExtension/id-oc-officePerson.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { comment } from "./comment.oa.mjs";
import { conferenceInformation } from "./conferenceInformation.oa.mjs";
import { iPPhone } from "./iPPhone.oa.mjs";
import { otherFacsimiletelephoneNumber } from "./otherFacsimiletelephoneNumber.oa.mjs";
import { rdn } from "./rdn.oa.mjs";
import { reports } from "./reports.oa.mjs";
import { uRL } from "./uRL.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, rdn, otherFacsimiletelephoneNumber, iPPhone, uRL, comment, reports, conferenceInformation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["officePerson"],
    "&ldapDesc": "Office employee or computer user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_officePerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
