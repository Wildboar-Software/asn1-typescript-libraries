/* eslint-disable */
import { IA5String, ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { certTypes } from "../PKCS-9/certTypes.va.mjs";

/**
 * @summary sdsiCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sdsiCertificate BAG-TYPE ::= {IA5String IDENTIFIED BY {certTypes 2}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<IA5String>}
 * @implements {BAG_TYPE<IA5String>}
 */
export const sdsiCertificate: BAG_TYPE<IA5String> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&id": _OID.fromParts(
        [2],
        certTypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
