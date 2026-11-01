/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_dicomTransferCapability } from "../LdapDicom/id-oc-dicomTransferCapability.va.mjs";
import { dicomSOPClass } from "../LdapDicom/dicomSOPClass.oa.mjs";
import { dicomTransferRole } from "../LdapDicom/dicomTransferRole.oa.mjs";
import { dicomTransferSyntax } from "../LdapDicom/dicomTransferSyntax.oa.mjs";
// export { id_oc_dicomTransferCapability } from "../LdapDicom/id-oc-dicomTransferCapability.va.mjs";


/**
 * @summary dicomTransferCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomTransferCapability OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomSOPClass
 *                               | dicomTransferRole
 *                               | dicomTransferSyntax }
 *   MAY CONTAIN               { commonName }
 *   LDAP-NAME                 {"dicomTransferCapability"}
 *   LDAP-DESC                 "Transfer Capabilities for an Application Entity"
 *   ID                        id-oc-dicomTransferCapability }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomTransferCapability: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dicomSOPClass, dicomTransferRole, dicomTransferSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dicomTransferCapability" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Transfer Capabilities for an Application Entity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomTransferCapability /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
