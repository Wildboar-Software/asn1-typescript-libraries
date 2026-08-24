/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPostOfficeBoxAddress,
    _decode_UniversalPostOfficeBoxAddress,
    _encode_UniversalPostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/UniversalPostOfficeBoxAddress.ta.mjs";
/**
 * @summary universal_post_office_box_address
 * @description
 *
 * OR-address extension attribute for the Universal encoding of `post-office-box-address`
 * (ITU-T X.402 (1999), §18.3.18; X.411 (1999), Annex A). Printable, Teletex and
 * Universal encodings of the same value are equivalent for comparison (X.402 §18.4).
 * Universal language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPostOfficeBoxAddress
 *   IDENTIFIED BY  37 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress>}
 */
export const universal_post_office_box_address: EXTENSION_ATTRIBUTE<UniversalPostOfficeBoxAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPostOfficeBoxAddress,
    },
    "&id": 37 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
