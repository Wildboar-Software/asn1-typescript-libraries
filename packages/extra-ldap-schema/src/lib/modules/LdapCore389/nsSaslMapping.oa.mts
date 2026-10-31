/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsSaslMapping } from "../LdapCore389/id-oc-nsSaslMapping.va.mjs";
import { nsSaslMapPriority } from "../LdapCore389/nsSaslMapPriority.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsSaslMapBaseDNTemplate } from "./nsSaslMapBaseDNTemplate.oa.mjs";
import { nsSaslMapFilterTemplate } from "./nsSaslMapFilterTemplate.oa.mjs";
import { nsSaslMapRegexString } from "./nsSaslMapRegexString.oa.mjs";

/**
 * @summary nsSaslMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsSaslMapping OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsSaslMapRegexString
 *                               | nsSaslMapBaseDNTemplate
 *                               | nsSaslMapFilterTemplate }
 *   MAY CONTAIN               { nsSaslMapPriority }
 *   LDAP-NAME                 {"nsSaslMapping"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsSaslMapping }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsSaslMapping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, nsSaslMapRegexString, nsSaslMapBaseDNTemplate, nsSaslMapFilterTemplate] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsSaslMapPriority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsSaslMapping"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSaslMapping /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
