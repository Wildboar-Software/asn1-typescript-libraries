/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    StreetAddress,
    _decode_StreetAddress,
    _encode_StreetAddress,
} from "../MTSAbstractService/StreetAddress.ta.mjs";
/**
 * @summary street_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * street-address EXTENSION-ATTRIBUTE ::= {StreetAddress
 *                                         IDENTIFIED BY  17
 * }
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
