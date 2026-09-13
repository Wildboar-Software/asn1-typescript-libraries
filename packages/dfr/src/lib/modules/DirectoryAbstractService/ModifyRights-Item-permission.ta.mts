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
 * @summary ModifyRights_Item_permission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyRights-Item-permission ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ModifyRights_Item_permission = BIT_STRING;

/**
 * @summary ModifyRights_Item_permission_add
 * @constant
 */
export
const ModifyRights_Item_permission_add: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary add
 * @constant
 */
export
const add: number = ModifyRights_Item_permission_add; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_remove
 * @constant
 */
export
const ModifyRights_Item_permission_remove: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary remove
 * @constant
 */
export
const remove: number = ModifyRights_Item_permission_remove; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_rename
 * @constant
 */
export
const ModifyRights_Item_permission_rename: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rename
 * @constant
 */
export
const rename: number = ModifyRights_Item_permission_rename; /* SHORT_NAMED_BIT */

/**
 * @summary ModifyRights_Item_permission_move
 * @constant
 */
export
const ModifyRights_Item_permission_move: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary move
 * @constant
 */
export
const move: number = ModifyRights_Item_permission_move; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ModifyRights_Item_permission: $.ASN1Decoder<ModifyRights_Item_permission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRights_Item_permission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyRights_Item_permission (el: _Element): ModifyRights_Item_permission {
    if (!_cached_decoder_for_ModifyRights_Item_permission) { _cached_decoder_for_ModifyRights_Item_permission = $._decodeBitString; }
    return _cached_decoder_for_ModifyRights_Item_permission(el);
}

let _cached_encoder_for_ModifyRights_Item_permission: $.ASN1Encoder<ModifyRights_Item_permission> | null = null;

/**
 * @summary Encodes a(n) ModifyRights_Item_permission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRights_Item_permission, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyRights_Item_permission (value: ModifyRights_Item_permission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyRights_Item_permission) { _cached_encoder_for_ModifyRights_Item_permission = $._encodeBitString; }
    return _cached_encoder_for_ModifyRights_Item_permission(value, elGetter);
}


/* eslint-enable */
