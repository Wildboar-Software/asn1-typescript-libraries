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
 * @summary ENQcontent_vteChoice
 * @description
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
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_draft: ENQcontent_vteChoice = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_draft
 * @constant
 * @type {number}
 */
export
const draft: ENQcontent_vteChoice = ENQcontent_vteChoice_draft; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_current: ENQcontent_vteChoice = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @constant
 * @type {number}
 */
export
const current: ENQcontent_vteChoice = ENQcontent_vteChoice_current; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_either: ENQcontent_vteChoice = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @constant
 * @type {number}
 */
export
const either: ENQcontent_vteChoice = ENQcontent_vteChoice_either; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ENQcontent_vteChoice = $._decodeInteger;
export const _encode_ENQcontent_vteChoice = $._encodeInteger;


/* eslint-enable */
