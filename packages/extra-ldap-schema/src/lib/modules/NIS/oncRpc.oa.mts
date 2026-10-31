/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";


/**
 * @summary oncRpc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oncRpc OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName | oncRpcNumber}
 *     MAY CONTAIN        {description}
 *     LDAP-NAME        {"oncRpc"}
 *     LDAP-DESC        "Abstraction of an ONC/RPC binding"
 *     ID                { id-nis-oc 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oncRpc: OBJECT_CLASS = undefined;

/* eslint-enable */
