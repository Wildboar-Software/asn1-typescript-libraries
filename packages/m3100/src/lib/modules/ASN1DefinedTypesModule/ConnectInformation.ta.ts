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
    ConnectInformation_Item,
    _decode_ConnectInformation_Item,
    _encode_ConnectInformation_Item,
} from '../ASN1DefinedTypesModule/ConnectInformation-Item.ta';
export {
    ConnectInformation_Item,
    _decode_ConnectInformation_Item,
    _encode_ConnectInformation_Item,
} from '../ASN1DefinedTypesModule/ConnectInformation-Item.ta';

/* START_OF_SYMBOL_DEFINITION ConnectInformation */
/**
 * @summary ConnectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {itemType
 *                 CHOICE {unidirectional  [0]  ConnectionType,
 *                         bidirectional   [1]  ConnectionTypeBi,
 *                         addleg          [2]  AddLeg},
 *               administrativeState   AdministrativeState OPTIONAL,
 *               namedCrossConnection  [3]  NamedCrossConnection OPTIONAL,
 *               ...,
 *               userLabel             [4]  UserLabel OPTIONAL,
 *               redline               [5]  Boolean OPTIONAL,
 *               ...,
 *               additionalInfo        [6]  AdditionalInformation OPTIONAL
 *     }
 * ```
 */
export type ConnectInformation = ConnectInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation */
let _cached_decoder_for_ConnectInformation: $.ASN1Decoder<ConnectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectInformation} The decoded data structure.
 */
export function _decode_ConnectInformation(el: _Element) {
    if (!_cached_decoder_for_ConnectInformation) {
        _cached_decoder_for_ConnectInformation = $._decodeSequenceOf<ConnectInformation_Item>(
            () => _decode_ConnectInformation_Item
        );
    }
    return _cached_decoder_for_ConnectInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation */
let _cached_encoder_for_ConnectInformation: $.ASN1Encoder<ConnectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectInformation */
/**
 * @summary Encodes a(n) ConnectInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConnectInformation(
    value: ConnectInformation,
    elGetter: $.ASN1Encoder<ConnectInformation>
) {
    if (!_cached_encoder_for_ConnectInformation) {
        _cached_encoder_for_ConnectInformation = $._encodeSequenceOf<ConnectInformation_Item>(
            () => _encode_ConnectInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConnectInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectInformation */

/* eslint-enable */
