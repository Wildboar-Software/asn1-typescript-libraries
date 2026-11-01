/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type CommunicationsNetwork, _decode_CommunicationsNetwork, _encode_CommunicationsNetwork } from "../SelectedAttributeTypes/CommunicationsNetwork.ta.mjs";
// export { CommunicationsNetwork, _decode_CommunicationsNetwork, _encode_CommunicationsNetwork } from "../SelectedAttributeTypes/CommunicationsNetwork.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
// export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_communicationsNetwork } from "../SelectedAttributeTypes/id-at-communicationsNetwork.va.mjs";
// export { id_at_communicationsNetwork } from "../SelectedAttributeTypes/id-at-communicationsNetwork.va.mjs";


/**
 * @summary communicationsNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * communicationsNetwork ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsNetwork
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsNetwork"}
 *   ID                       id-at-communicationsNetwork }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<CommunicationsNetwork>}
 * @implements {ATTRIBUTE<CommunicationsNetwork>}
 */
export
const communicationsNetwork: ATTRIBUTE<CommunicationsNetwork> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsNetwork,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsNetwork,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "communicationsNetwork" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_communicationsNetwork /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
