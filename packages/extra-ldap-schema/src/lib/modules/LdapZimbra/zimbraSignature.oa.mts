/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraSignature } from "../LdapZimbra/id-oc-zimbraSignature.va.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraPrefMailSignature } from "./zimbraPrefMailSignature.oa.mjs";
import { zimbraPrefMailSignatureContactId } from "./zimbraPrefMailSignatureContactId.oa.mjs";
import { zimbraPrefMailSignatureHTML } from "./zimbraPrefMailSignatureHTML.oa.mjs";
import { zimbraSignatureId } from "./zimbraSignatureId.oa.mjs";
import { zimbraSignatureName } from "./zimbraSignatureName.oa.mjs";

/**
 * @summary zimbraSignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraSignature OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraSignatureId
 *                               | zimbraSignatureName }
 *   MAY CONTAIN               { zimbraCreateTimestamp
 *                               | zimbraPrefMailSignature
 *                               | zimbraPrefMailSignatureContactId
 *                               | zimbraPrefMailSignatureHTML }
 *   LDAP-NAME                 {"zimbraSignature"}
 *   LDAP-DESC                 "Account Email Signature information"
 *   ID                        id-oc-zimbraSignature }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraSignature: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraSignatureId, zimbraSignatureName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraCreateTimestamp, zimbraPrefMailSignature, zimbraPrefMailSignatureContactId, zimbraPrefMailSignatureHTML] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraSignature"],
    "&ldapDesc": "Account Email Signature information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraSignature /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
