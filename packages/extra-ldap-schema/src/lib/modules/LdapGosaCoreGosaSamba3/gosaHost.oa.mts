/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gosaHost } from "../LdapGosaCoreGosaSamba3/id-oc-gosaHost.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaService } from "../LdapGosaCoreGosaSamba3/gosaService.oa.mjs";


/**
 * @summary gosaHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | gosaService }
 *   LDAP-NAME                 {"gosaHost"}
 *   LDAP-DESC                 "Class for GOsa Hosts (v2.7)"
 *   ID                        id-oc-gosaHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, gosaService, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaHost" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa Hosts (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

