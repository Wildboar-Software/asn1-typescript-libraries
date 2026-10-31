/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Share } from "../LdapGlue508Share/id-oc-gLUE2Share.va.mjs";
import { gLUE2ShareDescription } from "./gLUE2ShareDescription.oa.mjs";
import { gLUE2ShareEndpointForeignKey } from "./gLUE2ShareEndpointForeignKey.oa.mjs";
import { gLUE2ShareID } from "./gLUE2ShareID.oa.mjs";
import { gLUE2ShareResourceForeignKey } from "./gLUE2ShareResourceForeignKey.oa.mjs";
import { gLUE2ShareServiceForeignKey } from "./gLUE2ShareServiceForeignKey.oa.mjs";

/**
 * @summary gLUE2Share
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Share OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ShareID
 *                               | gLUE2ShareServiceForeignKey }
 *   MAY CONTAIN               { gLUE2ShareDescription
 *                               | gLUE2ShareEndpointForeignKey
 *                               | gLUE2ShareResourceForeignKey }
 *   LDAP-NAME                 {"GLUE2Share"}
 *   LDAP-DESC                 "A share"
 *   ID                        id-oc-gLUE2Share }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Share: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ShareID, gLUE2ShareServiceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ShareDescription, gLUE2ShareEndpointForeignKey, gLUE2ShareResourceForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2Share"],
    "&ldapDesc": "A share" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Share /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
