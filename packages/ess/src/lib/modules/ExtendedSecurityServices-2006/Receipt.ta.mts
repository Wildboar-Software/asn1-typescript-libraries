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
import {
    ESSVersion,
    _decode_ESSVersion,
    _encode_ESSVersion,
} from "../ExtendedSecurityServices-2006/ESSVersion.ta.mjs";

/**
 * @summary Receipt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Receipt ::= SEQUENCE {
 *     version ESSVersion,
 *     contentType ContentType,
 *     signedContentIdentifier ContentIdentifier,
 *     originatorSignatureValue OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class Receipt {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ESSVersion,
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
     * @summary Restructures an object into a Receipt
     * @description
     *
     * This takes an `object` and converts it to a `Receipt`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Receipt`.
     * @returns {Receipt}
     */
    public static _from_object(
        _o: { [_K in keyof Receipt]: Receipt[_K] }
    ): Receipt {
        return new Receipt(
            _o.version,
            _o.contentType,
            _o.signedContentIdentifier,
            _o.originatorSignatureValue
        );
    }
}


/**
 * @summary The Leading Root Component Types of Receipt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Receipt: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
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
 * @summary The Trailing Root Component Types of Receipt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Receipt: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Receipt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Receipt: $.ComponentSpec[] = [];


let _cached_decoder_for_Receipt: $.ASN1Decoder<Receipt> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Receipt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Receipt} The decoded data structure.
 */
export function _decode_Receipt(el: _Element): Receipt {
    if (!_cached_decoder_for_Receipt) {
        _cached_decoder_for_Receipt = function (el: _Element): Receipt {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "Receipt contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "contentType";
            sequence[2].name = "signedContentIdentifier";
            sequence[3].name = "originatorSignatureValue";
            let version!: ESSVersion;
            let contentType!: ContentType;
            let signedContentIdentifier!: ContentIdentifier;
            let originatorSignatureValue!: OCTET_STRING;
            version = _decode_ESSVersion(sequence[0]);
            contentType = _decode_ContentType(sequence[1]);
            signedContentIdentifier = _decode_ContentIdentifier(sequence[2]);
            originatorSignatureValue = $._decodeOctetString(sequence[3]);
            return new Receipt(
                version,
                contentType,
                signedContentIdentifier,
                originatorSignatureValue
            );
        };
    }
    return _cached_decoder_for_Receipt(el);
}


let _cached_encoder_for_Receipt: $.ASN1Encoder<Receipt> | null = null;


/**
 * @summary Encodes a(n) Receipt into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Receipt, encoded as an ASN.1 Element.
 */
export function _encode_Receipt(
    value: Receipt,
    elGetter: $.ASN1Encoder<Receipt>
): _Element {
    if (!_cached_encoder_for_Receipt) {
        _cached_encoder_for_Receipt = function (
            value: Receipt        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ESSVersion(
                            value.version,
                            $.DER
                        ),
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
    return _cached_encoder_for_Receipt(value, elGetter);
}


/* eslint-enable */
