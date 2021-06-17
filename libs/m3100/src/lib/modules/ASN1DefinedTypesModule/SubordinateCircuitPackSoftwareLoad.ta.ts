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

/* START_OF_SYMBOL_DEFINITION SubordinateCircuitPackSoftwareLoad */
/**
 * @summary SubordinateCircuitPackSoftwareLoad
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubordinateCircuitPackSoftwareLoad  ::=  CHOICE {
 *   notApplicable        NULL,
 *   softwareInstances    [0]  SEQUENCE OF ObjectInstance,
 *   softwareIdentifiers  [1]  SEQUENCE OF PrintableString
 * }
 * ```
 */
export type SubordinateCircuitPackSoftwareLoad =
    | { notApplicable: NULL } /* CHOICE_ALT_ROOT */
    | { softwareInstances: ObjectInstance[] } /* CHOICE_ALT_ROOT */
    | { softwareIdentifiers: PrintableString[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SubordinateCircuitPackSoftwareLoad */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubordinateCircuitPackSoftwareLoad */
let _cached_decoder_for_SubordinateCircuitPackSoftwareLoad: $.ASN1Decoder<SubordinateCircuitPackSoftwareLoad> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubordinateCircuitPackSoftwareLoad */

/* START_OF_SYMBOL_DEFINITION _decode_SubordinateCircuitPackSoftwareLoad */
/**
 * @summary Decodes an ASN.1 element into a(n) SubordinateCircuitPackSoftwareLoad
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubordinateCircuitPackSoftwareLoad} The decoded data structure.
 */
export function _decode_SubordinateCircuitPackSoftwareLoad(el: _Element) {
    if (!_cached_decoder_for_SubordinateCircuitPackSoftwareLoad) {
        _cached_decoder_for_SubordinateCircuitPackSoftwareLoad = $._decode_inextensible_choice<SubordinateCircuitPackSoftwareLoad>(
            {
                'UNIVERSAL 5': ['notApplicable', $._decodeNull],
                'CONTEXT 0': [
                    'softwareInstances',
                    $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSequenceOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    ),
                ],
                'CONTEXT 1': [
                    'softwareIdentifiers',
                    $._decode_implicit<PrintableString[]>(() =>
                        $._decodeSequenceOf<PrintableString>(
                            () => $._decodePrintableString
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SubordinateCircuitPackSoftwareLoad(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubordinateCircuitPackSoftwareLoad */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubordinateCircuitPackSoftwareLoad */
let _cached_encoder_for_SubordinateCircuitPackSoftwareLoad: $.ASN1Encoder<SubordinateCircuitPackSoftwareLoad> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubordinateCircuitPackSoftwareLoad */

/* START_OF_SYMBOL_DEFINITION _encode_SubordinateCircuitPackSoftwareLoad */
/**
 * @summary Encodes a(n) SubordinateCircuitPackSoftwareLoad into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubordinateCircuitPackSoftwareLoad, encoded as an ASN.1 Element.
 */
export function _encode_SubordinateCircuitPackSoftwareLoad(
    value: SubordinateCircuitPackSoftwareLoad,
    elGetter: $.ASN1Encoder<SubordinateCircuitPackSoftwareLoad>
) {
    if (!_cached_encoder_for_SubordinateCircuitPackSoftwareLoad) {
        _cached_encoder_for_SubordinateCircuitPackSoftwareLoad = $._encode_choice<SubordinateCircuitPackSoftwareLoad>(
            {
                notApplicable: $._encodeNull,
                softwareInstances: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        ),
                    $.BER
                ),
                softwareIdentifiers: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<PrintableString>(
                            () => $._encodePrintableString,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubordinateCircuitPackSoftwareLoad(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SubordinateCircuitPackSoftwareLoad */

/* eslint-enable */
