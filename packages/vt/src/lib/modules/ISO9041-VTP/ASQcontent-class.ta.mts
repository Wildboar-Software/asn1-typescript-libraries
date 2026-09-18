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
 * @summary ASQcontent_class
 * @description
 *
 * VT-class of the association. Only `basic` (1) invokes
 * ISO/IEC 9040. Other values are outside ISO/IEC 9041-1:1997.
 * ISO/IEC 9041-1:1997 §6.2, §12.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASQcontent-class ::= INTEGER { basic (1) }
 * ```
 */
export
type ASQcontent_class = INTEGER;

/**
 * @summary ASQcontent_class_basic
 * @description
 * ISO/IEC 9040 Basic Class. ISO/IEC 9041-1:1997 §6.2.
 * @constant
 * @type {number}
 */
export
const ASQcontent_class_basic: ASQcontent_class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_class_basic
 * @description
 * ISO/IEC 9040 Basic Class. ISO/IEC 9041-1:1997 §6.2.
 * @constant
 * @type {number}
 */
export
const basic: ASQcontent_class = ASQcontent_class_basic; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASQcontent_class = $._decodeInteger;
export const _encode_ASQcontent_class = $._encodeInteger;


/* eslint-enable */
