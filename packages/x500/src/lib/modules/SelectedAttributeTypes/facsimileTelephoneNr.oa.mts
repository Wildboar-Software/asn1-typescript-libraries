/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    FacsimileTelephoneNumber,
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { id_lsx_facsimileTelephoneNr } from "../SelectedAttributeTypes/id-lsx-facsimileTelephoneNr.va.mjs";
/**
 * @summary facsimileTelephoneNr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileTelephoneNr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Facsimile Telephone Number"
 *   DIRECTORY SYNTAX  FacsimileTelephoneNumber
 *   ID                id-lsx-facsimileTelephoneNr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<FacsimileTelephoneNumber>}
 * @implements {SYNTAX_NAME<FacsimileTelephoneNumber>}
 */
export const facsimileTelephoneNr: SYNTAX_NAME<FacsimileTelephoneNumber> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&ldapDesc": "Facsimile Telephone Number" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_facsimileTelephoneNr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
