/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { Jid, _decode_Jid, _encode_Jid } from "../SelectedAttributeTypes/Jid.ta.mjs";
// export { Jid, _decode_Jid, _encode_Jid } from "../SelectedAttributeTypes/Jid.ta.mjs";
import { jidMatch } from "../SelectedAttributeTypes/jidMatch.oa.mjs";
// export { jidMatch } from "../SelectedAttributeTypes/jidMatch.oa.mjs";
import { jidString } from "../SelectedAttributeTypes/jidString.oa.mjs";
// export { jidString } from "../SelectedAttributeTypes/jidString.oa.mjs";
import { id_at_jid } from "../SelectedAttributeTypes/id-at-jid.va.mjs";
// export { id_at_jid } from "../SelectedAttributeTypes/id-at-jid.va.mjs";


/**
 * @summary jid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jid ATTRIBUTE ::= {
 *   WITH SYNTAX             Jid
 *   EQUALITY MATCHING RULE  jidMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             jidString.&id
 *   LDAP-NAME               {"Jabber identifier"}
 *   ID                      id-at-jid }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Jid>}
 * @implements {ATTRIBUTE<Jid>}
 */
export
const jid: ATTRIBUTE<Jid> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Jid,
    },
    encoderFor: {
        "&Type": _encode_Jid,
    },
    "&equality-match": jidMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": jidString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "Jabber identifier" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_jid /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
