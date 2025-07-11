/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PostOfficeBoxAddress,
    _decode_PostOfficeBoxAddress,
    _encode_PostOfficeBoxAddress,
} from "../PkiPmiExternalDataTypes/PostOfficeBoxAddress.ta.mjs";
/**
 * @summary post_office_box_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * post-office-box-address EXTENSION-ATTRIBUTE ::= {
 *                  PostOfficeBoxAddress
 *   IDENTIFIED BY  18 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PostOfficeBoxAddress>}
 * @implements {EXTENSION_ATTRIBUTE<PostOfficeBoxAddress>}
 */
export const post_office_box_address: EXTENSION_ATTRIBUTE<PostOfficeBoxAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostOfficeBoxAddress,
    },
    encoderFor: {
        "&Type": _encode_PostOfficeBoxAddress,
    },
    "&id": 18 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
