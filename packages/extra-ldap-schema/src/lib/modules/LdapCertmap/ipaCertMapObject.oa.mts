/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaCertMapObject } from "../LdapCertmap/id-oc-ipaCertMapObject.va.mjs";
import { ipaCertMapData } from "../LdapCertmap/ipaCertMapData.oa.mjs";

/**
 * @summary ipaCertMapObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaCertMapObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ipaCertMapData }
 *   LDAP-NAME                 {"ipaCertMapObject"}
 *   LDAP-DESC                 "IPA Object for Certificate Mapping"
 *   ID                        id-oc-ipaCertMapObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaCertMapObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipaCertMapData] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaCertMapObject"],
    "&ldapDesc": "IPA Object for Certificate Mapping" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaCertMapObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
