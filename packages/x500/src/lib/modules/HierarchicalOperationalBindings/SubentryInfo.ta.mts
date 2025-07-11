/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
/**
 * @summary SubentryInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubentryInfo ::= SEQUENCE {
 *   rdn   [0]  RelativeDistinguishedName,
 *   info  [1]  SET OF Attribute{{SupportedAttributes}},
 *   ... }
 * ```
 *
 */
export class SubentryInfo {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: Attribute[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubentryInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubentryInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubentryInfo`.
     * @returns {SubentryInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SubentryInfo]: SubentryInfo[_K] }
    ): SubentryInfo {
        return new SubentryInfo(
            _o.rdn,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubentryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "info",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubentryInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubentryInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_SubentryInfo: $.ASN1Decoder<SubentryInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubentryInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubentryInfo} The decoded data structure.
 */
export function _decode_SubentryInfo(el: _Element): SubentryInfo {
    if (!_cached_decoder_for_SubentryInfo) {
        _cached_decoder_for_SubentryInfo = function (
            el: _Element
        ): SubentryInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubentryInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rdn";
            sequence[1].name = "info";
            let rdn!: RelativeDistinguishedName;
            let info!: Attribute[];
            rdn = $._decode_explicit<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            )(sequence[0]);
            info = $._decode_explicit<Attribute[]>(() =>
                $._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(sequence[1]);
            return new SubentryInfo(rdn, info, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SubentryInfo(el);
}

let _cached_encoder_for_SubentryInfo: $.ASN1Encoder<SubentryInfo> | null = null;

/**
 * @summary Encodes a(n) SubentryInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubentryInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubentryInfo(
    value: SubentryInfo,
    elGetter: $.ASN1Encoder<SubentryInfo>
): _Element {
    if (!_cached_encoder_for_SubentryInfo) {
        _cached_encoder_for_SubentryInfo = function (
            value: SubentryInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.DER
                            )(value.rdn, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSetOf<Attribute>(
                                        () => _encode_Attribute,
                                        $.DER
                                    ),
                                $.DER
                            )(value.info, $.DER),
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
    return _cached_encoder_for_SubentryInfo(value, elGetter);
}


/* eslint-enable */
