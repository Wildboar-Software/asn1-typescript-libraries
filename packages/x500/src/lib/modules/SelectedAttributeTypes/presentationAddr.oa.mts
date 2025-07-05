/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_presentationAddr } from "../SelectedAttributeTypes/id-lsx-presentationAddr.va.mjs";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
/**
 * @summary presentationAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Presentation Address"
 *   DIRECTORY SYNTAX  PresentationAddress
 *   ID                id-lsx-presentationAddr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PresentationAddress>}
 * @implements {SYNTAX_NAME<PresentationAddress>}
 */
export const presentationAddr: SYNTAX_NAME<PresentationAddress> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&ldapDesc": "Presentation Address" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_presentationAddr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
