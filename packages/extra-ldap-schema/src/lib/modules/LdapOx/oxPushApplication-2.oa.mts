/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxPushApplication_2 } from "../LdapOx/id-oc-oxPushApplication-2.va.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxName } from "./oxName.oa.mjs";
import { oxPushApplicationConf } from "./oxPushApplicationConf.oa.mjs";

/**
 * @summary oxPushApplication_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxPushApplication-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { displayName
 *                               | oxId
 *                               | oxName
 *                               | oxPushApplicationConf }
 *   LDAP-NAME                 {"oxPushApplication"}
 *   ID                        id-oc-oxPushApplication-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxPushApplication_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [displayName, oxId, oxName, oxPushApplicationConf] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxPushApplication"],
    "&id": id_oc_oxPushApplication_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
