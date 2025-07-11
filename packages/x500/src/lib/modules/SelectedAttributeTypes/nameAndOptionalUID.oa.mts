/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_nameAndOptionalUID } from "../SelectedAttributeTypes/id-lsx-nameAndOptionalUID.va.mjs";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
/**
 * @summary nameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameAndOptionalUID SYNTAX-NAME ::= {
 *   LDAP-DESC         "Name And Optional UID"
 *   DIRECTORY SYNTAX  NameAndOptionalUID
 *   ID                id-lsx-nameAndOptionalUID }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NameAndOptionalUID>}
 * @implements {SYNTAX_NAME<NameAndOptionalUID>}
 */
export const nameAndOptionalUID: SYNTAX_NAME<NameAndOptionalUID> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&ldapDesc": "Name And Optional UID" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_nameAndOptionalUID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
