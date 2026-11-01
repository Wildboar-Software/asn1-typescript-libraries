/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nFSv4RemotePerson } from "../LdapNfsv4/id-oc-nFSv4RemotePerson.va.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { nFSv4Name } from "../LdapNfsv4/nFSv4Name.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gSSAuthName } from "../LdapNfsv4/gSSAuthName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary nFSv4RemotePerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nFSv4RemotePerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { uidNumber
 *                               | gidNumber
 *                               | nFSv4Name }
 *   MAY CONTAIN               { commonName
 *                               | gSSAuthName
 *                               | description }
 *   LDAP-NAME                 {"NFSv4RemotePerson"}
 *   LDAP-DESC                 "NFS version4 person from remote NFSv4 Domain"
 *   ID                        id-oc-nFSv4RemotePerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nFSv4RemotePerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uidNumber, gidNumber, nFSv4Name, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, gSSAuthName, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "NFSv4RemotePerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "NFS version4 person from remote NFSv4 Domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nFSv4RemotePerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

