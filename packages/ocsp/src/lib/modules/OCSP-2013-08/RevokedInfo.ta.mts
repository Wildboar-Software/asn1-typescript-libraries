/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/CRLReason.ta.mjs";


/**
 * @summary RevokedInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedInfo ::= SEQUENCE {
 * revocationTime              GeneralizedTime,
 * revocationReason    [0]     EXPLICIT CRLReason OPTIONAL }
 * ```
 *
 * @class
 */
export class RevokedInfo {
    constructor(
        /**
         * @summary `revocationTime`.
         * @public
         * @readonly
         */
        readonly revocationTime: GeneralizedTime,
        /**
         * @summary `revocationReason`.
         * @public
         * @readonly
         */
        readonly revocationReason: OPTIONAL<CRLReason>
    ) {}

    /**
     * @summary Restructures an object into a RevokedInfo
     * @description
     *
     * This takes an `object` and converts it to a `RevokedInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevokedInfo`.
     * @returns {RevokedInfo}
     */
    public static _from_object(
        _o: { [_K in keyof RevokedInfo]: RevokedInfo[_K] }
    ): RevokedInfo {
        return new RevokedInfo(_o.revocationTime, _o.revocationReason);
    }
}


/**
 * @summary The Leading Root Component Types of RevokedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RevokedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "revocationTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revocationReason",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of RevokedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RevokedInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RevokedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RevokedInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_RevokedInfo: $.ASN1Decoder<RevokedInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevokedInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedInfo} The decoded data structure.
 */
export function _decode_RevokedInfo(el: _Element) {
    if (!_cached_decoder_for_RevokedInfo) {
        _cached_decoder_for_RevokedInfo = function (el: _Element): RevokedInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let revocationTime!: GeneralizedTime;
            let revocationReason: OPTIONAL<CRLReason>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                revocationTime: (_el: _Element): void => {
                    revocationTime = $._decodeGeneralizedTime(_el);
                },
                revocationReason: (_el: _Element): void => {
                    revocationReason = $._decode_explicit<CRLReason>(
                        () => _decode_CRLReason
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevokedInfo,
                _extension_additions_list_spec_for_RevokedInfo,
                _root_component_type_list_2_spec_for_RevokedInfo,
                undefined
            );
            return new RevokedInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ revocationTime,
                revocationReason
            );
        };
    }
    return _cached_decoder_for_RevokedInfo(el);
}


let _cached_encoder_for_RevokedInfo: $.ASN1Encoder<RevokedInfo> | null = null;


/**
 * @summary Encodes a(n) RevokedInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedInfo, encoded as an ASN.1 Element.
 */
export function _encode_RevokedInfo(
    value: RevokedInfo,
    elGetter: $.ASN1Encoder<RevokedInfo>
) {
    if (!_cached_encoder_for_RevokedInfo) {
        _cached_encoder_for_RevokedInfo = function (
            value: RevokedInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.revocationTime,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.revocationReason === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CRLReason,
                                  $.DER
                              )(value.revocationReason, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_RevokedInfo(value, elGetter);
}


/* eslint-enable */
