/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmFileCopy } from "../LdapGfarm/id-oc-gFarmFileCopy.va.mjs";
import { hostname } from "./hostname.oa.mjs";
import { inumber } from "./inumber.oa.mjs";

/**
 * @summary gFarmFileCopy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmFileCopy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | hostname }
 *   LDAP-NAME                 {"GFarmFileCopy"}
 *   ID                        id-oc-gFarmFileCopy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmFileCopy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [inumber, hostname] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmFileCopy"],
    "&id": id_oc_gFarmFileCopy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
