/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_zimbraPop3DataSource } from "../LdapZimbra/id-oc-zimbraPop3DataSource.va.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { zimbraDataSourceLeaveOnServer } from "../LdapZimbra/zimbraDataSourceLeaveOnServer.oa.mjs";
import { zimbraDataSourceConnectionType } from "./zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceHost } from "./zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourcePort } from "./zimbraDataSourcePort.oa.mjs";

/**
 * @summary zimbraPop3DataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPop3DataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   MUST CONTAIN              { zimbraDataSourceConnectionType
 *                               | zimbraDataSourceHost
 *                               | zimbraDataSourcePort }
 *   MAY CONTAIN               { zimbraDataSourceLeaveOnServer }
 *   LDAP-NAME                 {"zimbraPop3DataSource"}
 *   LDAP-DESC                 "POP3 data source object"
 *   ID                        id-oc-zimbraPop3DataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraPop3DataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [zimbraDataSource] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraDataSourceConnectionType, zimbraDataSourceHost, zimbraDataSourcePort] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraDataSourceLeaveOnServer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraPop3DataSource"],
    "&ldapDesc": "POP3 data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraPop3DataSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
