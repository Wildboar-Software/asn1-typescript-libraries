/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PKIStatusInfo,
    _decode_PKIStatusInfo,
    _encode_PKIStatusInfo,
} from "../PKIXTSP/PKIStatusInfo.ta.mjs";
import {
    TimeStampToken,
    _decode_TimeStampToken,
    _encode_TimeStampToken,
} from "../PKIXTSP/TimeStampToken.ta.mjs";
/**
 * @summary TimeStampResp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampResp ::= SEQUENCE  {
 *     status                  PKIStatusInfo,
 *     timeStampToken          TimeStampToken     OPTIONAL  }
 * ```
 *
 * @class
 */
export class TimeStampResp {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: PKIStatusInfo,
        /**
         * @summary `timeStampToken`.
         * @public
         * @readonly
         */
        readonly timeStampToken: OPTIONAL<TimeStampToken>
    ) {}

    /**
     * @summary Restructures an object into a TimeStampResp
     * @description
     *
     * This takes an `object` and converts it to a `TimeStampResp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeStampResp`.
     * @returns {TimeStampResp}
     */
    public static _from_object(
        _o: { [_K in keyof TimeStampResp]: TimeStampResp[_K] },
    ): TimeStampResp {
        return new TimeStampResp(_o.status, _o.timeStampToken);
    }
}

/**
 * @summary The Leading Root Component Types of TimeStampResp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeStampResp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "timeStampToken",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeStampResp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeStampResp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeStampResp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeStampResp: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeStampResp: $.ASN1Decoder<TimeStampResp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampResp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampResp} The decoded data structure.
 */
export function _decode_TimeStampResp(el: _Element) {
    if (!_cached_decoder_for_TimeStampResp) {
        _cached_decoder_for_TimeStampResp = function (
            el: _Element
        ): TimeStampResp {
            let status!: PKIStatusInfo;
            let timeStampToken: OPTIONAL<TimeStampToken>;
            const callbacks: $.DecodingMap = {
                status: (_el: _Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                timeStampToken: (_el: _Element): void => {
                    timeStampToken = _decode_TimeStampToken(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStampResp,
                _extension_additions_list_spec_for_TimeStampResp,
                _root_component_type_list_2_spec_for_TimeStampResp,
                undefined
            );
            return new TimeStampResp(
                status,
                timeStampToken
            );
        };
    }
    return _cached_decoder_for_TimeStampResp(el);
}

let _cached_encoder_for_TimeStampResp: $.ASN1Encoder<TimeStampResp> | null = null;

/**
 * @summary Encodes a(n) TimeStampResp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampResp, encoded as an ASN.1 Element.
 */
export function _encode_TimeStampResp(
    value: TimeStampResp,
    elGetter: $.ASN1Encoder<TimeStampResp>
) {
    if (!_cached_encoder_for_TimeStampResp) {
        _cached_encoder_for_TimeStampResp = function (
            value: TimeStampResp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.timeStampToken === undefined
                            ? undefined
                            : _encode_TimeStampToken(
                                  value.timeStampToken,
                                  $.DER,
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TimeStampResp(value, elGetter);
}


/* eslint-enable */
