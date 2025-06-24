/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
/**
 * @summary TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeReq-encr-mode-non-aead ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TbsHandshakeReq_encr_mode_non_aead {
    constructor(
        /**
         * @summary `encr`.
         * @public
         * @readonly
         */
        readonly encr: OPTIONAL<AlgorithmIdentifier[]>,
        /**
         * @summary `icvAlgID`.
         * @public
         * @readonly
         */
        readonly icvAlgID: AlgorithmIdentifier[]
    ) {}

    /**
     * @summary Restructures an object into a TbsHandshakeReq_encr_mode_non_aead
     * @description
     *
     * This takes an `object` and converts it to a `TbsHandshakeReq_encr_mode_non_aead`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbsHandshakeReq_encr_mode_non_aead`.
     * @returns {TbsHandshakeReq_encr_mode_non_aead}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TbsHandshakeReq_encr_mode_non_aead]: TbsHandshakeReq_encr_mode_non_aead[_K];
            }
        >
    ): TbsHandshakeReq_encr_mode_non_aead {
        return new TbsHandshakeReq_encr_mode_non_aead(_o.encr, _o.icvAlgID);
    }
}

/**
 * @summary The Leading Root Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "encr",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "icvAlgID",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TbsHandshakeReq_encr_mode_non_aead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead: $.ComponentSpec[] = [];

let _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Decoder<TbsHandshakeReq_encr_mode_non_aead> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeReq_encr_mode_non_aead
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeReq_encr_mode_non_aead} The decoded data structure.
 */
export function _decode_TbsHandshakeReq_encr_mode_non_aead(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead) {
        _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead = function (
            el: _Element
        ): TbsHandshakeReq_encr_mode_non_aead {
            let encr: OPTIONAL<AlgorithmIdentifier[]>;
            let icvAlgID!: AlgorithmIdentifier[];
            const callbacks: $.DecodingMap = {
                encr: (_el: _Element): void => {
                    encr = $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    )(_el);
                },
                icvAlgID: (_el: _Element): void => {
                    icvAlgID = $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                _extension_additions_list_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                _root_component_type_list_2_spec_for_TbsHandshakeReq_encr_mode_non_aead,
                undefined
            );
            return new TbsHandshakeReq_encr_mode_non_aead(
                encr,
                icvAlgID
            );
        };
    }
    return _cached_decoder_for_TbsHandshakeReq_encr_mode_non_aead(el);
}

let _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead: $.ASN1Encoder<TbsHandshakeReq_encr_mode_non_aead> | null = null;

/**
 * @summary Encodes a(n) TbsHandshakeReq_encr_mode_non_aead into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeReq_encr_mode_non_aead, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeReq_encr_mode_non_aead(
    value: TbsHandshakeReq_encr_mode_non_aead,
    elGetter: $.ASN1Encoder<TbsHandshakeReq_encr_mode_non_aead>
) {
    if (!_cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead) {
        _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead = function (
            value: TbsHandshakeReq_encr_mode_non_aead        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.encr === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<AlgorithmIdentifier>(
                                          () => _encode_AlgorithmIdentifier,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.encr, $.DER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSequenceOf<AlgorithmIdentifier>(
                                    () => _encode_AlgorithmIdentifier,
                                    $.DER
                                ),
                            $.DER
                        )(value.icvAlgID, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TbsHandshakeReq_encr_mode_non_aead(
        value,
        elGetter
    );
}


/* eslint-enable */
