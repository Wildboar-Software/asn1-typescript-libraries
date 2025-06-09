/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.js";
import {
    CommunicationsService,
    _decode_CommunicationsService,
    _encode_CommunicationsService,
} from "../SelectedAttributeTypes/CommunicationsService.ta.js";
import { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va.js";
import { oid } from "../SelectedAttributeTypes/oid.oa.js";
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
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export {
    CommunicationsService,
    _decode_CommunicationsService,
    _encode_CommunicationsService,
} from "../SelectedAttributeTypes/CommunicationsService.ta.js";
export { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va.js";
export { oid } from "../SelectedAttributeTypes/oid.oa.js";

/* START_OF_SYMBOL_DEFINITION communicationsService */
/**
 * @summary communicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsService ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsService
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsService"}
 *   ID                       id-at-communicationsService }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CommunicationsService>}
 * @implements {ATTRIBUTE<CommunicationsService>}
 */
export const communicationsService: ATTRIBUTE<CommunicationsService> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsService,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsService,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["communicationsService"],
    "&id": id_at_communicationsService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION communicationsService */

/* eslint-enable */
