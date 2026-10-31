/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxExpiredObject } from "../LdapOx/id-oc-oxExpiredObject.va.mjs";
import { dat } from "./dat.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { iat } from "./iat.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxType } from "./oxType.oa.mjs";

/**
 * @summary oxExpiredObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxExpiredObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | dat
 *                               | iat
 *                               | exp
 *                               | oxType }
 *   LDAP-NAME                 {"oxExpiredObject"}
 *   ID                        id-oc-oxExpiredObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxExpiredObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, dat, iat, exp, oxType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxExpiredObject"],
    "&id": id_oc_oxExpiredObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
