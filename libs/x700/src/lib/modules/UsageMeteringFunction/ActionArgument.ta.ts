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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION ActionArgument */
/**
 * @summary ActionArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionArgument  ::=  CHOICE {
 *   selectedObjects  SET OF ObjectInstance,
 *   -- set of data objects, controlled by the control
 *   -- object for which the request is appropriate
 *   allObjects       NULL
 *   -- selects all data objects controlled by control
 *   -- object
 * }
 * ```
 */
export type ActionArgument =
    | { selectedObjects: ObjectInstance[] } /* CHOICE_ALT_ROOT */
    | { allObjects: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ActionArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionArgument */
let _cached_decoder_for_ActionArgument: $.ASN1Decoder<ActionArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ActionArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionArgument} The decoded data structure.
 */
export function _decode_ActionArgument(el: _Element) {
    if (!_cached_decoder_for_ActionArgument) {
        _cached_decoder_for_ActionArgument = $._decode_inextensible_choice<ActionArgument>(
            {
                'UNIVERSAL 17': [
                    'selectedObjects',
                    $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'UNIVERSAL 5': ['allObjects', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_ActionArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionArgument */
let _cached_encoder_for_ActionArgument: $.ASN1Encoder<ActionArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ActionArgument */
/**
 * @summary Encodes a(n) ActionArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionArgument, encoded as an ASN.1 Element.
 */
export function _encode_ActionArgument(
    value: ActionArgument,
    elGetter: $.ASN1Encoder<ActionArgument>
) {
    if (!_cached_encoder_for_ActionArgument) {
        _cached_encoder_for_ActionArgument = $._encode_choice<ActionArgument>(
            {
                selectedObjects: $._encodeSetOf<ObjectInstance>(
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                allObjects: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActionArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionArgument */

/* eslint-enable */
