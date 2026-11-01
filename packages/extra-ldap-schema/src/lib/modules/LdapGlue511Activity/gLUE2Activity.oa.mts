/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2ActivityID } from "../LdapGlue511Activity/gLUE2ActivityID.oa.mjs";
import { id_oc_gLUE2Activity } from "../LdapGlue511Activity/id-oc-gLUE2Activity.va.mjs";
import { gLUE2ActivityUserDomainForeignKey } from "../LdapGlue511Activity/gLUE2ActivityUserDomainForeignKey.oa.mjs";
import { gLUE2ActivityEndpointForeignKey } from "../LdapGlue511Activity/gLUE2ActivityEndpointForeignKey.oa.mjs";
import { gLUE2ActivityShareForeignKey } from "../LdapGlue511Activity/gLUE2ActivityShareForeignKey.oa.mjs";
import { gLUE2ActivityResourceForeignKey } from "../LdapGlue511Activity/gLUE2ActivityResourceForeignKey.oa.mjs";
import { gLUE2ActivityActivityForeignKey } from "../LdapGlue511Activity/gLUE2ActivityActivityForeignKey.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ActivityID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2ActivityUserDomainForeignKey, gLUE2ActivityEndpointForeignKey, gLUE2ActivityShareForeignKey, gLUE2ActivityResourceForeignKey, gLUE2ActivityActivityForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Activity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An activity is a unit of work managed by a Service and submitted via an Endpoint" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Activity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

