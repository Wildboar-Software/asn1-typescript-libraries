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
 * @summary subjectKeyId
 * @description
 * 
 * `KEY-IDENTIFIER` 2: same octets as the ISO/IEC 9594-8 `subjectKeyIdentifier`
 * extension of the certificate that contains the associated public key. Useful
 * for chain traversal. ISO/IEC 7816-15:2016 §8.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subjectKeyId KEY-IDENTIFIER ::= {SYNTAX OCTET STRING IDENTIFIED BY 2}
 * ```
 * 
 * @constant
 * @type {KEY_IDENTIFIER<OCTET_STRING>}
 * @implements {KEY_IDENTIFIER<OCTET_STRING>}
 */
export
const subjectKeyId: KEY_IDENTIFIER<OCTET_STRING> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": $._decodeOctetString,
    },
    encoderFor: {
        "&Value": $._encodeOctetString,
    },
    "&id": 2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
