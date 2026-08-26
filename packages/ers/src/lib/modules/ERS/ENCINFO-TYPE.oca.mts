/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";




/**
 * @summary ENCINFO_TYPE
 * @description
 *
 * Information object class for `EncryptionInfo` open typing in the
 * 1997 ASN.1 module: `ENCINFO-TYPE ::= TYPE-IDENTIFIER`. Each
 * instance supplies an `&id` OID and associated `&Type` used as
 * `encryptionInfoType` / `encryptionInfoValue`. Concrete instances
 * are collected in `SupportedEncryptionAlgorithms`.
 * (RFC 4998 §6.1.2.)
 */
export
type ENCINFO_TYPE = TYPE_IDENTIFIER;

/* eslint-enable */
