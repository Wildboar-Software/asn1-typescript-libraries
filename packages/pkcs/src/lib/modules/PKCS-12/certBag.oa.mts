/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { bagtypes } from "../PKCS-12/bagtypes.va.mjs";
import {
    CertBag,
    _decode_CertBag,
    _encode_CertBag,
} from "../PKCS-12/CertBag.ta.mjs";

/**
 * @summary certBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certBag BAG-TYPE ::= {CertBag             IDENTIFIED BY {bagtypes 3}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<CertBag>}
 * @implements {BAG_TYPE<CertBag>}
 */
export const certBag: BAG_TYPE<CertBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertBag,
    },
    encoderFor: {
        "&Type": _encode_CertBag,
    },
    "&id": _OID.fromParts(
        [3],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
