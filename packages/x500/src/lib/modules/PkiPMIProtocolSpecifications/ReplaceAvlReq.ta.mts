/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../AuthenticationFramework/AvlSerialNumber.ta.mjs";
import {
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "../AuthenticationFramework/CertAVL.ta.mjs";
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
 * @summary ReplaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   old           AvlSerialNumber OPTIONAL,
 *   new           CertAVL,
 *   ... }
 * ```
 *
 */
export class ReplaceAvlReq implements AVMPcommonComponents {
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
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlReq`.
     * @returns {ReplaceAvlReq}
     */
    public static _from_object(
        _o: { [_K in keyof ReplaceAvlReq]: ReplaceAvlReq[_K] }
    ): ReplaceAvlReq {
        return new ReplaceAvlReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.old,
            _o.new_,
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
}

/**
 * @summary The Leading Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AVMPcommonComponents,
    new $.ComponentSpec(
        "old",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];

let _cached_decoder_for_ReplaceAvlReq: $.ASN1Decoder<ReplaceAvlReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlReq} The decoded data structure.
 */
export function _decode_ReplaceAvlReq(el: _Element): ReplaceAvlReq {
    if (!_cached_decoder_for_ReplaceAvlReq) {
        _cached_decoder_for_ReplaceAvlReq = function (
            el: _Element
        ): ReplaceAvlReq {
            let version: OPTIONAL<AVMPversion> =
                ReplaceAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let old: OPTIONAL<AvlSerialNumber>;
            let new_!: CertAVL;
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
                old: (_el: _Element): void => {
                    old = _decode_AvlSerialNumber(_el);
                },
                new: (_el: _Element): void => {
                    new_ = _decode_CertAVL(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlReq,
                _extension_additions_list_spec_for_ReplaceAvlReq,
                _root_component_type_list_2_spec_for_ReplaceAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlReq(
                version,
                timeStamp,
                sequence,
                old,
                new_,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlReq(el);
}

let _cached_encoder_for_ReplaceAvlReq: $.ASN1Encoder<ReplaceAvlReq> | null = null;

/**
 * @summary Encodes a(n) ReplaceAvlReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlReq(
    value: ReplaceAvlReq,
    elGetter: $.ASN1Encoder<ReplaceAvlReq>
): _Element {
    if (!_cached_encoder_for_ReplaceAvlReq) {
        _cached_encoder_for_ReplaceAvlReq = function (
            value: ReplaceAvlReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                ReplaceAvlReq._default_value_for_version
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
                            /* IF_ABSENT  */ value.old === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.old, $.DER),
                            /* REQUIRED   */ _encode_CertAVL(value.new_, $.DER),
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
    return _cached_encoder_for_ReplaceAvlReq(value, elGetter);
}


/* eslint-enable */
