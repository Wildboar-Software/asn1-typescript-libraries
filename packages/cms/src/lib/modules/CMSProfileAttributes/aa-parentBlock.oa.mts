import { type ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications,
} from "@wildboar/x500/InformationFramework";
import { id_parentBlock } from "./id-parentBlock.va.mjs";
import {
    ParentBlock,
    _decode_ParentBlock,
    _encode_ParentBlock,
} from "./ParentBlock.ta.mjs";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-parentBlock
 * @description
 *
 * ATTRIBUTE pointing to a parent block via `HashPointer`
 * (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-parentBlock ATTRIBUTE ::= {TYPE ParentBlock IDENTIFIED BY id-parentBlock}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ParentBlock>}
 * @implements {ATTRIBUTE<ParentBlock>}
 */
export const aa_parentBlock: ATTRIBUTE<ParentBlock> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ParentBlock,
    },
    encoderFor: {
        "&Type": _encode_ParentBlock,
    },
    "&id": id_parentBlock /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
