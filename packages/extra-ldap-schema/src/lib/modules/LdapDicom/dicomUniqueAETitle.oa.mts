/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { dicomAETitle } from "../LdapDicom/dicomAETitle.oa.mjs";
// export { dicomAETitle } from "../LdapDicom/dicomAETitle.oa.mjs";
import { id_oc_dicomUniqueAETitle } from "../LdapDicom/id-oc-dicomUniqueAETitle.va.mjs";
// export { id_oc_dicomUniqueAETitle } from "../LdapDicom/id-oc-dicomUniqueAETitle.va.mjs";


/**
 * @summary dicomUniqueAETitle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomUniqueAETitle OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomAETitle }
 *   LDAP-NAME                 {"dicomUniqueAETitle"}
 *   LDAP-DESC                 "A Unique DICOM Application Entity title"
 *   ID                        id-oc-dicomUniqueAETitle }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomUniqueAETitle: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dicomAETitle, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dicomUniqueAETitle" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A Unique DICOM Application Entity title" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomUniqueAETitle /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
