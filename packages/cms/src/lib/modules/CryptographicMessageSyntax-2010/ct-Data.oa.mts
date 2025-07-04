/* eslint-disable */
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import { id_data } from "../CryptographicMessageSyntax-2010/id-data.va.mjs";

/**
 * @summary ct_Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-Data CONTENT-TYPE ::= { IDENTIFIED BY id-data }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE}
 * @implements {CONTENT_TYPE}
 */
export const ct_Data: CONTENT_TYPE = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
