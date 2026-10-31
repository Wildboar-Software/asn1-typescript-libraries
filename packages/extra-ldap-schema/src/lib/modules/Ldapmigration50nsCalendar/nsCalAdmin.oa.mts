/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_nsCalAdmin } from "../Ldapmigration50nsCalendar/id-oc-nsCalAdmin.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { nsCalAccess } from "./nsCalAccess.oa.mjs";
import { nsCalAccessDomain } from "./nsCalAccessDomain.oa.mjs";
import { nsCalAdmd } from "./nsCalAdmd.oa.mjs";
import { nsCalFlags } from "./nsCalFlags.oa.mjs";
import { nsCalHost } from "./nsCalHost.oa.mjs";
import { nsCalLanguageId } from "./nsCalLanguageId.oa.mjs";
import { nsCalNodeAlias } from "./nsCalNodeAlias.oa.mjs";
import { nsCalOrgUnit2 } from "./nsCalOrgUnit2.oa.mjs";
import { nsCalOrgUnit3 } from "./nsCalOrgUnit3.oa.mjs";
import { nsCalOrgUnit4 } from "./nsCalOrgUnit4.oa.mjs";
import { nsCalPasswordRequired } from "./nsCalPasswordRequired.oa.mjs";
import { nsCalPrmd } from "./nsCalPrmd.oa.mjs";
import { nsCalServerVersion } from "./nsCalServerVersion.oa.mjs";
import { nsCalSysopCanWritePassword } from "./nsCalSysopCanWritePassword.oa.mjs";
import { nsCalXItemId } from "./nsCalXItemId.oa.mjs";

/**
 * @summary nsCalAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsCalAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | commonName
 *                               | facsimileTelephoneNumber
 *                               | generationQualifier
 *                               | givenName
 *                               | initials
 *                               | mail
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | postalAddress
 *                               | surname
 *                               | telephoneNumber
 *                               | userPassword
 *                               | nsCalAccess
 *                               | nsCalAccessDomain
 *                               | nsCalAdmd
 *                               | nsCalFlags
 *                               | nsCalHost
 *                               | nsCalLanguageId
 *                               | nsCalNodeAlias
 *                               | nsCalOrgUnit2
 *                               | nsCalOrgUnit3
 *                               | nsCalOrgUnit4
 *                               | nsCalPasswordRequired
 *                               | nsCalPrmd
 *                               | nsCalServerVersion
 *                               | nsCalSysopCanWritePassword
 *                               | nsCalXItemId }
 *   LDAP-NAME                 {"nsCalAdmin"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nsCalAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsCalAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, commonName, facsimileTelephoneNumber, generationQualifier, givenName, initials, mail, organizationName, organizationalUnitName, postalAddress, surname, telephoneNumber, userPassword, nsCalAccess, nsCalAccessDomain, nsCalAdmd, nsCalFlags, nsCalHost, nsCalLanguageId, nsCalNodeAlias, nsCalOrgUnit2, nsCalOrgUnit3, nsCalOrgUnit4, nsCalPasswordRequired, nsCalPrmd, nsCalServerVersion, nsCalSysopCanWritePassword, nsCalXItemId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsCalAdmin"],
    "&ldapDesc": "iPlanet defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsCalAdmin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
