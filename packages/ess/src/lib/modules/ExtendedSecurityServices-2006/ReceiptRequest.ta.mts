/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from "../ExtendedSecurityServices-2006/ContentIdentifier.ta.mjs";
import {
    ReceiptsFrom,
    _decode_ReceiptsFrom,
    _encode_ReceiptsFrom,
} from "../ExtendedSecurityServices-2006/ReceiptsFrom.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";

/**
 * @summary ReceiptRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptRequest ::= SEQUENCE {
 *     signedContentIdentifier ContentIdentifier,
 *     receiptsFrom ReceiptsFrom,
 *     receiptsTo SEQUENCE SIZE (1..ub-receiptsTo) OF GeneralNames
 * }
 * ```
 *
 */
export class ReceiptRequest {
    constructor(
        /**
         * @summary `signedContentIdentifier`.
         * @public
         * @readonly
         */
        readonly signedContentIdentifier: ContentIdentifier,
        /**
         * @summary `receiptsFrom`.
         * @public
         * @readonly
         */
        readonly receiptsFrom: ReceiptsFrom,
        /**
         * @summary `receiptsTo`.
         * @public
         * @readonly
         */
        readonly receiptsTo: GeneralNames[]
    ) {}

    /**
     * @summary Restructures an object into a ReceiptRequest
     * @description
     *
     * This takes an `object` and converts it to a `ReceiptRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReceiptRequest`.
     * @returns {ReceiptRequest}
     */
    public static _from_object(
        _o: { [_K in keyof ReceiptRequest]: ReceiptRequest[_K] }
    ): ReceiptRequest {
        return new ReceiptRequest(
            _o.signedContentIdentifier,
            _o.receiptsFrom,
            _o.receiptsTo
        );
    }
}


/**
 * @summary The Leading Root Component Types of ReceiptRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReceiptRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "signedContentIdentifier",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "receiptsFrom",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "receiptsTo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of ReceiptRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReceiptRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReceiptRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReceiptRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_ReceiptRequest: $.ASN1Decoder<ReceiptRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptRequest} The decoded data structure.
 */
export function _decode_ReceiptRequest(el: _Element): ReceiptRequest {
    if (!_cached_decoder_for_ReceiptRequest) {
        _cached_decoder_for_ReceiptRequest = function (
            el: _Element
        ): ReceiptRequest {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "ReceiptRequest contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "signedContentIdentifier";
            sequence[1].name = "receiptsFrom";
            sequence[2].name = "receiptsTo";
            let signedContentIdentifier!: ContentIdentifier;
            let receiptsFrom!: ReceiptsFrom;
            let receiptsTo!: GeneralNames[];
            signedContentIdentifier = _decode_ContentIdentifier(sequence[0]);
            receiptsFrom = _decode_ReceiptsFrom(sequence[1]);
            receiptsTo = $._decodeSequenceOf<GeneralNames>(
                () => _decode_GeneralNames
            )(sequence[2]);
            return new ReceiptRequest(
                signedContentIdentifier,
                receiptsFrom,
                receiptsTo
            );
        };
    }
    return _cached_decoder_for_ReceiptRequest(el);
}


let _cached_encoder_for_ReceiptRequest: $.ASN1Encoder<ReceiptRequest> | null = null;


/**
 * @summary Encodes a(n) ReceiptRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptRequest, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptRequest(
    value: ReceiptRequest,
    elGetter: $.ASN1Encoder<ReceiptRequest>
): _Element {
    if (!_cached_encoder_for_ReceiptRequest) {
        _cached_encoder_for_ReceiptRequest = function (
            value: ReceiptRequest        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ContentIdentifier(
                            value.signedContentIdentifier,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_ReceiptsFrom(
                            value.receiptsFrom,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            $.DER
                        )(value.receiptsTo, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ReceiptRequest(value, elGetter);
}


/* eslint-enable */
