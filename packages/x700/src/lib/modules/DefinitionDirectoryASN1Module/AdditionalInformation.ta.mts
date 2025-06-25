/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AdditionalInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalInformation ::= SEQUENCE {
 *   creationDate  GeneralizedTime OPTIONAL,
 *   comment       GraphicString OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AdditionalInformation {
    constructor(
        /**
         * @summary `creationDate`.
         * @public
         * @readonly
         */
        readonly creationDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `comment`.
         * @public
         * @readonly
         */
        readonly comment: OPTIONAL<GraphicString>
    ) {}

    /**
     * @summary Restructures an object into a AdditionalInformation
     * @description
     *
     * This takes an `object` and converts it to a `AdditionalInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalInformation`.
     * @returns {AdditionalInformation}
     */
    public static _from_object(_o: {
        [_K in keyof AdditionalInformation]: AdditionalInformation[_K];
    }): AdditionalInformation {
        return new AdditionalInformation(_o.creationDate, _o.comment);
    }
}

/**
 * @summary The Leading Root Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            'creationDate',
            true,
            $.hasTag(_TagClass.universal, 24)
        ),
        new $.ComponentSpec(
            'comment',
            true,
            $.hasTag(_TagClass.universal, 25)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [];

let _cached_decoder_for_AdditionalInformation: $.ASN1Decoder<AdditionalInformation> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalInformation} The decoded data structure.
 */
export function _decode_AdditionalInformation(el: _Element): AdditionalInformation {
    if (!_cached_decoder_for_AdditionalInformation) {
        _cached_decoder_for_AdditionalInformation = function (
            el: _Element
        ): AdditionalInformation {
            let creationDate: OPTIONAL<GeneralizedTime>;
            let comment: OPTIONAL<GraphicString>;
            const callbacks: $.DecodingMap = {
                creationDate: (_el: _Element): void => {
                    creationDate = $._decodeGeneralizedTime(_el);
                },
                comment: (_el: _Element): void => {
                    comment = $._decodeGraphicString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AdditionalInformation,
                _extension_additions_list_spec_for_AdditionalInformation,
                _root_component_type_list_2_spec_for_AdditionalInformation,
                undefined
            );
            return new AdditionalInformation (
                creationDate,
                comment
            );
        };
    }
    return _cached_decoder_for_AdditionalInformation(el);
}

let _cached_encoder_for_AdditionalInformation: $.ASN1Encoder<AdditionalInformation> | null =
    null;

/**
 * @summary Encodes a(n) AdditionalInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInformation, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalInformation(
    value: AdditionalInformation,
    elGetter: $.ASN1Encoder<AdditionalInformation>
): _Element {
    if (!_cached_encoder_for_AdditionalInformation) {
        _cached_encoder_for_AdditionalInformation = function (
            value: AdditionalInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.creationDate === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(
                                  value.creationDate,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.comment === undefined
                            ? undefined
                            : $._encodeGraphicString(value.comment, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AdditionalInformation(value, elGetter);
}


/* eslint-enable */
