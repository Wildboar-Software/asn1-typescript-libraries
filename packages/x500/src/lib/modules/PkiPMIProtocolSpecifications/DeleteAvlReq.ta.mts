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
 * @summary DeleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   avl-Id        AvlSerialNumber OPTIONAL,
 *   ... }
 * ```
 *
 */
export class DeleteAvlReq implements AVMPcommonComponents {
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
         * @summary `avl_Id`.
         * @public
         * @readonly
         */
        readonly avl_Id: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlReq`.
     * @returns {DeleteAvlReq}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteAvlReq]: DeleteAvlReq[_K] }
    ): DeleteAvlReq {
        return new DeleteAvlReq(
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.avl_Id,
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
 * @summary The Leading Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlReq: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AVMPcommonComponents,
    new $.ComponentSpec(
        "avl-Id",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];

let _cached_decoder_for_DeleteAvlReq: $.ASN1Decoder<DeleteAvlReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlReq} The decoded data structure.
 */
export function _decode_DeleteAvlReq(el: _Element): DeleteAvlReq {
    if (!_cached_decoder_for_DeleteAvlReq) {
        _cached_decoder_for_DeleteAvlReq = function (
            el: _Element
        ): DeleteAvlReq {
            let version: OPTIONAL<AVMPversion> =
                DeleteAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let avl_Id: OPTIONAL<AvlSerialNumber>;
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
                "avl-Id": (_el: _Element): void => {
                    avl_Id = _decode_AvlSerialNumber(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlReq,
                _extension_additions_list_spec_for_DeleteAvlReq,
                _root_component_type_list_2_spec_for_DeleteAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteAvlReq(
                version,
                timeStamp,
                sequence,
                avl_Id,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteAvlReq(el);
}

let _cached_encoder_for_DeleteAvlReq: $.ASN1Encoder<DeleteAvlReq> | null = null;

/**
 * @summary Encodes a(n) DeleteAvlReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlReq(
    value: DeleteAvlReq,
    elGetter: $.ASN1Encoder<DeleteAvlReq>
): _Element {
    if (!_cached_encoder_for_DeleteAvlReq) {
        _cached_encoder_for_DeleteAvlReq = function (
            value: DeleteAvlReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                DeleteAvlReq._default_value_for_version
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
                            /* IF_ABSENT  */ value.avl_Id === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.avl_Id, $.DER),
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
    return _cached_encoder_for_DeleteAvlReq(value, elGetter);
}


/* eslint-enable */
