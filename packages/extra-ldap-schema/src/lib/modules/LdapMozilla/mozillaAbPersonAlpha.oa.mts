/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mozillaAbPersonAlpha } from "../LdapMozilla/id-oc-mozillaAbPersonAlpha.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { mozillaCustom1 } from "./mozillaCustom1.oa.mjs";
import { mozillaCustom2 } from "./mozillaCustom2.oa.mjs";
import { mozillaCustom3 } from "./mozillaCustom3.oa.mjs";
import { mozillaCustom4 } from "./mozillaCustom4.oa.mjs";
import { mozillaHomeCountryName } from "./mozillaHomeCountryName.oa.mjs";
import { mozillaHomeLocalityName } from "./mozillaHomeLocalityName.oa.mjs";
import { mozillaHomePostalCode } from "./mozillaHomePostalCode.oa.mjs";
import { mozillaHomeState } from "./mozillaHomeState.oa.mjs";
import { mozillaHomeStreet } from "./mozillaHomeStreet.oa.mjs";
import { mozillaHomeStreet2 } from "./mozillaHomeStreet2.oa.mjs";
import { mozillaHomeUrl } from "./mozillaHomeUrl.oa.mjs";
import { mozillaNickname } from "./mozillaNickname.oa.mjs";
import { mozillaSecondEmail } from "./mozillaSecondEmail.oa.mjs";
import { mozillaUseHtmlMail } from "./mozillaUseHtmlMail.oa.mjs";
import { mozillaWorkStreet2 } from "./mozillaWorkStreet2.oa.mjs";
import { mozillaWorkUrl } from "./mozillaWorkUrl.oa.mjs";
import { nsAIMid } from "./nsAIMid.oa.mjs";

/**
 * @summary mozillaAbPersonAlpha
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mozillaAbPersonAlpha OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { countryName
 *                               | description
 *                               | displayName
 *                               | facsimileTelephoneNumber
 *                               | givenName
 *                               | homePhone
 *                               | localityName
 *                               | mail
 *                               | mobile
 *                               | mozillaCustom1
 *                               | mozillaCustom2
 *                               | mozillaCustom3
 *                               | mozillaCustom4
 *                               | mozillaHomeCountryName
 *                               | mozillaHomeLocalityName
 *                               | mozillaHomePostalCode
 *                               | mozillaHomeState
 *                               | mozillaHomeStreet
 *                               | mozillaHomeStreet2
 *                               | mozillaHomeUrl
 *                               | mozillaNickname
 *                               | mozillaSecondEmail
 *                               | mozillaUseHtmlMail
 *                               | mozillaWorkStreet2
 *                               | mozillaWorkUrl
 *                               | nsAIMid
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | pager
 *                               | postalCode
 *                               | postOfficeBox
 *                               | surname
 *                               | stateOrProvinceName
 *                               | streetAddress
 *                               | telephoneNumber
 *                               | title }
 *   LDAP-NAME                 {"mozillaAbPersonAlpha"}
 *   ID                        id-oc-mozillaAbPersonAlpha }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mozillaAbPersonAlpha: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, description, displayName, facsimileTelephoneNumber, givenName, homePhone, localityName, mail, mobile, mozillaCustom1, mozillaCustom2, mozillaCustom3, mozillaCustom4, mozillaHomeCountryName, mozillaHomeLocalityName, mozillaHomePostalCode, mozillaHomeState, mozillaHomeStreet, mozillaHomeStreet2, mozillaHomeUrl, mozillaNickname, mozillaSecondEmail, mozillaUseHtmlMail, mozillaWorkStreet2, mozillaWorkUrl, nsAIMid, organizationName, organizationalUnitName, pager, postalCode, postOfficeBox, surname, stateOrProvinceName, streetAddress, telephoneNumber, title] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mozillaAbPersonAlpha"],
    "&id": id_oc_mozillaAbPersonAlpha /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
