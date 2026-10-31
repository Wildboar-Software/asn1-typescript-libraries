/* eslint-disable */
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_userIdentity } from "../LdapEregansu/id-oc-userIdentity.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { photo } from "../LdapSchema2ldifCosine/photo.oa.mjs";
import { generationQualifier } from "../SelectedAttributeTypes/generationQualifier.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userIRI } from "./userIRI.oa.mjs";
import { userPermission } from "./userPermission.oa.mjs";

/**
 * @summary userIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userIdentity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | userIRI }
 *   MAY CONTAIN               { userPermission
 *                               | givenName
 *                               | surname
 *                               | initials
 *                               | generationQualifier
 *                               | userPassword
 *                               | userCertificate
 *                               | cACertificate
 *                               | mail
 *                               | photo }
 *   LDAP-NAME                 {"userIdentity"}
 *   LDAP-DESC                 "Eregansu user identity"
 *   ID                        id-oc-userIdentity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const userIdentity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid, userIRI] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [userPermission, givenName, surname, initials, generationQualifier, userPassword, userCertificate, cACertificate, mail, photo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userIdentity"],
    "&ldapDesc": "Eregansu user identity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_userIdentity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
