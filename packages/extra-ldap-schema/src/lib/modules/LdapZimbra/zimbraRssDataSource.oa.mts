/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
import { id_oc_zimbraRssDataSource } from "../LdapZimbra/id-oc-zimbraRssDataSource.va.mjs";

/**
 * @summary zimbraRssDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraRssDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   LDAP-NAME                 {"zimbraRssDataSource"}
 *   LDAP-DESC                 "RSS data source object"
 *   ID                        id-oc-zimbraRssDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraRssDataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraDataSource, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraRssDataSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RSS data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraRssDataSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
