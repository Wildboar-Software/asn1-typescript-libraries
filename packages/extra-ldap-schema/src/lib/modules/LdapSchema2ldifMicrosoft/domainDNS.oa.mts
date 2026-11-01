/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { domain } from "../LdapSchema2ldifMicrosoft/domain.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { id_oc_domainDNS } from "../LdapSchema2ldifMicrosoft/id-oc-domainDNS.va.mjs";

/**
 * @summary domainDNS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainDNS OBJECT-CLASS ::= {
 *   SUBCLASS OF               { domain }
 *   MAY CONTAIN               { managedBy }
 *   LDAP-NAME                 {"domainDNS"}
 *   ID                        id-oc-domainDNS }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainDNS: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ domain, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ managedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "domainDNS" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_domainDNS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
