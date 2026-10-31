/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_sbac } from "../LdapSbac/id-oc-sbac.va.mjs";
import { sbacTenancyChain } from "./sbacTenancyChain.oa.mjs";
import { sbacUUID } from "./sbacUUID.oa.mjs";

/**
 * @summary sbac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sbac OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { sbacUUID
 *                               | sbacTenancyChain }
 *   LDAP-NAME                 {"sbac"}
 *   LDAP-DESC                 "sbac custom"
 *   ID                        id-oc-sbac }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sbac: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sbacUUID, sbacTenancyChain] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sbac"],
    "&ldapDesc": "sbac custom" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sbac /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
