/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxClientAuthorization } from "../LdapOx/id-oc-oxClientAuthorization.va.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxAuthClientId } from "./oxAuthClientId.oa.mjs";
import { oxAuthScope } from "./oxAuthScope.oa.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { oxId } from "./oxId.oa.mjs";

/**
 * @summary oxClientAuthorization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxClientAuthorization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | oxAuthClientId
 *                               | oxAuthUserId
 *                               | exp
 *                               | del
 *                               | oxAuthScope }
 *   LDAP-NAME                 {"oxClientAuthorization"}
 *   ID                        id-oc-oxClientAuthorization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxClientAuthorization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, oxAuthClientId, oxAuthUserId, exp, del, oxAuthScope] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxClientAuthorization"],
    "&id": id_oc_oxClientAuthorization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
