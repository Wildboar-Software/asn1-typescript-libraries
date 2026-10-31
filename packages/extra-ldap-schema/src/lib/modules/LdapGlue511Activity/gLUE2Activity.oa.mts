/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2ActivityID } from "../LdapGlue511Activity/gLUE2ActivityID.oa.mjs";
import { id_oc_gLUE2Activity } from "../LdapGlue511Activity/id-oc-gLUE2Activity.va.mjs";
import { gLUE2ActivityActivityForeignKey } from "./gLUE2ActivityActivityForeignKey.oa.mjs";
import { gLUE2ActivityEndpointForeignKey } from "./gLUE2ActivityEndpointForeignKey.oa.mjs";
import { gLUE2ActivityResourceForeignKey } from "./gLUE2ActivityResourceForeignKey.oa.mjs";
import { gLUE2ActivityShareForeignKey } from "./gLUE2ActivityShareForeignKey.oa.mjs";
import { gLUE2ActivityUserDomainForeignKey } from "./gLUE2ActivityUserDomainForeignKey.oa.mjs";

/**
 * @summary gLUE2Activity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Activity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ActivityID }
 *   MAY CONTAIN               { gLUE2ActivityUserDomainForeignKey
 *                               | gLUE2ActivityEndpointForeignKey
 *                               | gLUE2ActivityShareForeignKey
 *                               | gLUE2ActivityResourceForeignKey
 *                               | gLUE2ActivityActivityForeignKey }
 *   LDAP-NAME                 {"GLUE2Activity"}
 *   LDAP-DESC                 "An activity is a unit of work managed by a Service and submitted via an Endpoint"
 *   ID                        id-oc-gLUE2Activity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Activity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ActivityID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ActivityUserDomainForeignKey, gLUE2ActivityEndpointForeignKey, gLUE2ActivityShareForeignKey, gLUE2ActivityResourceForeignKey, gLUE2ActivityActivityForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Activity"],
    "&ldapDesc": "An activity is a unit of work managed by a Service and submitted via an Endpoint" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Activity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
