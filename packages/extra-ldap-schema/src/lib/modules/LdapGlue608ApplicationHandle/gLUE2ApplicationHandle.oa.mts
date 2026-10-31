/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ApplicationHandle } from "../LdapGlue608ApplicationHandle/id-oc-gLUE2ApplicationHandle.va.mjs";
import { gLUE2ApplicationHandleApplicationEnvironmentForeignKey } from "./gLUE2ApplicationHandleApplicationEnvironmentForeignKey.oa.mjs";
import { gLUE2ApplicationHandleID } from "./gLUE2ApplicationHandleID.oa.mjs";
import { gLUE2ApplicationHandleType } from "./gLUE2ApplicationHandleType.oa.mjs";
import { gLUE2ApplicationHandleValue } from "./gLUE2ApplicationHandleValue.oa.mjs";

/**
 * @summary gLUE2ApplicationHandle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ApplicationHandle OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ApplicationHandleID
 *                               | gLUE2ApplicationHandleType
 *                               | gLUE2ApplicationHandleValue
 *                               | gLUE2ApplicationHandleApplicationEnvironmentForeignKey }
 *   LDAP-NAME                 {"GLUE2ApplicationHandle"}
 *   LDAP-DESC                 "Technique for bootstrapping and/or accessing the application"
 *   ID                        id-oc-gLUE2ApplicationHandle }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ApplicationHandle: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ApplicationHandleID, gLUE2ApplicationHandleType, gLUE2ApplicationHandleValue, gLUE2ApplicationHandleApplicationEnvironmentForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ApplicationHandle"],
    "&ldapDesc": "Technique for bootstrapping and/or accessing the application" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ApplicationHandle /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
