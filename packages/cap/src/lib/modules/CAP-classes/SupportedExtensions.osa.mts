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
import { EXTENSION } from "../CAP-classes/EXTENSION.oca.mjs";
// export { EXTENSION } from "../CAP-classes/EXTENSION.oca.mjs";
import { firstExtension } from "../CAP-classes/firstExtension.oa.mjs";
// export { firstExtension } from "../CAP-classes/firstExtension.oa.mjs";


/**
 * @summary SupportedExtensions
 * @description
 *
 * Full set of network-operator `EXTENSION` objects. Ships with the
 * example `firstExtension` plus an extension marker for operator
 * additions.
 * (3GPP TS 29.078 V19.0.0 clause 5.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedExtensions EXTENSION ::= {firstExtension, ...
 * -- full set of network operator extensions –-
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SupportedExtensions: (EXTENSION)[] = [ firstExtension, ];

/* eslint-enable */
