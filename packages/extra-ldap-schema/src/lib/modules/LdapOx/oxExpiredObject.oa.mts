/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxExpiredObject } from "../LdapOx/id-oc-oxExpiredObject.va.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { dat } from "../LdapOx/dat.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { oxType } from "../LdapOx/oxType.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, dat, iat, exp, oxType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxExpiredObject" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxExpiredObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

