/* eslint-disable */
import { ObjectIdentifier as _OID, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { crlTypes } from "../PKCS-9/crlTypes.va.mjs";

/**
 * @summary x509CRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509CRL BAG-TYPE ::= {OCTET STRING IDENTIFIED BY {crlTypes 1}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<OCTET_STRING>}
 * @implements {BAG_TYPE<OCTET_STRING>}
 */
export const x509CRL: BAG_TYPE<OCTET_STRING> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&id": new _OID(
        [1],
        crlTypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
