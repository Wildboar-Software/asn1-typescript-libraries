/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pairwiseIdentifier } from "../LdapOx/id-oc-pairwiseIdentifier.va.mjs";
import { oxAuthClientId } from "./oxAuthClientId.oa.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxSectorIdentifier } from "./oxSectorIdentifier.oa.mjs";

/**
 * @summary pairwiseIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pairwiseIdentifier OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | oxSectorIdentifier
 *                               | oxAuthClientId
 *                               | oxAuthUserId }
 *   LDAP-NAME                 {"pairwiseIdentifier"}
 *   ID                        id-oc-pairwiseIdentifier }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pairwiseIdentifier: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, oxSectorIdentifier, oxAuthClientId, oxAuthUserId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pairwiseIdentifier"],
    "&id": id_oc_pairwiseIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
