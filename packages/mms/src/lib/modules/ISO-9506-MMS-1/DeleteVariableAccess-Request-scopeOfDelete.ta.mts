/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
 * @summary DeleteVariableAccess_Request_scopeOfDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteVariableAccess-Request-scopeOfDelete ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DeleteVariableAccess_Request_scopeOfDelete = INTEGER;

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_specific: DeleteVariableAccess_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_aa_specific: DeleteVariableAccess_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_domain: DeleteVariableAccess_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const domain: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const DeleteVariableAccess_Request_scopeOfDelete_vmd: DeleteVariableAccess_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteVariableAccess_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const vmd: DeleteVariableAccess_Request_scopeOfDelete = DeleteVariableAccess_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeleteVariableAccess_Request_scopeOfDelete: $.ASN1Decoder<DeleteVariableAccess_Request_scopeOfDelete> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteVariableAccess_Request_scopeOfDelete
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteVariableAccess_Request_scopeOfDelete (el: _Element): DeleteVariableAccess_Request_scopeOfDelete {
    if (!_cached_decoder_for_DeleteVariableAccess_Request_scopeOfDelete) { _cached_decoder_for_DeleteVariableAccess_Request_scopeOfDelete = $._decodeInteger; }
    return _cached_decoder_for_DeleteVariableAccess_Request_scopeOfDelete(el);
}

let _cached_encoder_for_DeleteVariableAccess_Request_scopeOfDelete: $.ASN1Encoder<DeleteVariableAccess_Request_scopeOfDelete> | null = null;

/**
 * @summary Encodes a(n) DeleteVariableAccess_Request_scopeOfDelete into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteVariableAccess_Request_scopeOfDelete, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteVariableAccess_Request_scopeOfDelete (value: DeleteVariableAccess_Request_scopeOfDelete, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteVariableAccess_Request_scopeOfDelete) { _cached_encoder_for_DeleteVariableAccess_Request_scopeOfDelete = $._encodeInteger; }
    return _cached_encoder_for_DeleteVariableAccess_Request_scopeOfDelete(value, elGetter);
}


/* eslint-enable */
