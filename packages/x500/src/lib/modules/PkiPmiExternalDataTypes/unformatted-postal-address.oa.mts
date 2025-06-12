/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UnformattedPostalAddress,
    _decode_UnformattedPostalAddress,
    _encode_UnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UnformattedPostalAddress.ta.mjs";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
export {
    UnformattedPostalAddress,
    _decode_UnformattedPostalAddress,
    _encode_UnformattedPostalAddress,
} from "../PkiPmiExternalDataTypes/UnformattedPostalAddress.ta.mjs";

/* START_OF_SYMBOL_DEFINITION unformatted_postal_address */
/**
 * @summary unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *                  UnformattedPostalAddress
 *   IDENTIFIED BY  16 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UnformattedPostalAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UnformattedPostalAddress>}
 */
export const unformatted_postal_address: EXTENSION_ATTRIBUTE<UnformattedPostalAddress> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnformattedPostalAddress,
    },
    encoderFor: {
        "&Type": _encode_UnformattedPostalAddress,
    },
    "&id": 16 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION unformatted_postal_address */

/* eslint-enable */
