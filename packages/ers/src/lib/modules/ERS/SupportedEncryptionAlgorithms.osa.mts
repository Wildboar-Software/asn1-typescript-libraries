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
import { type ENCINFO_TYPE } from "../ERS/ENCINFO-TYPE.oca.mjs";

/**
 * @summary SupportedEncryptionAlgorithms
 * @description
 *
 * Extensible information object set of `ENCINFO-TYPE` instances
 * constraining `EncryptionInfo.encryptionInfoType` /
 * `encryptionInfoValue`. RFC 4998 defines the set as initially empty
 * (`{...}`); concrete encryption methods are specified elsewhere.
 * (RFC 4998 §6.1.2.)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedEncryptionAlgorithms ENCINFO-TYPE ::= {...}
 * ```
 *
 * @constant
 * @type {ENCINFO_TYPE[]}
 *
 */
export
const SupportedEncryptionAlgorithms: (ENCINFO_TYPE)[] = [];

/* eslint-enable */
