/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_fileLinkTrackingEntry } from "../LdapSchema2ldifMicrosoft/id-oc-fileLinkTrackingEntry.va.mjs";

/**
 * @summary fileLinkTrackingEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fileLinkTrackingEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"fileLinkTrackingEntry"}
 *   ID                        id-oc-fileLinkTrackingEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fileLinkTrackingEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fileLinkTrackingEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fileLinkTrackingEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
