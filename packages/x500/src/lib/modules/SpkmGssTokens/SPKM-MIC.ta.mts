/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Mic_Header,
    _decode_Mic_Header,
    _encode_Mic_Header,
} from "../SpkmGssTokens/Mic-Header.ta.mjs";
/**
 * @summary SPKM_MIC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-MIC ::= SEQUENCE {mic-header  Mic-Header,
 *                        int-cksum   BIT STRING
 * }
 * ```
 *
 */
export class SPKM_MIC {
    constructor(
        /**
         * @summary `mic_header`.
         * @public
         * @readonly
         */
        readonly mic_header: Mic_Header,
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SPKM_MIC
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_MIC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_MIC`.
     * @returns {SPKM_MIC}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_MIC]: SPKM_MIC[_K] }
    ): SPKM_MIC {
        return new SPKM_MIC(_o.mic_header, _o.int_cksum);
    }
}

/**
 * @summary The Leading Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_MIC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mic-header",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_MIC: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_MIC: $.ComponentSpec[] = [];

let _cached_decoder_for_SPKM_MIC: $.ASN1Decoder<SPKM_MIC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_MIC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_MIC} The decoded data structure.
 */
export function _decode_SPKM_MIC(el: _Element): SPKM_MIC {
    if (!_cached_decoder_for_SPKM_MIC) {
        _cached_decoder_for_SPKM_MIC = function (el: _Element): SPKM_MIC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-MIC contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "mic-header";
            sequence[1].name = "int-cksum";
            let mic_header!: Mic_Header;
            let int_cksum!: BIT_STRING;
            mic_header = _decode_Mic_Header(sequence[0]);
            int_cksum = $._decodeBitString(sequence[1]);
            return new SPKM_MIC(mic_header, int_cksum);
        };
    }
    return _cached_decoder_for_SPKM_MIC(el);
}

let _cached_encoder_for_SPKM_MIC: $.ASN1Encoder<SPKM_MIC> | null = null;

/**
 * @summary Encodes a(n) SPKM_MIC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_MIC, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_MIC(
    value: SPKM_MIC,
    elGetter: $.ASN1Encoder<SPKM_MIC>
): _Element {
    if (!_cached_encoder_for_SPKM_MIC) {
        _cached_encoder_for_SPKM_MIC = function (
            value: SPKM_MIC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Mic_Header(
                            value.mic_header,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SPKM_MIC(value, elGetter);
}


/* eslint-enable */
