/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goServer } from "../LdapGosaCoreGoserver/id-oc-goServer.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary goServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | macAddress
 *                               | ipHostNumber }
 *   LDAP-NAME                 {"goServer"}
 *   LDAP-DESC                 "Server description (v2.7)"
 *   ID                        id-oc-goServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, macAddress, ipHostNumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goServer"],
    "&ldapDesc": "Server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
