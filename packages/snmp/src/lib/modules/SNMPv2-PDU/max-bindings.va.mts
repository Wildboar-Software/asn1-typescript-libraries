/* eslint-disable */
import {
    INTEGER,
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
 * @summary max_bindings
 * @description
 *
 * Upper bound on the number of variable bindings in a `PDU` or
 * `BulkPDU` (2147483647). Implementations must support as many bindings
 * as fit the engine's maximum message size, but no more than this
 * ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3),
 * [§4.2](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * max-bindings INTEGER ::= 2147483647
 * ```
 *
 * @constant
 */
export
const max_bindings: INTEGER = 2147483647;

/* eslint-enable */
