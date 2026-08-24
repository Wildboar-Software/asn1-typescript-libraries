/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_jid } from "../SelectedAttributeTypes/id-at-jid.va.mjs";
import {
    Jid,
    _decode_Jid,
    _encode_Jid,
} from "../SelectedAttributeTypes/Jid.ta.mjs";
import { jidMatch } from "../SelectedAttributeTypes/jidMatch.oa.mjs";
import { jidString } from "../SelectedAttributeTypes/jidString.oa.mjs";
/**
 * @summary jid
 * @description
 *
 * XMPP Jabber identifier. SINGLE VALUE. Equality `jidMatch` (RFC 7622 normalized; domain format+octets identical; localpart both present or both absent and octet-identical; resourcepart the same).
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
export const jid: ATTRIBUTE<Jid> = {
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
    "&ldapName": ["Jabber identifier"],
    "&id": id_at_jid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
