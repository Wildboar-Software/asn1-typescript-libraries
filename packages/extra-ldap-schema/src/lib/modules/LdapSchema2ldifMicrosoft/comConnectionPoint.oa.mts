/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_comConnectionPoint } from "../LdapSchema2ldifMicrosoft/id-oc-comConnectionPoint.va.mjs";


/**
 * @summary comConnectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * comConnectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { marshalledInterface
 *                               | moniker
 *                               | monikerDisplayName }
 *   LDAP-NAME                 {"comConnectionPoint"}
 *   ID                        id-oc-comConnectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const comConnectionPoint: OBJECT_CLASS = undefined;

/* eslint-enable */
