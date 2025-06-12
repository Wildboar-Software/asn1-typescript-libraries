import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js";
import { id_contentLocation } from "./id-contentLocation.va.js";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "./URI.ta.js";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-contentLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-contentLocation ATTRIBUTE ::= {TYPE URI IDENTIFIED BY id-contentLocation}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<URI>}
 * @implements {ATTRIBUTE<URI>}
 */
export const aa_contentLocation: ATTRIBUTE<URI> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URI,
    },
    encoderFor: {
        "&Type": _encode_URI,
    },
    "&id": id_contentLocation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
