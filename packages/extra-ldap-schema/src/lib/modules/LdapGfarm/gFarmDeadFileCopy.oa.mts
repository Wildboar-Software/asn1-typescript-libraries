/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmDeadFileCopy } from "../LdapGfarm/id-oc-gFarmDeadFileCopy.va.mjs";
import { hostname } from "./hostname.oa.mjs";
import { igen } from "./igen.oa.mjs";
import { inumber } from "./inumber.oa.mjs";

/**
 * @summary gFarmDeadFileCopy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmDeadFileCopy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | igen
 *                               | hostname }
 *   LDAP-NAME                 {"GFarmDeadFileCopy"}
 *   ID                        id-oc-gFarmDeadFileCopy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmDeadFileCopy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [inumber, igen, hostname] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmDeadFileCopy"],
    "&id": id_oc_gFarmDeadFileCopy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
