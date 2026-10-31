/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tf_am_devops } from "../LdapTrustFabric/id-oc-tf-am-devops.va.mjs";
import { tf_approvers } from "./tf-approvers.oa.mjs";
import { tf_developers } from "./tf-developers.oa.mjs";
import { tf_maintainers } from "./tf-maintainers.oa.mjs";
import { tf_owners } from "./tf-owners.oa.mjs";
import { tf_rel_mangers } from "./tf-rel-mangers.oa.mjs";

/**
 * @summary tf_am_devops
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-am-devops OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { tf-developers
 *                               | tf-maintainers
 *                               | tf-rel-mangers
 *                               | tf-approvers
 *                               | tf-owners }
 *   LDAP-NAME                 {"tf-am-devops"}
 *   ID                        id-oc-tf-am-devops }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_am_devops: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [tf_developers, tf_maintainers, tf_rel_mangers, tf_approvers, tf_owners] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tf-am-devops"],
    "&id": id_oc_tf_am_devops /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
