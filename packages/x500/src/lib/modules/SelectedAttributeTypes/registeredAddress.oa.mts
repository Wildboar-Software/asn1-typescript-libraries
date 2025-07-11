/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_registeredAddress } from "../SelectedAttributeTypes/id-at-registeredAddress.va.mjs";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
/**
 * @summary registeredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registeredAddress ATTRIBUTE ::= {
 *   SUBTYPE OF               postalAddress
 *   WITH SYNTAX              PostalAddress
 *   LDAP-SYNTAX              postalAddr.&id
 *   LDAP-NAME                {"registeredAddress"}
 *   ID                       id-at-registeredAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PostalAddress>}
 * @implements {ATTRIBUTE<PostalAddress>}
 */
export const registeredAddress: ATTRIBUTE<PostalAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&derivation": postalAddress /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["registeredAddress"],
    "&id": id_at_registeredAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
