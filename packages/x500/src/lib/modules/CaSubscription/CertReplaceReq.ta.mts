/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertReplaceReq_certs_Item,
    _decode_CertReplaceReq_certs_Item,
    _encode_CertReplaceReq_certs_Item,
} from "../CaSubscription/CertReplaceReq-certs-Item.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs         SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     old           CertificateSerialNumber,
 *     new           Certificate,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertReplaceReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertReplaceReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq`.
     * @returns {CertReplaceReq}
     */
    public static _from_object(
        _o: { [_K in keyof CertReplaceReq]: CertReplaceReq[_K] }
    ): CertReplaceReq {
        return new CertReplaceReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq: $.ComponentSpec[] = [];

let _cached_decoder_for_CertReplaceReq: $.ASN1Decoder<CertReplaceReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq} The decoded data structure.
 */
export function _decode_CertReplaceReq(el: _Element): CertReplaceReq {
    if (!_cached_decoder_for_CertReplaceReq) {
        _cached_decoder_for_CertReplaceReq = function (
            el: _Element
        ): CertReplaceReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertReplaceReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertReplaceReq_certs_Item>(
                () => _decode_CertReplaceReq_certs_Item
            )(sequence[1]);
            return new CertReplaceReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq(el);
}

let _cached_encoder_for_CertReplaceReq: $.ASN1Encoder<CertReplaceReq> | null = null;

/**
 * @summary Encodes a(n) CertReplaceReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq(
    value: CertReplaceReq,
    elGetter: $.ASN1Encoder<CertReplaceReq>
): _Element {
    if (!_cached_encoder_for_CertReplaceReq) {
        _cached_encoder_for_CertReplaceReq = function (
            value: CertReplaceReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<CertReplaceReq_certs_Item>(
                                () => _encode_CertReplaceReq_certs_Item,
                                $.DER
                            )(value.certs, $.DER),
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
    return _cached_encoder_for_CertReplaceReq(value, elGetter);
}


/* eslint-enable */
