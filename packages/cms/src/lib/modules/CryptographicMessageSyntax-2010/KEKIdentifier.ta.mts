/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OtherKeyAttribute,
    _decode_OtherKeyAttribute,
    _encode_OtherKeyAttribute,
} from "../CryptographicMessageSyntax-2010/OtherKeyAttribute.ta.mjs";

/**
 * @summary KEKIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEKIdentifier ::= SEQUENCE {
 * keyIdentifier     OCTET STRING,
 * date             GeneralizedTime OPTIONAL,
 * other         OtherKeyAttribute OPTIONAL }
 * ```
 *
 */
export class KEKIdentifier {
    constructor(
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OCTET_STRING,
        /**
         * @summary `date`.
         * @public
         * @readonly
         */
        readonly date: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `other`.
         * @public
         * @readonly
         */
        readonly other: OPTIONAL<OtherKeyAttribute>
    ) {}

    /**
     * @summary Restructures an object into a KEKIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `KEKIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KEKIdentifier`.
     * @returns {KEKIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof KEKIdentifier]: KEKIdentifier[_K] }
    ): KEKIdentifier {
        return new KEKIdentifier(_o.keyIdentifier, _o.date, _o.other);
    }
}


/**
 * @summary The Leading Root Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KEKIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "date",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "other",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KEKIdentifier: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KEKIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KEKIdentifier: $.ComponentSpec[] = [];


let _cached_decoder_for_KEKIdentifier: $.ASN1Decoder<KEKIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KEKIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEKIdentifier} The decoded data structure.
 */
export function _decode_KEKIdentifier(el: _Element): KEKIdentifier {
    if (!_cached_decoder_for_KEKIdentifier) {
        _cached_decoder_for_KEKIdentifier = function (
            el: _Element
        ): KEKIdentifier {
            let keyIdentifier!: OCTET_STRING;
            let date: OPTIONAL<GeneralizedTime>;
            let other: OPTIONAL<OtherKeyAttribute>;
            const callbacks: $.DecodingMap = {
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = $._decodeOctetString(_el);
                },
                date: (_el: _Element): void => {
                    date = $._decodeGeneralizedTime(_el);
                },
                other: (_el: _Element): void => {
                    other = _decode_OtherKeyAttribute(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KEKIdentifier,
                _extension_additions_list_spec_for_KEKIdentifier,
                _root_component_type_list_2_spec_for_KEKIdentifier,
                undefined
            );
            return new KEKIdentifier (
                keyIdentifier,
                date,
                other
            );
        };
    }
    return _cached_decoder_for_KEKIdentifier(el);
}


let _cached_encoder_for_KEKIdentifier: $.ASN1Encoder<KEKIdentifier> | null = null;


/**
 * @summary Encodes a(n) KEKIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEKIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KEKIdentifier(
    value: KEKIdentifier,
    elGetter: $.ASN1Encoder<KEKIdentifier>
): _Element {
    if (!_cached_encoder_for_KEKIdentifier) {
        _cached_encoder_for_KEKIdentifier = function (
            value: KEKIdentifier        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.keyIdentifier,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.date === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(value.date, $.DER),
                        /* IF_ABSENT  */ value.other === undefined
                            ? undefined
                            : _encode_OtherKeyAttribute(value.other, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_KEKIdentifier(value, elGetter);
}


/* eslint-enable */
