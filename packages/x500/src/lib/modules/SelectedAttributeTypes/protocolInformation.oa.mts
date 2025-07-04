/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_protocolInformation } from "../SelectedAttributeTypes/id-at-protocolInformation.va.mjs";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { protocolInformationMatch } from "../SelectedAttributeTypes/protocolInformationMatch.oa.mjs";
/**
 * @summary protocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformation ATTRIBUTE ::= {
 *   WITH SYNTAX              ProtocolInformation
 *   EQUALITY MATCHING RULE   protocolInformationMatch
 *   ID                       id-at-protocolInformation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ProtocolInformation>}
 * @implements {ATTRIBUTE<ProtocolInformation>}
 */
export const protocolInformation: ATTRIBUTE<ProtocolInformation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ProtocolInformation,
    },
    encoderFor: {
        "&Type": _encode_ProtocolInformation,
    },
    "&equality-match": protocolInformationMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_protocolInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
