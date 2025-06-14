/* eslint-disable */
import {
    OPTIONAL,
    EXTERNAL,
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
    Release_request_reason,
    _decode_Release_request_reason,
    _encode_Release_request_reason,
} from '../DialoguePDUs/Release-request-reason.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RLRQ_apdu */
/**
 * @summary RLRQ_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RLRQ-apdu ::= [APPLICATION 2] IMPLICIT SEQUENCE {
 *   reason            [0] IMPLICIT Release-request-reason OPTIONAL,
 *   user-information  [30] IMPLICIT SEQUENCE OF EXTERNAL OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RLRQ_apdu {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_request_reason>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<EXTERNAL[]>
    ) {}

    /**
     * @summary Restructures an object into a RLRQ_apdu
     * @description
     *
     * This takes an `object` and converts it to a `RLRQ_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RLRQ_apdu`.
     * @returns {RLRQ_apdu}
     */
    public static _from_object(
        _o: { [_K in keyof RLRQ_apdu]: RLRQ_apdu[_K] }
    ): RLRQ_apdu {
        return new RLRQ_apdu(_o.reason, _o.user_information);
    }
}
/* END_OF_SYMBOL_DEFINITION RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RLRQ_apdu */
/**
 * @summary The Leading Root Component Types of RLRQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RLRQ_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'reason',
        true,
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RLRQ_apdu */
/**
 * @summary The Trailing Root Component Types of RLRQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RLRQ_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RLRQ_apdu */
/**
 * @summary The Extension Addition Component Types of RLRQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RLRQ_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RLRQ_apdu */
let _cached_decoder_for_RLRQ_apdu: $.ASN1Decoder<RLRQ_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_RLRQ_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) RLRQ_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RLRQ_apdu} The decoded data structure.
 */
export function _decode_RLRQ_apdu(el: _Element) {
    if (!_cached_decoder_for_RLRQ_apdu) {
        _cached_decoder_for_RLRQ_apdu = $._decode_implicit<RLRQ_apdu>(
            () =>
                function (el: _Element): RLRQ_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: OPTIONAL<Release_request_reason>;
                    let user_information: OPTIONAL<EXTERNAL[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_implicit<Release_request_reason>(
                                () => _decode_Release_request_reason
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
                        _root_component_type_list_1_spec_for_RLRQ_apdu,
                        _extension_additions_list_spec_for_RLRQ_apdu,
                        _root_component_type_list_2_spec_for_RLRQ_apdu,
                        undefined
                    );
                    return new RLRQ_apdu /* SEQUENCE_CONSTRUCTOR_CALL */(
                        reason,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_RLRQ_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RLRQ_apdu */
let _cached_encoder_for_RLRQ_apdu: $.ASN1Encoder<RLRQ_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RLRQ_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_RLRQ_apdu */
/**
 * @summary Encodes a(n) RLRQ_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RLRQ_apdu, encoded as an ASN.1 Element.
 */
export function _encode_RLRQ_apdu(
    value: RLRQ_apdu,
    elGetter: $.ASN1Encoder<RLRQ_apdu>
) {
    if (!_cached_encoder_for_RLRQ_apdu) {
        _cached_encoder_for_RLRQ_apdu = $._encode_implicit(
            _TagClass.application,
            2,
            () =>
                function (
                    value: RLRQ_apdu                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_implicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_request_reason,
                                          $.BER
                                      )(value.reason, $.BER),
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
    return _cached_encoder_for_RLRQ_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RLRQ_apdu */

/* eslint-enable */
