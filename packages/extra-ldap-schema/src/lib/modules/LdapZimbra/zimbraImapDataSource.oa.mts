/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { id_oc_zimbraImapDataSource } from "../LdapZimbra/id-oc-zimbraImapDataSource.va.mjs";

import { zimbraDataSourceAuthMechanism } from "../LdapZimbra/zimbraDataSourceAuthMechanism.oa.mjs";
import { zimbraDataSourceAuthorizationId } from "../LdapZimbra/zimbraDataSourceAuthorizationId.oa.mjs";
import { zimbraDataSourceConnectionType } from "../LdapZimbra/zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceHost } from "../LdapZimbra/zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourcePort } from "../LdapZimbra/zimbraDataSourcePort.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraDataSource, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraDataSourceConnectionType, zimbraDataSourceHost, zimbraDataSourcePort, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraDataSourceAuthMechanism, zimbraDataSourceAuthorizationId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraImapDataSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IMAP data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraImapDataSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
