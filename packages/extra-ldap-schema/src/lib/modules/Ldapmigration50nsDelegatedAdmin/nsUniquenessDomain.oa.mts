/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsUniquenessDomain } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsUniquenessDomain.va.mjs";

/**
 * @summary nsUniquenessDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsUniquenessDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"nsUniquenessDomain"}
 *   LDAP-DESC                 "Delegated Admin marker for uniqueness domain"
 *   ID                        id-oc-nsUniquenessDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsUniquenessDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsUniquenessDomain"],
    "&ldapDesc": "Delegated Admin marker for uniqueness domain" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsUniquenessDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
