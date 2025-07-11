/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Del_Header,
    _decode_Del_Header,
    _encode_Del_Header,
} from "../SpkmGssTokens/Del-Header.ta.mjs";
/**
 * @summary SPKM_DEL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-DEL ::= SEQUENCE {del-header  Del-Header,
 *                        int-cksum   BIT STRING
 * }
 * ```
 *
 */
export class SPKM_DEL {
    constructor(
        /**
         * @summary `del_header`.
         * @public
         * @readonly
         */
        readonly del_header: Del_Header,
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SPKM_DEL
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_DEL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_DEL`.
     * @returns {SPKM_DEL}
     */
    public static _from_object(
        _o: { [_K in keyof SPKM_DEL]: SPKM_DEL[_K] }
    ): SPKM_DEL {
        return new SPKM_DEL(_o.del_header, _o.int_cksum);
    }
}

/**
 * @summary The Leading Root Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_DEL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "del-header",
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
 * @summary The Trailing Root Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_DEL: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_DEL: $.ComponentSpec[] = [];

let _cached_decoder_for_SPKM_DEL: $.ASN1Decoder<SPKM_DEL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_DEL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_DEL} The decoded data structure.
 */
export function _decode_SPKM_DEL(el: _Element): SPKM_DEL {
    if (!_cached_decoder_for_SPKM_DEL) {
        _cached_decoder_for_SPKM_DEL = function (el: _Element): SPKM_DEL {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-DEL contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "del-header";
            sequence[1].name = "int-cksum";
            let del_header!: Del_Header;
            let int_cksum!: BIT_STRING;
            del_header = _decode_Del_Header(sequence[0]);
            int_cksum = $._decodeBitString(sequence[1]);
            return new SPKM_DEL(del_header, int_cksum);
        };
    }
    return _cached_decoder_for_SPKM_DEL(el);
}

let _cached_encoder_for_SPKM_DEL: $.ASN1Encoder<SPKM_DEL> | null = null;

/**
 * @summary Encodes a(n) SPKM_DEL into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_DEL, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_DEL(
    value: SPKM_DEL,
    elGetter: $.ASN1Encoder<SPKM_DEL>
): _Element {
    if (!_cached_encoder_for_SPKM_DEL) {
        _cached_encoder_for_SPKM_DEL = function (
            value: SPKM_DEL        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Del_Header(
                            value.del_header,
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
    return _cached_encoder_for_SPKM_DEL(value, elGetter);
}


/* eslint-enable */
