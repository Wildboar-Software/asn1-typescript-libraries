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
 * @summary AccessRuleOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRuleOffer  ::=  BIT STRING {
 *     wavar           (0),
 *     waci            (1),
 *     waca            (2),
 *     nsac            (3),
 *     wavar-and-waci  (4),
 *     wavar-and-waca  (5),
 *     no-access       (6)
 * }
 * ```
 */
export
type AccessRuleOffer = BIT_STRING;

/**
 * @summary AccessRuleOffer_wavar
 * @constant
 */
export
const AccessRuleOffer_wavar: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary wavar
 * @constant
 */
export
const wavar: number = AccessRuleOffer_wavar; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waci
 * @constant
 */
export
const AccessRuleOffer_waci: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary waci
 * @constant
 */
export
const waci: number = AccessRuleOffer_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_waca
 * @constant
 */
export
const AccessRuleOffer_waca: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary waca
 * @constant
 */
export
const waca: number = AccessRuleOffer_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_nsac
 * @constant
 */
export
const AccessRuleOffer_nsac: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary nsac
 * @constant
 */
export
const nsac: number = AccessRuleOffer_nsac; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waci
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waci: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waci
 * @constant
 */
export
const wavar_and_waci: number = AccessRuleOffer_wavar_and_waci; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_wavar_and_waca
 * @constant
 */
export
const AccessRuleOffer_wavar_and_waca: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary wavar_and_waca
 * @constant
 */
export
const wavar_and_waca: number = AccessRuleOffer_wavar_and_waca; /* SHORT_NAMED_BIT */

/**
 * @summary AccessRuleOffer_no_access
 * @constant
 */
export
const AccessRuleOffer_no_access: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary no_access
 * @constant
 */
export
const no_access: number = AccessRuleOffer_no_access; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AccessRuleOffer: $.ASN1Decoder<AccessRuleOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRuleOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessRuleOffer (el: _Element): AccessRuleOffer {
    if (!_cached_decoder_for_AccessRuleOffer) { _cached_decoder_for_AccessRuleOffer = $._decodeBitString; }
    return _cached_decoder_for_AccessRuleOffer(el);
}

let _cached_encoder_for_AccessRuleOffer: $.ASN1Encoder<AccessRuleOffer> | null = null;

/**
 * @summary Encodes a(n) AccessRuleOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRuleOffer, encoded as an ASN.1 Element.
 */
export
function _encode_AccessRuleOffer (value: AccessRuleOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessRuleOffer) { _cached_encoder_for_AccessRuleOffer = $._encodeBitString; }
    return _cached_encoder_for_AccessRuleOffer(value, elGetter);
}


/* eslint-enable */
