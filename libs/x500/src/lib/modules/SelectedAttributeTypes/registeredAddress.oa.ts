/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_at_registeredAddress } from "../SelectedAttributeTypes/id-at-registeredAddress.va";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";
import {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_at_registeredAddress } from "../SelectedAttributeTypes/id-at-registeredAddress.va";
export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa";
export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";
export {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";

/* START_OF_SYMBOL_DEFINITION registeredAddress */
/**
 * @summary registeredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   WITH SYNTAX              PostalAddress
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"registeredAddress"}
 *   ID                       id-at-registeredAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PostalAddress>}
 * @implements {ATTRIBUTE<PostalAddress>}
 */
export const registeredAddress: ATTRIBUTE<PostalAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["registeredAddress"],
    "&id": id_at_registeredAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION registeredAddress */

/* eslint-enable */
