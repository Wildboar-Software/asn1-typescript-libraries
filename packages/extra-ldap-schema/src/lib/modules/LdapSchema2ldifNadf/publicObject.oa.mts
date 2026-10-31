/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_publicObject } from "../LdapSchema2ldifNadf/id-oc-publicObject.va.mjs";
import { namingLink } from "../LdapSchema2ldifNadf/namingLink.oa.mjs";

/**
 * @summary publicObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { namingLink }
 *   LDAP-NAME                 {"publicObject"}
 *   ID                        id-oc-publicObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const publicObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [namingLink] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["publicObject"],
    "&id": id_oc_publicObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
