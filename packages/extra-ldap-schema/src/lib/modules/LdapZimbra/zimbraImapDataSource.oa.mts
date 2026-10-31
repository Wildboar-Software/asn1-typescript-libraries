/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_zimbraImapDataSource } from "../LdapZimbra/id-oc-zimbraImapDataSource.va.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { zimbraDataSourceAuthMechanism } from "./zimbraDataSourceAuthMechanism.oa.mjs";
import { zimbraDataSourceAuthorizationId } from "./zimbraDataSourceAuthorizationId.oa.mjs";
import { zimbraDataSourceConnectionType } from "./zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceHost } from "./zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourcePort } from "./zimbraDataSourcePort.oa.mjs";

/**
 * @summary zimbraImapDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraImapDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   MUST CONTAIN              { zimbraDataSourceConnectionType
 *                               | zimbraDataSourceHost
 *                               | zimbraDataSourcePort }
 *   MAY CONTAIN               { zimbraDataSourceAuthMechanism
 *                               | zimbraDataSourceAuthorizationId }
 *   LDAP-NAME                 {"zimbraImapDataSource"}
 *   LDAP-DESC                 "IMAP data source object"
 *   ID                        id-oc-zimbraImapDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraImapDataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [zimbraDataSource] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraDataSourceConnectionType, zimbraDataSourceHost, zimbraDataSourcePort] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraDataSourceAuthMechanism, zimbraDataSourceAuthorizationId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraImapDataSource"],
    "&ldapDesc": "IMAP data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraImapDataSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
