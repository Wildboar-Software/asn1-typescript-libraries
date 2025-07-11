/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { bagtypes } from "../PKCS-12/bagtypes.va.mjs";
import { KeyBag, _decode_KeyBag, _encode_KeyBag } from "../PKCS-12/KeyBag.ta.mjs";

/**
 * @summary keyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyBag BAG-TYPE ::= {KeyBag              IDENTIFIED BY {bagtypes 1}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<KeyBag>}
 * @implements {BAG_TYPE<KeyBag>}
 */
export const keyBag: BAG_TYPE<KeyBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_KeyBag,
    },
    encoderFor: {
        "&Type": _encode_KeyBag,
    },
    "&id": _OID.fromParts(
        [1],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
