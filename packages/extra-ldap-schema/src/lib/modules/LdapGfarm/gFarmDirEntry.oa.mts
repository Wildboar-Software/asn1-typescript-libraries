/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmDirEntry } from "../LdapGfarm/id-oc-gFarmDirEntry.va.mjs";
import { entryINumber } from "./entryINumber.oa.mjs";
import { entryName } from "./entryName.oa.mjs";
import { inumber } from "./inumber.oa.mjs";

/**
 * @summary gFarmDirEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmDirEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | entryName
 *                               | entryINumber }
 *   LDAP-NAME                 {"GFarmDirEntry"}
 *   ID                        id-oc-gFarmDirEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmDirEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [inumber, entryName, entryINumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmDirEntry"],
    "&id": id_oc_gFarmDirEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
