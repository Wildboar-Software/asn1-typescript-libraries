/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goCupsServer } from "../LdapGosaCoreGoserver/id-oc-goCupsServer.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goCupsServerStatus } from "../LdapGosaCoreGoserver/goCupsServerStatus.oa.mjs";


/**
 * @summary goCupsServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goCupsServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | goCupsServerStatus }
 *   LDAP-NAME                 {"goCupsServer"}
 *   LDAP-DESC                 "CUPS server description (v2.7)"
 *   ID                        id-oc-goCupsServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goCupsServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goCupsServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goCupsServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "CUPS server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goCupsServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

