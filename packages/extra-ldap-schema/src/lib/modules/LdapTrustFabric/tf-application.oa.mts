/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tf_application } from "../LdapTrustFabric/id-oc-tf-application.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { tf_application_id } from "../LdapTrustFabric/tf-application-id.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { tf_source_repository } from "../LdapTrustFabric/tf-source-repository.oa.mjs";
import { tf_software_repository } from "../LdapTrustFabric/tf-software-repository.oa.mjs";
import { tf_issue_repository } from "../LdapTrustFabric/tf-issue-repository.oa.mjs";
import { tf_creator } from "../LdapTrustFabric/tf-creator.oa.mjs";
// export { id_oc_tf_application } from "../LdapTrustFabric/id-oc-tf-application.va.mjs";


/**
 * @summary tf_application
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-application OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName
 *                               | tf-application-id }
 *   MAY CONTAIN               { displayName
 *                               | seeAlso
 *                               | description
 *                               | tf-source-repository
 *                               | tf-software-repository
 *                               | tf-issue-repository
 *                               | tf-creator }
 *   LDAP-NAME                 {"tf-application"}
 *   ID                        id-oc-tf-application }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_application: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, tf_application_id, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, seeAlso, description, tf_source_repository, tf_software_repository, tf_issue_repository, tf_creator, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tf-application" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tf_application /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
