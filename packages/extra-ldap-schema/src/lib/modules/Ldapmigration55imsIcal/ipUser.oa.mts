/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipUser } from "../Ldapmigration55imsIcal/id-oc-ipUser.va.mjs";
import { inetCOS } from "./inetCOS.oa.mjs";
import { maxPabEntries } from "./maxPabEntries.oa.mjs";
import { memberOfManagedGroup } from "./memberOfManagedGroup.oa.mjs";
import { pabURI } from "./pabURI.oa.mjs";
import { psIncludeInGAB } from "./psIncludeInGAB.oa.mjs";
import { psRoot } from "./psRoot.oa.mjs";

/**
 * @summary ipUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { pabURI
 *                               | memberOfManagedGroup
 *                               | maxPabEntries
 *                               | inetCOS
 *                               | psRoot
 *                               | psIncludeInGAB }
 *   LDAP-NAME                 {"ipUser"}
 *   LDAP-DESC                 "auxiliary class for extending a inetuser entry. Used by calendar and messaging servers"
 *   ID                        id-oc-ipUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [pabURI, memberOfManagedGroup, maxPabEntries, inetCOS, psRoot, psIncludeInGAB] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipUser"],
    "&ldapDesc": "auxiliary class for extending a inetuser entry. Used by calendar and messaging servers" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
