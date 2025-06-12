/* eslint-disable */
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "../CryptographicMessageSyntax-2010/ContentType.ta.js";
import { id_contentType } from "../CryptographicMessageSyntax-2010/id-contentType.va.js";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
export {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "../CryptographicMessageSyntax-2010/ContentType.ta.js";
export { id_contentType } from "../CryptographicMessageSyntax-2010/id-contentType.va.js";

/* START_OF_SYMBOL_DEFINITION aa_contentType */
/**
 * @summary aa_contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-contentType ATTRIBUTE ::= { TYPE ContentType IDENTIFIED BY id-contentType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContentType>}
 * @implements {ATTRIBUTE<ContentType>}
 */
export const aa_contentType: ATTRIBUTE<ContentType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContentType,
    },
    encoderFor: {
        "&Type": _encode_ContentType,
    },
    "&id": id_contentType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_contentType */

/* eslint-enable */
