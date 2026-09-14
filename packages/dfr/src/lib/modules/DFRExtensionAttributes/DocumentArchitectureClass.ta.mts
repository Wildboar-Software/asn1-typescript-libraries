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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentArchitectureClass
 * @description
 *
 * INTEGER naming an ODA document architecture class, used as the syntax of
 * `document-architecture-class`. ISO/IEC 10166-1:1991 §9.3.4. The three named
 * values are those of ISO 8613; ISO/IEC 10166-1:1991 does not further define
 * them.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentArchitectureClass  ::=  INTEGER {
 *     formatted                (0),
 *     processable              (1),
 *     formatted-processable    (2)
 * }
 * ```
 */
export
type DocumentArchitectureClass = INTEGER;

/**
 * @summary DocumentArchitectureClass_formatted
 * @description
 *
 * ODA formatted class (0).
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_formatted: DocumentArchitectureClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted
 * @description
 *
 * ODA formatted class (0).
 * @constant
 * @type {number}
 */
export
const formatted: DocumentArchitectureClass = DocumentArchitectureClass_formatted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_processable
 * @description
 *
 * ODA processable class (1).
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_processable: DocumentArchitectureClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_processable
 * @description
 *
 * ODA processable class (1).
 * @constant
 * @type {number}
 */
export
const processable: DocumentArchitectureClass = DocumentArchitectureClass_processable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted_processable
 * @description
 *
 * ODA formatted-processable class (2).
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_formatted_processable: DocumentArchitectureClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted_processable
 * @description
 *
 * ODA formatted-processable class (2).
 * @constant
 * @type {number}
 */
export
const formatted_processable: DocumentArchitectureClass = DocumentArchitectureClass_formatted_processable; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DocumentArchitectureClass = $._decodeInteger;
export const _encode_DocumentArchitectureClass = $._encodeInteger;


/* eslint-enable */
