/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxRp } from "../LdapOx/id-oc-oxRp.va.mjs";

import { oxId } from "../LdapOx/oxId.oa.mjs";
import { dat } from "../LdapOx/dat.oa.mjs";
/**
 * @summary oxRp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxRp OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | dat }
 *   LDAP-NAME                 {"oxRp"}
 *   ID                        id-oc-oxRp }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxRp: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, dat, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxRp" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxRp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
