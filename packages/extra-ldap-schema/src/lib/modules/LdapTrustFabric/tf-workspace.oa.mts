/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tf_workspace } from "../LdapTrustFabric/id-oc-tf-workspace.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { tf_creator } from "./tf-creator.oa.mjs";
import { tf_issue_repository } from "./tf-issue-repository.oa.mjs";
import { tf_source_repository } from "./tf-source-repository.oa.mjs";
import { tf_workspace_id } from "./tf-workspace-id.oa.mjs";

/**
 * @summary tf_workspace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-workspace OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationName
 *                               | tf-workspace-id }
 *   MAY CONTAIN               { displayName
 *                               | seeAlso
 *                               | description
 *                               | tf-source-repository
 *                               | tf-issue-repository
 *                               | tf-creator }
 *   LDAP-NAME                 {"tf-workspace"}
 *   ID                        id-oc-tf-workspace }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_workspace: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationName, tf_workspace_id] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [displayName, seeAlso, description, tf_source_repository, tf_issue_repository, tf_creator] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tf-workspace"],
    "&id": id_oc_tf_workspace /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
