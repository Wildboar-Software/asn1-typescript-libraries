/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PKCS12Attribute,
    _decode_PKCS12Attribute,
    _encode_PKCS12Attribute,
} from "../PKCS-12/PKCS12Attribute.ta.mjs";

/**
 * @summary SafeBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SafeBag ::= SEQUENCE {
 *     bagId         BAG-TYPE.&id ({PKCS12BagSet}),
 *     bagValue      [0] EXPLICIT BAG-TYPE.&Type({PKCS12BagSet}{@bagId}),
 *     bagAttributes SET OF PKCS12Attribute OPTIONAL
 * }
 * ```
 *
 */
export class SafeBag {
    constructor(
        /**
         * @summary `bagId`.
         * @public
         * @readonly
         */
        readonly bagId: OBJECT_IDENTIFIER,
        /**
         * @summary `bagValue`.
         * @public
         * @readonly
         */
        readonly bagValue: _Element,
        /**
         * @summary `bagAttributes`.
         * @public
         * @readonly
         */
        readonly bagAttributes: OPTIONAL<PKCS12Attribute[]>
    ) {}

    /**
     * @summary Restructures an object into a SafeBag
     * @description
     *
     * This takes an `object` and converts it to a `SafeBag`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SafeBag`.
     * @returns {SafeBag}
     */
    public static _from_object(
        _o: { [_K in keyof SafeBag]: SafeBag[_K] }
    ): SafeBag {
        return new SafeBag(_o.bagId, _o.bagValue, _o.bagAttributes);
    }
}


/**
 * @summary The Leading Root Component Types of SafeBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SafeBag: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bagId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "bagValue",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "bagAttributes",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of SafeBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SafeBag: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SafeBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SafeBag: $.ComponentSpec[] = [];


let _cached_decoder_for_SafeBag: $.ASN1Decoder<SafeBag> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SafeBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SafeBag} The decoded data structure.
 */
export function _decode_SafeBag(el: _Element): SafeBag {
    if (!_cached_decoder_for_SafeBag) {
        _cached_decoder_for_SafeBag = function (el: _Element): SafeBag {
            let bagId!: OBJECT_IDENTIFIER;
            let bagValue!: _Element;
            let bagAttributes: OPTIONAL<PKCS12Attribute[]>;
            const callbacks: $.DecodingMap = {
                bagId: (_el: _Element): void => {
                    bagId = $._decodeObjectIdentifier(_el);
                },
                bagValue: (_el: _Element): void => {
                    bagValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
                bagAttributes: (_el: _Element): void => {
                    bagAttributes = $._decodeSetOf<PKCS12Attribute>(
                        () => _decode_PKCS12Attribute
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SafeBag,
                _extension_additions_list_spec_for_SafeBag,
                _root_component_type_list_2_spec_for_SafeBag,
                undefined
            );
            return new SafeBag(
                bagId,
                bagValue,
                bagAttributes
            );
        };
    }
    return _cached_decoder_for_SafeBag(el);
}


let _cached_encoder_for_SafeBag: $.ASN1Encoder<SafeBag> | null = null;


/**
 * @summary Encodes a(n) SafeBag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SafeBag, encoded as an ASN.1 Element.
 */
export function _encode_SafeBag(
    value: SafeBag,
    elGetter: $.ASN1Encoder<SafeBag>
): _Element {
    if (!_cached_encoder_for_SafeBag) {
        _cached_encoder_for_SafeBag = function (
            value: SafeBag        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.bagId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.bagValue, $.BER),
                        /* IF_ABSENT  */ value.bagAttributes === undefined
                            ? undefined
                            : $._encodeSetOf<PKCS12Attribute>(
                                  () => _encode_PKCS12Attribute,
                                  $.BER
                              )(value.bagAttributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SafeBag(value, elGetter);
}


/* eslint-enable */
