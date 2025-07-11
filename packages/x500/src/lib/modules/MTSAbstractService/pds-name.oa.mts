/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PDSName,
    _decode_PDSName,
    _encode_PDSName,
} from "../MTSAbstractService/PDSName.ta.mjs";
/**
 * @summary pds_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pds-name EXTENSION-ATTRIBUTE ::= {PDSName
 *                                   IDENTIFIED BY  7
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PDSName>}
 * @implements {EXTENSION_ATTRIBUTE<PDSName>}
 */
export const pds_name: EXTENSION_ATTRIBUTE<PDSName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PDSName,
    },
    encoderFor: {
        "&Type": _encode_PDSName,
    },
    "&id": 7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
