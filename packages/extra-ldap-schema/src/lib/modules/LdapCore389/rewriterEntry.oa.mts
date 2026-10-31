/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_rewriterEntry } from "../LdapCore389/id-oc-rewriterEntry.va.mjs";
import { nsslapd_libPath } from "../LdapCore389/nsslapd-libPath.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsslapd_filterrewriter } from "./nsslapd-filterrewriter.oa.mjs";
import { nsslapd_returnedAttrRewriter } from "./nsslapd-returnedAttrRewriter.oa.mjs";

/**
 * @summary rewriterEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rewriterEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { nsslapd-libPath }
 *   MAY CONTAIN               { commonName
 *                               | nsslapd-filterrewriter
 *                               | nsslapd-returnedAttrRewriter }
 *   LDAP-NAME                 {"rewriterEntry"}
 *   ID                        id-oc-rewriterEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rewriterEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [nsslapd_libPath] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, nsslapd_filterrewriter, nsslapd_returnedAttrRewriter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rewriterEntry"],
    "&id": id_oc_rewriterEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
