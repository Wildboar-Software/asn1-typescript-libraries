/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    FriendsDescription,
    _decode_FriendsDescription,
    _encode_FriendsDescription,
} from "../SchemaAdministration/FriendsDescription.ta.mjs";
import { id_soa_friends } from "../SchemaAdministration/id-soa-friends.va.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary friends
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * friends ATTRIBUTE ::= {
 *   WITH SYNTAX             FriendsDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-friends }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FriendsDescription>}
 * @implements {ATTRIBUTE<FriendsDescription>}
 */
export const friends: ATTRIBUTE<FriendsDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FriendsDescription,
    },
    encoderFor: {
        "&Type": _encode_FriendsDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_friends /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
