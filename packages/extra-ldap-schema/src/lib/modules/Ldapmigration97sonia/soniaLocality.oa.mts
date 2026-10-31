/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { id_oc_soniaLocality } from "../Ldapmigration97sonia/id-oc-soniaLocality.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { locality } from "../SelectedObjectClasses/locality.oa.mjs";
import { soniaLocalityCO } from "./soniaLocalityCO.oa.mjs";
import { soniaLocalityCompany } from "./soniaLocalityCompany.oa.mjs";
import { soniaLocalityContactPerson } from "./soniaLocalityContactPerson.oa.mjs";
import { soniaLocalityDepartment } from "./soniaLocalityDepartment.oa.mjs";
import { soniaLocalityMail } from "./soniaLocalityMail.oa.mjs";
import { soniaLocalityMobile } from "./soniaLocalityMobile.oa.mjs";
import { soniaLocalityNickname } from "./soniaLocalityNickname.oa.mjs";
import { soniaLocalityNumber } from "./soniaLocalityNumber.oa.mjs";
import { soniaLocalityPager } from "./soniaLocalityPager.oa.mjs";
import { soniaLocalityPermissions } from "./soniaLocalityPermissions.oa.mjs";
import { soniaLocalityTimestamp } from "./soniaLocalityTimestamp.oa.mjs";
import { soniaLocalityToken } from "./soniaLocalityToken.oa.mjs";
import { soniaLocalityURI } from "./soniaLocalityURI.oa.mjs";
import { soniaLocalityZip } from "./soniaLocalityZip.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [locality] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, facsimileTelephoneNumber, secretary, soniaLocalityNumber, soniaLocalityToken, soniaLocalityZip, telephoneNumber, soniaLocalityCompany, soniaLocalityDepartment, soniaLocalityContactPerson, soniaLocalityMobile, soniaLocalityMail, soniaLocalityURI, soniaLocalityCO, soniaLocalityPermissions, soniaLocalityPager, soniaLocalityNickname, soniaLocalityTimestamp] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaLocality"],
    "&id": id_oc_soniaLocality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
