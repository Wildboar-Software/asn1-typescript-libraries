/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { goLogDBServerStatus } from "../LdapGosaCoreGoserver/goLogDBServerStatus.oa.mjs";
import { id_oc_goLogDBServer } from "../LdapGosaCoreGoserver/id-oc-goLogDBServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { goLogAdmin } from "./goLogAdmin.oa.mjs";
import { goLogPassword } from "./goLogPassword.oa.mjs";
import { gosaLogDB } from "./gosaLogDB.oa.mjs";

/**
 * @summary goLogDBServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goLogDBServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | gosaLogDB
 *                               | goLogAdmin
 *                               | goLogPassword }
 *   MAY CONTAIN               { goLogDBServerStatus }
 *   LDAP-NAME                 {"goLogDBServer"}
 *   LDAP-DESC                 "Log DB server description (v2.7)"
 *   ID                        id-oc-goLogDBServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goLogDBServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, gosaLogDB, goLogAdmin, goLogPassword] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goLogDBServerStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goLogDBServer"],
    "&ldapDesc": "Log DB server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goLogDBServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
