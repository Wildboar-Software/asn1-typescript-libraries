/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../XBHSM/HashAlgorithm.ta.mjs";
import {
    HashContent,
    _decode_HashContent,
    _encode_HashContent,
} from "../XBHSM/HashContent.ta.mjs";

/**
 * @summary PSID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSID ::= SEQUENCE {
 *         hashAlg        HashAlgorithm,
 *         hashContent     HashContent
 *               }
 * ```
 *
 * @class
 */
export class PSID {
    constructor(
        /**
         * @summary `hashAlg`.
         * @public
         * @readonly
         */
        readonly hashAlg: HashAlgorithm,
        /**
         * @summary `hashContent`.
         * @public
         * @readonly
         */
        readonly hashContent: HashContent
    ) {}

    /**
     * @summary Restructures an object into a PSID
     * @description
     *
     * This takes an `object` and converts it to a `PSID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PSID`.
     * @returns {PSID}
     */
    public static _from_object(
        _o: { [_K in keyof PSID]: PSID[_K] }
    ): PSID {
        return new PSID(_o.hashAlg, _o.hashContent);
    }
}

/**
 * @summary The Leading Root Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PSID: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlg", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hashContent", false, $.hasTag(_TagClass.context, 1)),
];

/**
 * @summary The Trailing Root Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PSID: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PSID: $.ComponentSpec[] = [];

let _cached_decoder_for_PSID: $.ASN1Decoder<PSID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export function _decode_PSID(el: _Element): PSID {
    if (!_cached_decoder_for_PSID) {
        _cached_decoder_for_PSID = function (el: _Element): PSID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PSID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "hashAlg";
            sequence[1].name = "hashContent";
            const hashAlg: HashAlgorithm = _decode_HashAlgorithm(sequence[0]);
            const hashContent: HashContent = _decode_HashContent(sequence[1]);
            return new PSID(hashAlg, hashContent);
        };
    }
    return _cached_decoder_for_PSID(el);
}

let _cached_encoder_for_PSID: $.ASN1Encoder<PSID> | null = null;

/**
 * @summary Encodes a(n) PSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSID, encoded as an ASN.1 Element.
 */
export function _encode_PSID(
    value: PSID,
    elGetter: $.ASN1Encoder<PSID>
): _Element {
    if (!_cached_encoder_for_PSID) {
        _cached_encoder_for_PSID = function (value: PSID): _Element {
            return $._encodeSequence(
                (
                    [
                        /* REQUIRED   */ _encode_HashAlgorithm(
                            value.hashAlg,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_HashContent(
                            value.hashContent,
                            $.BER
                        ),
                    ] as (_Element | undefined)[]
                ).filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PSID(value, elGetter);
}

/* eslint-enable */
