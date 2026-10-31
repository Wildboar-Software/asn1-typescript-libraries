/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFaxRBlock } from "../LdapGosaCoreGofax/id-oc-goFaxRBlock.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFaxRBlocklist } from "./goFaxRBlocklist.oa.mjs";

/**
 * @summary goFaxRBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxRBlock OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFaxRBlocklist
 *                               | description }
 *   LDAP-NAME                 {"goFaxRBlock"}
 *   LDAP-DESC                 "goFax receive blocklist groups (v1.0.4)"
 *   ID                        id-oc-goFaxRBlock }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxRBlock: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goFaxRBlocklist, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFaxRBlock"],
    "&ldapDesc": "goFax receive blocklist groups (v1.0.4)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFaxRBlock /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
