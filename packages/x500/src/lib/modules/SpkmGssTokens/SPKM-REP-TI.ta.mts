/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificationData,
    _decode_CertificationData,
    _encode_CertificationData,
} from "../SpkmGssTokens/CertificationData.ta.mjs";
import {
    REP_TI_TOKEN,
    _decode_REP_TI_TOKEN,
    _encode_REP_TI_TOKEN,
} from "../SpkmGssTokens/REP-TI-TOKEN.ta.mjs";
/**
 * @summary SPKM_REP_TI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REP-TI ::= SEQUENCE {
 *   responseToken  REP-TI-TOKEN,
 *   certif-data    CertificationData OPTIONAL
 *   -- present if target-certif-data-required option was
 * }
 * ```
 *
 */
export class SPKM_REP_TI {
    constructor(
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: REP_TI_TOKEN,
        /**
         * @summary `certif_data`.
         * @public
         * @readonly
         */
        readonly certif_data: OPTIONAL<CertificationData>
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REP_TI
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REP_TI`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REP_TI`.
     * @returns {SPKM_REP_TI}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_REP_TI]: SPKM_REP_TI[_K] }
    ): SPKM_REP_TI {
        return new SPKM_REP_TI(_o.responseToken, _o.certif_data);
    }
}

/**
 * @summary The Leading Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseToken",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "certif-data",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];

let _cached_decoder_for_SPKM_REP_TI: $.ASN1Decoder<SPKM_REP_TI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REP_TI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REP_TI} The decoded data structure.
 */
export function _decode_SPKM_REP_TI(el: _Element): SPKM_REP_TI {
    if (!_cached_decoder_for_SPKM_REP_TI) {
        _cached_decoder_for_SPKM_REP_TI = function (el: _Element): SPKM_REP_TI {
            let responseToken!: REP_TI_TOKEN;
            let certif_data: OPTIONAL<CertificationData>;
            const callbacks: $.DecodingMap = {
                responseToken: (_el: _Element): void => {
                    responseToken = _decode_REP_TI_TOKEN(_el);
                },
                "certif-data": (_el: _Element): void => {
                    certif_data = _decode_CertificationData(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPKM_REP_TI,
                _extension_additions_list_spec_for_SPKM_REP_TI,
                _root_component_type_list_2_spec_for_SPKM_REP_TI,
                undefined
            );
            return new SPKM_REP_TI(
                responseToken,
                certif_data
            );
        };
    }
    return _cached_decoder_for_SPKM_REP_TI(el);
}

let _cached_encoder_for_SPKM_REP_TI: $.ASN1Encoder<SPKM_REP_TI> | null = null;

/**
 * @summary Encodes a(n) SPKM_REP_TI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REP_TI, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REP_TI(
    value: SPKM_REP_TI,
    elGetter: $.ASN1Encoder<SPKM_REP_TI>
): _Element {
    if (!_cached_encoder_for_SPKM_REP_TI) {
        _cached_encoder_for_SPKM_REP_TI = function (
            value: SPKM_REP_TI        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REP_TI_TOKEN(
                            value.responseToken,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.certif_data === undefined
                            ? undefined
                            : _encode_CertificationData(
                                  value.certif_data,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SPKM_REP_TI(value, elGetter);
}


/* eslint-enable */
