/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { nsdaModifiableBy } from "../Ldapmigration50nsDelegatedAdmin/nsdaModifiableBy.oa.mjs";
import { id_oc_inetManagedGroup } from "../Ldapmigration55imsIcal/id-oc-inetManagedGroup.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { mailSieveRuleSource } from "./mailSieveRuleSource.oa.mjs";
import { mnggrpAdditionPolicy } from "./mnggrpAdditionPolicy.oa.mjs";
import { mnggrpBillableUser } from "./mnggrpBillableUser.oa.mjs";
import { mnggrpCurrentUsers } from "./mnggrpCurrentUsers.oa.mjs";
import { mnggrpDeletionPolicy } from "./mnggrpDeletionPolicy.oa.mjs";
import { mnggrpMailQuota } from "./mnggrpMailQuota.oa.mjs";
import { mnggrpMaxUsers } from "./mnggrpMaxUsers.oa.mjs";
import { mnggrpStatus } from "./mnggrpStatus.oa.mjs";
import { mnggrpUserClassOfServices } from "./mnggrpUserClassOfServices.oa.mjs";

/**
 * @summary inetManagedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetManagedGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { mnggrpDeletionPolicy
 *                               | mnggrpAdditionPolicy
 *                               | mnggrpBillableUser
 *                               | description
 *                               | mnggrpStatus
 *                               | mnggrpMaxUsers
 *                               | mnggrpCurrentUsers
 *                               | mnggrpMailQuota
 *                               | owner
 *                               | nsdaModifiableBy
 *                               | mnggrpUserClassOfServices
 *                               | mailSieveRuleSource }
 *   LDAP-NAME                 {"inetManagedGroup"}
 *   LDAP-DESC                 "auxiliary class for a managed group used by family accounts"
 *   ID                        id-oc-inetManagedGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetManagedGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mnggrpDeletionPolicy, mnggrpAdditionPolicy, mnggrpBillableUser, description, mnggrpStatus, mnggrpMaxUsers, mnggrpCurrentUsers, mnggrpMailQuota, owner, nsdaModifiableBy, mnggrpUserClassOfServices, mailSieveRuleSource] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["inetManagedGroup"],
    "&ldapDesc": "auxiliary class for a managed group used by family accounts" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetManagedGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
