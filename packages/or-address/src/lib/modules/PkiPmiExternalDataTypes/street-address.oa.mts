/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    StreetAddress,
    _decode_StreetAddress,
    _encode_StreetAddress,
} from "../PkiPmiExternalDataTypes/StreetAddress.ta.mjs";
/**
 * @summary street_address
 * @description
 *
 * OR-address extension attribute for the Printable encoding of `street-address` (ITU-T
 * X.402 (1999), §18.3.22; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * street-address EXTENSION-ATTRIBUTE ::= {
 *                  StreetAddress
 *   IDENTIFIED BY  17 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<StreetAddress>}
 * @implements {EXTENSION_ATTRIBUTE<StreetAddress>}
 */
export const street_address: EXTENSION_ATTRIBUTE<StreetAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_StreetAddress,
    },
    encoderFor: {
        "&Type": _encode_StreetAddress,
    },
    "&id": 17 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
