/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
/**
 * @summary AVMPcommonComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPcommonComponents ::= SEQUENCE {
 *   version    AVMPversion DEFAULT v1,
 *   timeStamp  GeneralizedTime,
 *   sequence   AVMPsequence,
 *   ... }
 * ```
 *
 */
export class AVMPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AVMPcommonComponents
     * @description
     *
     * This takes an `object` and converts it to a `AVMPcommonComponents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AVMPcommonComponents`.
     * @returns {AVMPcommonComponents}
     */
    public static _from_object(
        _o: { [_K in keyof AVMPcommonComponents]: AVMPcommonComponents[_K] }
    ): AVMPcommonComponents {
        return new AVMPcommonComponents(
            _o.version,
            _o.timeStamp,
            _o.sequence,
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
 * @summary The Leading Root Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AVMPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AVMPcommonComponents: $.ComponentSpec[] = [];

let _cached_decoder_for_AVMPcommonComponents: $.ASN1Decoder<AVMPcommonComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AVMPcommonComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPcommonComponents} The decoded data structure.
 */
export function _decode_AVMPcommonComponents(el: _Element): AVMPcommonComponents {
    if (!_cached_decoder_for_AVMPcommonComponents) {
        _cached_decoder_for_AVMPcommonComponents = function (
            el: _Element
        ): AVMPcommonComponents {
            let version: OPTIONAL<AVMPversion> =
                AVMPcommonComponents._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AVMPcommonComponents,
                _extension_additions_list_spec_for_AVMPcommonComponents,
                _root_component_type_list_2_spec_for_AVMPcommonComponents,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AVMPcommonComponents(
                version,
                timeStamp,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AVMPcommonComponents(el);
}

let _cached_encoder_for_AVMPcommonComponents: $.ASN1Encoder<AVMPcommonComponents> | null = null;

/**
 * @summary Encodes a(n) AVMPcommonComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPcommonComponents, encoded as an ASN.1 Element.
 */
export function _encode_AVMPcommonComponents(
    value: AVMPcommonComponents,
    elGetter: $.ASN1Encoder<AVMPcommonComponents>
): _Element {
    if (!_cached_encoder_for_AVMPcommonComponents) {
        _cached_encoder_for_AVMPcommonComponents = function (
            value: AVMPcommonComponents        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                AVMPcommonComponents._default_value_for_version
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
    return _cached_encoder_for_AVMPcommonComponents(value, elGetter);
}


/* eslint-enable */
