/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nisNetId } from "../LdapSolaris/id-oc-nisNetId.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nisNetIdGroup } from "./nisNetIdGroup.oa.mjs";
import { nisNetIdHost } from "./nisNetIdHost.oa.mjs";
import { nisNetIdUser } from "./nisNetIdUser.oa.mjs";

/**
 * @summary nisNetId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisNetId OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nisNetIdUser
 *                               | nisNetIdGroup
 *                               | nisNetIdHost }
 *   LDAP-NAME                 {"nisNetId"}
 *   LDAP-DESC                 "nisNetId"
 *   ID                        id-oc-nisNetId }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisNetId: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nisNetIdUser, nisNetIdGroup, nisNetIdHost] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nisNetId"],
    "&ldapDesc": "nisNetId" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nisNetId /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
