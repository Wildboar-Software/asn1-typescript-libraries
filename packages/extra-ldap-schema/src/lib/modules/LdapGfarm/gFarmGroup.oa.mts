/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { groupname } from "../LdapGfarm/groupname.oa.mjs";
import { groupusers } from "../LdapGfarm/groupusers.oa.mjs";
import { id_oc_gFarmGroup } from "../LdapGfarm/id-oc-gFarmGroup.va.mjs";

/**
 * @summary gFarmGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { groupname }
 *   MAY CONTAIN               { groupusers }
 *   LDAP-NAME                 {"GFarmGroup"}
 *   ID                        id-oc-gFarmGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [groupname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [groupusers] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmGroup"],
    "&id": id_oc_gFarmGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
