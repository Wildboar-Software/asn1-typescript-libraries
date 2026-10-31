/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_pIPUserInfo } from "../Ldapmigration50nsCompass/id-oc-pIPUserInfo.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { pipcompassservers } from "./pipcompassservers.oa.mjs";
import { pipuniqueid } from "./pipuniqueid.oa.mjs";

/**
 * @summary pIPUserInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pIPUserInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { commonName
 *                               | mail
 *                               | userPassword
 *                               | description
 *                               | pipcompassservers
 *                               | pipuniqueid }
 *   LDAP-NAME                 {"PIPUserInfo"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-pIPUserInfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pIPUserInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, mail, userPassword, description, pipcompassservers, pipuniqueid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["PIPUserInfo"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pIPUserInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
