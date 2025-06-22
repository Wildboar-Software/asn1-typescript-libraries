/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta.mjs";
import {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta.mjs";
import {
    CASPversion,
    CASPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta.mjs";
import {
    CASPcommonComponents,
    _root_component_type_list_1_spec_for_CASPcommonComponents,
} from "../PkiPMIProtocolSpecifications/CASPcommonComponents.ta.mjs";

/**
 * @summary RejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectCAsubscribe ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   reason        CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RejectCAsubscribe implements CASPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RejectCAsubscribe
     * @description
     *
     * This takes an `object` and converts it to a `RejectCAsubscribe`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RejectCAsubscribe`.
     * @returns {RejectCAsubscribe}
     */
    public static _from_object(
        _o: { [_K in keyof RejectCAsubscribe]: RejectCAsubscribe[_K] }
    ): RejectCAsubscribe {
        return new RejectCAsubscribe(
            _o.version,
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
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_CASP_error;
}

/**
 * @summary The Leading Root Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CASPcommonComponents,
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RejectCAsubscribe
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RejectCAsubscribe: $.ComponentSpec[] = [];

let _cached_decoder_for_RejectCAsubscribe: $.ASN1Decoder<RejectCAsubscribe> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectCAsubscribe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectCAsubscribe} The decoded data structure.
 */
export function _decode_RejectCAsubscribe(el: _Element) {
    if (!_cached_decoder_for_RejectCAsubscribe) {
        _cached_decoder_for_RejectCAsubscribe = function (
            el: _Element
        ): RejectCAsubscribe {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                RejectCAsubscribe._default_value_for_version;
            let sequence!: CASPsequence;
            let reason!: CASP_error;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                reason: (_el: _Element): void => {
                    reason = _decode_CASP_error(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RejectCAsubscribe,
                _extension_additions_list_spec_for_RejectCAsubscribe,
                _root_component_type_list_2_spec_for_RejectCAsubscribe,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RejectCAsubscribe(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                reason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RejectCAsubscribe(el);
}

let _cached_encoder_for_RejectCAsubscribe: $.ASN1Encoder<RejectCAsubscribe> | null = null;

/**
 * @summary Encodes a(n) RejectCAsubscribe into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectCAsubscribe, encoded as an ASN.1 Element.
 */
export function _encode_RejectCAsubscribe(
    value: RejectCAsubscribe,
    elGetter: $.ASN1Encoder<RejectCAsubscribe>
) {
    if (!_cached_encoder_for_RejectCAsubscribe) {
        _cached_encoder_for_RejectCAsubscribe = function (
            value: RejectCAsubscribe        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                RejectCAsubscribe._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.DER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
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
    return _cached_encoder_for_RejectCAsubscribe(value, elGetter);
}


/* eslint-enable */
