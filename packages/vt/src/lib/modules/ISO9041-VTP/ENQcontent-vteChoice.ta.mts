/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ENQcontent_vteChoice
 * @description
 *
 * Which VTE to keep when ending MIN. ISO/IEC 9041-1:1997
 * §6.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENQcontent-vteChoice ::= INTEGER { draft (0), current (1), either (2) }
 * ```
 */
export
type ENQcontent_vteChoice = INTEGER;

/**
 * @summary ENQcontent_vteChoice_draft
 * @description
 * Keep the draft VTE (0). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_draft: 0 = 0 satisfies ENQcontent_vteChoice; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_draft
 * @description
 * Keep the draft VTE (0). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const draft: 0 = ENQcontent_vteChoice_draft; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @description
 * Keep the current VTE (1). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_current: 1 = 1 satisfies ENQcontent_vteChoice; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @description
 * Keep the current VTE (1). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const current: 1 = ENQcontent_vteChoice_current; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @description
 * Either VTE is acceptable (2). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_either: 2 = 2 satisfies ENQcontent_vteChoice; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @description
 * Either VTE is acceptable (2). ISO/IEC 9041-1:1997 §6.9.
 * @constant
 * @type {number}
 */
export
const either: 2 = ENQcontent_vteChoice_either; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ENQcontent_vteChoice: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ENQcontent_vteChoice: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
