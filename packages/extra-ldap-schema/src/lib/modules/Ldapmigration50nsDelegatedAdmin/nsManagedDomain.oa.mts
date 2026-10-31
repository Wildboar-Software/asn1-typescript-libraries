/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedDomain } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedDomain.va.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsDefaultMaxDeptSize } from "./nsDefaultMaxDeptSize.oa.mjs";
import { nsMaxDepts } from "./nsMaxDepts.oa.mjs";
import { nsMaxDomains } from "./nsMaxDomains.oa.mjs";
import { nsMaxMailLists } from "./nsMaxMailLists.oa.mjs";
import { nsMaxUsers } from "./nsMaxUsers.oa.mjs";
import { nsNumDepts } from "./nsNumDepts.oa.mjs";
import { nsNumDomains } from "./nsNumDomains.oa.mjs";
import { nsNumMailLists } from "./nsNumMailLists.oa.mjs";
import { nsNumUsers } from "./nsNumUsers.oa.mjs";
import { nsdaModifiableBy } from "./nsdaModifiableBy.oa.mjs";

/**
 * @summary nsManagedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumUsers
 *                               | nsMaxUsers
 *                               | nsNumDepts
 *                               | nsMaxDepts
 *                               | nsNumMailLists
 *                               | nsMaxMailLists
 *                               | nsNumDomains
 *                               | nsMaxDomains
 *                               | nsDefaultMaxDeptSize
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedDomain"}
 *   LDAP-DESC                 "Delegated Admin marker for managed domain"
 *   ID                        id-oc-nsManagedDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsNumUsers, nsMaxUsers, nsNumDepts, nsMaxDepts, nsNumMailLists, nsMaxMailLists, nsNumDomains, nsMaxDomains, nsDefaultMaxDeptSize, owner, nsdaModifiableBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsManagedDomain"],
    "&ldapDesc": "Delegated Admin marker for managed domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
