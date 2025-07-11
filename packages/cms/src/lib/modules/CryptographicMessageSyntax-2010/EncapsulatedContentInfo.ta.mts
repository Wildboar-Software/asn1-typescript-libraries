/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncapsulatedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncapsulatedContentInfo ::= SEQUENCE {
 * eContentType       CONTENT-TYPE.&id({ContentSet}),
 * eContent           [0] EXPLICIT OCTET STRING
 * (CONTAINING CONTENT-TYPE.&Type({ContentSet}{@eContentType})) OPTIONAL }
 * ```
 *
 */
export class EncapsulatedContentInfo {
    constructor(
        /**
         * @summary `eContentType`.
         * @public
         * @readonly
         */
        readonly eContentType: OBJECT_IDENTIFIER,
        /**
         * @summary `eContent`.
         * @public
         * @readonly
         */
        readonly eContent: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncapsulatedContentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfo`.
     * @returns {EncapsulatedContentInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncapsulatedContentInfo]: EncapsulatedContentInfo[_K];
        }
    ): EncapsulatedContentInfo {
        return new EncapsulatedContentInfo(_o.eContentType, _o.eContent);
    }
}


/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "eContentType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "eContent",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncapsulatedContentInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_EncapsulatedContentInfo: $.ASN1Decoder<EncapsulatedContentInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncapsulatedContentInfo} The decoded data structure.
 */
export function _decode_EncapsulatedContentInfo(el: _Element): EncapsulatedContentInfo {
    if (!_cached_decoder_for_EncapsulatedContentInfo) {
        _cached_decoder_for_EncapsulatedContentInfo = function (
            el: _Element
        ): EncapsulatedContentInfo {
            let eContentType!: OBJECT_IDENTIFIER;
            let eContent: OPTIONAL<OCTET_STRING>;
            const callbacks: $.DecodingMap = {
                eContentType: (_el: _Element): void => {
                    eContentType = $._decodeObjectIdentifier(_el);
                },
                eContent: (_el: _Element): void => {
                    eContent = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncapsulatedContentInfo,
                _extension_additions_list_spec_for_EncapsulatedContentInfo,
                _root_component_type_list_2_spec_for_EncapsulatedContentInfo,
                undefined
            );
            return new EncapsulatedContentInfo (
                eContentType,
                eContent
            );
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfo(el);
}


let _cached_encoder_for_EncapsulatedContentInfo: $.ASN1Encoder<EncapsulatedContentInfo> | null = null;


/**
 * @summary Encodes a(n) EncapsulatedContentInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncapsulatedContentInfo(
    value: EncapsulatedContentInfo,
    elGetter: $.ASN1Encoder<EncapsulatedContentInfo>
): _Element {
    if (!_cached_encoder_for_EncapsulatedContentInfo) {
        _cached_encoder_for_EncapsulatedContentInfo = function (
            value: EncapsulatedContentInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.eContentType,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.eContent === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.DER
                              )(value.eContent, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfo(value, elGetter);
}


/* eslint-enable */
