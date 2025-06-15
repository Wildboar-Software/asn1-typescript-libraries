/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Wrap_Body,
    _decode_Wrap_Body,
    _encode_Wrap_Body,
} from "../SpkmGssTokens/Wrap-Body.ta.mjs";
import {
    Wrap_Header,
    _decode_Wrap_Header,
    _encode_Wrap_Header,
} from "../SpkmGssTokens/Wrap-Header.ta.mjs";
/**
 * @summary SPKM_WRAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-WRAP ::= SEQUENCE {wrap-header  Wrap-Header,
 *                         wrap-body    Wrap-Body
 * }
 * ```
 *
 * @class
 */
export class SPKM_WRAP {
    constructor(
        /**
         * @summary `wrap_header`.
         * @public
         * @readonly
         */
        readonly wrap_header: Wrap_Header,
        /**
         * @summary `wrap_body`.
         * @public
         * @readonly
         */
        readonly wrap_body: Wrap_Body
    ) {}

    /**
     * @summary Restructures an object into a SPKM_WRAP
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_WRAP`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_WRAP`.
     * @returns {SPKM_WRAP}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_WRAP]: SPKM_WRAP[_K] }
    ): SPKM_WRAP {
        return new SPKM_WRAP(_o.wrap_header, _o.wrap_body);
    }
}

/**
 * @summary The Leading Root Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_WRAP: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "wrap-header",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "wrap-body",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_WRAP: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_WRAP: $.ComponentSpec[] = [];

let _cached_decoder_for_SPKM_WRAP: $.ASN1Decoder<SPKM_WRAP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_WRAP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_WRAP} The decoded data structure.
 */
export function _decode_SPKM_WRAP(el: _Element) {
    if (!_cached_decoder_for_SPKM_WRAP) {
        _cached_decoder_for_SPKM_WRAP = function (el: _Element): SPKM_WRAP {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-WRAP contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "wrap-header";
            sequence[1].name = "wrap-body";
            let wrap_header!: Wrap_Header;
            let wrap_body!: Wrap_Body;
            wrap_header = _decode_Wrap_Header(sequence[0]);
            wrap_body = _decode_Wrap_Body(sequence[1]);
            return new SPKM_WRAP(wrap_header, wrap_body);
        };
    }
    return _cached_decoder_for_SPKM_WRAP(el);
}

let _cached_encoder_for_SPKM_WRAP: $.ASN1Encoder<SPKM_WRAP> | null = null;

/**
 * @summary Encodes a(n) SPKM_WRAP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_WRAP, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_WRAP(
    value: SPKM_WRAP,
    elGetter: $.ASN1Encoder<SPKM_WRAP>
) {
    if (!_cached_encoder_for_SPKM_WRAP) {
        _cached_encoder_for_SPKM_WRAP = function (
            value: SPKM_WRAP        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Wrap_Header(
                            value.wrap_header,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_Wrap_Body(
                            value.wrap_body,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SPKM_WRAP(value, elGetter);
}


/* eslint-enable */
