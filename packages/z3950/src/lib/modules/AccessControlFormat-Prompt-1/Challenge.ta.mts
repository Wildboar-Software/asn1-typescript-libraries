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
import { Challenge_Item, _decode_Challenge_Item, _encode_Challenge_Item } from "../AccessControlFormat-Prompt-1/Challenge-Item.ta.mjs";
// export { Challenge_Item, _decode_Challenge_Item, _encode_Challenge_Item } from "../AccessControlFormat-Prompt-1/Challenge-Item.ta.mjs";


/**
 * @summary Challenge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge  ::=  SEQUENCE OF SEQUENCE {
 *       promptId         [1] PromptId,
 *                              -- Target supplies a number (for an enumerated
 *                              -- prompt) or string (for a non-enumerated
 *                              -- prompt), for each prompt, and the origin
 *                              -- returns it in response, for this prompt, so
 *                              -- target may correlate the prompt response with
 *                              -- the prompt.
 *    defaultResponse    [2] IMPLICIT InternationalString OPTIONAL,
 *    promptInfo         [3] CHOICE{ 
 *                               character   [1] IMPLICIT InternationalString,
 *                               encrypted   [2] IMPLICIT Encryption} OPTIONAL,
 *                                    -- Information corresponding to an
 *                                    -- emumerated prompt. For example if 'type',
 *                                    -- within PromptId, is 'copyright', then
 *                                    -- promptInfo may contain a copyright
 *                                    -- statement.  
 *    regExpr            [4] IMPLICIT InternationalString OPTIONAL,
 *                              -- A regular expression that promptResponse should
 *                              -- match. See IEEE 1003.2 Volume 1, Section 2.8
 *                              -- "Regular Expression Notation." For example if
 *                              -- promptId is "Year of publication," regExpr
 *                              -- might be "19[89][0-9]|20[0-9][0-9]".
 *    responseRequired   [5] IMPLICIT NULL OPTIONAL,
 *    allowedValues      [6] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *                              -- e.g. promptId="Desired color"; allowed = 'red',
 *                              -- 'blue','Green'.
 *    shouldSave         [7] IMPLICIT NULL OPTIONAL,
 *                              -- Target recommends that origin save the data
 *                              -- that it prompts from the user corresponding to
 *                              -- this prompt, because it is likely to be
 *                              -- requested again (so origin might not have to
 *                              -- prompt the user next time).
 *    dataType           [8] IMPLICIT INTEGER{
 *                                 integer         (1),
 *                                 date            (2),
 *                                 float           (3),
 *                                 alphaNumeric    (4),
 *                                 url-urn         (5),
 *                                 boolean         (6)} OPTIONAL,
 *                                    -- Target telling origin type of data it
 *                                    -- wants. E.g., if "date" is specified,
 *                                    -- presumably the origin will try to prompt
 *                                    -- something "date-like" from the user.
 *    diagnostic      [9] IMPLICIT EXTERNAL OPTIONAL
 *                           -- Intended for repeat requests when there is an
 *                           -- error the origin should report to the user from
 *                           -- previous attempt.
 *                         }
 * ```
 */
export
type Challenge = Challenge_Item[]; // SequenceOfType

let _cached_decoder_for_Challenge: $.ASN1Decoder<Challenge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Challenge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Challenge (el: _Element): Challenge {
    if (!_cached_decoder_for_Challenge) { _cached_decoder_for_Challenge = $._decodeSequenceOf<Challenge_Item>(() => _decode_Challenge_Item); }
    return _cached_decoder_for_Challenge(el);
}

let _cached_encoder_for_Challenge: $.ASN1Encoder<Challenge> | null = null;

/**
 * @summary Encodes a(n) Challenge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge, encoded as an ASN.1 Element.
 */
export
function _encode_Challenge (value: Challenge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Challenge) { _cached_encoder_for_Challenge = $._encodeSequenceOf<Challenge_Item>(() => _encode_Challenge_Item, $.BER); }
    return _cached_encoder_for_Challenge(value, elGetter);
}


/* eslint-enable */
