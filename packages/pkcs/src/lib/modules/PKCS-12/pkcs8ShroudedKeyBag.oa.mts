/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { bagtypes } from "../PKCS-12/bagtypes.va.mjs";
import {
    PKCS8ShroudedKeyBag,
    _decode_PKCS8ShroudedKeyBag,
    _encode_PKCS8ShroudedKeyBag,
} from "../PKCS-12/PKCS8ShroudedKeyBag.ta.mjs";

/**
 * @summary pkcs8ShroudedKeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs8ShroudedKeyBag BAG-TYPE ::= {PKCS8ShroudedKeyBag IDENTIFIED BY {bagtypes 2}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<PKCS8ShroudedKeyBag>}
 * @implements {BAG_TYPE<PKCS8ShroudedKeyBag>}
 */
export const pkcs8ShroudedKeyBag: BAG_TYPE<PKCS8ShroudedKeyBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PKCS8ShroudedKeyBag,
    },
    encoderFor: {
        "&Type": _encode_PKCS8ShroudedKeyBag,
    },
    "&id": _OID.fromParts(
        [2],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
