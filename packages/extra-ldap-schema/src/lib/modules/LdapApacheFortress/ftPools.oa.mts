/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ftPools } from "../LdapApacheFortress/id-oc-ftPools.va.mjs";
import { ftOSP } from "./ftOSP.oa.mjs";
import { ftOSU } from "./ftOSU.oa.mjs";
import { ftRange } from "./ftRange.oa.mjs";

/**
 * @summary ftPools
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftPools OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ftOSU
 *                               | ftOSP
 *                               | ftRange }
 *   LDAP-NAME                 {"ftPools"}
 *   LDAP-DESC                 "Fortress Pools AUX Object Class"
 *   ID                        id-oc-ftPools }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftPools: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftOSU, ftOSP, ftRange] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftPools"],
    "&ldapDesc": "Fortress Pools AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftPools /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
