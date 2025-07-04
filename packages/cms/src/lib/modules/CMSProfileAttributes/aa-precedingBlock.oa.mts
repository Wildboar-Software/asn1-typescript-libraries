import { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications,
} from "@wildboar/x500/InformationFramework";
import { id_precedingBlock } from "./id-precedingBlock.va.mjs";
import {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from "./HashPointer.ta.mjs";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-precedingBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-precedingBlock ATTRIBUTE ::= {TYPE HashPointer IDENTIFIED BY id-precedingBlock}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<HashPointer>}
 * @implements {ATTRIBUTE<HashPointer>}
 */
export const aa_precedingBlock: ATTRIBUTE<HashPointer> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HashPointer,
    },
    encoderFor: {
        "&Type": _encode_HashPointer,
    },
    "&id": id_precedingBlock /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
