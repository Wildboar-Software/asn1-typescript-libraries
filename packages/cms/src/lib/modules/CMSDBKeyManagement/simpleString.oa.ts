/* eslint-disable */
import { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.js";
import {
    SimpleString,
    _decode_SimpleString,
    _encode_SimpleString,
} from "../CMSDBKeyManagement/SimpleString.ta.js";
import { id_SimpleString } from "../CMSObjectIdentifiers/id-SimpleString.va.js";
export { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca.js";
export {
    SimpleString,
    _decode_SimpleString,
    _encode_SimpleString,
} from "../CMSDBKeyManagement/SimpleString.ta.js";
export { id_SimpleString } from "../CMSObjectIdentifiers/id-SimpleString.va.js";

/* START_OF_SYMBOL_DEFINITION simpleString */
/**
 * @summary simpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simpleString    DBEKM ::= {
 * OID id-SimpleString PARMS SimpleString }
 * ```
 *
 * @constant
 * @type {DBEKM<SimpleString>}
 * @implements {DBEKM<SimpleString>}
 */
export const simpleString: DBEKM<SimpleString> = {
    class: "DBEKM",
    decoderFor: {
        "&Type": _decode_SimpleString,
    },
    encoderFor: {
        "&Type": _encode_SimpleString,
    },
    "&id": id_SimpleString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION simpleString */

/* eslint-enable */
