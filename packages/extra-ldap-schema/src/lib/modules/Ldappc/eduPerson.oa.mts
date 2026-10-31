/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_eduPerson } from "../Ldappc/id-oc-eduPerson.va.mjs";
import { eduPersonAffiliation } from "./eduPersonAffiliation.oa.mjs";
import { eduPersonEntitlement } from "./eduPersonEntitlement.oa.mjs";
import { eduPersonNickname } from "./eduPersonNickname.oa.mjs";
import { eduPersonOrgDN } from "./eduPersonOrgDN.oa.mjs";
import { eduPersonOrgUnitDN } from "./eduPersonOrgUnitDN.oa.mjs";
import { eduPersonPrimaryAffiliation } from "./eduPersonPrimaryAffiliation.oa.mjs";
import { eduPersonPrimaryOrgUnitDN } from "./eduPersonPrimaryOrgUnitDN.oa.mjs";
import { eduPersonPrincipalName } from "./eduPersonPrincipalName.oa.mjs";
import { eduPersonScopedAffiliation } from "./eduPersonScopedAffiliation.oa.mjs";

/**
 * @summary eduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { eduPersonAffiliation
 *                               | eduPersonNickname
 *                               | eduPersonOrgDN
 *                               | eduPersonOrgUnitDN
 *                               | eduPersonPrimaryAffiliation
 *                               | eduPersonPrincipalName
 *                               | eduPersonEntitlement
 *                               | eduPersonPrimaryOrgUnitDN
 *                               | eduPersonScopedAffiliation }
 *   LDAP-NAME                 {"eduPerson"}
 *   ID                        id-oc-eduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const eduPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [eduPersonAffiliation, eduPersonNickname, eduPersonOrgDN, eduPersonOrgUnitDN, eduPersonPrimaryAffiliation, eduPersonPrincipalName, eduPersonEntitlement, eduPersonPrimaryOrgUnitDN, eduPersonScopedAffiliation] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["eduPerson"],
    "&id": id_oc_eduPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
