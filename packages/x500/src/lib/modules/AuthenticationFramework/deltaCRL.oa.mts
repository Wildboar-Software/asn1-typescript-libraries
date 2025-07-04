/* eslint-disable */
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa.mjs";
import { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary deltaCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRL OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {deltaRevocationList}
 *   LDAP-NAME           {"deltaCRL"}
 *   LDAP-DESC           "X.509 delta CRL"
 *   ID                  id-oc-deltaCRL }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const deltaCRL: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [deltaRevocationList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["deltaCRL"],
    "&ldapDesc": "X.509 delta CRL" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_deltaCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
