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
import { AlternateAccessSelection_selectAlternateAccess, _decode_AlternateAccessSelection_selectAlternateAccess, _encode_AlternateAccessSelection_selectAlternateAccess } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess.ta.mjs";
// export { AlternateAccessSelection_selectAlternateAccess, _decode_AlternateAccessSelection_selectAlternateAccess, _encode_AlternateAccessSelection_selectAlternateAccess } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess.ta.mjs";
import { AlternateAccessSelection_selectAccess, _decode_AlternateAccessSelection_selectAccess, _encode_AlternateAccessSelection_selectAccess } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAccess.ta.mjs";
// export { AlternateAccessSelection_selectAccess, _decode_AlternateAccessSelection_selectAccess, _encode_AlternateAccessSelection_selectAccess } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAccess.ta.mjs";


/**
 * @summary AlternateAccessSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccessSelection  ::=  CHOICE {
 *    selectAlternateAccess         [0] IMPLICIT SEQUENCE {
 *        accessSelection            CHOICE {
 *           component                  [0] IMPLICIT Identifier,
 *        component                     [0] IMPLICIT NULL,
 *           index                      [1] IMPLICIT Unsigned32,
 *           indexRange                 [2] IMPLICIT SEQUENCE {
 *              lowIndex                   [0] IMPLICIT Unsigned32,
 *              numberOfElements           [1] IMPLICIT Unsigned32
 *              },
 *           index                      [1] IMPLICIT NULL,
 *           indexRange                 [2] IMPLICIT NULL,
 *           allElements                [3] IMPLICIT NULL
 *           },
 *        alternateAccess        AlternateAccess
 *        },
 *    selectAccess                  CHOICE {
 *        component                     [1] IMPLICIT Identifier,
 *        component                     [1] IMPLICIT NULL,
 *        index                         [2] IMPLICIT Unsigned32,
 *        indexRange                    [3] IMPLICIT SEQUENCE {
 *           lowIndex                      [0] IMPLICIT Unsigned32,
 *           numberOfElements              [1] IMPLICIT Unsigned32
 *           },
 *        index                         [2] IMPLICIT NULL,
 *        indexRange                    [3] IMPLICIT NULL,
 *        allElements                   [4] IMPLICIT NULL
 *        }  }
 * ```
 */
export
type AlternateAccessSelection =
    { selectAlternateAccess: AlternateAccessSelection_selectAlternateAccess } /* CHOICE_ALT_ROOT */
    | { selectAccess: AlternateAccessSelection_selectAccess } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternateAccessSelection: $.ASN1Decoder<AlternateAccessSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccessSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccessSelection (el: _Element): AlternateAccessSelection {
    if (!_cached_decoder_for_AlternateAccessSelection) { _cached_decoder_for_AlternateAccessSelection = $._decode_inextensible_choice<AlternateAccessSelection>({
    "CONTEXT 0": [ "selectAlternateAccess", $._decode_implicit<AlternateAccessSelection_selectAlternateAccess>(() => _decode_AlternateAccessSelection_selectAlternateAccess) ],
    "CONTEXT 1": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 1": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 2": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 3": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 2": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 3": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ],
    "CONTEXT 4": [ "selectAccess", _decode_AlternateAccessSelection_selectAccess ]
}); }
    return _cached_decoder_for_AlternateAccessSelection(el);
}

let _cached_encoder_for_AlternateAccessSelection: $.ASN1Encoder<AlternateAccessSelection> | null = null;

/**
 * @summary Encodes a(n) AlternateAccessSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccessSelection, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccessSelection (value: AlternateAccessSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccessSelection) { _cached_encoder_for_AlternateAccessSelection = $._encode_choice<AlternateAccessSelection>({
    "selectAlternateAccess": $._encode_implicit(_TagClass.context, 0, () => _encode_AlternateAccessSelection_selectAlternateAccess, $.BER),
    "selectAccess": _encode_AlternateAccessSelection_selectAccess,
}, $.BER); }
    return _cached_encoder_for_AlternateAccessSelection(value, elGetter);
}


/* eslint-enable */
