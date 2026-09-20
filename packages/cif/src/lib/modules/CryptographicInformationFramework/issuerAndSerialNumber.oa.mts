/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicInformationFramework/IssuerAndSerialNumber.ta.mjs";
import { type KEY_IDENTIFIER } from "../CryptographicInformationFramework/KEY-IDENTIFIER.oca.mjs";


/**
 * @summary issuerAndSerialNumber
 * @description
 * 
 * `KEY-IDENTIFIER` 1: issuer DN plus certificate serial number of a certificate
 * that contains the associated public key. ISO/IEC 7816-15:2016 §8.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * issuerAndSerialNumber KEY-IDENTIFIER ::= {SYNTAX IssuerAndSerialNumber IDENTIFIED BY 1}
 * ```
 * 
 * @constant
 * @type {KEY_IDENTIFIER<IssuerAndSerialNumber>}
 * @implements {KEY_IDENTIFIER<IssuerAndSerialNumber>}
 */
export
const issuerAndSerialNumber: KEY_IDENTIFIER<IssuerAndSerialNumber> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": _decode_IssuerAndSerialNumber,
    },
    encoderFor: {
        "&Value": _encode_IssuerAndSerialNumber,
    },
    "&id": 1 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
