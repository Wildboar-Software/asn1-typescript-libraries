/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaSync } from "../Ldapmigration97sonia/id-oc-soniaSync.va.mjs";
import { soniaSyncTimestamp } from "../Ldapmigration97sonia/soniaSyncTimestamp.oa.mjs";

/**
 * @summary soniaSync
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaSync OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { soniaSyncTimestamp }
 *   LDAP-NAME                 {"soniaSync"}
 *   ID                        id-oc-soniaSync }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaSync: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [soniaSyncTimestamp] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaSync"],
    "&id": id_oc_soniaSync /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
