/* eslint-disable */
import {
    AuthenticatedData,
    _decode_AuthenticatedData,
    _encode_AuthenticatedData,
} from "../CryptographicMessageSyntax-2010/AuthenticatedData.ta.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import { id_ct_authData } from "../CryptographicMessageSyntax-2010/id-ct-authData.va.mjs";

/**
 * @summary ct_AuthenticatedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-AuthenticatedData CONTENT-TYPE ::= { TYPE AuthenticatedData IDENTIFIED BY id-ct-authData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AuthenticatedData>}
 * @implements {CONTENT_TYPE<AuthenticatedData>}
 */
export const ct_AuthenticatedData: CONTENT_TYPE<AuthenticatedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_AuthenticatedData,
    },
    encoderFor: {
        "&Type": _encode_AuthenticatedData,
    },
    "&id": id_ct_authData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
