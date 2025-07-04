/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_utmCoordinates } from "../SelectedAttributeTypes/id-at-utmCoordinates.va.mjs";
import {
    UtmCoordinates,
    _decode_UtmCoordinates,
    _encode_UtmCoordinates,
} from "../SelectedAttributeTypes/UtmCoordinates.ta.mjs";
import { utmCoords } from "../SelectedAttributeTypes/utmCoords.oa.mjs";
/**
 * @summary utmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utmCoordinates  ATTRIBUTE ::= {
 *   WITH SYNTAX              UtmCoordinates
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              utmCoords.&id
 *   LDAP-NAME                {"utmCoordinates"}
 *   ID                       id-at-utmCoordinates }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UtmCoordinates>}
 * @implements {ATTRIBUTE<UtmCoordinates>}
 */
export const utmCoordinates: ATTRIBUTE<UtmCoordinates> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UtmCoordinates,
    },
    encoderFor: {
        "&Type": _encode_UtmCoordinates,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utmCoords["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["utmCoordinates"],
    "&id": id_at_utmCoordinates /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
