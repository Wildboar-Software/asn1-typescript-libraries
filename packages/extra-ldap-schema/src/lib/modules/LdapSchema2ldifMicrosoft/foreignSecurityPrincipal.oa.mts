/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_foreignSecurityPrincipal } from "../LdapSchema2ldifMicrosoft/id-oc-foreignSecurityPrincipal.va.mjs";
import { foreignIdentifier } from "../MSUser/foreignIdentifier.oa.mjs";
import { objectSid } from "../MSUser/objectSid.oa.mjs";

/**
 * @summary foreignSecurityPrincipal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * foreignSecurityPrincipal OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectSid }
 *   MAY CONTAIN               { foreignIdentifier }
 *   LDAP-NAME                 {"foreignSecurityPrincipal"}
 *   ID                        id-oc-foreignSecurityPrincipal }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const foreignSecurityPrincipal: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectSid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [foreignIdentifier] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["foreignSecurityPrincipal"],
    "&id": id_oc_foreignSecurityPrincipal /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
