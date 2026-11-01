/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_pabPerson } from "../Ldapmigration55imsIcal/id-oc-pabPerson.va.mjs";
import { un } from "../Ldapmigration55imsIcal/un.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationUnitName } from "../Ldapmigration55imsIcal/organizationUnitName.oa.mjs";
import { co } from "../LdapSchema2ldifCosine/co.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { dateOfBirth } from "../Ldapmigration55imsIcal/dateOfBirth.oa.mjs";
import { memberOfPAB } from "../Ldapmigration55imsIcal/memberOfPAB.oa.mjs";
import { memberOfPABGroup } from "../Ldapmigration55imsIcal/memberOfPABGroup.oa.mjs";
import { nickname } from "../Ldapmigration55imsIcal/nickname.oa.mjs";
import { calCalURI } from "../RFC2739Calendar/calCalURI.oa.mjs";
import { calFBURL } from "../RFC2739Calendar/calFBURL.oa.mjs";
// export { id_oc_pabPerson } from "../Ldapmigration55imsIcal/id-oc-pabPerson.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ un, organizationName, organizationUnitName, co, mailAlternateAddress, dateOfBirth, memberOfPAB, memberOfPABGroup, nickname, calCalURI, calFBURL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pabPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "structural class for creating personal address book entries" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pabPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
