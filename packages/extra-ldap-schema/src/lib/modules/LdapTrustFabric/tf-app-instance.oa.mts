/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tf_app_instance } from "../LdapTrustFabric/id-oc-tf-app-instance.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { tf_app_instance_id } from "../LdapTrustFabric/tf-app-instance-id.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { tf_version } from "../LdapTrustFabric/tf-version.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { tf_software_repository } from "../LdapTrustFabric/tf-software-repository.oa.mjs";
import { tf_software_image } from "../LdapTrustFabric/tf-software-image.oa.mjs";
import { tf_issue_repository } from "../LdapTrustFabric/tf-issue-repository.oa.mjs";
import { tf_creator } from "../LdapTrustFabric/tf-creator.oa.mjs";
// export { id_oc_tf_app_instance } from "../LdapTrustFabric/id-oc-tf-app-instance.va.mjs";


/**
 * @summary tf_app_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-app-instance OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | tf-app-instance-id
 *                               | localityName
 *                               | tf-version }
 *   MAY CONTAIN               { displayName
 *                               | seeAlso
 *                               | description
 *                               | tf-software-repository
 *                               | tf-software-image
 *                               | tf-issue-repository
 *                               | tf-creator }
 *   LDAP-NAME                 {"tf-app-instance"}
 *   ID                        id-oc-tf-app-instance }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_app_instance: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, tf_app_instance_id, localityName, tf_version, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, seeAlso, description, tf_software_repository, tf_software_image, tf_issue_repository, tf_creator, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tf-app-instance" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tf_app_instance /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
