/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthGrant } from "../LdapOx/id-oc-oxAuthGrant.va.mjs";
import { grtId } from "./grtId.oa.mjs";
import { iat } from "./iat.oa.mjs";

/**
 * @summary oxAuthGrant
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthGrant OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { grtId
 *                               | iat }
 *   LDAP-NAME                 {"oxAuthGrant"}
 *   ID                        id-oc-oxAuthGrant }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthGrant: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [grtId, iat] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthGrant"],
    "&id": id_oc_oxAuthGrant /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
