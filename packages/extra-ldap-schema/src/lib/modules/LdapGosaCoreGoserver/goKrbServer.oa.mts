/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goKrbServer } from "../LdapGosaCoreGoserver/id-oc-goKrbServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goKrbRealm } from "../LdapGosaCoreGoserver/goKrbRealm.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goKrbServerStatus } from "../LdapGosaCoreGoserver/goKrbServerStatus.oa.mjs";


/**
 * @summary goKrbServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goKrbServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goKrbRealm }
 *   MAY CONTAIN               { description
 *                               | goKrbServerStatus }
 *   LDAP-NAME                 {"goKrbServer"}
 *   LDAP-DESC                 "Kerberos server description (v2.7)"
 *   ID                        id-oc-goKrbServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goKrbServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, goKrbRealm, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goKrbServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goKrbServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Kerberos server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goKrbServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

