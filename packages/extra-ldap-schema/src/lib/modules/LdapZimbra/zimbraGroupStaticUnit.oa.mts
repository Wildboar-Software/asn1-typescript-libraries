/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraGroupStaticUnit } from "../LdapZimbra/id-oc-zimbraGroupStaticUnit.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraGroupId } from "./zimbraGroupId.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraMailForwardingAddress } from "./zimbraMailForwardingAddress.oa.mjs";

/**
 * @summary zimbraGroupStaticUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGroupStaticUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraGroupId
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraCreateTimestamp
 *                               | zimbraMailForwardingAddress }
 *   LDAP-NAME                 {"zimbraGroupStaticUnit"}
 *   LDAP-DESC                 "hold attributes for the static entry of dynamic groups."
 *   ID                        id-oc-zimbraGroupStaticUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGroupStaticUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraGroupId, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraCreateTimestamp, zimbraMailForwardingAddress] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraGroupStaticUnit"],
    "&ldapDesc": "hold attributes for the static entry of dynamic groups." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGroupStaticUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
