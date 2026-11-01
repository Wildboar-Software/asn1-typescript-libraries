/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { msgCRLMappingRecord } from "../Ldapmigration56imsSchema/msgCRLMappingRecord.oa.mjs";
import { id_oc_msgCRLMappingTable } from "../Ldapmigration56imsSchema/id-oc-msgCRLMappingTable.va.mjs";

/**
 * @summary msgCRLMappingTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msgCRLMappingTable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { msgCRLMappingRecord }
 *   LDAP-NAME                 {"msgCRLMappingTable"}
 *   LDAP-DESC                 "auxiliary class for setting CRL mapping"
 *   ID                        id-oc-msgCRLMappingTable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const msgCRLMappingTable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ msgCRLMappingRecord, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msgCRLMappingTable" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for setting CRL mapping" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_msgCRLMappingTable /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
