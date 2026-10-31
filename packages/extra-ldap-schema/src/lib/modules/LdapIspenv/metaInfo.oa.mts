/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_metaInfo } from "../LdapIspenv/id-oc-metaInfo.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { note } from "./note.oa.mjs";
import { status } from "./status.oa.mjs";
import { type_ } from "./type.oa.mjs";

/**
 * @summary metaInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * metaInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { note
 *                               | type
 *                               | status
 *                               | commonName
 *                               | description }
 *   LDAP-NAME                 {"metaInfo"}
 *   LDAP-DESC                 "Easy way to bind additional information to an entry without deploying a specific objectclass"
 *   ID                        id-oc-metaInfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const metaInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [note, type_, status, commonName, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["metaInfo"],
    "&ldapDesc": "Easy way to bind additional information to an entry without deploying a specific objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_metaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
