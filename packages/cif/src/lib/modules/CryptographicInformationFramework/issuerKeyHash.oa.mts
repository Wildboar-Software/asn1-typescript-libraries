/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type KEY_IDENTIFIER } from "../CryptographicInformationFramework/KEY-IDENTIFIER.oca.mjs";


/**
 * @summary issuerKeyHash
 * @description
 * 
 * `KEY-IDENTIFIER` 5: SHA-1 hash of the public key that signed the requested
 * certificate. ISO/IEC 7816-15:2016 §8.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * issuerKeyHash KEY-IDENTIFIER ::= {SYNTAX OCTET STRING IDENTIFIED BY 5}
 * ```
 * 
 * @constant
 * @type {KEY_IDENTIFIER<OCTET_STRING>}
 * @implements {KEY_IDENTIFIER<OCTET_STRING>}
 */
export
const issuerKeyHash: KEY_IDENTIFIER<OCTET_STRING> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": $._decodeOctetString,
    },
    encoderFor: {
        "&Value": $._encodeOctetString,
    },
    "&id": 5 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
