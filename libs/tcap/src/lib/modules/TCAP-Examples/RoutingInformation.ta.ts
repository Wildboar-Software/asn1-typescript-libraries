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
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta';
export {
    IsdnNumber,
    _decode_IsdnNumber,
    _encode_IsdnNumber,
} from '../TCAP-Examples/IsdnNumber.ta';

/* START_OF_SYMBOL_DEFINITION RoutingInformation */
/**
 * @summary RoutingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingInformation  ::=  CHOICE {
 *   reroutingNumber    [0] IMPLICIT IsdnNumber,
 *   forwardedToNumber  [1] IMPLICIT IsdnNumber
 * }
 * ```
 */
export type RoutingInformation =
    | { reroutingNumber: IsdnNumber } /* CHOICE_ALT_ROOT */
    | { forwardedToNumber: IsdnNumber } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RoutingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingInformation */
let _cached_decoder_for_RoutingInformation: $.ASN1Decoder<RoutingInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingInformation} The decoded data structure.
 */
export function _decode_RoutingInformation(el: _Element) {
    if (!_cached_decoder_for_RoutingInformation) {
        _cached_decoder_for_RoutingInformation = $._decode_inextensible_choice<RoutingInformation>(
            {
                'CONTEXT 0': [
                    'reroutingNumber',
                    $._decode_implicit<IsdnNumber>(() => _decode_IsdnNumber),
                ],
                'CONTEXT 1': [
                    'forwardedToNumber',
                    $._decode_implicit<IsdnNumber>(() => _decode_IsdnNumber),
                ],
            }
        );
    }
    return _cached_decoder_for_RoutingInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoutingInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingInformation */
let _cached_encoder_for_RoutingInformation: $.ASN1Encoder<RoutingInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingInformation */
/**
 * @summary Encodes a(n) RoutingInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInformation, encoded as an ASN.1 Element.
 */
export function _encode_RoutingInformation(
    value: RoutingInformation,
    elGetter: $.ASN1Encoder<RoutingInformation>
) {
    if (!_cached_encoder_for_RoutingInformation) {
        _cached_encoder_for_RoutingInformation = $._encode_choice<RoutingInformation>(
            {
                reroutingNumber: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IsdnNumber,
                    $.BER
                ),
                forwardedToNumber: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_IsdnNumber,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RoutingInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoutingInformation */

/* eslint-enable */
