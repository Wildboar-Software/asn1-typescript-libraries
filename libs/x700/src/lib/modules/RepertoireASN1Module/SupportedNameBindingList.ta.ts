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
    NameBinding,
    _decode_NameBinding,
    _encode_NameBinding,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NameBinding.ta';
export {
    NameBinding,
    _decode_NameBinding,
    _encode_NameBinding,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NameBinding.ta';

/* START_OF_SYMBOL_DEFINITION SupportedNameBindingList */
/**
 * @summary SupportedNameBindingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedNameBindingList  ::=  SET OF NameBinding
 * ```
 */
export type SupportedNameBindingList = NameBinding[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportedNameBindingList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedNameBindingList */
let _cached_decoder_for_SupportedNameBindingList: $.ASN1Decoder<SupportedNameBindingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedNameBindingList */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedNameBindingList */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedNameBindingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedNameBindingList} The decoded data structure.
 */
export function _decode_SupportedNameBindingList(el: _Element) {
    if (!_cached_decoder_for_SupportedNameBindingList) {
        _cached_decoder_for_SupportedNameBindingList = $._decodeSetOf<NameBinding>(
            () => _decode_NameBinding
        );
    }
    return _cached_decoder_for_SupportedNameBindingList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedNameBindingList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedNameBindingList */
let _cached_encoder_for_SupportedNameBindingList: $.ASN1Encoder<SupportedNameBindingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedNameBindingList */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedNameBindingList */
/**
 * @summary Encodes a(n) SupportedNameBindingList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedNameBindingList, encoded as an ASN.1 Element.
 */
export function _encode_SupportedNameBindingList(
    value: SupportedNameBindingList,
    elGetter: $.ASN1Encoder<SupportedNameBindingList>
) {
    if (!_cached_encoder_for_SupportedNameBindingList) {
        _cached_encoder_for_SupportedNameBindingList = $._encodeSetOf<NameBinding>(
            () => _encode_NameBinding,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedNameBindingList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedNameBindingList */

/* eslint-enable */
