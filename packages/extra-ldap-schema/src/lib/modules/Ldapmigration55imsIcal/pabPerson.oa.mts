/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { co } from "../LdapSchema2ldifCosine/co.oa.mjs";
import { id_oc_pabPerson } from "../Ldapmigration55imsIcal/id-oc-pabPerson.va.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { calCalURI } from "../RFC2739Calendar/calCalURI.oa.mjs";
import { calFBURL } from "../RFC2739Calendar/calFBURL.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { dateOfBirth } from "./dateOfBirth.oa.mjs";
import { memberOfPAB } from "./memberOfPAB.oa.mjs";
import { memberOfPABGroup } from "./memberOfPABGroup.oa.mjs";
import { nickname } from "./nickname.oa.mjs";
import { organizationUnitName } from "./organizationUnitName.oa.mjs";
import { un } from "./un.oa.mjs";

/**
 * @summary pabPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pabPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { un
 *                               | organizationName
 *                               | organizationUnitName
 *                               | co
 *                               | mailAlternateAddress
 *                               | dateOfBirth
 *                               | memberOfPAB
 *                               | memberOfPABGroup
 *                               | nickname
 *                               | calCalURI
 *                               | calFBURL }
 *   LDAP-NAME                 {"pabPerson"}
 *   LDAP-DESC                 "structural class for creating personal address book entries"
 *   ID                        id-oc-pabPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pabPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [un, organizationName, organizationUnitName, co, mailAlternateAddress, dateOfBirth, memberOfPAB, memberOfPABGroup, nickname, calCalURI, calFBURL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pabPerson"],
    "&ldapDesc": "structural class for creating personal address book entries" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pabPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
