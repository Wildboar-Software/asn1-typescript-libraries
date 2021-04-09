/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-42/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-42/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION OtherInfo */
/**
 * @summary OtherInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherInfo ::= SEQUENCE {
 * keyInfo    AlgorithmIdentifier {{ KeySpecificAlgorithms }},
 * partyUInfo        [0] OCTET STRING OPTIONAL,
 * partyVInfo        [1] OCTET STRING OPTIONAL,
 * suppPubInfo     [2] OCTET STRING OPTIONAL,
 * suppPrivInfo     [3] OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OtherInfo {
    constructor(
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: AlgorithmIdentifier,
        /**
         * @summary `partyUInfo`.
         * @public
         * @readonly
         */
        readonly partyUInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `partyVInfo`.
         * @public
         * @readonly
         */
        readonly partyVInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `suppPubInfo`.
         * @public
         * @readonly
         */
        readonly suppPubInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `suppPrivInfo`.
         * @public
         * @readonly
         */
        readonly suppPrivInfo: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a OtherInfo
     * @description
     *
     * This takes an `object` and converts it to a `OtherInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherInfo`.
     * @returns {OtherInfo}
     */
    public static _from_object(
        _o: { [_K in keyof OtherInfo]: OtherInfo[_K] }
    ): OtherInfo {
        return new OtherInfo(
            _o.keyInfo,
            _o.partyUInfo,
            _o.partyVInfo,
            _o.suppPubInfo,
            _o.suppPrivInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OtherInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherInfo */
/**
 * @summary The Leading Root Component Types of OtherInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "partyUInfo",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "partyVInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "suppPubInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "suppPrivInfo",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherInfo */
/**
 * @summary The Trailing Root Component Types of OtherInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherInfo */
/**
 * @summary The Extension Addition Component Types of OtherInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherInfo */
let _cached_decoder_for_OtherInfo: $.ASN1Decoder<OtherInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OtherInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherInfo} The decoded data structure.
 */
export function _decode_OtherInfo(el: _Element) {
    if (!_cached_decoder_for_OtherInfo) {
        _cached_decoder_for_OtherInfo = function (el: _Element): OtherInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyInfo!: AlgorithmIdentifier;
            let partyUInfo: OPTIONAL<OCTET_STRING>;
            let partyVInfo: OPTIONAL<OCTET_STRING>;
            let suppPubInfo: OPTIONAL<OCTET_STRING>;
            let suppPrivInfo: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                keyInfo: (_el: _Element): void => {
                    keyInfo = _decode_AlgorithmIdentifier(_el);
                },
                partyUInfo: (_el: _Element): void => {
                    partyUInfo = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                partyVInfo: (_el: _Element): void => {
                    partyVInfo = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                suppPubInfo: (_el: _Element): void => {
                    suppPubInfo = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                suppPrivInfo: (_el: _Element): void => {
                    suppPrivInfo = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OtherInfo,
                _extension_additions_list_spec_for_OtherInfo,
                _root_component_type_list_2_spec_for_OtherInfo,
                undefined
            );
            return new OtherInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                keyInfo,
                partyUInfo,
                partyVInfo,
                suppPubInfo,
                suppPrivInfo
            );
        };
    }
    return _cached_decoder_for_OtherInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherInfo */
let _cached_encoder_for_OtherInfo: $.ASN1Encoder<OtherInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OtherInfo */
/**
 * @summary Encodes a(n) OtherInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherInfo(
    value: OtherInfo,
    elGetter: $.ASN1Encoder<OtherInfo>
) {
    if (!_cached_encoder_for_OtherInfo) {
        _cached_encoder_for_OtherInfo = function (
            value: OtherInfo,
            elGetter: $.ASN1Encoder<OtherInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.keyInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.partyUInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.partyUInfo, $.BER),
                        /* IF_ABSENT  */ value.partyVInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.partyVInfo, $.BER),
                        /* IF_ABSENT  */ value.suppPubInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.suppPubInfo, $.BER),
                        /* IF_ABSENT  */ value.suppPrivInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.suppPrivInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherInfo */

/* eslint-enable */
