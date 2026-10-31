/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sambaTrustedDomainPassword } from "../LdapGosaCoreSamba3/id-oc-sambaTrustedDomainPassword.va.mjs";
import { sambaPreviousClearTextPassword } from "../LdapGosaCoreSamba3/sambaPreviousClearTextPassword.oa.mjs";
import { sambaDomainName } from "../SambaV3Schema/sambaDomainName.oa.mjs";
import { sambaPwdLastSet } from "../SambaV3Schema/sambaPwdLastSet.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { sambaClearTextPassword } from "./sambaClearTextPassword.oa.mjs";

/**
 * @summary sambaTrustedDomainPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustedDomainPassword OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { sambaDomainName
 *                               | sambaSID
 *                               | sambaClearTextPassword
 *                               | sambaPwdLastSet }
 *   MAY CONTAIN               { sambaPreviousClearTextPassword }
 *   LDAP-NAME                 {"sambaTrustedDomainPassword"}
 *   LDAP-DESC                 "Samba Trusted Domain Password"
 *   ID                        id-oc-sambaTrustedDomainPassword }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaTrustedDomainPassword: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [sambaDomainName, sambaSID, sambaClearTextPassword, sambaPwdLastSet] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sambaPreviousClearTextPassword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaTrustedDomainPassword"],
    "&ldapDesc": "Samba Trusted Domain Password" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sambaTrustedDomainPassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
