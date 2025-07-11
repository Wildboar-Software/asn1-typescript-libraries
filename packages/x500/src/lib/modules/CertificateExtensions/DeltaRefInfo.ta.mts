/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary DeltaRefInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeltaRefInfo ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   lastDelta      GeneralizedTime OPTIONAL,
 *   ... }
 * ```
 *
 */
export class DeltaRefInfo {
    constructor(
        /**
         * @summary `deltaLocation`.
         * @public
         * @readonly
         */
        readonly deltaLocation: GeneralName,
        /**
         * @summary `lastDelta`.
         * @public
         * @readonly
         */
        readonly lastDelta: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeltaRefInfo
     * @description
     *
     * This takes an `object` and converts it to a `DeltaRefInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeltaRefInfo`.
     * @returns {DeltaRefInfo}
     */
    public static _from_object(
        _o: { [_K in keyof DeltaRefInfo]: DeltaRefInfo[_K] }
    ): DeltaRefInfo {
        return new DeltaRefInfo(
            _o.deltaLocation,
            _o.lastDelta,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeltaRefInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "deltaLocation",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "lastDelta",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeltaRefInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeltaRefInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeltaRefInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_DeltaRefInfo: $.ASN1Decoder<DeltaRefInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeltaRefInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeltaRefInfo} The decoded data structure.
 */
export function _decode_DeltaRefInfo(el: _Element): DeltaRefInfo {
    if (!_cached_decoder_for_DeltaRefInfo) {
        _cached_decoder_for_DeltaRefInfo = function (
            el: _Element
        ): DeltaRefInfo {
            let deltaLocation!: GeneralName;
            let lastDelta: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                deltaLocation: (_el: _Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                lastDelta: (_el: _Element): void => {
                    lastDelta = $._decodeGeneralizedTime(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaRefInfo,
                _extension_additions_list_spec_for_DeltaRefInfo,
                _root_component_type_list_2_spec_for_DeltaRefInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaRefInfo(
                deltaLocation,
                lastDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaRefInfo(el);
}

let _cached_encoder_for_DeltaRefInfo: $.ASN1Encoder<DeltaRefInfo> | null = null;

/**
 * @summary Encodes a(n) DeltaRefInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeltaRefInfo, encoded as an ASN.1 Element.
 */
export function _encode_DeltaRefInfo(
    value: DeltaRefInfo,
    elGetter: $.ASN1Encoder<DeltaRefInfo>
): _Element {
    if (!_cached_encoder_for_DeltaRefInfo) {
        _cached_encoder_for_DeltaRefInfo = function (
            value: DeltaRefInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.lastDelta === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.lastDelta,
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
    return _cached_encoder_for_DeltaRefInfo(value, elGetter);
}


/* eslint-enable */
