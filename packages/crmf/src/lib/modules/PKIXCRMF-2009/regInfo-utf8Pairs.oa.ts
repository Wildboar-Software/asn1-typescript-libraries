/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import { id_regInfo_utf8Pairs } from "../PKIXCRMF-2009/id-regInfo-utf8Pairs.va";
import {
    UTF8Pairs,
    _decode_UTF8Pairs,
    _encode_UTF8Pairs,
} from "../PKIXCRMF-2009/UTF8Pairs.ta";

/* START_OF_SYMBOL_DEFINITION regInfo_utf8Pairs */
/**
 * @summary regInfo_utf8Pairs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regInfo-utf8Pairs ATTRIBUTE ::= { TYPE UTF8Pairs IDENTIFIED BY id-regInfo-utf8Pairs }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UTF8Pairs>}
 * @implements {ATTRIBUTE<UTF8Pairs>}
 */
export const regInfo_utf8Pairs: ATTRIBUTE<UTF8Pairs> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UTF8Pairs,
    },
    encoderFor: {
        "&Type": _encode_UTF8Pairs,
    },
    "&id": id_regInfo_utf8Pairs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION regInfo_utf8Pairs */

/* eslint-enable */
