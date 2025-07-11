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
    Rep_ti_contents,
    _decode_Rep_ti_contents,
    _encode_Rep_ti_contents,
} from "../SpkmGssTokens/Rep-ti-contents.ta.mjs";
/**
 * @summary REP_TI_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REP-TI-TOKEN ::= SEQUENCE {
 *   rep-ti-contents  Rep-ti-contents,
 *   algId            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-ti-integ     Integrity -- "token" is Rep-ti-contents
 * }
 * ```
 *
 */
export class REP_TI_TOKEN {
    constructor(
        /**
         * @summary `rep_ti_contents`.
         * @public
         * @readonly
         */
        readonly rep_ti_contents: Rep_ti_contents,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `rep_ti_integ`.
         * @public
         * @readonly
         */
        readonly rep_ti_integ: Integrity
    ) {}

    /**
     * @summary Restructures an object into a REP_TI_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `REP_TI_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REP_TI_TOKEN`.
     * @returns {REP_TI_TOKEN}
     */
    public static _from_object(
        _o: { [_K in keyof REP_TI_TOKEN]: REP_TI_TOKEN[_K] }
    ): REP_TI_TOKEN {
        return new REP_TI_TOKEN(_o.rep_ti_contents, _o.algId, _o.rep_ti_integ);
    }
}

/**
 * @summary The Leading Root Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rep-ti-contents",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "rep-ti-integ",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [];

let _cached_decoder_for_REP_TI_TOKEN: $.ASN1Decoder<REP_TI_TOKEN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) REP_TI_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {REP_TI_TOKEN} The decoded data structure.
 */
export function _decode_REP_TI_TOKEN(el: _Element): REP_TI_TOKEN {
    if (!_cached_decoder_for_REP_TI_TOKEN) {
        _cached_decoder_for_REP_TI_TOKEN = function (
            el: _Element
        ): REP_TI_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "REP-TI-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rep-ti-contents";
            sequence[1].name = "algId";
            sequence[2].name = "rep-ti-integ";
            let rep_ti_contents!: Rep_ti_contents;
            let algId!: AlgorithmIdentifier;
            let rep_ti_integ!: Integrity;
            rep_ti_contents = _decode_Rep_ti_contents(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            rep_ti_integ = _decode_Integrity(sequence[2]);
            return new REP_TI_TOKEN(rep_ti_contents, algId, rep_ti_integ);
        };
    }
    return _cached_decoder_for_REP_TI_TOKEN(el);
}

let _cached_encoder_for_REP_TI_TOKEN: $.ASN1Encoder<REP_TI_TOKEN> | null = null;

/**
 * @summary Encodes a(n) REP_TI_TOKEN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REP_TI_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_REP_TI_TOKEN(
    value: REP_TI_TOKEN,
    elGetter: $.ASN1Encoder<REP_TI_TOKEN>
): _Element {
    if (!_cached_encoder_for_REP_TI_TOKEN) {
        _cached_encoder_for_REP_TI_TOKEN = function (
            value: REP_TI_TOKEN        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Rep_ti_contents(
                            value.rep_ti_contents,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.rep_ti_integ,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_REP_TI_TOKEN(value, elGetter);
}


/* eslint-enable */
