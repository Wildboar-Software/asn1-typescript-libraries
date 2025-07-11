/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { bagtypes } from "../PKCS-12/bagtypes.va.mjs";
import {
    SecretBag,
    _decode_SecretBag,
    _encode_SecretBag,
} from "../PKCS-12/SecretBag.ta.mjs";

/**
 * @summary secretBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secretBag BAG-TYPE ::= {SecretBag           IDENTIFIED BY {bagtypes 5}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<SecretBag>}
 * @implements {BAG_TYPE<SecretBag>}
 */
export const secretBag: BAG_TYPE<SecretBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SecretBag,
    },
    encoderFor: {
        "&Type": _encode_SecretBag,
    },
    "&id": _OID.fromParts(
        [5],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
