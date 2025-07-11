/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SeqNum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SeqNum ::= SEQUENCE {num      INTEGER,
 *                      dir-ind  BOOLEAN
 * }
 * ```
 *
 */
export class SeqNum {
    constructor(
        /**
         * @summary `num`.
         * @public
         * @readonly
         */
        readonly num: INTEGER,
        /**
         * @summary `dir_ind`.
         * @public
         * @readonly
         */
        readonly dir_ind: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a SeqNum
     * @description
     *
     * This takes an `object` and converts it to a `SeqNum`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SeqNum`.
     * @returns {SeqNum}
     */
    public static _from_object(
        _o: { [_K in keyof SeqNum]: SeqNum[_K] }
    ): SeqNum {
        return new SeqNum(_o.num, _o.dir_ind);
    }
}

/**
 * @summary The Leading Root Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SeqNum: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "num",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "dir-ind",
        false,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SeqNum: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SeqNum: $.ComponentSpec[] = [];

let _cached_decoder_for_SeqNum: $.ASN1Decoder<SeqNum> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SeqNum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeqNum} The decoded data structure.
 */
export function _decode_SeqNum(el: _Element): SeqNum {
    if (!_cached_decoder_for_SeqNum) {
        _cached_decoder_for_SeqNum = function (el: _Element): SeqNum {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SeqNum contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "num";
            sequence[1].name = "dir-ind";
            let num!: INTEGER;
            let dir_ind!: BOOLEAN;
            num = $._decodeInteger(sequence[0]);
            dir_ind = $._decodeBoolean(sequence[1]);
            return new SeqNum(num, dir_ind);
        };
    }
    return _cached_decoder_for_SeqNum(el);
}

let _cached_encoder_for_SeqNum: $.ASN1Encoder<SeqNum> | null = null;

/**
 * @summary Encodes a(n) SeqNum into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeqNum, encoded as an ASN.1 Element.
 */
export function _encode_SeqNum(value: SeqNum, elGetter: $.ASN1Encoder<SeqNum>): _Element {
    if (!_cached_encoder_for_SeqNum) {
        _cached_encoder_for_SeqNum = function (
            value: SeqNum        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.num, $.DER),
                        /* REQUIRED   */ $._encodeBoolean(value.dir_ind, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SeqNum(value, elGetter);
}


/* eslint-enable */
