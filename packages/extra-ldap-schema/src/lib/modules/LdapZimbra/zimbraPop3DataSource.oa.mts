/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
// export { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { zimbraDataSourceLeaveOnServer } from "../LdapZimbra/zimbraDataSourceLeaveOnServer.oa.mjs";
// export { zimbraDataSourceLeaveOnServer } from "../LdapZimbra/zimbraDataSourceLeaveOnServer.oa.mjs";
import { id_oc_zimbraPop3DataSource } from "../LdapZimbra/id-oc-zimbraPop3DataSource.va.mjs";
import { zimbraDataSourceConnectionType } from "../LdapZimbra/zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceHost } from "../LdapZimbra/zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourcePort } from "../LdapZimbra/zimbraDataSourcePort.oa.mjs";
// export { id_oc_zimbraPop3DataSource } from "../LdapZimbra/id-oc-zimbraPop3DataSource.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraDataSource, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraDataSourceConnectionType, zimbraDataSourceHost, zimbraDataSourcePort, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraDataSourceLeaveOnServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraPop3DataSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "POP3 data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraPop3DataSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
