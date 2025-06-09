/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_lat_supportedSASLMechanisms } from "../LdapSystemSchema/id-lat-supportedSASLMechanisms.va.js";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.js";
export { ub_saslMechanism } from "../DirectoryAbstractService/ub-saslMechanism.va.js";
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
export { id_lat_supportedSASLMechanisms } from "../LdapSystemSchema/id-lat-supportedSASLMechanisms.va.js";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
export {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.js";

/* START_OF_SYMBOL_DEFINITION supportedSASLMechanisms */
/**
 * @summary supportedSASLMechanisms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedSASLMechanisms ATTRIBUTE ::= {
 *   WITH SYNTAX              DirectoryString{ub-saslMechanism}
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"supportedSASLMechanisms"}
 *   ID                       id-lat-supportedSASLMechanisms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export const supportedSASLMechanisms: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["supportedSASLMechanisms"],
    "&id": id_lat_supportedSASLMechanisms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedSASLMechanisms */

/* eslint-enable */
