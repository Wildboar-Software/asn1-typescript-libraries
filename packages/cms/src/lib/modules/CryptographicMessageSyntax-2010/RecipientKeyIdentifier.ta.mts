/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OtherKeyAttribute,
    _decode_OtherKeyAttribute,
    _encode_OtherKeyAttribute,
} from "../CryptographicMessageSyntax-2010/OtherKeyAttribute.ta.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CryptographicMessageSyntax-2010/SubjectKeyIdentifier.ta.mjs";

/**
 * @summary RecipientKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientKeyIdentifier ::= SEQUENCE {
 * subjectKeyIdentifier     SubjectKeyIdentifier,
 * date                 GeneralizedTime OPTIONAL,
 * other             OtherKeyAttribute OPTIONAL }
 * ```
 *
 */
export class RecipientKeyIdentifier {
    constructor(
        /**
         * @summary `subjectKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdentifier: SubjectKeyIdentifier,
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
     * @summary Restructures an object into a RecipientKeyIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `RecipientKeyIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientKeyIdentifier`.
     * @returns {RecipientKeyIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientKeyIdentifier]: RecipientKeyIdentifier[_K] }
    ): RecipientKeyIdentifier {
        return new RecipientKeyIdentifier(
            _o.subjectKeyIdentifier,
            _o.date,
            _o.other
        );
    }
}


/**
 * @summary The Leading Root Component Types of RecipientKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientKeyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subjectKeyIdentifier",
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
 * @summary The Trailing Root Component Types of RecipientKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientKeyIdentifier: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RecipientKeyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientKeyIdentifier: $.ComponentSpec[] = [];


let _cached_decoder_for_RecipientKeyIdentifier: $.ASN1Decoder<RecipientKeyIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientKeyIdentifier} The decoded data structure.
 */
export function _decode_RecipientKeyIdentifier(el: _Element): RecipientKeyIdentifier {
    if (!_cached_decoder_for_RecipientKeyIdentifier) {
        _cached_decoder_for_RecipientKeyIdentifier = function (
            el: _Element
        ): RecipientKeyIdentifier {
            let subjectKeyIdentifier!: SubjectKeyIdentifier;
            let date: OPTIONAL<GeneralizedTime>;
            let other: OPTIONAL<OtherKeyAttribute>;
            const callbacks: $.DecodingMap = {
                subjectKeyIdentifier: (_el: _Element): void => {
                    subjectKeyIdentifier = _decode_SubjectKeyIdentifier(_el);
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
                _root_component_type_list_1_spec_for_RecipientKeyIdentifier,
                _extension_additions_list_spec_for_RecipientKeyIdentifier,
                _root_component_type_list_2_spec_for_RecipientKeyIdentifier,
                undefined
            );
            return new RecipientKeyIdentifier (
                subjectKeyIdentifier,
                date,
                other
            );
        };
    }
    return _cached_decoder_for_RecipientKeyIdentifier(el);
}


let _cached_encoder_for_RecipientKeyIdentifier: $.ASN1Encoder<RecipientKeyIdentifier> | null = null;


/**
 * @summary Encodes a(n) RecipientKeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientKeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RecipientKeyIdentifier(
    value: RecipientKeyIdentifier,
    elGetter: $.ASN1Encoder<RecipientKeyIdentifier>
): _Element {
    if (!_cached_encoder_for_RecipientKeyIdentifier) {
        _cached_encoder_for_RecipientKeyIdentifier = function (
            value: RecipientKeyIdentifier        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectKeyIdentifier(
                            value.subjectKeyIdentifier,
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
    return _cached_encoder_for_RecipientKeyIdentifier(value, elGetter);
}


/* eslint-enable */
