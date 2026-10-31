/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxSectorIdentifier_2 } from "../LdapOx/id-oc-oxSectorIdentifier-2.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { oxAuthClientId } from "./oxAuthClientId.oa.mjs";
import { oxAuthRedirectURI } from "./oxAuthRedirectURI.oa.mjs";
import { oxId } from "./oxId.oa.mjs";

/**
 * @summary oxSectorIdentifier_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxSectorIdentifier-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | description
 *                               | oxAuthRedirectURI
 *                               | oxAuthClientId }
 *   LDAP-NAME                 {"oxSectorIdentifier"}
 *   ID                        id-oc-oxSectorIdentifier-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxSectorIdentifier_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, description, oxAuthRedirectURI, oxAuthClientId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxSectorIdentifier"],
    "&id": id_oc_oxSectorIdentifier_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
