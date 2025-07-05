/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    TerminalType,
    _decode_TerminalType,
    _encode_TerminalType,
} from "../MTSAbstractService/TerminalType.ta.mjs";
/**
 * @summary terminal_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminal-type EXTENSION-ATTRIBUTE ::= {TerminalType
 *                                        IDENTIFIED BY  23
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TerminalType>}
 * @implements {EXTENSION_ATTRIBUTE<TerminalType>}
 */
export const terminal_type: EXTENSION_ATTRIBUTE<TerminalType> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TerminalType,
    },
    encoderFor: {
        "&Type": _encode_TerminalType,
    },
    "&id": 23 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
