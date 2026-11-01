/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_secret } from "../LdapSchema2ldifMicrosoft/id-oc-secret.va.mjs";
import { currentValue } from "../MSUser/currentValue.oa.mjs";
import { lastSetTime } from "../MSUser/lastSetTime.oa.mjs";
import { priorSetTime } from "../MSUser/priorSetTime.oa.mjs";
import { priorValue } from "../MSUser/priorValue.oa.mjs";


/**
 * @summary secret
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * secret OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { currentValue
 *                               | lastSetTime
 *                               | priorSetTime
 *                               | priorValue }
 *   LDAP-NAME                 {"secret"}
 *   ID                        id-oc-secret }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const secret: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ currentValue, lastSetTime, priorSetTime, priorValue, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "secret" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_secret /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

