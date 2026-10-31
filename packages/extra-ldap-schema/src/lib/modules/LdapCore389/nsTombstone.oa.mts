/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsTombstone } from "../LdapCore389/id-oc-nsTombstone.va.mjs";
import { nsParentUniqueId } from "./nsParentUniqueId.oa.mjs";
import { nscpEntryDN } from "./nscpEntryDN.oa.mjs";
import { nstombstonecsn } from "./nstombstonecsn.oa.mjs";

/**
 * @summary nsTombstone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsTombstone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { nstombstonecsn
 *                               | nsParentUniqueId
 *                               | nscpEntryDN }
 *   LDAP-NAME                 {"nsTombstone"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsTombstone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsTombstone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nstombstonecsn, nsParentUniqueId, nscpEntryDN] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsTombstone"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsTombstone /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
