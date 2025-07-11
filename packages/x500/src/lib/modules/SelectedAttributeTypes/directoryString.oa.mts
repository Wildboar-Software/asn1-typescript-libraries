/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_directoryString } from "../SelectedAttributeTypes/id-lsx-directoryString.va.mjs";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary directoryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Directory String"
 *   DIRECTORY SYNTAX  UnboundedDirectoryString
 *   ID                id-lsx-directoryString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UnboundedDirectoryString>}
 * @implements {SYNTAX_NAME<UnboundedDirectoryString>}
 */
export const directoryString: SYNTAX_NAME<UnboundedDirectoryString> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&ldapDesc": "Directory String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_directoryString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
