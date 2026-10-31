/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_lDAPServer } from "../LdapCommon389/id-oc-lDAPServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { changeLogMaximumAge } from "./changeLogMaximumAge.oa.mjs";
import { changeLogMaximumSize } from "./changeLogMaximumSize.oa.mjs";
import { generation } from "./generation.oa.mjs";

/**
 * @summary lDAPServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lDAPServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | localityName
 *                               | organizationalUnitName
 *                               | seeAlso
 *                               | generation
 *                               | changeLogMaximumAge
 *                               | changeLogMaximumSize }
 *   LDAP-NAME                 {"LDAPServer"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-lDAPServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const lDAPServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, localityName, organizationalUnitName, seeAlso, generation, changeLogMaximumAge, changeLogMaximumSize] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["LDAPServer"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_lDAPServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
