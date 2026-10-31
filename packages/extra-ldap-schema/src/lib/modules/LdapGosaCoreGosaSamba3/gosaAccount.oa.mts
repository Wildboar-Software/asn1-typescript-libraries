/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAccount.va.mjs";
import { personalTitle } from "../LdapSchema2ldifCosine/personalTitle.oa.mjs";
import { sambaBadPasswordCount } from "../SambaV3Schema/sambaBadPasswordCount.oa.mjs";
import { sambaBadPasswordTime } from "../SambaV3Schema/sambaBadPasswordTime.oa.mjs";
import { sambaLMPassword } from "../SambaV3Schema/sambaLMPassword.oa.mjs";
import { sambaNTPassword } from "../SambaV3Schema/sambaNTPassword.oa.mjs";
import { sambaPwdLastSet } from "../SambaV3Schema/sambaPwdLastSet.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { academicTitle } from "./academicTitle.oa.mjs";
import { dateOfBirth } from "./dateOfBirth.oa.mjs";
import { gender } from "./gender.oa.mjs";
import { gosaDefaultLanguage } from "./gosaDefaultLanguage.oa.mjs";
import { gosaDefaultPrinter } from "./gosaDefaultPrinter.oa.mjs";
import { gosaHostACL } from "./gosaHostACL.oa.mjs";
import { gosaLoginRestriction } from "./gosaLoginRestriction.oa.mjs";
import { gotoLastSystem } from "./gotoLastSystem.oa.mjs";
import { gotoLastSystemLogin } from "./gotoLastSystemLogin.oa.mjs";

/**
 * @summary gosaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { sambaLMPassword
 *                               | sambaNTPassword
 *                               | sambaPwdLastSet
 *                               | gosaDefaultPrinter
 *                               | gosaDefaultLanguage
 *                               | academicTitle
 *                               | personalTitle
 *                               | gosaHostACL
 *                               | dateOfBirth
 *                               | sambaBadPasswordCount
 *                               | sambaBadPasswordTime
 *                               | gender
 *                               | gotoLastSystemLogin
 *                               | gotoLastSystem
 *                               | gosaLoginRestriction }
 *   LDAP-NAME                 {"gosaAccount"}
 *   LDAP-DESC                 "Class for GOsa Accounts (v2.7)"
 *   ID                        id-oc-gosaAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sambaLMPassword, sambaNTPassword, sambaPwdLastSet, gosaDefaultPrinter, gosaDefaultLanguage, academicTitle, personalTitle, gosaHostACL, dateOfBirth, sambaBadPasswordCount, sambaBadPasswordTime, gender, gotoLastSystemLogin, gotoLastSystem, gosaLoginRestriction] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaAccount"],
    "&ldapDesc": "Class for GOsa Accounts (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
