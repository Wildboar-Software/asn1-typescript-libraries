/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_transportTable } from "../InetMailSchema/id-oc-transportTable.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { transport } from "../InetMailSchema/transport.oa.mjs";


/**
 * @summary transportTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transportTable OBJECT-CLASS ::= {
 *     KIND            structural
 *     MUST CONTAIN    {commonName | transport}
 *     LDAP-NAME       {"transportTable"}
 *     LDAP-DESC       "MTA Transport Table"
 *     ID              id-oc-transportTable
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const transportTable: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, transport, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "transportTable" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "MTA Transport Table" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_transportTable /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

