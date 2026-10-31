/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsManagedPerson } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedPerson.va.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { nsDADomain } from "./nsDADomain.oa.mjs";
import { nsSearchFilter } from "./nsSearchFilter.oa.mjs";
import { nsdaCapability } from "./nsdaCapability.oa.mjs";
import { nsdaModifiableBy } from "./nsdaModifiableBy.oa.mjs";

/**
 * @summary nsManagedPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { memberOf
 *                               | nsDADomain
 *                               | nsdaCapability
 *                               | nsSearchFilter
 *                               | owner
 *                               | nsdaModifiableBy }
 *   LDAP-NAME                 {"nsManagedPerson"}
 *   LDAP-DESC                 "Delegated Admin marker for managed person"
 *   ID                        id-oc-nsManagedPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [memberOf, nsDADomain, nsdaCapability, nsSearchFilter, owner, nsdaModifiableBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsManagedPerson"],
    "&ldapDesc": "Delegated Admin marker for managed person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
