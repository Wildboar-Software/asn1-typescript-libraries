/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_rpcServer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServer.va.mjs";
import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { rpcNsCodeset } from "../MSUser/rpcNsCodeset.oa.mjs";
import { rpcNsEntryFlags } from "../MSUser/rpcNsEntryFlags.oa.mjs";
import { rpcNsObjectID } from "../MSUser/rpcNsObjectID.oa.mjs";

/**
 * @summary rpcServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MAY CONTAIN               { rpcNsObjectID
 *                               | rpcNsCodeset
 *                               | rpcNsEntryFlags }
 *   LDAP-NAME                 {"rpcServer"}
 *   ID                        id-oc-rpcServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [rpcEntry] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rpcNsObjectID, rpcNsCodeset, rpcNsEntryFlags] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rpcServer"],
    "&id": id_oc_rpcServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
