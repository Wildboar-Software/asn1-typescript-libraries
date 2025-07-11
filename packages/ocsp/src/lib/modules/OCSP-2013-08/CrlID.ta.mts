/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    IA5String,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CrlID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrlID ::= SEQUENCE {
 * crlUrl               [0]     EXPLICIT IA5String OPTIONAL,
 * crlNum               [1]     EXPLICIT INTEGER OPTIONAL,
 * crlTime              [2]     EXPLICIT GeneralizedTime OPTIONAL }
 * ```
 *
 */
export class CrlID {
    constructor(
        /**
         * @summary `crlUrl`.
         * @public
         * @readonly
         */
        readonly crlUrl: OPTIONAL<IA5String>,
        /**
         * @summary `crlNum`.
         * @public
         * @readonly
         */
        readonly crlNum: OPTIONAL<INTEGER>,
        /**
         * @summary `crlTime`.
         * @public
         * @readonly
         */
        readonly crlTime: OPTIONAL<GeneralizedTime>
    ) {}

    /**
     * @summary Restructures an object into a CrlID
     * @description
     *
     * This takes an `object` and converts it to a `CrlID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrlID`.
     * @returns {CrlID}
     */
    public static _from_object(_o: { [_K in keyof CrlID]: CrlID[_K] }): CrlID {
        return new CrlID(_o.crlUrl, _o.crlNum, _o.crlTime);
    }
}


/**
 * @summary The Leading Root Component Types of CrlID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CrlID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "crlUrl",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "crlNum",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "crlTime",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of CrlID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CrlID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CrlID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CrlID: $.ComponentSpec[] = [];


let _cached_decoder_for_CrlID: $.ASN1Decoder<CrlID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CrlID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrlID} The decoded data structure.
 */
export function _decode_CrlID(el: _Element): CrlID {
    if (!_cached_decoder_for_CrlID) {
        _cached_decoder_for_CrlID = function (el: _Element): CrlID {
            let crlUrl: OPTIONAL<IA5String>;
            let crlNum: OPTIONAL<INTEGER>;
            let crlTime: OPTIONAL<GeneralizedTime>;
            const callbacks: $.DecodingMap = {
                crlUrl: (_el: _Element): void => {
                    crlUrl = $._decode_explicit<IA5String>(
                        () => $._decodeIA5String
                    )(_el);
                },
                crlNum: (_el: _Element): void => {
                    crlNum = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                crlTime: (_el: _Element): void => {
                    crlTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CrlID,
                _extension_additions_list_spec_for_CrlID,
                _root_component_type_list_2_spec_for_CrlID,
                undefined
            );
            return new CrlID(
                crlUrl,
                crlNum,
                crlTime
            );
        };
    }
    return _cached_decoder_for_CrlID(el);
}


let _cached_encoder_for_CrlID: $.ASN1Encoder<CrlID> | null = null;


/**
 * @summary Encodes a(n) CrlID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrlID, encoded as an ASN.1 Element.
 */
export function _encode_CrlID(value: CrlID, elGetter: $.ASN1Encoder<CrlID>): _Element {
    if (!_cached_encoder_for_CrlID) {
        _cached_encoder_for_CrlID = function (
            value: CrlID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.crlUrl === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeIA5String,
                                  $.DER
                              )(value.crlUrl, $.DER),
                        /* IF_ABSENT  */ value.crlNum === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.crlNum, $.DER),
                        /* IF_ABSENT  */ value.crlTime === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeGeneralizedTime,
                                  $.DER
                              )(value.crlTime, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CrlID(value, elGetter);
}


/* eslint-enable */
