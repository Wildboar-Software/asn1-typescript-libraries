/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    type UnixEpoch,
    _decode_UnixEpoch,
    _encode_UnixEpoch,
} from "../NIS/UnixEpoch.ta.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";

/**
 * @summary shadowLastChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowLastChange ATTRIBUTE ::= {
 *     WITH SYNTAX                 UnixEpoch
 *     EQUALITY MATCHING RULE         integerMatch
 *     ORDERING MATCHING RULE      integerOrderingMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"shadowLastChange"}
 *     ID { id-nis-at 5 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnixEpoch>}
 * @implements {ATTRIBUTE<UnixEpoch>}
 */
export
const shadowLastChange: ATTRIBUTE<UnixEpoch> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnixEpoch,
    },
    encoderFor: {
        "&Type": _encode_UnixEpoch,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["shadowLastChange"],
    "&id": _OID.fromParts([
        5,
    ], id_nis_at) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
