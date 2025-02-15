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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SignalReceived_Item,
    _decode_SignalReceived_Item,
    _encode_SignalReceived_Item,
} from '../TestCategories-ASN1Module/SignalReceived-Item.ta';
export {
    SignalReceived_Item,
    _decode_SignalReceived_Item,
    _encode_SignalReceived_Item,
} from '../TestCategories-ASN1Module/SignalReceived-Item.ta';

/* START_OF_SYMBOL_DEFINITION SignalReceived */
/**
 * @summary SignalReceived
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalReceived  ::=
 *   SET OF
 *     SEQUENCE {signalType         CDTC-SIGNAL-TYPE.&id({SignalTypeSet}),
 *               signalValue
 *                 CDTC-SIGNAL-TYPE.&Value({SignalTypeSet}{@.signalType}),
 *               mORTs              MORTs,
 *               associatedObjects  AssociatedObjects}
 * ```
 */
export type SignalReceived = SignalReceived_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SignalReceived */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalReceived */
let _cached_decoder_for_SignalReceived: $.ASN1Decoder<SignalReceived> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalReceived */

/* START_OF_SYMBOL_DEFINITION _decode_SignalReceived */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalReceived
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalReceived} The decoded data structure.
 */
export function _decode_SignalReceived(el: _Element) {
    if (!_cached_decoder_for_SignalReceived) {
        _cached_decoder_for_SignalReceived = $._decodeSetOf<SignalReceived_Item>(
            () => _decode_SignalReceived_Item
        );
    }
    return _cached_decoder_for_SignalReceived(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignalReceived */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalReceived */
let _cached_encoder_for_SignalReceived: $.ASN1Encoder<SignalReceived> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalReceived */

/* START_OF_SYMBOL_DEFINITION _encode_SignalReceived */
/**
 * @summary Encodes a(n) SignalReceived into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalReceived, encoded as an ASN.1 Element.
 */
export function _encode_SignalReceived(
    value: SignalReceived,
    elGetter: $.ASN1Encoder<SignalReceived>
) {
    if (!_cached_encoder_for_SignalReceived) {
        _cached_encoder_for_SignalReceived = $._encodeSetOf<SignalReceived_Item>(
            () => _encode_SignalReceived_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SignalReceived(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignalReceived */

/* eslint-enable */
