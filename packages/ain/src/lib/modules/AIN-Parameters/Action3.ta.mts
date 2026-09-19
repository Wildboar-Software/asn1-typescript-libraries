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
import { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
import { EditSpecificEntry, _decode_EditSpecificEntry, _encode_EditSpecificEntry } from "../AIN-Parameters/EditSpecificEntry.ta.mjs";
// export { EditSpecificEntry, _decode_EditSpecificEntry, _encode_EditSpecificEntry } from "../AIN-Parameters/EditSpecificEntry.ta.mjs";
import { EditAllEntries, _enum_for_EditAllEntries, EditAllEntries_deleteAllEntries /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteAllEntries /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditAllEntries_deleteAllPrivateEntries /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteAllPrivateEntries /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditAllEntries, _encode_EditAllEntries } from "../AIN-Parameters/EditAllEntries.ta.mjs";
// export { EditAllEntries, _enum_for_EditAllEntries, EditAllEntries_deleteAllEntries /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteAllEntries /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditAllEntries_deleteAllPrivateEntries /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteAllPrivateEntries /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditAllEntries, _encode_EditAllEntries } from "../AIN-Parameters/EditAllEntries.ta.mjs";


/**
 * @summary Action3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action3 ::=  CHOICE{
 *         activationStateCode [2] IMPLICIT ActivationStateCode,
 *         editSpecificEntry   [3] IMPLICIT EditSpecificEntry,
 *         editAllEntries      [4] IMPLICIT EditAllEntries
 *     }
 * ```
 */
export
type Action3 =
    { activationStateCode: ActivationStateCode } /* CHOICE_ALT_ROOT */
    | { editSpecificEntry: EditSpecificEntry } /* CHOICE_ALT_ROOT */
    | { editAllEntries: EditAllEntries } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action3: $.ASN1Decoder<Action3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action3 (el: _Element): Action3 {
    if (!_cached_decoder_for_Action3) { _cached_decoder_for_Action3 = $._decode_inextensible_choice<Action3>({
    "CONTEXT 2": [ "activationStateCode", $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode) ],
    "CONTEXT 3": [ "editSpecificEntry", $._decode_implicit<EditSpecificEntry>(() => _decode_EditSpecificEntry) ],
    "CONTEXT 4": [ "editAllEntries", $._decode_implicit<EditAllEntries>(() => _decode_EditAllEntries) ]
}); }
    return _cached_decoder_for_Action3(el);
}

let _cached_encoder_for_Action3: $.ASN1Encoder<Action3> | null = null;

/**
 * @summary Encodes a(n) Action3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action3, encoded as an ASN.1 Element.
 */
export
function _encode_Action3 (value: Action3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action3) { _cached_encoder_for_Action3 = $._encode_choice<Action3>({
    "activationStateCode": $._encode_implicit(_TagClass.context, 2, () => _encode_ActivationStateCode, $.BER),
    "editSpecificEntry": $._encode_implicit(_TagClass.context, 3, () => _encode_EditSpecificEntry, $.BER),
    "editAllEntries": $._encode_implicit(_TagClass.context, 4, () => _encode_EditAllEntries, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action3(value, elGetter);
}


/* eslint-enable */
