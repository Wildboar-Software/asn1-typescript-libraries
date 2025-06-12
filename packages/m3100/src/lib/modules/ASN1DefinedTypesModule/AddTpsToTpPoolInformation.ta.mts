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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AddTpsToTpPoolInformation_Item,
    _decode_AddTpsToTpPoolInformation_Item,
    _encode_AddTpsToTpPoolInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolInformation-Item.ta.mjs';
export {
    AddTpsToTpPoolInformation_Item,
    _decode_AddTpsToTpPoolInformation_Item,
    _encode_AddTpsToTpPoolInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolInformation-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AddTpsToTpPoolInformation */
/**
 * @summary AddTpsToTpPoolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {tps       SET OF TerminationPointInformation,
 *               toTpPool  ObjectInstance OPTIONAL}
 * ```
 */
export type AddTpsToTpPoolInformation = AddTpsToTpPoolInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AddTpsToTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToTpPoolInformation */
let _cached_decoder_for_AddTpsToTpPoolInformation: $.ASN1Decoder<AddTpsToTpPoolInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AddTpsToTpPoolInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolInformation} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolInformation(el: _Element) {
    if (!_cached_decoder_for_AddTpsToTpPoolInformation) {
        _cached_decoder_for_AddTpsToTpPoolInformation = $._decodeSequenceOf<AddTpsToTpPoolInformation_Item>(
            () => _decode_AddTpsToTpPoolInformation_Item
        );
    }
    return _cached_decoder_for_AddTpsToTpPoolInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddTpsToTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToTpPoolInformation */
let _cached_encoder_for_AddTpsToTpPoolInformation: $.ASN1Encoder<AddTpsToTpPoolInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AddTpsToTpPoolInformation */
/**
 * @summary Encodes a(n) AddTpsToTpPoolInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolInformation(
    value: AddTpsToTpPoolInformation,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolInformation>
) {
    if (!_cached_encoder_for_AddTpsToTpPoolInformation) {
        _cached_encoder_for_AddTpsToTpPoolInformation = $._encodeSequenceOf<AddTpsToTpPoolInformation_Item>(
            () => _encode_AddTpsToTpPoolInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToTpPoolInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddTpsToTpPoolInformation */

/* eslint-enable */
