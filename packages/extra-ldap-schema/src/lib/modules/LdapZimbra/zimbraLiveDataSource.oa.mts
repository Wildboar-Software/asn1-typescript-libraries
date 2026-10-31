/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_zimbraLiveDataSource } from "../LdapZimbra/id-oc-zimbraLiveDataSource.va.mjs";
import { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";

/**
 * @summary zimbraLiveDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraLiveDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   LDAP-NAME                 {"zimbraLiveDataSource"}
 *   LDAP-DESC                 "Hotmail data source object"
 *   ID                        id-oc-zimbraLiveDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraLiveDataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [zimbraDataSource] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraLiveDataSource"],
    "&ldapDesc": "Hotmail data source object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraLiveDataSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
