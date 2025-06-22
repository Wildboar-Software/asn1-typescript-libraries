/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca.mjs";

/**
 * @summary issuerAndSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuerAndSerialNumber KEY-IDENTIFIER ::= {SYNTAX PKCS15-OPAQUE.&Type IDENTIFIED BY 1}
 * ```
 *
 * @constant
 * @type {KEY_IDENTIFIER<_Element>}
 * @implements {KEY_IDENTIFIER<_Element>}
 */
export const issuerAndSerialNumber: KEY_IDENTIFIER<_Element> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": $._decodeAny,
    },
    encoderFor: {
        "&Value": $._encodeAny,
    },
    "&id": 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
