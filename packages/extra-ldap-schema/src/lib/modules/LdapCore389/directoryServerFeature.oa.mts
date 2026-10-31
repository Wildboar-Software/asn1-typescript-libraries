/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_directoryServerFeature } from "../LdapCore389/id-oc-directoryServerFeature.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { multiLineDescription } from "./multiLineDescription.oa.mjs";
import { oid } from "./oid.oa.mjs";

/**
 * @summary directoryServerFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryServerFeature OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { oid
 *                               | commonName
 *                               | multiLineDescription }
 *   LDAP-NAME                 {"directoryServerFeature"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-directoryServerFeature }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const directoryServerFeature: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oid, commonName, multiLineDescription] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["directoryServerFeature"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_directoryServerFeature /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
