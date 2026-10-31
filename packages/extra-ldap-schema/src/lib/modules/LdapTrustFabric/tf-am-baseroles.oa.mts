/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tf_am_baseroles } from "../LdapTrustFabric/id-oc-tf-am-baseroles.va.mjs";
import { tf_approvers } from "./tf-approvers.oa.mjs";
import { tf_maintainers } from "./tf-maintainers.oa.mjs";
import { tf_owners } from "./tf-owners.oa.mjs";

/**
 * @summary tf_am_baseroles
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-am-baseroles OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { tf-maintainers
 *                               | tf-approvers
 *                               | tf-owners }
 *   LDAP-NAME                 {"tf-am-baseroles"}
 *   ID                        id-oc-tf-am-baseroles }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_am_baseroles: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [tf_maintainers, tf_approvers, tf_owners] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tf-am-baseroles"],
    "&id": id_oc_tf_am_baseroles /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
