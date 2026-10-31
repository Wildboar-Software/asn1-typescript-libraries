/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_addresslist } from "../LdapKopano/id-oc-kopano-addresslist.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoBase } from "./kopanoBase.oa.mjs";
import { kopanoFilter } from "./kopanoFilter.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";

/**
 * @summary kopano_addresslist
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-addresslist OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoFilter
 *                               | kopanoBase }
 *   LDAP-NAME                 {"kopano-addresslist"}
 *   LDAP-DESC                 "KOPANO: a Kopano Addresslist"
 *   ID                        id-oc-kopano-addresslist }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_addresslist: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoAccount, kopanoHidden, kopanoFilter, kopanoBase] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-addresslist"],
    "&ldapDesc": "KOPANO: a Kopano Addresslist" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_addresslist /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
