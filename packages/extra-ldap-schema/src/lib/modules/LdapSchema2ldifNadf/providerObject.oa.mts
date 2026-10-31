/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_providerObject } from "../LdapSchema2ldifNadf/id-oc-providerObject.va.mjs";
import { reciprocalNamingLink } from "../LdapSchema2ldifNadf/reciprocalNamingLink.oa.mjs";

/**
 * @summary providerObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * providerObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { reciprocalNamingLink }
 *   LDAP-NAME                 {"providerObject"}
 *   ID                        id-oc-providerObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const providerObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [reciprocalNamingLink] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["providerObject"],
    "&id": id_oc_providerObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
