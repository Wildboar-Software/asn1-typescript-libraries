/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TokenServiceProvider,
    _decode_TokenServiceProvider,
    _encode_TokenServiceProvider,
} from "../TokenizationManifest/TokenServiceProvider.ta.mjs";
import {
    XPathSet,
    _decode_XPathSet,
    _encode_XPathSet,
} from "../TokenizationManifest/XPathSet.ta.mjs";

/**
 * @summary XPathTokensSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPathTokensSet ::= SEQUENCE {
 * tSP       TokenServiceProvider OPTIONAL,
 * xPathSet  XPathSet
 * }
 * ```
 *
 */
export class XPathTokensSet {
    constructor(
        /**
         * @summary `tSP`.
         * @public
         * @readonly
         */
        readonly tSP: OPTIONAL<TokenServiceProvider>,
        /**
         * @summary `xPathSet`.
         * @public
         * @readonly
         */
        readonly xPathSet: XPathSet
    ) {}

    /**
     * @summary Restructures an object into a XPathTokensSet
     * @description
     *
     * This takes an `object` and converts it to a `XPathTokensSet`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `XPathTokensSet`.
     * @returns {XPathTokensSet}
     */
    public static _from_object(
        _o: { [_K in keyof XPathTokensSet]: XPathTokensSet[_K] }
    ): XPathTokensSet {
        return new XPathTokensSet(_o.tSP, _o.xPathSet);
    }
}


/**
 * @summary The Leading Root Component Types of XPathTokensSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_XPathTokensSet: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tSP",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "xPathSet",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of XPathTokensSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_XPathTokensSet: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of XPathTokensSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_XPathTokensSet: $.ComponentSpec[] = [];


let _cached_decoder_for_XPathTokensSet: $.ASN1Decoder<XPathTokensSet> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) XPathTokensSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XPathTokensSet} The decoded data structure.
 */
export function _decode_XPathTokensSet(el: _Element): XPathTokensSet {
    if (!_cached_decoder_for_XPathTokensSet) {
        _cached_decoder_for_XPathTokensSet = function (
            el: _Element
        ): XPathTokensSet {
            let tSP: OPTIONAL<TokenServiceProvider>;
            let xPathSet!: XPathSet;
            const callbacks: $.DecodingMap = {
                tSP: (_el: _Element): void => {
                    tSP = _decode_TokenServiceProvider(_el);
                },
                xPathSet: (_el: _Element): void => {
                    xPathSet = _decode_XPathSet(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_XPathTokensSet,
                _extension_additions_list_spec_for_XPathTokensSet,
                _root_component_type_list_2_spec_for_XPathTokensSet,
                undefined
            );
            return new XPathTokensSet (
                tSP,
                xPathSet
            );
        };
    }
    return _cached_decoder_for_XPathTokensSet(el);
}


let _cached_encoder_for_XPathTokensSet: $.ASN1Encoder<XPathTokensSet> | null = null;


/**
 * @summary Encodes a(n) XPathTokensSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XPathTokensSet, encoded as an ASN.1 Element.
 */
export function _encode_XPathTokensSet(
    value: XPathTokensSet,
    elGetter: $.ASN1Encoder<XPathTokensSet>
): _Element {
    if (!_cached_encoder_for_XPathTokensSet) {
        _cached_encoder_for_XPathTokensSet = function (
            value: XPathTokensSet        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.tSP === undefined
                            ? undefined
                            : _encode_TokenServiceProvider(value.tSP, $.DER),
                        /* REQUIRED   */ _encode_XPathSet(
                            value.xPathSet,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_XPathTokensSet(value, elGetter);
}


/* eslint-enable */
