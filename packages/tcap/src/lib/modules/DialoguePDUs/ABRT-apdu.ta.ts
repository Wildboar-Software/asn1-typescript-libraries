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
    ABRT_source,
    ABRT_source_dialogue_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
    dialogue_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
    ABRT_source_dialogue_service_provider /* IMPORTED_LONG_NAMED_INTEGER */,
    dialogue_service_provider /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ABRT_source,
    _encode_ABRT_source,
} from '../DialoguePDUs/ABRT-source.ta';
export {
    ABRT_source,
    ABRT_source_dialogue_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
    dialogue_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
    ABRT_source_dialogue_service_provider /* IMPORTED_LONG_NAMED_INTEGER */,
    dialogue_service_provider /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ABRT_source,
    _encode_ABRT_source,
} from '../DialoguePDUs/ABRT-source.ta';

/* START_OF_SYMBOL_DEFINITION ABRT_apdu */
/**
 * @summary ABRT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-apdu ::= [APPLICATION 4] IMPLICIT SEQUENCE {
 *   abort-source      [0] IMPLICIT ABRT-source,
 *   user-information  [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ABRT_apdu {
    constructor(
        /**
         * @summary `abort_source`.
         * @public
         * @readonly
         */
        readonly abort_source: ABRT_source,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<EXTERNAL[]>
    ) {}

    /**
     * @summary Restructures an object into a ABRT_apdu
     * @description
     *
     * This takes an `object` and converts it to a `ABRT_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ABRT_apdu`.
     * @returns {ABRT_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof ABRT_apdu]: ABRT_apdu[_K] }
    ): ABRT_apdu {
        return new ABRT_apdu(_o.abort_source, _o.user_information);
    }
}
/* END_OF_SYMBOL_DEFINITION ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ABRT_apdu */
/**
 * @summary The Leading Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'abort-source',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-information',
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ABRT_apdu */
/**
 * @summary The Trailing Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ABRT_apdu */
/**
 * @summary The Extension Addition Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_apdu */
let _cached_decoder_for_ABRT_apdu: $.ASN1Decoder<ABRT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_ABRT_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_apdu} The decoded data structure.
 */
export function _decode_ABRT_apdu(el: _Element) {
    if (!_cached_decoder_for_ABRT_apdu) {
        _cached_decoder_for_ABRT_apdu = $._decode_implicit<ABRT_apdu>(
            () =>
                function (el: _Element): ABRT_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let abort_source!: ABRT_source;
                    let user_information: OPTIONAL<EXTERNAL[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        'abort-source': (_el: _Element): void => {
                            abort_source = $._decode_implicit<ABRT_source>(
                                () => _decode_ABRT_source
                            )(_el);
                        },
                        'user-information': (_el: _Element): void => {
                            user_information = $._decode_implicit<EXTERNAL[]>(
                                () =>
                                    $._decodeSequenceOf<EXTERNAL>(
                                        () => $._decodeExternal
                                    )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_ABRT_apdu,
                        _extension_additions_list_spec_for_ABRT_apdu,
                        _root_component_type_list_2_spec_for_ABRT_apdu,
                        undefined
                    );
                    return new ABRT_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
                        abort_source,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_ABRT_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_apdu */
let _cached_encoder_for_ABRT_apdu: $.ASN1Encoder<ABRT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_ABRT_apdu */
/**
 * @summary Encodes a(n) ABRT_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_apdu(
    value: ABRT_apdu,
    elGetter: $.ASN1Encoder<ABRT_apdu>
) {
    if (!_cached_encoder_for_ABRT_apdu) {
        _cached_encoder_for_ABRT_apdu = $._encode_implicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: ABRT_apdu,
                    elGetter: $.ASN1Encoder<ABRT_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ $._encode_implicit(
                                    _TagClass.context,
                                    0,
                                    () => _encode_ABRT_source,
                                    $.BER
                                )(value.abort_source, $.BER),
                                /* IF_ABSENT  */ value.user_information ===
                                undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          30,
                                          () =>
                                              $._encodeSequenceOf<EXTERNAL>(
                                                  () => $._encodeExternal,
                                                  $.BER
                                              ),
                                          $.BER
                                      )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ABRT_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ABRT_apdu */

/* eslint-enable */
