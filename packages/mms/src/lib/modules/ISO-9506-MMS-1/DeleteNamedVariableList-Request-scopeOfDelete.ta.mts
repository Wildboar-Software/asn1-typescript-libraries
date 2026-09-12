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
 * @summary DeleteNamedVariableList_Request_scopeOfDelete
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedVariableList-Request-scopeOfDelete ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DeleteNamedVariableList_Request_scopeOfDelete = INTEGER;

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_specific: DeleteNamedVariableList_Request_scopeOfDelete = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_specific
 * @constant
 * @type {number}
 */
export
const specific: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_aa_specific: DeleteNamedVariableList_Request_scopeOfDelete = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_aa_specific
 * @constant
 * @type {number}
 */
export
const aa_specific: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_aa_specific; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_domain: DeleteNamedVariableList_Request_scopeOfDelete = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_domain
 * @constant
 * @type {number}
 */
export
const domain: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_domain; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const DeleteNamedVariableList_Request_scopeOfDelete_vmd: DeleteNamedVariableList_Request_scopeOfDelete = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteNamedVariableList_Request_scopeOfDelete_vmd
 * @constant
 * @type {number}
 */
export
const vmd: DeleteNamedVariableList_Request_scopeOfDelete = DeleteNamedVariableList_Request_scopeOfDelete_vmd; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeleteNamedVariableList_Request_scopeOfDelete: $.ASN1Decoder<DeleteNamedVariableList_Request_scopeOfDelete> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteNamedVariableList_Request_scopeOfDelete
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteNamedVariableList_Request_scopeOfDelete (el: _Element): DeleteNamedVariableList_Request_scopeOfDelete {
    if (!_cached_decoder_for_DeleteNamedVariableList_Request_scopeOfDelete) { _cached_decoder_for_DeleteNamedVariableList_Request_scopeOfDelete = $._decodeInteger; }
    return _cached_decoder_for_DeleteNamedVariableList_Request_scopeOfDelete(el);
}

let _cached_encoder_for_DeleteNamedVariableList_Request_scopeOfDelete: $.ASN1Encoder<DeleteNamedVariableList_Request_scopeOfDelete> | null = null;

/**
 * @summary Encodes a(n) DeleteNamedVariableList_Request_scopeOfDelete into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteNamedVariableList_Request_scopeOfDelete, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteNamedVariableList_Request_scopeOfDelete (value: DeleteNamedVariableList_Request_scopeOfDelete, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteNamedVariableList_Request_scopeOfDelete) { _cached_encoder_for_DeleteNamedVariableList_Request_scopeOfDelete = $._encodeInteger; }
    return _cached_encoder_for_DeleteNamedVariableList_Request_scopeOfDelete(value, elGetter);
}


/* eslint-enable */
