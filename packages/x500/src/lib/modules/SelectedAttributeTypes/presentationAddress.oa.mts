/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va.mjs";
import { presentationAddr } from "../SelectedAttributeTypes/presentationAddr.oa.mjs";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa.mjs";
/**
 * @summary presentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PresentationAddress
 *   EQUALITY MATCHING RULE   presentationAddressMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              presentationAddr.&id
 *   LDAP-NAME                {"presentationAddress"}
 *   ID                       id-at-presentationAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PresentationAddress>}
 * @implements {ATTRIBUTE<PresentationAddress>}
 */
export const presentationAddress: ATTRIBUTE<PresentationAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&equality-match": presentationAddressMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": presentationAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["presentationAddress"],
    "&id": id_at_presentationAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
