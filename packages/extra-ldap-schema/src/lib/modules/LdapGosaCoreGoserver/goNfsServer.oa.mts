/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goNfsServer } from "../LdapGosaCoreGoserver/id-oc-goNfsServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goExportEntry } from "./goExportEntry.oa.mjs";
import { goNfsServerStatus } from "./goNfsServerStatus.oa.mjs";

/**
 * @summary goNfsServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goNfsServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goExportEntry
 *                               | description
 *                               | goNfsServerStatus }
 *   LDAP-NAME                 {"goNfsServer"}
 *   LDAP-DESC                 "NFS server description (v2.7)"
 *   ID                        id-oc-goNfsServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goNfsServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goExportEntry, description, goNfsServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goNfsServer"],
    "&ldapDesc": "NFS server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goNfsServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
