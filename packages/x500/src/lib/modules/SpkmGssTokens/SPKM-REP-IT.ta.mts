/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Integrity,
    _decode_Integrity,
    _encode_Integrity,
} from "../SpkmGssTokens/Integrity.ta.mjs";
import {
    REP_IT_TOKEN,
    _decode_REP_IT_TOKEN,
    _encode_REP_IT_TOKEN,
} from "../SpkmGssTokens/REP-IT-TOKEN.ta.mjs";
/**
 * @summary SPKM_REP_IT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REP-IT ::= SEQUENCE {
 *   responseToken  REP-IT-TOKEN,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-it-integ   Integrity -- "token" is REP-IT-TOKEN
 * }
 * ```
 *
 */
export class SPKM_REP_IT {
    constructor(
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: REP_IT_TOKEN,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `rep_it_integ`.
         * @public
         * @readonly
         */
        readonly rep_it_integ: Integrity
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REP_IT
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REP_IT`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REP_IT`.
     * @returns {SPKM_REP_IT}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_REP_IT]: SPKM_REP_IT[_K] }
    ): SPKM_REP_IT {
        return new SPKM_REP_IT(_o.responseToken, _o.algId, _o.rep_it_integ);
    }
}

/**
 * @summary The Leading Root Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseToken",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "rep-it-integ",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [];

let _cached_decoder_for_SPKM_REP_IT: $.ASN1Decoder<SPKM_REP_IT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REP_IT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REP_IT} The decoded data structure.
 */
export function _decode_SPKM_REP_IT(el: _Element): SPKM_REP_IT {
    if (!_cached_decoder_for_SPKM_REP_IT) {
        _cached_decoder_for_SPKM_REP_IT = function (el: _Element): SPKM_REP_IT {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SPKM-REP-IT contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "responseToken";
            sequence[1].name = "algId";
            sequence[2].name = "rep-it-integ";
            let responseToken!: REP_IT_TOKEN;
            let algId!: AlgorithmIdentifier;
            let rep_it_integ!: Integrity;
            responseToken = _decode_REP_IT_TOKEN(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            rep_it_integ = _decode_Integrity(sequence[2]);
            return new SPKM_REP_IT(responseToken, algId, rep_it_integ);
        };
    }
    return _cached_decoder_for_SPKM_REP_IT(el);
}

let _cached_encoder_for_SPKM_REP_IT: $.ASN1Encoder<SPKM_REP_IT> | null = null;

/**
 * @summary Encodes a(n) SPKM_REP_IT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REP_IT, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REP_IT(
    value: SPKM_REP_IT,
    elGetter: $.ASN1Encoder<SPKM_REP_IT>
): _Element {
    if (!_cached_encoder_for_SPKM_REP_IT) {
        _cached_encoder_for_SPKM_REP_IT = function (
            value: SPKM_REP_IT        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REP_IT_TOKEN(
                            value.responseToken,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.rep_it_integ,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SPKM_REP_IT(value, elGetter);
}


/* eslint-enable */
