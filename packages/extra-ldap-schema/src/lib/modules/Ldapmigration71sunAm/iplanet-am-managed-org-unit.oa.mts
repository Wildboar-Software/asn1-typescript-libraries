/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_org_unit } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-org-unit.va.mjs";
import { sunPreferredDomain } from "../Ldapmigration70sunSchema2/sunPreferredDomain.oa.mjs";
import { associatedDomain } from "../MIXERAddressMapping/associatedDomain.oa.mjs";
import { sunPreferredOrganization } from "../Ldapmigration70sunSchema2/sunPreferredOrganization.oa.mjs";
import { sunAdditionalTemplates } from "../Ldapmigration70sunSchema2/sunAdditionalTemplates.oa.mjs";
import { sunOverrideTemplates } from "../Ldapmigration70sunSchema2/sunOverrideTemplates.oa.mjs";
import { sunRegisteredServiceName } from "../Ldapmigration70sunSchema2/sunRegisteredServiceName.oa.mjs";
import { sunIdentityServerSupportedTypes } from "../Ldapmigration71sunAm/sunIdentityServerSupportedTypes.oa.mjs";


/**
 * @summary iplanet_am_managed_org_unit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-org-unit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunPreferredDomain
 *                               | associatedDomain
 *                               | sunPreferredOrganization
 *                               | sunAdditionalTemplates
 *                               | sunOverrideTemplates
 *                               | sunRegisteredServiceName
 *                               | sunIdentityServerSupportedTypes }
 *   LDAP-NAME                 {"iplanet-am-managed-org-unit"}
 *   LDAP-DESC                 "Managed OrganizationalUnit OC"
 *   ID                        id-oc-iplanet-am-managed-org-unit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_org_unit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunPreferredDomain, associatedDomain, sunPreferredOrganization, sunAdditionalTemplates, sunOverrideTemplates, sunRegisteredServiceName, sunIdentityServerSupportedTypes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-org-unit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed OrganizationalUnit OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_org_unit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

