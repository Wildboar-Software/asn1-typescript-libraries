/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta.mjs";
import {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta.mjs";
import {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta.mjs";
import {
    AVMPcommonComponents,
    _root_component_type_list_1_spec_for_AVMPcommonComponents,
} from "../PkiPMIProtocolSpecifications/AVMPcommonComponents.ta.mjs";

/**
 * @summary RejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectAVL ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   reason        AVMP-error,
 *   ... }
 * ```
 *
 */
export class RejectAVL implements AVMPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RejectAVL
     * @description
     *
     * This takes an `object` and converts it to a `RejectAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectAVL`.
     * @returns {RejectAVL}
     */
    public static _from_object(
        _o: { [_K in keyof RejectAVL]: RejectAVL[_K] }
    ): RejectAVL {
        return new RejectAVL(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): AVMPversion {
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_AVMP_error;
}

/**
 * @summary The Leading Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RejectAVL: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AVMPcommonComponents,
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RejectAVL: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RejectAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RejectAVL: $.ComponentSpec[] = [];

let _cached_decoder_for_RejectAVL: $.ASN1Decoder<RejectAVL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectAVL} The decoded data structure.
 */
export function _decode_RejectAVL(el: _Element): RejectAVL {
    if (!_cached_decoder_for_RejectAVL) {
        _cached_decoder_for_RejectAVL = function (el: _Element): RejectAVL {
            let version: OPTIONAL<AVMPversion> =
                RejectAVL._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let reason!: AVMP_error;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_AVMP_error(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectAVL,
                _extension_additions_list_spec_for_RejectAVL,
                _root_component_type_list_2_spec_for_RejectAVL,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RejectAVL(
                version,
                timeStamp,
                sequence,
                reason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RejectAVL(el);
}

let _cached_encoder_for_RejectAVL: $.ASN1Encoder<RejectAVL> | null = null;

/**
 * @summary Encodes a(n) RejectAVL into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectAVL, encoded as an ASN.1 Element.
 */
export function _encode_RejectAVL(
    value: RejectAVL,
    elGetter: $.ASN1Encoder<RejectAVL>
): _Element {
    if (!_cached_encoder_for_RejectAVL) {
        _cached_encoder_for_RejectAVL = function (
            value: RejectAVL        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                RejectAVL._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.DER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.reason,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_RejectAVL(value, elGetter);
}


/* eslint-enable */
