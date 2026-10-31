/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaLogServer } from "../LdapGosaCoreGoserver/id-oc-gosaLogServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goLogDB } from "./goLogDB.oa.mjs";
import { goLogDBPassword } from "./goLogDBPassword.oa.mjs";
import { goLogDBUser } from "./goLogDBUser.oa.mjs";

/**
 * @summary gosaLogServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaLogServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goLogDB
 *                               | goLogDBUser
 *                               | goLogDBPassword }
 *   LDAP-NAME                 {"gosaLogServer"}
 *   LDAP-DESC                 "GOsa log server (v2.7)"
 *   ID                        id-oc-gosaLogServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaLogServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, goLogDB, goLogDBUser, goLogDBPassword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaLogServer"],
    "&ldapDesc": "GOsa log server (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaLogServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
