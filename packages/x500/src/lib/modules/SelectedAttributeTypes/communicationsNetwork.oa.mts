/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import {
    CommunicationsNetwork,
    _decode_CommunicationsNetwork,
    _encode_CommunicationsNetwork,
} from "../SelectedAttributeTypes/CommunicationsNetwork.ta.mjs";
import { id_at_communicationsNetwork } from "../SelectedAttributeTypes/id-at-communicationsNetwork.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/* START_OF_SYMBOL_DEFINITION communicationsNetwork */
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
export const communicationsNetwork: ATTRIBUTE<CommunicationsNetwork> = {
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
    "&ldapName": ["communicationsNetwork"],
    "&id": id_at_communicationsNetwork /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION communicationsNetwork */

/* eslint-enable */
