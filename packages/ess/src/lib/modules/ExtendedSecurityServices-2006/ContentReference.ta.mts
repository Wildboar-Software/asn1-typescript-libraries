/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "../CryptographicMessageSyntax2004/ContentType.ta.mjs";
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from "../ExtendedSecurityServices-2006/ContentIdentifier.ta.mjs";

/**
 * @summary ContentReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentReference ::= SEQUENCE {
 *     contentType ContentType,
 *     signedContentIdentifier ContentIdentifier,
 *     originatorSignatureValue OCTET STRING
 * }
 * ```
 *
 */
export class ContentReference {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: ContentType,
        /**
         * @summary `signedContentIdentifier`.
         * @public
         * @readonly
         */
        readonly signedContentIdentifier: ContentIdentifier,
        /**
         * @summary `originatorSignatureValue`.
         * @public
         * @readonly
         */
        readonly originatorSignatureValue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ContentReference
     * @description
     *
     * This takes an `object` and converts it to a `ContentReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentReference`.
     * @returns {ContentReference}
     */
    public static _from_object(
        _o: { [_K in keyof ContentReference]: ContentReference[_K] }
    ): ContentReference {
        return new ContentReference(
            _o.contentType,
            _o.signedContentIdentifier,
            _o.originatorSignatureValue
        );
    }
}


/**
 * @summary The Leading Root Component Types of ContentReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContentReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contentType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "signedContentIdentifier",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "originatorSignatureValue",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of ContentReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentReference: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ContentReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentReference: $.ComponentSpec[] = [];


let _cached_decoder_for_ContentReference: $.ASN1Decoder<ContentReference> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContentReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentReference} The decoded data structure.
 */
export function _decode_ContentReference(el: _Element): ContentReference {
    if (!_cached_decoder_for_ContentReference) {
        _cached_decoder_for_ContentReference = function (
            el: _Element
        ): ContentReference {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "ContentReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contentType";
            sequence[1].name = "signedContentIdentifier";
            sequence[2].name = "originatorSignatureValue";
            let contentType!: ContentType;
            let signedContentIdentifier!: ContentIdentifier;
            let originatorSignatureValue!: OCTET_STRING;
            contentType = _decode_ContentType(sequence[0]);
            signedContentIdentifier = _decode_ContentIdentifier(sequence[1]);
            originatorSignatureValue = $._decodeOctetString(sequence[2]);
            return new ContentReference(
                contentType,
                signedContentIdentifier,
                originatorSignatureValue
            );
        };
    }
    return _cached_decoder_for_ContentReference(el);
}


let _cached_encoder_for_ContentReference: $.ASN1Encoder<ContentReference> | null = null;


/**
 * @summary Encodes a(n) ContentReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentReference, encoded as an ASN.1 Element.
 */
export function _encode_ContentReference(
    value: ContentReference,
    elGetter: $.ASN1Encoder<ContentReference>
): _Element {
    if (!_cached_encoder_for_ContentReference) {
        _cached_encoder_for_ContentReference = function (
            value: ContentReference        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentType(
                            value.contentType,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_ContentIdentifier(
                            value.signedContentIdentifier,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.originatorSignatureValue,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ContentReference(value, elGetter);
}


/* eslint-enable */
