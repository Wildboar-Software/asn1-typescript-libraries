/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_at_collectivePostalAddress } from "../SelectedAttributeTypes/id-at-collectivePostalAddress.va.js";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.js";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
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
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_at_collectivePostalAddress } from "../SelectedAttributeTypes/id-at-collectivePostalAddress.va.js";
export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.js";
export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.js";

/* START_OF_SYMBOL_DEFINITION collectivePostalAddress */
/**
 * @summary collectivePostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectivePostalAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"c-PostalAddress"}
 *   ID                       id-at-collectivePostalAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectivePostalAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&collective": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["c-PostalAddress"],
    "&id": id_at_collectivePostalAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectivePostalAddress */

/* eslint-enable */
