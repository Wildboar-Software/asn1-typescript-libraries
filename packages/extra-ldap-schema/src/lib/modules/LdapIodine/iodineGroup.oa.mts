/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iodineGroup } from "../LdapIodine/id-oc-iodineGroup.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";

/**
 * @summary iodineGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iodineGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gidNumber
 *                               | description
 *                               | uniqueMember
 *                               | owner }
 *   LDAP-NAME                 {"iodineGroup"}
 *   ID                        id-oc-iodineGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iodineGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gidNumber, description, uniqueMember, owner] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iodineGroup"],
    "&id": id_oc_iodineGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
